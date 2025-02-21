import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <h2>Our Portfolio</h2>
      <div className="portfolio-grid">
        <div className="portfolio-item">
          <img src={process.env.PUBLIC_URL + '/assets/project1.png'} alt="Project 1" />
          <p>Project 1</p>
        </div>
        <div className="portfolio-item">
          <img src={process.env.PUBLIC_URL + '/assets/project2.png'} alt="Project 2" />
          <p>Project 2</p>
        </div>
        <div className="portfolio-item">
          <img src={process.env.PUBLIC_URL + '/assets/project3.png'} alt="Project 3" />
          <p>Project 3</p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;