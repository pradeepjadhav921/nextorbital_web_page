import React, { useEffect, useState } from "react";
import "./client.css";

const AnimatedNumber = ({ target, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 50); // Adjust speed
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(interval);
        setCount(target);
      } else {
        setCount(Math.floor(start));
      }
    }, 50); // Update every 50ms

    return () => clearInterval(interval);
  }, [target, duration]);

  return <>{count}</>;
};

const Client = () => {
  return (
    <section id="stats-section">
      <div className="container">
        <div className="stats-wrapper">
          <ul>
            <li>
              <div className="wow fadeInUp">
                <h1>
                  #1 Top Web Development Company
                </h1>
                <h5>AI Configured Applications</h5>
              </div>
            </li>
            <li>
              <div className="wow fadeInDown">
                <h4>
                  <AnimatedNumber target={10} duration={4000} />+
                </h4>
                <h5>Customize Applications Deliver</h5>
              </div>
            </li>
            <li>
              <div className="wow fadeInUp">
                <h4>
                  <AnimatedNumber target={100} duration={4000} />+
                </h4>
                <h5>Overall Happy Customers</h5>
              </div>
            </li>
            <li>
              <div className="wow fadeInDown">
                <h4>
                  <AnimatedNumber target={150} duration={4000} />+
                </h4>
                <h5>Worldwide Engagements</h5>
              </div>
            </li>
            <li>
              <div className="wow fadeInUp">
                <button className="btn">Rating</button>
                <h5>Give Your feedback Here</h5>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Client;
