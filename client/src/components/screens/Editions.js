import React,{useState,useEffect} from 'react'
import '../../css/Editions.css' 
import $ from 'jquery'
export default function Editions() {
  const [data,setData] = useState([])
  useEffect(() => {
    fetch('/alleditions',{
      headers:{
        "Authorization":"Bearer "+localStorage.getItem("jwt")
      }
    }).then(res=>res.json())
    .then(result=>{
      console.log(result.posts)
       setData(result.posts)
    })
  }, [])
    return (
    <div className="editions-wrapper">
      {/* {
        data.map(item=>{
          return(
            <div class="mg-wrap mg-wrap--1">
            <div class="mg-container mg-container--1">
            <div className="libro"> 
                  <img src={item.photo} alt="" />
                </div>
          <h6>{item.edition}</h6>
            </div>
            </div>
          )
          })
      } */}
      {data.map((each, index) => (
      <div key={each} className="book-card">
      <div className="book-card__cover effect7">
        <div className="book-card__book">
          <div className="book-card__book-front">
            <img className="book-card__img" src={each.photo} />
          </div>
          <div className="book-card__book-back"></div>
          <div className="book-card__book-side"></div>
        </div>
      </div>
      
        <div className="book-card__title">
         {each.edition}
        </div>
    </div>
           
          
      ))}
      </div>
     
    )       
}
