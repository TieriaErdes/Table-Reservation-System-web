import React from 'react';
import Navbar from './components/Navbar';
import OrderCard from "./components/OrderCard"
import AddOrderButton from './components/AddOrderButton';
import "./components/styles/orders.css"
function Orders() {
    return (
      <div className="orders-page">
        <nav><Navbar/></nav>
        <div className="orders-container">
            <OrderCard/>
          <AddOrderButton  />
        </div>
      </div>
    );
  }
  


export default Orders;