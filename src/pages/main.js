import React from "react";
import Navbar from "./components/Navbar";
import "./components/styles/MainPage.css"
import { useBackgroundImage } from "./components/UseBackgroundImage.js";
function Main (){
    useBackgroundImage("./components/styles/notification_bell.png");
    return (
    <><Navbar />
    <div class="buttons-container">
            <button class="button">Orders</button>
            <button class="button">Hall</button>
            <button class="button">Menu</button>
            <button class="button">Designer</button>
        </div></>
    );
}

export default Main;