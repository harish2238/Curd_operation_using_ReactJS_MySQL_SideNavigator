import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from "./Frontend/Nav";
import Home from "./Frontend/Home";
import User from "./Frontend/User";
import View from "./Frontend/View_User";
import EditUser from "./Frontend/EditUser";
const App=()=>{
    return(
        <div>
            <BrowserRouter>
            <Nav/>
            <Routes>
                <Route path="/" element={<Home/>} ></Route>
                <Route path="/add" element={<User/>} ></Route>
                <Route path="/view" element={<View/>}></Route>
                <Route path="/edit/:index" element={<EditUser/>}></Route>
            </Routes>
            </BrowserRouter>
        </div>

    )
    


}
export default App;