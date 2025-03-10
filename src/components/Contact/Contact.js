import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_6r3cnne', // Replace with your Service ID
        'template_ikcohyn', // Replace with your Template ID
        form.current,
        '4nbuMGGU2LBvz7d2y' // Replace with your User ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send the message, please try again.');
        }
      );

    // Reset the form after submission
    e.target.reset();
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        {/* Request for Demo Section */}
        <div className="demo-section">
          <h2>REQUEST FOR DEMO</h2>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="from_name" placeholder="Your Name*" required />
            <input type="text" name="user_phone" placeholder="Mobile No.*" required />
            <input type="email" name="user_email" placeholder="Your Email*" required />
            <textarea name="message" placeholder="Your Requirement*" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Contact Us Section */}
        <div className="contact-section">
          <h2>Contact Us</h2>
          <h3>Address</h3>
          {/* <p>15th Floor morarji mill compound</p> */}
          <p>Kandivali East, Mumbai. 400101</p>
          <h3>Phone</h3>
          <p>919403029424</p>
          <h3>Email</h3>
          <p>info@nextorbitals.in</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;