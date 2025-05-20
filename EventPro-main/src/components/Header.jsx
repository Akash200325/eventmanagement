import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">EventPro</Link>
      </div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <div className="cta">
        <button className="cta-button">Book Your Event</button>
      </div>
    </header>
  );
};

export default Header;