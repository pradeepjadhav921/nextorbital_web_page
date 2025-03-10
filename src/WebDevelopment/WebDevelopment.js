import React from 'react';
import Header from '../components/Header/Header';
import Hero from '../Web_componants/WebHero/WebHero';
import Industry from '../Web_componants/industry/industry';
import Technology from '../Web_componants/technology/technology';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import './WebDevelopment.css';

const WebDevelopment = () => {
  return (
    <div className="WebDevelopment">
      <Header />
      <Hero />
      <Industry />
      <Technology />
      <Contact />
      <Footer />
    </div>
  );
};

export default WebDevelopment;