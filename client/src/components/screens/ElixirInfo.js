import React,{useEffect} from 'react'
import logo from '../../main.png'
import '../../css/ElixirInfo.css'
export default function ElixirInfo() {

    return (
        
        <div className="elxirInfo-wrapper" >
            <div className="elixir-info1">
                <img src={logo} alt="" />
                <p>is a community of engineers who explore, expose and excel in elixir's bimonthly emagazine. The community conceives engineering students from various colleges across India, actively taking part in perceiving and articulating content to educate and inspire aspiring engineers who are engineering impossibilities to possibilities in every way.</p>
            </div>
            <div className="elixir-info2">
            
            <div className="child">
           
                <h3>Perceive </h3>
                <p>Explore everything from science to cinema in a community of engineers. Elixir is a one-stop for any engineering student from India looking for reliable platform.</p>
               
            </div>
            
            <div className="child">
                <h3>Articulate</h3>
                <p>Express and expose your talent in  a community by engineers. Engineers from different corners of the country conceive to educate other engineers on latest trends.</p>
            </div>
            <div className="child">
                <h3>Transcend</h3>
                <p>Elucidate and excel yourself by joining a community for engineers. Growth is a habit of this meritorious community.</p>
            </div>
            
            </div>
            <br/>
            <div>
            <button style={{padding:'10px 20px',background:"teal",borderBottom: "7px solid rgb(0, 94, 94)",borderRight: "4px solid rgb(0, 94, 94)",borderLeft: "none",borderTop: "none",borderRadius: "10px",color:"white"}}>Join the community</button>
            <p style={{fontSize:'14px'}}>* Subscription is a free of cost.</p>
            </div>
        </div>
        
    )
}