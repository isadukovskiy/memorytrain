import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound: React.FC = () => {
  return (
    <div className="not-found">
      <div className="not-found-content">
        <div className="error-code">404</div>
        <h1>Page Not Found</h1>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <div className="actions">
          <Link to="/" className="home-button">
            🏠 Go Home
          </Link>
          <Link to="/contact" className="contact-button">
            📧 Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
