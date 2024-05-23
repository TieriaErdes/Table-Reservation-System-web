import * as React from "react";
import dish from './styles/dish.png';
import "./styles/dishFrame.css"
function Dish() {
  return (
    <>
      <section className="dish-card">
        <div className="image-container">
          <img
            loading="lazy"
            src={dish}
            alt="Dish"
            className="dish-image"
          />
        </div>
        <h2 className="dish-name">Name of the dish</h2>
        <p className="dish-grams">Grams</p>
        <p className="dish-price">Price</p>
        <button className="confirm-button">Confirm</button>
      </section>
      
    </>
  );
}

export default Dish;