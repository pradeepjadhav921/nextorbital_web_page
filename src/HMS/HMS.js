import React from 'react';
import Header from '../components/Header/Header';
import Hero from '../HMS_componants/HRS_hero/hero.js';
import Footer from '../components/Footer/Footer';
import Letestupdate from '../HMS_componants/Latest_Update/letest.js';
import WhyUs from '../HMS_componants/Why_us/why_us.js';
import './HMS.css';

const HMS = () => {
  return (
    <div className="HMS">
      <Header />
      <Hero />
      <Letestupdate />
      <WhyUs />
      <Footer />
    </div>
  );
};

export default HMS;