import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">

      <a href="/" className="navbar-logo">SR</a>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <div className="social-icons">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <img src="/github-mark-white.png" alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/yourusername/" target="_blank" rel="noopener noreferrer">
          <img src="/path/to/linkedin.png" alt="LinkedIn" />
        </a>
        <a href="https://www.kaggle.com/yourusername" target="_blank" rel="noopener noreferrer">
          <img src="/path/to/kaggle.png" alt="Kaggle" />
        </a>
      </div>
      
    </nav>


  );
}

export default Navbar;
