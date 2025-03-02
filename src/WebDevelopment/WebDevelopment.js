import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Hero from '../Web_componants/WebHero/WebHero';
import './WebDevelopment.css';

const WebDevelopment = () => {
  return (
    <div className="WebDevelopment">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
};

export default WebDevelopment;