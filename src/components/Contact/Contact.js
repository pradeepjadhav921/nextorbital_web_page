import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        {/* Request for Demo Section */}
        <div className="demo-section">
          <h2>REQUEST FOR DEMO</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="Mobile No." placeholder="Mobile No." required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Requirement" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Contact Us Section */}
        <div className="contact-section">
          <h2>Contact Us</h2>
          <h3>Address</h3>
          <p>1234 Elm St.</p>
          <p>Springfield, IL 62701</p>
          <h3>Phone</h3>
          <p>555-555-5555</p>
          <h3>Email</h3>
          <p>info@example.com</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;