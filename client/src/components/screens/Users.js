import React,{useEffect,useState} from 'react'
import '../../css/Users.css'
const Users = () => {
  const [data,setData] = useState([])
  
    useEffect(() => {
        fetch('/subscribe',{
            headers:{
              "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
          }).then(res=>res.json())
          .then(result=>{
            console.log(result.allusers)
            setData(result.allusers)
            
          })
    }, [])
    return (
      
      // <div className="scrolls">
      // <div className="Text">
        <div className="z-depth-3 user-table-wrapper">
           
            <table className="responsive-table striped highlight">
            <thead>
              <tr>
                  <th>S.No</th>
                  <th>Name</th>
                  <th>College</th>
                  <th>Email ID</th>
                  <th>mobile</th>
              </tr>
            </thead>

            <tbody>
              
              {
        data.map((item,index)=>{
          return(
            <>
            <tr>
                  <td>{index+1} </td>
                  <td>{item.name}</td>
                  <td>{item.college}</td>
                  <td>{item.email}</td>
                  <td>{item.mobile}</td>
            </tr>
            </>    
                
          
          )
          })
        }
              
            </tbody>
          </table>
                
        </div>
        // </div>
        // </div>
        
    )
}

export default Users
