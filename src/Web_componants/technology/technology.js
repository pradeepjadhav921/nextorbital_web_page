import React, { useEffect, useRef } from 'react';
import './technology.css'; // Import the CSS file

const Technologies = () => {
  const boxRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      boxRefs.current.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;
        const boxBottom = box.getBoundingClientRect().bottom;
        const isVisible = boxTop < window.innerHeight && boxBottom >= 0;

        if (isVisible) {
          box.classList.add('flip');
        } else {
          box.classList.remove('flip');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="container">
      <h1>Technologies We Excel In</h1>
      {/* HTML5 */}
      <div className="box" ref={(el) => (boxRefs.current[0] = el)}>
        <p>We create semantic and accessible HTML5 structures.</p>
        <div className="back">
          <img src="https://img.icons8.com/color/48/000000/html-5.png" alt="HTML5 Icon" />
        <h3>HTML5</h3>
        </div>
      </div>

      {/* CSS */}
      <div className="box" ref={(el) => (boxRefs.current[1] = el)}>
        <img src="https://img.icons8.com/color/48/000000/css3.png" alt="CSS Icon" />
        <h3>CSS</h3>
        <div className="back">
          <p>We style with modern CSS, including Flexbox and Grid.</p>
        </div>
      </div>

      {/* JavaScript */}
      <div className="box" ref={(el) => (boxRefs.current[2] = el)}>
        <img src="https://img.icons8.com/color/48/000000/javascript.png" alt="JavaScript Icon" />
        <h3>JavaScript</h3>
        <div className="back">
          <p>We build interactive and dynamic web applications.</p>
        </div>
      </div>

      {/* Add more boxes as needed */}
    </div>
  );
};

export default Technologies;