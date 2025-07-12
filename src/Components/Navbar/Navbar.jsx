import './Navbar.scss';
import React, { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* <div className="navbar__logo">Our Wedding</div> */}

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
        <p><a href="#home">Home</a></p>
        <p><a href="#thankyou">Thank You</a></p>
        <p><a href="#details">Wedding Details</a></p>
        <p><a href="#story">Our Story</a></p>
        <p><a href="#faq">FAQ</a></p>
        <p><a href="#rsvp">RSVP</a></p>
      </div>

    </nav>
  );
}