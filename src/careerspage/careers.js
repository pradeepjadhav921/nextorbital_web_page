// src/App.js
import React, { useEffect } from 'react';
import Header from '../components/Header/Header';
import Career from '../components/career/career';
import Footer from '../components/Footer/Footer';
import './careers.css';


const Careers = () => {
  useEffect(() => {
    document.title = 'NextOrbitals career'; // Set the title
  }, []);
  return (
    <div className="HMS">
      <Header />
      <Career />
      <Footer />
    </div>
  );
};

export default Careers;