import './Navbar.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__logo">Our Wedding</div>
      <div 
        className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

    <div className={`navbar__menu ${menuOpen ? 'show' : ''}`}>
        <div className="navbar__welcome">
            <p>Welcome, #name</p>
        </div>
        {/* <p><a href="#home">Home</a></p> */}
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/thankyou" onClick={() => setMenuOpen(false)}>Thank You</Link>
        {/* <p><a href="#thankyou">Thank You</a></p> */}
        <Link to="/ourstory" onClick={() => setMenuOpen(false)}>Our Story</Link>
        <p><a href="#weddingdetails">Wedding Details</a></p>
        {/* <p><a href="#ourstory">Our Story</a></p> */}
        <p><a href="#faq">FAQ</a></p>
        <p><a href="#rsvp">RSVP</a></p>
      </div>

    </nav>
  );
}