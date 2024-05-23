import React from 'react';
import './styles/Navbar.css'; // Import the CSS file
import notification_bell from './styles/notification_bell.png'; // Import the notification bell image
import home_icon from './styles/home.png'; // Import the home icon image
import {  Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="bell_image">
        <img className="image" src={notification_bell} alt="Notification Bell" />
      </div>
      <h1 className="navbar-text">Main page</h1>
      <Link to="/"><div className="home_image">
        <img className="image" src={home_icon} alt="Home" />
      </div></Link>
    </nav>
  );
};

export default Navbar;
