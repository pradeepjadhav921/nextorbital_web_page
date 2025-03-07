// src/components/Hero.js
import React from 'react';
import './hero.css'; // We'll update this CSS file next


const Hero = () => {
    const heroImage = process.env.PUBLIC_URL + 'assets/restorant.jpg'; // Replace with your actual public URL
  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1>Restaurant POS Software Made Simple!</h1>
        <p>Manages all your restaurant operations efficiently so that you can focus on growing your brand, like a real boss!</p>
        <button className="demo-button">Take a Free Demo</button>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Restaurant POS Software" />
      </div>
    </div>
  );
};

export default Hero;