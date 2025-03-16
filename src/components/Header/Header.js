import React from 'react';
import './Header.css';

const Header = () => {
  const home = "/"; // Use relative path

  const handleDemoButtonClick = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavLinkClick = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `/#${targetId}`;
    }
  };

  return (
    <header className="header">
      <div className="logo" onClick={() => window.location.href = home}>
        <img src="/small logo.png" alt="Logo small" />
        <img src="/logo.png" alt="Logo" />
      </div>
      <nav className="navbar">
        <ul>
          <li><a href={home}>Home</a></li>
          <li><a href={`${home}#portfolio`}>Services</a></li>
          <li><a href={`${home}#about`}>About</a></li>
          <li><a href="/careers">Careers</a></li>
          <li><a href="#contact" onClick={(e) => handleNavLinkClick(e, 'contact')}>Contact</a></li>
          <li><button className="demo-button small" onClick={handleDemoButtonClick}>Request For Demo</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;