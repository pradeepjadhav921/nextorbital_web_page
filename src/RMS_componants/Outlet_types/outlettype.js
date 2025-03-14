// src/components/OutletTypes.js
import React from 'react';
import './outlettype.css'; // We'll create this CSS file next

const OutletTypes = () => {

  return (
    <div className="outlet-container">
      <h1>Built for all types of food business</h1>
      <p>The all-in-one restaurant Management System for all types of restaurants, farmers, and food outlets</p>

      <div className="outlet-grid">
          <div className="outlet-item">
            <img src={process.env.PUBLIC_URL + '/resto/food-removebg-preview.png'} alt="Food Courts & Canteens" />
            <p>Food Courts & Canteens</p>
          </div>

          {/* Cafe */}
        <div className="outlet-item">
          <img src={process.env.PUBLIC_URL + '/resto/cafe-removebg-preview.png'} alt="Cafe" />
          <p>Cafe</p>
        </div>

        {/* Fine Dine */}
        <div className="outlet-item">
          <img src={process.env.PUBLIC_URL + '/resto/dinner-removebg-preview.png'} alt="Fine Dine" />
          <p>Fine Dine</p>
        </div>

        {/* Bar & Brewery */}
        <div className="outlet-item">
          <img src={process.env.PUBLIC_URL + '/resto/bar-removebg-preview.png'} alt="Bar & Brewery" />
          <p>Bar & Brewery</p>
        </div>

        {/* Pizzeria */}
        <div className="outlet-item">
          <img src={process.env.PUBLIC_URL + '/resto/pizza-removebg-preview.png'} alt="Pizzeria" />
          <p>Pizzeria</p>
        </div>

        {/* OSR */}
        <div className="outlet-item">
          <img src={process.env.PUBLIC_URL + '/resto/QSR-removebg-preview.png'} alt="QSR" />
          <p>QSR</p>
        </div>

        {/* Desserts */}
        <div className="outlet-item">
          <img src={process.env.PUBLIC_URL + '/resto/desart-removebg-preview.png'} alt="Desserts" />
          <p>Desserts</p>
        </div>

        {/* Large Chains */}
        <div className="outlet-item">
          <img src={process.env.PUBLIC_URL + '/resto/chain-removebg-preview.png'} alt="Large Chains" />
          <p>Large Chains</p>
        </div>

        {/* Bakery */}
        <div className="outlet-item">
          <img src={process.env.PUBLIC_URL + '/resto/bekary-removebg-preview.png'} alt="Bakery" />
          <p>Bakery</p>
        </div>

        {/* Cloud Kitchens */}
        <div className="outlet-item">
          <img src={process.env.PUBLIC_URL + '/resto/cluod-removebg-preview.png'} alt="Cloud Kitchens" />
          <p>Cloud Kitchens</p>
        </div>
      </div>
    </div>
  );
};

export default OutletTypes;