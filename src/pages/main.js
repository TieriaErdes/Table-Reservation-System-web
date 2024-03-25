import React from "react";
import Navbar from "./components/Navbar";
import "./components/styles/main.css"
function Main(){
    return (
    <><Navbar /><div class="buttons-container">
            <button class="button">Orders</button>
            <button class="button">Hall</button>
            <button class="button">Menu</button>
            <button class="button">Designer</button>
        </div></>
    );
}

export default Main;