import React from 'react';
import './Header.css';

const Header = () => {
  const handleDemoButtonClick = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="/small logo.png" alt="Logo small" />
        <img src="/logo.png" alt="Logo" />
      </div>
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><button className="demo-button" onClick={handleDemoButtonClick}>Request For Demo</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;