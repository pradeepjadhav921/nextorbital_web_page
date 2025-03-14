import React, { useEffect, useRef } from 'react';
import './technology.css'; // Import the CSS file

const Technologies = () => {
  const boxRefs = useRef([]);
  const HTML5 = process.env.PUBLIC_URL + '/tech/html-5.png';
  const CSS = process.env.PUBLIC_URL + '/tech/css3.png';
  const JavaScript = process.env.PUBLIC_URL + '/tech/javascript.png';
  const Grid = process.env.PUBLIC_URL + '/tech/grid.png';
  const framework = process.env.PUBLIC_URL + '/tech/react.png';
  const Backend = process.env.PUBLIC_URL + '/tech/python.png';
  const Databases = process.env.PUBLIC_URL + '/tech/mysql.png';
  const Server = process.env.PUBLIC_URL + '/tech/server.png';
  const API = process.env.PUBLIC_URL + '/tech/api.png';
  const Data = process.env.PUBLIC_URL + '/tech/security-checked.png';

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
          <img src={HTML5} alt="HTML5 Icon" />
        <h3>HTML5</h3>
        </div>
      </div>

      {/* CSS */}
      <div className="box" ref={(el) => (boxRefs.current[1] = el)}>
      <p>We style with modern CSS, including Flexbox and Grid.</p>
        <div className="back">
          <img src={CSS} alt="CSS Icon" />
        <h3>CSS</h3>
        </div>
      </div>

      {/* JavaScript */}
      <div className="box" ref={(el) => (boxRefs.current[2] = el)}>
      <p>We build interactive and dynamic web applications.</p>
        <div className="back">
        <img src={JavaScript} alt="JavaScript Icon" />
        <h3>JavaScript</h3>
         
        </div>
      </div>

      {/* Frameworks */}
      <div className="box" ref={(el) => (boxRefs.current[3] = el)}>
        <p>We leverage powerful frameworks to streamline development.</p>
        <div className="back">
          <img src={framework} alt="Frameworks Icon" />
          <h3>Frameworks</h3>
        </div>
      </div>

      {/* Responsive Grid System */}
        <div className="box" ref={(el) => (boxRefs.current[4] = el)}>
        <p>We ensure your layouts look great on any device.</p>
          <div className="back">
          <img src={Grid} alt="Responsive Grid Icon" />
          <h3>Responsive Grid System</h3>
          </div>
        </div>

        {/* Backend Languages */}
        <div className="box" ref={(el) => (boxRefs.current[5] = el)}>
          <p>We ensure robust and scalable backend solutions.</p>
          <div className="back">
            <img src={Backend} alt="Backend Languages Icon" />
            <h3>Backend Languages</h3>
          </div>
        </div>

        {/* Databases */}
          <div className="box" ref={(el) => (boxRefs.current[6] = el)}>
          <p>We manage and optimize your data with cutting-edge database solutions.</p>
            <div className="back">
            <img src={Databases} alt="Databases Icon" />
            <h3>Databases</h3>
            </div>
          </div>
          <div className="box" ref={(el) => (boxRefs.current[7] = el)}>
                <p>We ensure your server environment is reliable and efficient.</p>
                <div className="back">
                  <img src={Server} alt="Server Environment Icon" />
                  <h3>Server Environment</h3>
                </div>
          </div>

                <div className="box" ref={(el) => (boxRefs.current[8] = el)}>
                <p>We create robust and scalable APIs for seamless integration.</p>
                  <div className="back">
                  <img src={API} alt="API Icon" />
                  <h3>API</h3>
                  </div>
                </div>


              <div className="box" ref={(el) => (boxRefs.current[9] = el)}>
              <p>We build interactive and dynamic web applications.</p>
              <div className="back">
              <img src={Data} alt="Data Security Icon" />
              <h3>Data Security</h3>
              </div>
              </div>

              {/* Add more boxes as needed */}
    </div>
  );
};

export default Technologies;