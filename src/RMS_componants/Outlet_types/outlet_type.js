// src/components/OutletTypes.js
import React from 'react';
import './outlet_type.css'; // We'll create this CSS file next

const OutletTypes = () => {
  return (
    <div className="outlet-container">
      <h1>Built for all types of food business</h1>
      <p>The all-in-one restaurant Management System for all types of restaurants, farmers, and food outlets</p>

      <div className="outlet-grid">
        {/* Food Courts & Canteens */}
        <div className="outlet-item">
          <img src="/path/to/food-court-icon.png" alt="Food Courts & Canteens" />
          <p>Food Courts & Canteens</p>
        </div>

        {/* Cafe */}
        <div className="outlet-item">
          <img src="/path/to/cafe-icon.png" alt="Cafe" />
          <p>Cafe</p>
        </div>

        {/* Fine Dine */}
        <div className="outlet-item">
          <img src="/path/to/fine-dine-icon.png" alt="Fine Dine" />
          <p>Fine Dine</p>
        </div>

        {/* Bar & Brewery */}
        <div className="outlet-item">
          <img src="/path/to/bar-icon.png" alt="Bar & Brewery" />
          <p>Bar & Brewery</p>
        </div>

        {/* Pizzeria */}
        <div className="outlet-item">
          <img src="/path/to/pizzeria-icon.png" alt="Pizzeria" />
          <p>Pizzeria</p>
        </div>

        {/* OSR */}
        <div className="outlet-item">
          <img src="/path/to/osr-icon.png" alt="OSR" />
          <p>OSR</p>
        </div>

        {/* Desserts */}
        <div className="outlet-item">
          <img src="/path/to/desserts-icon.png" alt="Desserts" />
          <p>Desserts</p>
        </div>

        {/* Large Chains */}
        <div className="outlet-item">
          <img src="/path/to/large-chains-icon.png" alt="Large Chains" />
          <p>Large Chains</p>
        </div>

        {/* Bakery */}
        <div className="outlet-item">
          <img src="/path/to/bakery-icon.png" alt="Bakery" />
          <p>Bakery</p>
        </div>

        {/* Cloud Kitchens */}
        <div className="outlet-item">
          <img src="/path/to/cloud-kitchen-icon.png" alt="Cloud Kitchens" />
          <p>Cloud Kitchens</p>
        </div>
      </div>
    </div>
  );
};

export default OutletTypes;