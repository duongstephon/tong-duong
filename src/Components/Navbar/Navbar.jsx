import "./Navbar.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__logo">Our Wedding</div>

      <div
        className={`navbar__hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`navbar__menu ${menuOpen ? "show" : ""}`}>
        <Link to="/home" onClick={() => setMenuOpen(false)}>
          Home
        </Link>

        <Link to="/thankyou" onClick={() => setMenuOpen(false)}>
          Thank You
        </Link>

        <Link to="/ourstory" onClick={() => setMenuOpen(false)}>
          Our Story
        </Link>

        <Link to="/weddingdetails" onClick={() => setMenuOpen(false)}>
          Wedding Details
        </Link>

        <Link to="/faq" onClick={() => setMenuOpen(false)}>
          FAQ
        </Link>

        <Link to="/rsvp" onClick={() => setMenuOpen(false)}>
          RSVP
        </Link>
      </div>
    </nav>
  );
}
