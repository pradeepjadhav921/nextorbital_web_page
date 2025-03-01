import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Hero.css';

const Hero = () => {
  const settings = {
    dots: false, // Hide dots
    infinite: true, // Enable infinite looping
    speed: 1000, // Transition speed in milliseconds
    slidesToShow: 1, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay interval in milliseconds
    fade: true, // Enable fade transition
    cssEase: 'linear', // Transition timing function
    arrows: false, // Hide navigation arrows
  };

  const slides = [
    {
      image: '/HMS_crop.png',
      title: 'Welcome to Adroit Infotech',
      description: 'Your trusted partner for innovative IT solutions.',
    },
    {
      image: '/POS_PNG.png',
      title: 'We Build Scalable Solutions',
      description: 'Delivering high-quality software for your business.',
    },
    {
      image: '/WEB_PNG.png',
      title: 'Transforming Ideas into Reality',
      description: 'Innovative solutions for a digital world.',
    },
  ];

  return (
    <section className="hero">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div
              className="slide"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* <div className="slide-content"> */}
                {/* <h1>{slide.title}</h1> */}
                {/* <p>{slide.description}</p> */}
                {/* <button className="cta-button">Get Started</button> */}
              {/* </div> */}
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Hero;