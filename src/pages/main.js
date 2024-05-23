import React from "react";
import Navbar from "./components/Navbar";
import "./components/styles/MainPage.css"

import { Link } from "react-router-dom";


function Main (){
    
    return (
    <><Navbar />
    <div class="buttons-container">
    <Link to="/orders"><button class="button" >Orders</button></Link>
            <button class="button">Hall</button>
            <Link to="/menu"><button class="button" >Menu</button></Link>
            <button class="button">Designer</button>
        </div></>
    );
}

export default Main;