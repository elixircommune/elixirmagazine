import React,{useEffect,useContext} from 'react'
import 'materialize-css/dist/css/materialize.min.css';
import M from  'materialize-css/dist/js/materialize.min.js';
import $ from 'jquery'
import logo from '../main.png'
import {Link,useHistory} from 'react-router-dom'
import {UserContext} from '../App'
import '../css/Navbar.css'
import Signin from './Signin';
import Button from '@material-ui/core/Button'
import { ButtonGroup } from '@material-ui/core';

// $(document).ready(function ()
//         {
//             //Fade in delay for the background overlay (control timing here)
//             $("#bkgOverlay1").delay(9800).fadeIn(400);
//           //Fade in delay for the popup (control timing here)
//             $("#delayedPopup1").delay(10000).fadeIn(400);
            
//             //Hide dialouge and background when the user clicks the close button
//             $("#btnClose").click(function (e)
//             {
//                 HideDialog();
//                 e.preventDefault();
// 			});
			
// 			 //Controls how the modal popup is closed with the close button
// 			 function HideDialog()
// 			 {
// 				 $("#bkgOverlay1").hide();
// 				 $("#delayedPopup1").hide();
// 				 $(".backgroundOverlay1").remove()
// 				 $(".delayedPopupWindow1").remove()
// 			 }
			 
// 			 $("#openLogin").click(function(e){
// 				 OpenLogin();
// 				 $(".backgroundOverlay1").removeAttr()
// 				 $(".backgroundOverlay1").remove()
// 				 $(".delayedPopupWindow1").remove()
// 				 $(".delayedPopupWindow1").remove()
// 				 e.preventDefault();
// 			 })
// 			 function OpenLogin(){
// 				 $("#signin-modal").show();
// 				 $("#bkgOverlay2").show(400);
// 				 $("#delayedPopup2").show(300);
			 
// 			 }
// 			 $("#closeLogin").click(function(e){
// 				 CloseLogin();
// 				 e.preventDefault();
// 				 $(".backgroundOverlay1").remove()
// 				 $(".backgroundOverlay1").remove()
// 				 $(".delayedPopupWindow1").remove()
// 				 $(".delayedPopupWindow1").remove()
// 			 })
// 			 function CloseLogin(){
// 				 $("#signin-modal").hide();
// 				 $("#bkgOverlay2").fadeOut(400);
// 				 $("#delayedPopup2").fadeOut(300);
// 			 }
// 			 $(".link-hidenav").click(function() {
// 				 $(".sidenav").css("display","none");
// 			   });
//         });
       
export default function Navbar(props) {
	const history = useHistory()
	const user = JSON.parse(localStorage.getItem("user"))
	const {state,dispatch} = useContext(UserContext)
	const renderList = ()=>{
		if(state){
			if(user.email=="makhil@gmail.com")
			{
				return [
					<li key="1" className="link-hidenav"><Link to="/">Home</Link></li>,
					<li key="2"><Link to="/editions">Editions</Link></li>,
					<li key="3"><Link to="#">Contact Us</Link></li>,
					<li key="4"><Link to="#">POST</Link></li>,
					<li key="5"><button 
					onClick={()=>{
						localStorage.clear()
						dispatch({type:"CLEAR"})
						history.push('/signin')
					}} 
					>logout</button></li>
					]
			}
			else{
				return [
				<li key="1" className="link-hidenav"><Link to="/">Home</Link></li>,
				<li key="2"><Link to="/editions">Editions</Link></li>,
				<li key="3"><Link to="#">Contact Us</Link></li>,
				<li key="4"><button 
				onClick={()=>{
					localStorage.clear()
					dispatch({type:"CLEAR"})
					history.push('/signin')
				}} 
				>logout</button></li>
				]
			}
		}else{
				return [
					<li><Link to="/subscribe">Subscribe</Link></li>,
			<li><Link to="/signin"><Button id="openLogin" variant="contained" color="primary">Sign In</Button></Link></li>
				]
		}
	}
 
 let sidenav = document.querySelector('#mobile-nav');
   M.Sidenav.init(sidenav, {});
	
 
 
  return (
<div>
<nav style={{padding:"0px 10px",top:"0", position: "fixed",zIndex:"999",background:"turquoise"}}>
	<div class="nav-wrapper">
		<Link to={state?"/":"/signin"} class="brand-logo"><img src={logo} alt="logo" style={{height:"100px",margin:"-20px 20px"}}/></Link>

		<Link to="#" class="sidenav-trigger" data-target="mobile-nav">
			<i class="material-icons">menu</i>
		</Link>

		<ul class="right hide-on-med-and-down "  >
			
			{renderList()}
		</ul>
	</div>
</nav>


<ul class="sidenav" id="mobile-nav">
	    <li><Link to="/">Home</Link></li>
			<li><Link to="#">Editions</Link></li>
			<li><Link to="#">Note for Contributors</Link></li>
			<li><Link to="#">Subscribe</Link></li>
			<li><Link to="#">Contact Us</Link></li>
      
	  <li><p id="openLogin" style={{background:"#5D6C89",paddingLeft:"40px",color:'white'}}>Sign in</p></li>

</ul>

	{/* <div  id="bkgOverlay1" className="backgroundOverlay1"></div>  
	<div id="delayedPopup1" className="delayedPopupWindow1">
	<div style={{textAlign:"right"}}><i class="fa fa-close"  id="btnClose" style={{fontSize:"28px",cursor:'pointer'}}></i></div>
	<Signin/>
	</div>

	<div id="signin-modal">
	<div  id="bkgOverlay2" className="backgroundOverlay2"></div>  
	<div id="delayedPopup2" className="delayedPopupWindow2">
		<div  style={{textAlign:"right"}}><i class="fa fa-close" id="closeLogin" style={{fontSize:"28px",cursor:'pointer'}}></i></div>
		<Signin/>
	</div>
	</div> */}
</div>
  
  )
}
