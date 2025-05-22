import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Landing from './pages/Landing';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs'

const App = () => {
  return (
    <Router> {/* Wrap the entire component inside Router */}
      <Routes>
        <Route
          path="/"
          element={<Landing />}
        />
        <Route
          path="/contact"
          element={<ContactUs />}
        />
        <Route
          path="/aboutus"
          element={<AboutUs />}
        />
        
      </Routes>
    </Router>
  );
};

export default App;
