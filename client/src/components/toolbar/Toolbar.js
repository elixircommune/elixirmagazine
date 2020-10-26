import React,{useContext} from 'react'
import './Toolbar.css'
import logo from '../../main.png'
import {Link,useHistory} from 'react-router-dom'
import {UserContext} from '../../App'
import DrawerToggleButton from '../sidedrawer/DrawerToggleButton'
const Toolbar = props => {
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
    <li ><Link to="/aboutus">About Us</Link></li>,
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
    <li ><Link to="/aboutus">About Us</Link></li>,
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
    <li ><Link to="/aboutus">About Us</Link></li>,
    <li ><Link to="/subscribe">Subscribe</Link></li>,
          <li ><Link to="/signin"><button className="button-primary">Sign In</button></Link></li>
        ]
}
}
    return(

        <header className="toolbar">
            <nav className="toolbar_navigation">
                <div className="toolbar_toggle-button">
                    <DrawerToggleButton click={props.drawerClickHandler} />
                </div>
                <div className="toolbar_logo"><Link to={state?"/":"/signin"}><img src={logo} alt="logo"/></Link> </div>
                <div className="spacer"></div>
                <div className="toolbar_nav-items">
                    <ul>
                        {renderList()}
                    </ul>
                </div>
            </nav>
        </header>
    )
};

export default Toolbar
