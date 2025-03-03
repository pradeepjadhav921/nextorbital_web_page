import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs } from '@fortawesome/free-brands-svg-icons';
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
          setTimeout(() => {
            box.classList.add('flip');
          }, 1000);
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
      <p>We style with modern CSS, including Flexbox and Grid.</p>
        <div className="back">
          <img src="https://img.icons8.com/color/48/000000/css3.png" alt="CSS Icon" />
        <h3>CSS</h3>
        </div>
      </div>

      {/* JavaScript */}
      <div className="box" ref={(el) => (boxRefs.current[2] = el)}>
      <p>We build interactive and dynamic web applications.</p>
        <div className="back">
        <img src="https://img.icons8.com/color/48/000000/javascript.png" alt="JavaScript Icon" />
        <h3>JavaScript</h3>
         
        </div>
      </div>

      {/* Frameworks */}
      <div className="box" ref={(el) => (boxRefs.current[3] = el)}>
        <p>We leverage powerful frameworks to streamline development.</p>
        <div className="back">
          <img src="https://img.icons8.com/color/48/000000/framework.png" alt="Frameworks Icon" />
          <h3>Frameworks</h3>
        </div>
      </div>

      {/* Responsive Grid System */}
        <div className="box" ref={(el) => (boxRefs.current[4] = el)}>
        <p>We ensure your layouts look great on any device.</p>
          <div className="back">
          <img src="https://img.icons8.com/color/48/000000/grid.png" alt="Responsive Grid Icon" />
          <h3>Responsive Grid System</h3>
          </div>
        </div>

        {/* Backend Languages */}
        <div className="box" ref={(el) => (boxRefs.current[5] = el)}>
          <p>We ensure robust and scalable backend solutions.</p>
          <div className="back">
            <img src="https://img.icons8.com/color/48/000000/server.png" alt="Backend Languages Icon" />
            <h3>Backend Languages</h3>
          </div>
        </div>

        {/* Databases */}
          <div className="box" ref={(el) => (boxRefs.current[6] = el)}>
          <p>We manage and optimize your data with cutting-edge database solutions.</p>
            <div className="back">
            <img src="https://img.icons8.com/color/48/000000/database.png" alt="Databases Icon" />
            <h3>Databases</h3>
            </div>
          </div>
          <div className="box" ref={(el) => (boxRefs.current[7] = el)}>
                <p>We ensure your server environment is reliable and efficient.</p>
                <div className="back">
                  <img src="https://img.icons8.com/color/48/000000/server.png" alt="Server Environment Icon" />
                  <h3>Server Environment</h3>
                </div>
          </div>

                <div className="box" ref={(el) => (boxRefs.current[8] = el)}>
                <p>We create robust and scalable APIs for seamless integration.</p>
                  <div className="back">
                  <img src="https://img.icons8.com/color/48/000000/api.png" alt="API Icon" />
                  <h3>API</h3>
                  </div>
                </div>


              <div className="box" ref={(el) => (boxRefs.current[9] = el)}>
              <p>We build interactive and dynamic web applications.</p>
              <div className="back">
              <img src="https://img.icons8.com/color/48/000000/security-checked.png" alt="Data Security Icon" />
              <h3>Data Security</h3>
              </div>
              </div>

              {/* Add more boxes as needed */}
    </div>
  );
};

export default Technologies;