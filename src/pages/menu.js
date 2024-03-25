import React from 'react';
import Navbar from './components/Navbar'; // Assuming Navbar component is in the same directory

function Menu() {
  return (
    <div className="menu-page">
      <Navbar />
      <div className="content">
        <h1>Menu Page</h1>
        <p>This is the menu page.</p>
        <input type="text" placeholder="Search..." className="search-bar" />
      </div>
    </div>
  );
}

export default Menu;
