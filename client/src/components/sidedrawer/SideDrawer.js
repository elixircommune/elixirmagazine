import React,{useContext} from 'react'
import './SideDrawer.css'
import {Link,useHistory} from 'react-router-dom'
import {UserContext} from '../../App'
import logo from '../../main.png'
const SideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show){
        drawerClasses = 'side-drawer open';
    }

    const history = useHistory();
	
    const {state,dispatch} = useContext(UserContext)
    const renderList = ()=>{
    if(state){
      const user = JSON.parse(localStorage.getItem("user"))
      if(user.email === "makhil@gmail.com")
      {
          return [
              <li ><Link to="/">Home</Link></li>,
      <li ><Link to="/editions">Editions</Link></li>,        
      <li ><Link to="/contact">About Us</Link></li>,
      <li ><Link to="/post">Post</Link></li>,
      <li ><Link to="/users">Users</Link></li>,
      <li ><Link to="/subscribe">Subscribe</Link></li>,
              <li><button className="button-primary"
              onClick={()=>{
                  localStorage.clear()
                  dispatch({type:"CLEAR"})
                  history.push('/signin')
              }} 
              >Sign Out</button></li>
              ]
      }
      else{
          return [
              <li ><Link to="/">Home</Link></li>,
      <li ><Link to="/editions">Editions</Link></li>,        
      <li ><Link to="/contact">About Us</Link></li>,
      <li ><Link to="/subscribe">Subscribe</Link></li>,
          <li><button 
          onClick={()=>{
              localStorage.clear()
              dispatch({type:"CLEAR"})
              history.push('/signin')
          }} 
          >Sign Out</button></li>
          ]
      }
  }else{
          return [
              <li ><Link to="/">Home</Link></li>,
      <li ><Link to="/editions">Editions</Link></li>,        
      <li ><Link to="/contact">About Us</Link></li>,
      <li ><Link to="/subscribe">Subscribe</Link></li>,
            <li ><Link to="/signin"><button className="button-primary">Sign In</button></Link></li>
          ]
  }
  }
    return(
        <nav className={drawerClasses}>
            <Link to={state?"/":"/signin"}><img  src={logo} alt="logo" style={{height:'100px',transform:'translate(50%)'}} /></Link>
        <ul>
        {renderList()}
        </ul>
    </nav>
    )
};

export default SideDrawer


