import React from 'react';
import './App.css';
import logo from './images/logo2.png';
import Home from './pages/Home';
import GetAadhar from './pages/GetAadhar';
import UpdateAadhar from './pages/UpdateAadhar';
import AadharServices from './pages/AadharServices';
import About from './pages/About';
import ContactSupport from './pages/ContactSupport';
import Navbar from './Navbar';
import MouseTracker from './Tracking/MouseTracker';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <p className="sentence">ARE YOU REALLY A HUMAN ?</p>
          <img src={logo} alt="Logo" className="logo" />
        </header>
        <Navbar />
        <MouseTracker />
        <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/get-aadhar" element={<GetAadhar />} />
          <Route path="/update-aadhar" element={<UpdateAadhar />} />
          <Route path="/aadhar-services" element={<AadharServices />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-support" element={<ContactSupport />} />
        </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

