import React from 'react';
import './styles/AddOrderButton.css';

const AddOrderButton = ({ onClick }) => {
  return (
    <button className="add-order-button" onClick={onClick}>
      Add order
    </button>
  );
};

export default AddOrderButton;