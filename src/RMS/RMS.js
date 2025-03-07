import React from 'react';
import Header from '../components/Header/Header';
import Hero from '../RMS_componants/RMS_hero/hero';
import Footer from '../components/Footer/Footer';
import Features from '../RMS_componants/POS_Features/features';
import Outlet_types from '../RMS_componants/Outlet_types/outlet_type';
import Contact from '../components/Contact/Contact';
import './RMS.css';

const RMS = () => {
  return (
    <div className="RMS">
      <Header />
      <Hero />
      <Features />
      <Outlet_types />
      <Contact />
      <Footer />
    </div>
  );
};

export default RMS;