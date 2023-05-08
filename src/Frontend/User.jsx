import {React,useState} from "react";
import Style from "./style.module.css";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const User=()=>{
    const navigate=useNavigate();
    const cancelhandle=()=>{
        navigate("/")
    }

    const [mydata, setMydata]= useState({
        id:"",
        name:"",
        phno:"",
        email:""
    });
    
    const handelChange=(e)=>{
        setMydata( (prev)=>({...prev, [e.target.name]: e.target.value}))
    };
    const handelClick=async (e)=>{
        e.preventDefault()
        try {
            await axios.post("http://localhost:4400/mydata", mydata)
            console.log(mydata);
                navigate("/view");
            
        } catch (err) {
            console.log(err);
        }
    }
    return(
        <div id={Style.div}>
                  <h2>Add Details...</h2><br /><br />

            <form action="#">
                <label htmlFor="">     ID    : </label>
                <input type="number"  onChange={handelChange} name="id"/><br /><br />
                <label htmlFor="">   Name  : </label>
                <input type="text" onChange={handelChange} name="name"/><br /><br />
                <label htmlFor="">   PhNo  : </label>
                <input type="number" onChange={handelChange} name="phno"/><br /><br />
                <label htmlFor="">   Email : </label>
                <input type="text" onChange={handelChange} name="email"/><br /><br />
                <center><button id={Style.btn} onClick={cancelhandle}>Cancel</button><button id={Style.btn} onClick={handelClick}>Submit</button></center>
                
            </form>
        </div>
    )
}
export default User;