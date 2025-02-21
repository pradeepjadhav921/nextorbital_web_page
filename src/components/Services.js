import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="service-list">
        <div className="service-item">
          <h3>Web Development</h3>
          <p>We build responsive and scalable web applications.</p>
        </div>
        <div className="service-item">
          <h3>Mobile App Development</h3>
          <p>We create cross-platform mobile apps.</p>
        </div>
        <div className="service-item">
          <h3>UI/UX Design</h3>
          <p>We design user-friendly interfaces.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;