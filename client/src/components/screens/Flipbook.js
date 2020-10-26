import React,{useEffect,useCallback} from 'react'
import '../../css/Flipbook.css'
import $ from 'jquery'

import '@ksedline/turnjs';
import p1 from '../../images/book/1.jpg'
import p2 from '../../images/book/2.jpg'
import p3 from '../../images/book/3.jpg'
import p4 from '../../images/book/4.jpg'
import p5 from '../../images/book/5.jpg'
import p6 from '../../images/book/6.jpg'
import p7 from '../../images/book/7.jpg'
import p8 from '../../images/book/8.jpg'
import p9 from '../../images/book/9.jpg'
import p10 from '../../images/book/10.jpg'
import p11 from '../../images/book/11.jpg'
import Feedback from './Feedback';
// import { FullScreen, useFullScreenHandle } from "react-full-screen";
const Flipbook = () => {
    // const handle = useFullScreenHandle();
    useEffect(()=>{
        $("#prevBtn").click(function() {
            $("#magazine").turn("previous");
    });
    
    $("#nextBtn").click(function() {
            $("#magazine").turn("next");
    });
    },[])
    useEffect(()=>{
        function toggleFullscreen(elem) {
            elem = elem || document.documentElement;
            if (!document.fullscreenElement && !document.mozFullScreenElement &&
              !document.webkitFullscreenElement && !document.msFullscreenElement) {
              if (elem.requestFullscreen) {
                elem.requestFullscreen();
              } else if (elem.msRequestFullscreen) {
                elem.msRequestFullscreen();
              } else if (elem.mozRequestFullScreen) {
                elem.mozRequestFullScreen();
              } else if (elem.webkitRequestFullscreen) {
                elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
              }
            } else {
              if (document.exitFullscreen) {
                $(".toolbar").css("display",'block')
                $("#magazine").css({"scale":"1"})
                document.exitFullscreen();
               
              } else if (document.msExitFullscreen) {
                $(".toolbar").css("display",'block')
                $("#magazine").css({"scale":"1"})
                document.msExitFullscreen();
                $(".toolbar").css("display",'block')
                $("#magazine").css({"scale":"1"})
              } else if (document.mozCancelFullScreen) {
                $(".toolbar").css("display",'block')
                $("#magazine").css({"scale":"1"})
                document.mozCancelFullScreen();
                $(".toolbar").css("display",'block')
                $("#magazine").css({"scale":"1"})
              } else if (document.webkitExitFullscreen) {
                $(".toolbar").css("display",'block')
                $("#magazine").css({"scale":"1"})
                document.webkitExitFullscreen();
                $(".toolbar").css("display",'block')
                $("#magazine").css({"scale":"1"})
              }
            }
          }
          
          document.getElementById('btnFullscreen').addEventListener('click', function() {
              $(".toolbar").css("display",'none')
              $("#magazine").css({"scale":"1.1"})
            toggleFullscreen();
          });
          
        //   document.getElementById('mg-fullscreen').addEventListener('click', function() {
        //     toggleFullscreen(this);
        //   });
    
    
    
    
    },[])
   useEffect(()=>{

    
    $(window).ready(function() {
		$('#magazine').turn({
							display: 'double',
							acceleration: true,
							gradients: !$.isTouch,
							elevation:50,
							when: {
								turned: function(e, page) {
									/*console.log('Current view: ', $(this).turn('view'));*/
								}
							}
						});
	});
	
	
	$(window).bind('keydown', function(e){
		
		if (e.keyCode==37)
			$('#magazine').turn('previous');
		else if (e.keyCode==39)
			$('#magazine').turn('next');
			
    });
   
   },[])
    return (
        
        <div id="mg-fullscreen" style={{overflow:"hidden"}}>
            
                <i  className="material-icons" id="prevBtn" style={{cursor:"pointer",position:'absolute',left:'0',top:'30%',transform:'translate(0,40%)',fontSize:'5rem',color:'#0c509d'}}>keyboard_arrow_left</i>
                <i  className="material-icons" id="nextBtn"  style={{cursor:"pointer",position:'absolute',right:'0',top:'30%',transform:'translate(0,40%)',fontSize:'5rem',color:'#0c509d'}}>keyboard_arrow_right</i>
                <div id="magazine" className="mg1" >
                <div  style={{backgroundImage: "url(https://res.cloudinary.com/elixir2019/image/upload/v1603627326/1_n0uv8m.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixir2019/image/upload/v1603627374/2_ex46vu.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixir2019/image/upload/v1603627384/3_mneicy.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixir2019/image/upload/v1603627388/4_mib1np.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div  style={{backgroundImage: "url(https://res.cloudinary.com/elixir2019/image/upload/v1603627391/5_cc5tuz.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixir2019/image/upload/v1603627397/6_lzzaap.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixir2019/image/upload/v1603627394/7_gwoy8y.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixir2019/image/upload/v1603627379/8_gyqire.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div  style={{backgroundImage: "url(https://res.cloudinary.com/elixir2019/image/upload/v1603627389/9_phdo3r.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixir2019/image/upload/v1603627398/10_g1sczs.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                <div style={{backgroundImage: "url(https://res.cloudinary.com/elixir2019/image/upload/v1603627396/11_aqa4ka.jpg)",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundColor: "#ccc"}} />
                </div>
    
            <Feedback/>
        
            <div  style={{position:'absolute',bottom:'80px',left:'20px'}}>
                <button id="btnFullscreen" >
                    Enter fullscreen
                </button>
            </div>

    </div>
    )
}

export default Flipbook
