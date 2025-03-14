import React, { useEffect } from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Client from '../components/Client/client';
import About from '../components/About/About';
import Services from '../components/Portfolio/Portfolio';
// import Testimonials from '../components/Testimonials/Testimonials';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import './Home.css';

const Home = () => {
    useEffect(() => {
    document.title = 'NextOrbitals Home Page'; // Set the title
  }, []);
  return (
    <div className="home">
      <Header />
      <Hero />
      <Services />
      <Client />
      <About />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;