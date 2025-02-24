import React from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import './Portfolio.css';



const Portfolio = () => {
  // const history = useHistory();
  const navigate = useNavigate(); // Use useNavigate for navigation

  const handleNavigation = (path) => {
    // history.push(path);
    navigate(path); // Navigate to the specified path
  };

  return (
    <section id="portfolio" className="portfolio">
      <h2>Our Portfolio</h2>
      <div className="portfolio-grid">
        <div className="portfolio-item1" onClick={() => handleNavigation('/web-development')}>
          <img src={process.env.PUBLIC_URL + 'assets/web_logo.png'} alt="Web Development"/>
          <p>Project 1</p>
        </div>
        <div className="portfolio-item2" onClick={() => handleNavigation('/rms')}>
          <img src={process.env.PUBLIC_URL + 'assets/POS_logo.png'} alt="Restorant Management System"/>
          <p>Project 2</p>
        </div>
        <div className="portfolio-item3" onClick={() => handleNavigation('/hms')}>
          <img src={process.env.PUBLIC_URL + 'assets/logo_HMS-Photoroom.png'} alt="Hospital management System"/>
          <p>Project 3</p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;