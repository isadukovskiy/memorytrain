import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <div className="logo-icon">
            <img src={`${process.env.PUBLIC_URL}/game-icon.jpeg`} alt="Memory Tiles Logo" width="32" height="32" style={{ borderRadius: '4px' }} />
          </div>
          <span className="logo-text">Memory Tiles</span>
        </Link>
        
        <div className="nav-links">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
          >
            Contact
          </Link>
          <Link 
            to="/privacy-policy" 
            className={`nav-link ${location.pathname === '/privacy-policy' ? 'active' : ''}`}
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
