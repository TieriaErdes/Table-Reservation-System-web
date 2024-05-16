import React from 'react';
import Navbar from './components/Navbar'; // Assuming Navbar component is in the same directory
import "./components/styles/menu.css"
import { useBackgroundImage } from "./components/UseBackgroundImage.js";
import Dish from './components/dishFrame';
function Menu() {
  useBackgroundImage("./components/styles/notification_bell.png");
  return (
    <div className="menu-page">
      <Navbar/>
      <div className="content">
        <div className="header">
          <h1>Menu Page</h1>
          <p>This is the menu page.</p>
          <input type="text" placeholder="Search..." className="search-bar" />
        </div>
        <div className="dish-container">
          <Dish/>
          <Dish/>
          <Dish/>
          <Dish/>
        </div>
      </div>
    </div>
  );
  
}


export default Menu;
