import React,{useEffect} from 'react'
import nfc from '../../images/nfc.jpg'
import '../../css/NFC.css'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'
export default function NFC() {

    return (
        <div id="nfc-wrapper" data-aos="fade-up">
            <div className="col s12 m12">
            <h1>NOTE FOR CONTRIBUTORS</h1>
            </div>
            <div className="row" id="nfc-row2">
            <div className="col s12 m6 valign-wrapper" >    
            <p>Elixir invites content from the amateur writers of the engineering colleges across India, around the clock. Elixir is ready to publish your potential in the coming editions. 
                But before that make sure your article fulfils the requirements, which are explained below. <span><Link to="/nfc"><Button color="secondary" style={{fontSize:"20px"}}>Read More</Button></Link></span></p>
            </div>
            <div className="col s12 m6 center-align">
            <img src={nfc} alt="" />
            </div>
            </div>
        </div>
    )
}
