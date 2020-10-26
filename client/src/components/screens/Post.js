import React,{useEffect,useContext} from 'react'
import {Link} from 'react-router-dom'
import {UserContext} from '../../App'
export default function Post() {
    const {state,dispatch} = useContext(UserContext)
    return (
        <div style={{textAlign:'center'}}>
            <ul>
                <li style={{margin:"40px"}}>
                <Link to="/post/postEditions"><button className="button-primary">Post Editions</button></Link>
                </li>
                <li style={{margin:"40px"}}>
                <Link to="/post/postSlides"><button className="button-primary">Post Slides</button></Link>
                </li>
                <li style={{margin:"40px"}}>
                <Link to="/post/mobileSlides"><button className="button-primary">Post Mobile Slides</button></Link>
                </li>
            </ul>
            
        </div>
    )
}
