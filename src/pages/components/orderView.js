import React from 'react';
import Dish from './dishFrame.js';
import './styles/orderView.css';

const OrderView = () => {
  return (
    <div className="order-view" style={styles.card}>
      <input type="text" placeholder="Search..." className="search-bar" style={styles.searchBar} />
      <div className="dishes-row" style={styles.dishesRow}>
        <Dish />
        <Dish />
        <Dish />
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '16px',
    maxWidth: '1200px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f5f5f5',
  },
  searchBar: {
    width: '100%',
    padding: '12px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginBottom: '16px',
  },
  dishesRow: {
    display: 'flex',
    justifyContent: 'space-between',
  },
};

export default OrderView;
