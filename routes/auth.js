const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {JWT_SECRET} =require('../config/keys')
const requireLogin = require('../middleware/requireLogin')
router.get('/subscribe',requireLogin,(req,res)=>{
    User.find()
    .then(allusers=>{
        res.json({allusers})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.post('/subscribe',(req,res)=>{
    const {name,college,email,mobile,password} = req.body
    if(!email || !password || !name ||!mobile){
       return res.status(422).json({error:"please add all the fields"})
    }
    User.findOne({email:email})
    .then((savedUser)=>{
        if(savedUser){
            return res.status(422).json({error:"user already exists with the email"})
        }
        bcrypt.hash(password,15)
        .then(hashedpassword=>{
            const user = new User({
                name,
                college,
                email,
                mobile,
                password:hashedpassword
            })
            user.save()
            .then(user=>{
                res.json({message:"subscribed successfully"})
            })
            .then(result=>{
                res.json({user:result})
            })
            .catch(err=>{
                console.log(err)
            })
        })
        
    })
    .catch(err=>{
        console.log(err)
    })
})
router.post("/signin",(req,res)=>{
    const {email,password} = req.body
    if(!email || !password){
        res.status(422).json({error:"please add email or password"})
    }
    User.findOne({email:email})
    .then(savedUser=>{
        if(!savedUser){
            return res.status(422).json({error:"Invalid email or password"})
        }
        bcrypt.compare(password,savedUser.password)
        .then(doMatch=>{
            if(doMatch){
                // res.json({message:'successfully signed in'})
                const token = jwt.sign({_id:savedUser.id},JWT_SECRET)
                const {_id,name,email} = savedUser
                res.json({token,user:{_id,name,email}})
            }
            else{
                return res.status(422).json({error:"Invalid email or password"})
                
            }
        })
        .catch(err=>{
            console.log(err)
        })
    })
})
module.exports = router