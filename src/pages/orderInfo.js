import React from 'react';
import "./components/styles/orderInfo.css"
import OrderText from './components/orderText.js';
import OrderView from './components/orderView.js';
function OrderInfo() {

    const orderData = {
        fullName: 'John Doe',
        phoneNumber: '123-456-7890',
        tableNumber: '5',
        dateTime: '2024-05-23, 19:00',
        numberOfPersons: '4',
        dishes: ['Carbonara', 'Margherita Pizza', 'Caesar Salad', 'Tiramisu'],
      };

    return (
        <><OrderText {...orderData}/>
        <OrderView /></>
    
    );
}

export default OrderInfo;