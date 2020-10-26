import React,{useState,useEffect} from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import '../../css/Mbslider.css'
import p1 from '../../images/mobile/CP_IG.jpg'
import p2 from '../../images/mobile/CS_IG.jpg'
import p3 from '../../images/mobile/mb1.jpg'
import p4 from '../../images/mobile/mb2.jpg'
import p5 from '../../images/mobile/mb3.jpg'
const Mbslider = () => {
    // const [data,setData] = useState([])

    // useEffect(() => {
    //   fetch('/slides',{
    //     // headers:{
    //     //   "Authorization":"Bearer "+localStorage.getItem("jwt")
    //     // }
    //   }).then(res=>res.json())
    //   .then(result=>{
    //     console.log(result)
    //      setData(result.posts)
    //   })
    // },[])
    const properties = {
      indicators: true,
    }

    return (
          /* {data.map((each, index) => (
            <div key={index} style={{width: "100%",height:"100%",objectFit:"contain"}}>
              <img style={{ width: "100%" ,height:"100%"}} src={each.dkSlideImage} />
          <button className="btn" style={{position:"absolute",zIndex:"20",right:'20px',bottom:'20px'}}>Read More</button>
            </div>
          )) } */
          <div className="slide-container effect5">
        <Fade {...properties}>
          <div className="each-fade">
            <div>
              <img src="http://res.cloudinary.com/elixir2019/image/upload/v1603624264/eo25y8osxevvy1kuxmja.jpg" />
            </div>
            <button  className="btn-small" style={{zIndex:"20",position:'absolute',bottom:'30px',right:'30px'}}>Read More</button>
          </div>
          <div className="each-fade">
            
            <div>
              <img src="http://res.cloudinary.com/elixir2019/image/upload/v1603624716/gq42h4obgbx4pg3codqs.jpg" />
            </div>
            <button  className="btn-small" style={{zIndex:"20",position:'absolute',bottom:'30px',right:'30px'}}>Read More</button>
          </div>
          <div className="each-fade">
            <div>
              <img src="http://res.cloudinary.com/elixir2019/image/upload/v1603624799/r5ijb98448lexxarthcn.jpg" />
            </div>
            <button  className="btn-small" style={{zIndex:"20",position:'absolute',bottom:'30px',right:'30px'}}>Read More</button>
          </div>
        </Fade>
      </div>
    )
}

export default Mbslider
