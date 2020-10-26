import React,{useState,useContext} from 'react'
import {Link,useHistory} from 'react-router-dom'
import {UserContext} from '../../App'
import M from 'materialize-css'
import '../../css/Signin.css'
import $ from 'jquery'
import Loading from './Loading'
export default function Signin() {

    const history = useHistory()
    const {state,dispatch} = useContext(UserContext)
    const [isLoading,setLoading] = useState(false)
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const PostData = () =>{
        setLoading(true);
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)     ){
            M.toast({html:"invalid email",classes:"red darken-3"})
            return
        }
        fetch("/signin",{
        method:"post",
        headers:{
            "Content-Type":"application/json",
            "Authorization":"Bearer "+localStorage.getItem("jwt")
        },
        body:JSON.stringify({
            email,
            password
        })
        })
        .then(res=>res.json())
        .then(data=>{
        console.log(data)
        if(data.error){
            setLoading(false)
            M.toast({html:data.error,classes:"red darken-3"})
        }
        else{
            localStorage.setItem("jwt",data.token)
            localStorage.setItem("user",JSON.stringify(data.user))
            dispatch({type:"USER",payload:data.user})
            setLoading(false)
            M.toast({html:"signedin successfully",classes:"green darken-1"})
            history.push('/')

        }
        }).catch(err=>{
        console.log(err)
        })
    }
    return (
        <>
        {isLoading?<div><Loading/> <div style={{position:'absolute',bottom:'30%',left:"50%",transform:"translate(-50%,-50%)"}}><h4 style={{color:'turquoise',fontSize:'24px'}}>Signing in...</h4></div></div> :''}
       {isLoading? '': <div className="z-depth-2 signin-wrapper">
        <div className="row" style={{textAlign:"center"}}>
            <h6 style={{fontWeight:"600",fontSize:'30px'}}>SIGN IN</h6>
            <div className="input-field col s12 m12">
            <i className="material-icons prefix">account_circle</i>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} id="username" type="text" className="validate"/>
            <label for="username">Username</label>
            </div>
            <div className="input-field col s12 m12">
            <i className="material-icons prefix">vpn_key</i>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} id="password" type="password" className="validate"/>
            <label for="password">Password</label>
            </div>
            <div style={{textAlign:"right",paddingBottom:"10px"}}>
            <Link to="#"> <span style={{textDecoration:"underline",color:"turquoise"}}>Forgot password?</span></Link>
            </div>
            <div style={{padding:'10px 0'}}>
                <button onClick={()=>PostData()}  className="teal btn js-modal-show" style={{borderRadius:"0.7rem"}}>Login</button>
            </div>
            <div>
                <hr/>
                <br/>
                Don't have an account? <Link to="/subscribe"><span style={{textDecoration:"underline",color:"turquoise"}}>Subscribe now</span></Link>
            </div>
            </div>
       </div>}
       </>
    )
}
