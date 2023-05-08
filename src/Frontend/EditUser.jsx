import React, { useEffect, useState } from "react";
import Style from "./style.module.css"
import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";
const EditUser=()=>{
    let navigate=useNavigate();
    let location=useLocation();
    const dataId=location.pathname.split("/")[2];

   
    const [mydata, setMydata]= useState({
        id:"",
        name:"",
        phno:"",
        email:""
    });
    
    
    const handelChange=(e)=>{
        setMydata( (prev)=>({...prev, [e.target.name]: e.target.value}))
    };
    useEffect(()=>{
        
        const alldata= async()=>{
            try {
                const res=await axios.get("http://localhost:4400/mydata/"+ dataId, mydata)
               setMydata(res);

            } catch (err) {
                console.log(err);
            }
        }
        alldata();
    },[dataId]);
    
    const handelClick=async (e)=>{
        e.preventDefault()
        try {
            await axios.put("http://localhost:4400/mydata/"+ dataId, mydata)
                navigate("/view");
            
        } catch (err) {
            console.log(err);
        }
    } 
  
    const cancelhandle=()=>{
        navigate("/")
    }
    
    
return(
        
                <div  id={Style.div} >
                    <h2>Update Details...</h2><br /><br />
                        <form action="#">
                        <input type="text" placeholder="Name"  onChange={handelChange}  name="name" /><br /><br />
                        <input type="number" placeholder="Ph-No"  onChange={handelChange}  name="phno"/><br /><br />
                        <input type="text" placeholder="Email"  onChange={handelChange}  name="email"/><br /><br />
                        
                        <center><button id={Style.btn} onClick={cancelhandle}>Cancel</button><button id={Style.btn} onClick={handelClick}>Update</button></center>
                   
                       </form>
              </div>
    
  
)
}

export default EditUser