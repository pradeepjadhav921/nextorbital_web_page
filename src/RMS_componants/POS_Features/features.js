// src/components/Hero.js
import React from 'react';
import './features.css'; // We'll create this CSS file next


const features = () => {
    const heroImage = process.env.PUBLIC_URL + 'assets/Inventory-Management_lg.webp'; // Replace with your actual public URL
    const heroImage1 = process.env.PUBLIC_URL + 'assets/Online-Order-System_lg.webp'; // Replace with your actual public URL
    const heroImage2 = process.env.PUBLIC_URL + 'assets/Real-Time-Reporting_lg.webp'; // Replace with your actual public URL

    return (
        <div className="all_container">
            <div className="title">
                <h1>SMART POS FEATURES</h1>
                <p>A restaurant POS made for all your needs</p>
                <p2>A quick and easy-to-use restaurant billing software that makes managing high order volumes butter smooth</p2>
            </div>

          {/* First Row */}
          <div className="row">
            <div className="container">
              <div className="photo">
                <img src={heroImage2} alt="Restaurant POS Software" />
              </div>
              <div className="text">
                <h1>Get real-time restaurant Reports</h1>
                <p>Automate your restaurant reports and go paper free! Let Petpooja POS automatically track your business activities and provide you error free reports on your restaurant’s day-end sales, online orders, staff actions, inventory consumption, and various 80+ essential business reports</p>
              </div>
            </div>
          </div>
    
          {/* Second Row */}
          <div className="row">
            <div className="container">
              <div className="photo">
                <img src={heroImage1} alt="Restaurant POS Software" />
              </div>
              <div className="text">
                <h1>Restaurant POS Software Made Simple!</h1>
                <p>Manages all your restaurant operations efficiently so that you can focus on growing your brand, like a real boss!</p>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="row">
            <div className="container">
              <div className="photo">
                <img src={heroImage} alt="Restaurant POS Software" />
              </div>
              <div className="text">
                <h1>A single Online Ordering System to manage all your orders</h1>
                <p>Accept online orders, manage online menu, mark food ready, collect payment and check revenue without shuffling between multiple screens</p>
              </div>
            </div>
          </div>

        </div>

      );
    };
    

export default features;