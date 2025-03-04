import React from 'react';
import './hero.css';

const Hero = () => {
    const ima = process.env.PUBLIC_URL + 'assets/OIP.jpg';
    return (
        <div className="img" style={{ backgroundImage: `url(${ima})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '60vh' }}>
            <h1>Leading the Digital Evolution of Healthcare</h1>
            <p>Comprehensive Software for Hospitals & Medical.</p>
            <p>Centers to Manage Patients, Appointments, Doctors, and More.</p>
            <p>Get Started Today!</p>
        </div>


    );
};


export default Hero;