import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Hero.css';

const Hero = () => {
  const videoSrc1 = process.env.PUBLIC_URL + '/video/Xebia-Scaled-Gen-Ai-bg-video.mp4';

  return (
    <div className="hero">
      <video src={videoSrc1} autoPlay loop muted />
      <div className="hero-text">
        <h1>
          <span className="green-bold">Hospital Management</span>
          <span className="white-plain"> System</span>
        </h1>
        <h1>
          <span className="green-bold">Restaurant Management</span>
          <span className="white-plain"> System</span>
        </h1>
        <h1>
          <span className="green-bold">Web Development</span>
          <span className="white-plain"> Services</span>
        </h1>
      </div>
      <dev className="plain-text">
        <p>We design and build industry-leading web-based products that delight your customers!!!</p>
      </dev>
    </div>
  );
};

export default Hero;