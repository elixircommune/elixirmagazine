// import React,{useContext} from 'react'
// import 'materialize-css/dist/css/materialize.min.css';
// import logo from '../main.png'
// import {Link,useHistory} from 'react-router-dom'
// import '../css/Navbar.css'
// import {UserContext} from '../App'


// export default function Navbar() {
	
//   const history = useHistory();
	
//   const {state,dispatch} = useContext(UserContext)
// //   let user = {
// // 	  email : "xxxxx@gmail.com"
// //   }
// //   if(state){
// // 	  user
// //   }
//   const renderList = ()=>{
// 		if(state){
// 			const user = JSON.parse(localStorage.getItem("user"))
// 			if(user.email === "makhil@gmail.com")
// 			{
// 				return [
// 					<li className="nav-item"><Link to="/">Home</Link></li>,
//             <li className="nav-item"><Link to="/editions">Editions</Link></li>,        
//             <li className="nav-item"><Link to="/contact">Contact Us</Link></li>,
// 			<li className="nav-item"><Link to="/post">Post</Link></li>,
// 			<li className="nav-item"><Link to="/users">Users</Link></li>,
// 					<li><button className="button-primary"
// 					onClick={()=>{
// 						localStorage.clear()
// 						dispatch({type:"CLEAR"})
// 						history.push('/signin')
// 					}} 
// 					>logout</button></li>
// 					]
// 			}
// 			else{
// 				return [
// 					<li className="nav-item"><Link to="/">Home</Link></li>,
//           <li className="nav-item"><Link to="/editions">Editions</Link></li>,        
//           <li className="nav-item"><Link to="/contact">Contact Us</Link></li>,
// 				<li><button 
// 				onClick={()=>{
// 					localStorage.clear()
// 					dispatch({type:"CLEAR"})
// 					history.push('/signin')
// 				}} 
// 				>logout</button></li>
// 				]
// 			}
// 		}else{
// 				return [
// 					<li className="nav-item"><Link to="/subscribe">Subscribe</Link></li>,
//           <li className="nav-item"><Link to="/signin"><button className="button-primary">Login</button></Link></li>
// 				]
// 		}
// 	}
//     return (
        
//         <div className="navbar-wrapper">
//         <nav className="navbar">
          
//           <div className="menu-toggle" id="mobile-menu">
//             <span className="bar" />
//             <span className="bar" />
//             <span className="bar" />
//           </div>
//           <Link to={state?"/":"/signin"}><img src={logo} alt="Logo" /></Link> 
//           <ul className="nav no-search">
//             {/* <li className="nav-item"><Link to="/">Home</Link></li>
//             <li className="nav-item"><Link to="/editions">Editions</Link></li>
//             <li className="nav-item"><Link to="/subscribe">Subscribe</Link></li>
//             <li className="nav-item"><Link to="/">Contact Us</Link></li>
//             <li className="nav-item"><Link to="/post">Post</Link></li>
//             <li className="nav-item"><Link to="/signin">Login</Link></li> */}
//             {renderList()}
//           </ul>
//         </nav>
//       </div>
//     )
// }
