import React, { useState } from 'react';
import Navbar from './components/Navbar';
import OrderCard from "./components/OrderCard"
import AddOrderButton from './components/AddOrderButton';
import "./components/styles/orders.css"




const OrdersPage = () => {
  const [orders, setOrders] = useState([]);

  const addOrder = () => {
    setOrders([...orders, {}]); // Добавляем пустой объект как новый заказ
  };

  return (
    <><Navbar/>
    <div className="orders-page">
      <div className="orders-container">
        {orders.map((order, index) => (
          <OrderCard key={index} />
        ))}
      </div>
      <AddOrderButton onClick={addOrder} />
    </div></>
  );
};

export default OrdersPage;