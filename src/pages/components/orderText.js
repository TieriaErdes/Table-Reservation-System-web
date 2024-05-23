import React, { useState } from 'react';
import "./styles/orderText.css"

const OrderText = ({ fullName, phoneNumber, tableNumber, dateTime, numberOfPersons, dishes }) => {
    // Состояние для хранения количества каждого блюда
    const [dishCounts, setDishCounts] = useState(Array(dishes.length).fill(1));
    const [currentDishes, setCurrentDishes] = useState(dishes);
  
    const handleIncrement = (index) => {
      const newDishCounts = [...dishCounts];
      newDishCounts[index] += 1;
      setDishCounts(newDishCounts);
    };
  
    const handleDecrement = (index) => {
      const newDishCounts = [...dishCounts];
      if (newDishCounts[index] > 1) {
        newDishCounts[index] -= 1;
        setDishCounts(newDishCounts);
      } else {
        // Удаляем блюдо из списка
        const newDishes = currentDishes.filter((_, dishIndex) => dishIndex !== index);
        const newDishCountsFiltered = newDishCounts.filter((_, countIndex) => countIndex !== index);
        setCurrentDishes(newDishes);
        setDishCounts(newDishCountsFiltered);
      }
    };
  
    return (
      <div className="order-text" style={styles.card}>
        <div style={styles.info}>
          <p style={styles.label}>Full name:</p>
          <p style={styles.value}>{fullName}</p>
        </div>
        <div style={styles.info}>
          <p style={styles.label}>Phone number:</p>
          <p style={styles.value}>{phoneNumber}</p>
        </div>
        <div style={styles.info}>
          <p style={styles.label}>Table number:</p>
          <p style={styles.value}>{tableNumber}</p>
        </div>
        <div style={styles.info}>
          <p style={styles.label}>Date, time:</p>
          <p style={styles.value}>{dateTime}</p>
        </div>
        <div style={styles.info}>
          <p style={styles.label}>Number of persons:</p>
          <p style={styles.value}>{numberOfPersons}</p>
        </div>
        <h2 style={styles.dishesTitle}>Dishes</h2>
        <ul style={styles.dishesList}>
          {currentDishes.map((dish, index) => (
            <li key={index} style={styles.dishItem}>
              {index + 1}. {dish}
              <div style={styles.counter}>
                <button onClick={() => handleDecrement(index)} style={styles.button}>-</button>
                <span style={styles.count}>{dishCounts[index]}</span>
                <button onClick={() => handleIncrement(index)} style={styles.button}>+</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  const styles = {
    card: {
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      marginBottom: '16px',
      maxWidth: '400px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#e0e0e0',
    },
    info: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '3px',
    },
    label: {
      fontWeight: 'bold',
    },
    value: {
      marginLeft: '8px',
    },
    dishesTitle: {
      textAlign: 'center',
      margin: '16px 0 8px 0',
    },
    dishesList: {
      listStyleType: 'none',
      paddingLeft: '0',
    },
    dishItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '8px',
    },
    counter: {
      display: 'flex',
      alignItems: 'center',
    },
    button: {
      background: 'none',
      border: '1px solid #ccc',
      borderRadius: '4px',
      width: '32px',
      height: '32px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '18px',
      cursor: 'pointer',
      margin: '0 4px',
    },
    count: {
      width: '32px',
      textAlign: 'center',
    },
  };
  
  export default OrderText;
