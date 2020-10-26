import React from 'react'
import 'materialize-css'
import logo from '../../main.png'
export default function Footer() {
  
    return (
        <div style={{background:"transparent"}}>
            
        <footer class="page-footer" style={{background:"transparent"}}>
          <div class="container" style={{margin:'0'}} >
            <div class="row">
              <div class="col l6 s12">
                <h5 class="black-text"><img src={logo} style={{height:"240px", margin:"-40px auto"}} alt=""/></h5>
                <p class="black-text text-lighten-4"></p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="black-text">Contact Us</h5>
                <ul>
                  <li style={{display:"flex",alignItems:"center",lineHeight:'40px'}}><i class="material-icons prefix"  style={{fontSize:"1.4rem",color:"black"}}>room</i><a class="black-text text-lighten-3" href="#!">location</a></li>
                  <li style={{display:"flex",alignItems:"center",lineHeight:'40px'}}><i class="material-icons prefix"  style={{fontSize:"1.4rem",color:"black"}}>call</i><a class="black-text text-lighten-3" href="#!">+91 9000202827</a></li>
               
                  <li style={{display:"flex",alignItems:"center",lineHeight:'40px'}}><i class="material-icons prefix" style={{fontSize:"1.4rem",color:"black"}}>room</i><a class="black-text text-lighten-3" href="#!">location</a></li>
                  <li style={{display:"flex",alignItems:"center",lineHeight:'40px'}}><i class="material-icons prefix" style={{fontSize:"1.4rem",color:"black"}}>call</i><a class="black-text text-lighten-3" href="#!">+91 9000202827</a></li>

                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright" style={{background:'#26a69a',color:"black",height:'20px',marginBottom:'-20px'}}>
            <div class="container">
            © 2014 Copyright Text
  
            </div>
          </div>
        </footer>
        </div>
    )
}
