import React from 'react';
import styled from 'styled-components';
import './why_us.css';



const WhyUs = () => {
    return (
        <div className="why-us-container">
            <h1 className="title">Why Us?</h1>
            <div className="features">
                <div className="feature">
                    <h2 className="feature-title">Reliable</h2>
                </div>
                <div className="feature">
                    <h2 className="feature-title">Quality</h2>
                </div>
                <div className="feature">
                    <h2 className="feature-title">Process</h2>
                </div>
                <div className="feature">
                    <h2 className="feature-title">Expertise</h2>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;