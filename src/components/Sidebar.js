import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Sidebar.css';

const Sidebar = () => (
  <div className="sidebar">
    <Link to="/">Product Details</Link>
    <Link to="/compare">Compare Products</Link>
  </div>
);

export default Sidebar;
