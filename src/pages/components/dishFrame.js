import * as React from "react";

function Dish() {
  return (
    <>
      <div className="div">
        <div className="div-2">
          <div className="div-3">+ Photo</div>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/189cdc605959ea56726d782977c783a47948646cedfd0b426dd99562099b1cb1?apiKey=773289d641e84dadb4a09bc5cd891fd9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/189cdc605959ea56726d782977c783a47948646cedfd0b426dd99562099b1cb1?apiKey=773289d641e84dadb4a09bc5cd891fd9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/189cdc605959ea56726d782977c783a47948646cedfd0b426dd99562099b1cb1?apiKey=773289d641e84dadb4a09bc5cd891fd9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/189cdc605959ea56726d782977c783a47948646cedfd0b426dd99562099b1cb1?apiKey=773289d641e84dadb4a09bc5cd891fd9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/189cdc605959ea56726d782977c783a47948646cedfd0b426dd99562099b1cb1?apiKey=773289d641e84dadb4a09bc5cd891fd9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/189cdc605959ea56726d782977c783a47948646cedfd0b426dd99562099b1cb1?apiKey=773289d641e84dadb4a09bc5cd891fd9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/189cdc605959ea56726d782977c783a47948646cedfd0b426dd99562099b1cb1?apiKey=773289d641e84dadb4a09bc5cd891fd9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/189cdc605959ea56726d782977c783a47948646cedfd0b426dd99562099b1cb1?apiKey=773289d641e84dadb4a09bc5cd891fd9&"
            className="img"
          />
        </div>
        <div className="div-4">Name of the dish</div>
        <div className="div-5">Grams</div>
        <div className="div-6">Price</div>
        <button className="div-7">Confirm</button>
      </div>
      <style jsx>{`
        .div {
          border-radius: 17px;
          background-color: rgba(255, 255, 255, 0.4);
          display: flex;
          max-width: 355px;
          flex-direction: column;
          align-items: start;
          font-size: 20px;
          color: #000;
          font-weight: 700;
          padding: 13px 12px 23px;
        }
        .div-2 {
          align-self: stretch;
          display: flex;
          align-items: start;
          gap: 4px;
          font-size: 24px;
          text-align: center;
          padding: 0 1px;
        }
        .div-3 {
          font-family: Inika, sans-serif;
          border-radius: 27px;
          background-color: rgba(255, 255, 255, 0.85);
          margin-top: 15px;
          align-items: center;
          justify-content: center;
          flex-grow: 1;
          width: fit-content;
          padding: 94px 60px 80px;
        }
        .img {
          aspect-ratio: 0.83;
          object-fit: auto;
          object-position: center;
          width: 15px;
        }
        .div-4 {
          font-family: Inika, sans-serif;
          margin: 23px 0 0 33px;
        }
        .div-5 {
          font-family: Inika, sans-serif;
          margin: 30px 0 0 33px;
        }
        .div-6 {
          font-family: Inika, sans-serif;
          margin: 30px 0 0 33px;
        }
        .div-7 {
          font-family: Inika, sans-serif;
          border-radius: 27px;
          background-color: rgba(255, 255, 255, 0.85);
          align-self: stretch;
          margin-top: 41px;
          align-items: center;
          white-space: nowrap;
          text-align: center;
          justify-content: center;
          padding: 20px 60px;
        }
        .div-7:hover {
            cursor: pointer; /* Add this line to change the cursor on hover */
        }
      `}</style>
    </>
  );
}

export default Dish;