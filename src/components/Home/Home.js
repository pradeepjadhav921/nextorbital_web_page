import React from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Services from '../Services/Services';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Testimonials from '../Testimonials/Testimonials';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;