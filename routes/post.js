
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const requireLogin = require('../middleware/requireLogin')
const PostEditions = mongoose.model("PostEditions")
const PostSlides = mongoose.model("PostSlides")
const PostMbSlides = mongoose.model("PostMbSlides")

router.get('/alleditions',requireLogin,(req,res)=>{
    PostEditions.find()
    .then(posts=>{
        res.json({posts})
    })
    .catch(err=>{
        console.log(err)
    })
})
router.post('/post/postEditions',requireLogin,(req,res)=>{
    const {photo,editionLink,edition} = req.body
    
    if(!photo || !editionLink || !edition){
        console.log(req.body)
        return res.status(422).json({error:"please add all the fields"})
    }
    const postEdition = new PostEditions({
        edition,
        editionLink,
        photo
    })
    postEdition.save().then(result=>{
        res.json({postEdition:result})
    })
    .catch(err=>{
        console.log(err)
    })
})


router.get('/slides',(req,res)=>{
    PostSlides.find()
    .then(posts=>{
        res.json({posts})
    })
    .catch(err=>{
        console.log(err)
    })
})



router.post('/post/postSlides',requireLogin,(req,res)=>{
    const {slideTitle,slideSubTitile,dkSlideImage,slideLink} = req.body
    if(!slideTitle){
        console.log(req.body)
        return res.status(422).json({error:"please add all the fields"})
    }
    const postSlide = new PostSlides({
        slideTitle,
        slideSubTitile,
        dkSlideImage,
        slideLink
    })
    postSlide.save().then(result=>{
        res.json({postSlide:result})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.delete('/deleteSlide/:postId',requireLogin,(req,res)=>{
    PostSlides.findOne({_id:req.params.postId})
    .exec((err,post)=>{
        if(err || !post){
            return res.status(422).json({error:err})
        }
        else{
            post.remove()
            .then(result=>{
                res.json(result)
            }).catch(err=>{
                console.log(err)
            })
        }
    })
})


router.get('/mbslides',(req,res)=>{
    PostMbSlides.find()
    .then(posts=>{
        res.json({posts})
    })
    .catch(err=>{
        console.log(err)
    })
})


router.post('/post/postMbSlides',requireLogin,(req,res)=>{
    const {mbSlideTitle,mbSlideImage,mbSlideLink} = req.body
    if(!mbSlideTitle ){
        console.log(req.body)
        return res.status(422).json({error:"please add all the fields"})
    }
    const postMbSlide = new PostMbSlides({
        mbSlideTitle,
        mbSlideImage,
        mbSlideLink
    })
    postMbSlide.save().then(result=>{
        res.json({postMbSlide:result})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.delete('/deleteMbSlide/:postId',requireLogin,(req,res)=>{
    PostMbSlides.findOne({_id:req.params.postId})
    .exec((err,post)=>{
        if(err || !post){
            return res.status(422).json({error:err})
        }
        else{
            post.remove()
            .then(result=>{
                res.json(result)
            }).catch(err=>{
                console.log(err)
            })
        }
    })
})
module.exports = router
