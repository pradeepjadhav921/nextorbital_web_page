import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/Home'; // Home page
import WebDevelopment from './WebDevelopment/WebDevelopment'; // Web Development page
import RMS from './RMS/RMS'; // RMS page (adjacent to components)
import HMS from './HMS/HMS'; // RMS page (adjacent to components)

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page */}
        <Route path="/web-development" element={<WebDevelopment />} /> {/* Web Development page */}
        <Route path="/rms" element={<RMS />} /> {/* RMS page */}
        <Route path="/hms" element={<HMS />} /> {/* HMS page */}
      </Routes>
    </Router>
  );
};

export default AppRouter;