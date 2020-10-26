import React,{useState,useEffect} from 'react'
import '../../../css/PostSlides.css'
import M from 'materialize-css'
import {useHistory} from 'react-router-dom'
export default function PostSlides() {
    const history = useHistory()
    const [dkImage,setDkImage] = useState("");
    // const [mbImage,setMbImage] = useState("");
    const [slideTitle,setSlideTitle] = useState("");
    const [slideLink,setSlideLink] = useState("");
    const [url,setUrl] = useState("")
    // const [mbUrl,setMbUrl] = useState("")
    useEffect(() => {
        if(url){
            fetch("/post/postSlides",{
                method:"post",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":"Bearer "+localStorage.getItem("jwt")
                },
                body:JSON.stringify({
                    slideTitle,
                    slideLink,
                    dkSlideImage:url
                })
                })
                .then(res=>res.json())
                .then(data=>{
                console.log(data)
            
                if(data.error){
                    M.toast({html:data.error,classes:"red darken-3"})
                }
                else{
            
                    M.toast({html:"Slide Posted Successfully",classes:"green darken-2"})
                    history.push('/post/postSlides')
                }
                }).catch(err=>{
                console.log(err)
                })
        }
    }, [url])

    
    const postDetails = ()=>{
        const data = new FormData();
        data.append("file",dkImage)
        // data.append("file",mbImage)
        data.append("upload_preset",'elixir')
        data.append("cloud_name","elixir2019")
        fetch("https://api.cloudinary.com/v1_1/elixir2019/image/upload",{
            method:"post",
            body:data
        })
        .then(res=>res.json())
        .then(data=>{

            setUrl(data.url)
            console.log(data.url)
            console.log(url)
        })
        .catch(err=>{
            console.log(err)
        })
    }


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
    const deletePost = (postid)=>{
      fetch(`/deleteSlide/${postid}`,{
        method:"delete",
        headers:{
          Authorization:"Bearer "+localStorage.getItem("jwt")
        }
      }).then(res=>res.json())
      .then(result=>{
        console.log(result)
        const newData = data.filter(item=>{
          return item._id !== result._id
      })
      setData(newData)
      })
    }
    return (
      <>
        <div className=" row post-slides-wrapper">
          <br/>
        <div className="col s12 m3 file-field input-field justify-center">
          <div className="btn">
            <span>Desktop Slide Image</span>
            <input type="file" onChange={(e)=>setDkImage(e.target.files[0])} />
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text"  />
          </div>
        </div>
        {/* <div className="file-field input-field">
          <div className="btn">
            <span>Mobile Slide Image</span>
            <input type="file" onChange={(e)=>setMbImage(e.target.files[1])}/>
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text" />
          </div>
        </div> */}
        <div className="col s12 m3">
          Enter the Title of the Slide : &nbsp;&nbsp;
          <div className="input-field inline">
            <input id="slide_title" type="text" value={slideTitle} onChange={(e)=>setSlideTitle(e.target.value)}/>
            <label htmlFor="slide_title">Slide Title</label>
          </div>
        </div>
        <div className="col s12 m3">
          Paste the Link of the Slide : &nbsp;&nbsp;
          <div className="input-field inline">
            <input id="slide_link" type="text" value={slideLink} onChange={(e)=>setSlideLink(e.target.value)} />
            <label htmlFor="slide_link">Slide Link</label>
          </div>
        </div>
        <div className="col s12 m3">
      <button className="button-primary" onClick={()=>postDetails()} style={{margin:"20px auto"}}>Post Slide</button>
      </div>
      </div>
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly",overflowX:"hidden"}}>
        
        {data.map((each, index) => (
              
            <div key={each._id} style={{margin:"20px",position:"relative"}}>
              <img style={{ objectFit: "cover", width: "280px" ,height:"280px"}} src={each.dkSlideImage} />
              <i onClick={()=>deletePost(each._id)} className="material-icons" style={{float:"right",cursor:"pointer"}}>delete</i>
              <p style={{position:"absolute",top:"80%",left:'80%'}}>{each.slideTitle}</p>
            </div>
         
          ))}
        </div>
        
      </>
    )
}
