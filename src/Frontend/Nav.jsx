import React from "react";
import { Link } from "react-router-dom";
import Style from "./style.module.css"

const Nav=()=>{
    

return(
     
   
    <menu>
        <div id={Style.sidenav}>
        
        <Link to="/">Home</Link>
        <Link to="/add">ADD</Link>
        <Link to="/view">View</Link>
    </div>
    </menu>

   
    
    
    
    )
}
export default Nav;