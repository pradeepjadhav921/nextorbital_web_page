import React, { useEffect } from 'react';
import Header from '../components/Header/Header';
import Hero from '../HMS_componants/HRS_hero/hero.js';
import Letestupdate from '../HMS_componants/Latest_Update/letest.js';
import WhyUs from '../HMS_componants/Why_us/why_us.js';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import './HMS.css';

const HMS = () => {
  useEffect(() => {
    document.title = 'NextOrbitals Hospital Management System'; // Set the title
  }, []);
  return (
    <div className="HMS">
      <Header />
      <Hero />
      <Letestupdate />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default HMS;