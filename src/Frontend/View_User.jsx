import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import Style from "./style.module.css"

const View_User=()=>{
    const [mydata,setMydata]=useState([]);
    useEffect(()=>{
        const alldata= async()=>{
            try {
                const res=await axios.get("http://localhost:4400/mydata")
                setMydata(res.data);

            } catch (err) {
                console.log(err);
            }
        }
        alldata();
    },[])

    const handleDelete= async (id)=>{
        console.log(id)
        try {
            await axios.delete("http://localhost:4400/mydata/"+ id, mydata)
            window.location.reload();
        } catch (err) {
            console.log(err)
        }
    }
     
        return(
            <div id={Style.da}>
            {mydata.map((x)=>(
                
                <section key={x.id} id={Style.section}   >
                <p>Id:<span>{x.id}</span></p> 
               <p>Name:<span>{x.name}</span></p>
               <p>Ph-No:<span>{x.phno}</span></p>
               <p>Email:<span>{x.email}</span></p>
               <button id={Style.btn} onClick={()=>handleDelete(`${x.id}`)  }>Delete</button>
               
               <button id={Style.btn}><Link to={`/edit/${x.id}`}>Edit</Link></button>

               </section>
                
            ))}
        </div>
        )
    }
   
export default View_User;