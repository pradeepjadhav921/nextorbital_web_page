import React, { useState, useEffect, useMemo } from 'react';
import './WebHero.css';

const Hero = () => {
  const videoSrc = process.env.PUBLIC_URL + '/video/Zenkins-Home-Hero-Banner.webm';

  // Memoize the slogans array
  const slogans = useMemo(() => [
    "Unleashing Creative Designs with Every Click",
    "Designs Tailored to Dazzle and Inspire",
    "Transforming Digital Dreams into Reality",
    "Bridging the Gap Between Imagination and Reality",
    "Elevate Your Online Presence with Our Unique Designs",
    "The Art of Web Design, Redefined",
    "Crafting Extraordinary Experiences Through Design",
    "Where Imagination Meets Innovation",
    "Empowering Your Business with Cutting-Edge Designs",
    "Pioneering the Future of Web Design",
    "Unleash Your Digital Potential with Us",
    "Boundless Creativity in Every Pixel",
    "Revolutionizing Web Design, One Site at a Time",
    "Designs That Inspire, Captivate, and Convert",
    "Creating Designs that Stand the Test of Time",
    "Setting New Standards in Web Design Excellence",
    "Designs Crafted with Passion and Precision",
    "Unlock the Power of Exceptional Web Design",
    "Where Imagination Meets Functionality",
    "Enhancing Your Online Presence with Unique Designs"
  ], []); // Empty dependency array means it will only be created once

  // State to track the current slogan
  const [currentSlogan, setCurrentSlogan] = useState(slogans[0]);

  // Effect to cycle through slogans every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlogan((prevSlogan) => {
        const currentIndex = slogans.indexOf(prevSlogan);
        const nextIndex = (currentIndex + 1) % slogans.length; // Loop back to the start
        return slogans[nextIndex];
      });
    }, 3000); // Change slogan every 4 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [slogans]); // slogans is now stable and won't cause unnecessary re-renders

  const navigateToContact = () => {
    window.location.href = '#contact';
  };

  return (
    <div className="hero">
      <video autoPlay muted loop id="myVideo">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <div className="hero-content">
        <h1>Website Development & Consultant</h1>
        <p1>We create stunning, responsive, and user-friendly websites that drive business growth.</p1>
        <p key={currentSlogan} className="slogan">
          {currentSlogan}
        </p>
        <button className="cta-button" onClick={navigateToContact}>Get Started</button>
      </div>
    </div>
  );
};

export default Hero;