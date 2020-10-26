import React,{useState,useEffect} from 'react'
import {Link,useHistory} from 'react-router-dom'
import M from 'materialize-css'
import '../../css/Subscribe.css'
import $ from 'jquery'
import Loading from './Loading'
export default function Subscribe() {
    const history = useHistory()
    const [isLoading,setLoading] = useState(false)
    const [name,setName] = useState("");
    const [college,setCollege] = useState("");
    const [email,setEmail] = useState("");
    const [mobile,setMobile] = useState("");
    const [password,setPassword] = useState("");
    const [open, setOpen] = React.useState(false);
    const PostData = () =>{
      setLoading(true);
      if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)     ){
        setLoading(false)
          M.toast({html:"invalid email",classes:"red darken-2"})
          return
        }
      fetch("/subscribe",{
        method:"post",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          name,
          college,
          email,
          mobile,
          password
        })
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.error){
          setLoading(false)
          M.toast({html:data.error,classes:"red darken-2"})
        }
        else{
          setLoading(false)
          M.toast({html:data.message,classes:"green darken-1"})
          history.push('/signin')
        }
      }).catch(err=>{
        console.log(err)
      })
    }

    useEffect(()=>{
      $('.js-modal-show').click(function(){
        $('.js-modal-shopify').toggleClass('is-shown--off-flow').toggleClass('is-hidden--off-flow');
      });
      
      $('.js-modal-hide').click(function(){
        $('.js-modal-shopify').toggleClass('is-shown--off-flow').toggleClass('is-hidden--off-flow');
      });
    },[])

    return (
      <>
        {isLoading?<div><Loading/> <div style={{position:'absolute',bottom:'30%',left:"50%",transform:"translate(-50%,-50%)"}}><h4 style={{color:'turquoise',fontSize:'24px'}}>Getting Subscribed...</h4></div></div> :''}
       {isLoading? '': 
        <div>
        <h2>Subscribe to ELIXIR</h2>
        <p style={{fontSize:"20px",textAlign:'center'}}> If you are interested in joining the 1000+ engineers community.Fill in the details.</p>
        <div className="row z-depth-5" id="subscription-form">
        <div style={{color:"#333",textAlign:"center",fontWeight:"600"}}>
          <h5>Subscription Form</h5>
        </div>
        <div className="col s12 m12">
        <div className="input-field col s12 m12">
          <i className="material-icons prefix">account_circle</i>
          <input className="input" id="icon_prefix1" type="text" className="validate" value={name} onChange={(e)=>setName(e.target.value)} />
          <label for="icon_prefix1">Full Name</label>
        </div>
        <div className="input-field col s12 m12">
          <i className="material-icons prefix">school</i>
          <input className="input" id="icon_prefix2" type="text" className="validate" value={college} onChange={(e)=>setCollege(e.target.value)} />
          <label for="icon_prefix2">College</label>
        </div>
        <div className="input-field col s12">
          <i className="material-icons prefix">mail</i>
          <input id="email" type="email" className="validate" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <label for="email">Email</label>
        </div>
        <div className="col s12 m12" style={{textAlign:'left'}}>
          <h6>What do you like to contribute?</h6>
          <br/>
          <div>
          <label>
            <input type="checkbox" />
            <span>Articles</span>
          </label></div>
          <div>
          <label>
            <input type="checkbox" />
            <span>Tech News</span>
          </label></div>
          <div>
          <label>
            <input type="checkbox" />
            <span>Paintings</span>
          </label></div>
          <div>
          <label>
            <input type="checkbox" />
            <span>Photography</span>
          </label></div>
          <div>
          <label>
            <input type="checkbox" />
            <span>Sharing Experiences</span>
          </label></div>
          <div style={{padding:"10px 0"}}>
          <label >
            <input type="checkbox" />
            <span style={{display:"flex"}}>Other:<input type="text" style={{marginTop:"-20px"}}/>
            <label for="first_name"></label>
           </span>
          </label></div>
        </div>
        <br/>
        <br/>
        <div className="input-field col s12">
          <i className="material-icons prefix">phone</i>
          <input id="icon_telephone" type="text" className="validate" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
          <label for="icon_telephone">Telephone</label>
        </div>
        
        </div>
       <div style={{margin:"5px auto",textAlign:'center'}}><button className="teal  btn js-modal-show" style={{borderRadius:"20px"}}>
            Subscribe
        </button><br/><i style={{color:"red"}}>"*Subscription is a free of cost."</i></div>
        </div>

        <div className="l-modal is-hidden--off-flow js-modal-shopify">
        <div className="l-modal__shadow js-modal-hide" />
        <div className="c-popup l-modal__body">
          <h3 className="c-popup__title">Generate Password</h3>
          <p className="c-popup__description">Complete subscription by generating password</p>
          <div class="input-field col s12 m12">
          <i class="material-icons prefix">lock</i>
          <input value={password} onChange={(e)=>setPassword(e.target.value)} id="password" type="password" class="validate"/>
          <label for="password">Password</label>
        </div>
          <button className="button-primary" onClick={()=>PostData()}>generate</button>
        </div>
      </div>
      </div>
      }
      </>
    )
}
