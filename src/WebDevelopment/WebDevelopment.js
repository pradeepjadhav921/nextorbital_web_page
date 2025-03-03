import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Hero from '../Web_componants/WebHero/WebHero';
import Industry from '../Web_componants/industry/industry';
import Technology from '../Web_componants/technology/technology';
import './WebDevelopment.css';

const WebDevelopment = () => {
  return (
    <div className="WebDevelopment">
      <Header />
      <Hero />
      <Industry />
      <Technology />
      <Footer />
    </div>
  );
};

export default WebDevelopment;