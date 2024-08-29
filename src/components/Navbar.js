import React from 'react';
import './styles/Navbar.css';

const Navbar = ({ toggleDarkMode }) => (
  <nav className="navbar">
    <div className="navbar-logo">
      <img src="/src/assets/logo.png" alt="Logo" className="logo-image" />
    </div>
    <div className="navbar-profile">
      <img src="/src/assets/user.jpg" alt="User" className="profile-image" />
      <button onClick={toggleDarkMode} className="dark-mode-btn">Toggle Dark Mode</button>
    </div>
  </nav>
);

export default Navbar;
