import React from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import './Services.css';

const Services = () => {
  // const history = useHistory();
  const navigate = useNavigate(); // Use useNavigate for navigation

  const handleNavigation = (path) => {
    // history.push(path);
    navigate(path); // Navigate to the specified path
  };

  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="service-list">
        <div className="service-item1" onClick={() => handleNavigation('/web-development')}>
          <img src="assets/web_logo.png" alt="Web Development" />
          <h3>Web Development</h3>
          <p>We build responsive and scalable web applications.</p>
        </div>
        <div className="service-item2" onClick={() => handleNavigation('/rms')}>
          <img src="assets\POS_logo.png" alt="Restotant manegment system" />
          <h3>Restotant manegment system</h3>
          <p>We create cross-platform mobile apps.</p>
        </div>
        <div className="service-item3" onClick={() => handleNavigation('/hms')}>
          <img src="assets\logo_HMS.jpg" alt="Hospital manegment system" />
          <h3>UHospital manegment system</h3>
          <p>We design user-friendly interfaces.</p>
        </div>
      </div>
    </section>
  );
};



//   return (
//     <section id="services" className="services">
//       <h2>Our Services</h2>
//       <div className="service-list">
//         <div className="service-item1" onClick={() => handleNavigation('/web-development')}>
//           <img src="assets/web_logo.png" alt="Web Development" />
//           <h3>Web Development</h3>
//           <p>We build responsive and scalable web applications.</p>
//         </div>
//         <div className="service-item2" onClick={() => handleNavigation('/mobile-app-development')}>
//           <img src="path/to/mobile-app-development-image.jpg" alt="Mobile App Development" />
//           <h3>Mobile App Development</h3>
//           <p>We create cross-platform mobile apps.</p>
//         </div>
//         <div className="service-item3" onClick={() => handleNavigation('/ui-ux-design')}>
//           <img src="path/to/ui-ux-design-image.jpg" alt="UI/UX Design" />
//           <h3>UI/UX Design</h3>
//           <p>We design user-friendly interfaces.</p>
//         </div>
//       </div>
//     </section>
//   );
// };

export default Services;