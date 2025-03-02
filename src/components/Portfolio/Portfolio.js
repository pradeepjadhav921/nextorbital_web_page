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
          <img src={process.env.PUBLIC_URL + 'assets/Web-Dvelopment-Company-in-India.png'} alt="Web Development"/>
          <p>Website Development Services</p>
          <span> <p1>Click Here</p1> for more details</span>
        </div>
        <div className="portfolio-item2" onClick={() => handleNavigation('/rms')}>
          <img src={process.env.PUBLIC_URL + 'assets/POS_logo-removebg-previewv1.png'} alt="Restorant Management System"/>
          <p>Restorant Management Services</p>
          <span> <p1>Click Here</p1> for more details</span>
        </div>
        <div className="portfolio-item3" onClick={() => handleNavigation('/hms')}>
          <img src={process.env.PUBLIC_URL + 'assets/logo_HMS-Photoroom.png'} alt="Hospital management System"/>
          <p>Hospital Management Services</p>
          <span> <p1>Click Here</p1> for more details</span>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;