import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="nav-bar">
      <div className="nav-content">
      <ul className="nav-items">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/get-aadhar"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Get Aadhar
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/update-aadhar"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Update Aadhar
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aadhar-services"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Aadhar Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact-support"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Contact & Support
            </NavLink>
          </li>
        </ul>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button>Go</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
