import React from 'react';
import Header from '../components/Header/Header';
import RMSHero from '../RMS_componants/RMS_hero/RMSHero';
import Features from '../RMS_componants/POS_Features/features';
import Outlettypes from '../RMS_componants/Outlet_types/outlettype';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import './RMS.css';

const RMS = () => {
  return (
    <div className="RMS">
      <Header />
      <RMSHero />
      <Features />
      <Outlettypes />
      <Contact />
      <Footer />
    </div>
  );
};

export default RMS;