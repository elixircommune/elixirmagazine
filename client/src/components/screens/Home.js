import React,{useState,useEffect} from 'react'
import '../../css/Home.css'
import ScrollToTop from "react-scroll-to-top";
import ElixirInfo from './ElixirInfo'
import NFC from './NFC'
import Slider from './Slider'
import Testimonals from './Testimonals'
import Footer from './Footer'
import Mbslider from './Mbslider'
export default function Home() {
    const [data,setData] = useState([])

  useEffect(() => {
    fetch('/slides',{
      headers:{
        "Authorization":"Bearer "+localStorage.getItem("jwt")
      }
    }).then(res=>res.json())
    .then(result=>{
      console.log(result)
       setData(result.posts)
    })
  },[])
    return (
      < div style={{margin:'0 auto 65px auto'}}>
        
      <div id="top-desktop">
       
        <div>
          <br/>
          <ElixirInfo/>
        </div>
        <div className="slider-wrapper">
        <Slider/>
        </div>
        
      </div>
      <div id="top-mobile">
        
        <div className="mbslider">
          <Mbslider/>
        </div>
        <div>
          <ElixirInfo/>
        </div>
      </div>
      <NFC/>
      
      <br/>
      <Testimonals/>
      <Footer/>
      <ScrollToTop smooth />
      </ div>
    )
}
