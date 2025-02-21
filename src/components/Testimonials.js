import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-list">
        <div className="testimonial-item">
          <p>"Adroit Infotech delivered an outstanding web application for our business."</p>
          <p>- Client A</p>
        </div>
        <div className="testimonial-item">
          <p>"Their team is highly skilled and professional."</p>
          <p>- Client B</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;