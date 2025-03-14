import React from 'react';
import './RMSHero.css';

const RMSHero = () => {
    const heroImage = process.env.PUBLIC_URL + 'assets/restorant.jpg'; // Replace with your actual public URL
    const handleDemoButtonClick = () => {
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    };
    return (
      <div className="RMShero-container">
        <div className="RMShero-text">
          <h1>Restaurant POS Software Made Simple!</h1>
          <p>Manages all your restaurant operations efficiently so that you can focus on growing your brand, like a real boss!</p>
          <button className="demo-button" onClick={handleDemoButtonClick}>Take a Free Demo</button>
        </div>
        <div className="RMShero-image">
          <img src={heroImage} alt="Restaurant POS Software" />
        </div>
      </div>
    );
};

export default RMSHero;