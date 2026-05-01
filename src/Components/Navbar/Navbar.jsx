import "./Navbar.scss";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [rsvpSubmitted, setRsvpSubmitted] = useState(
    localStorage.getItem("rsvpSubmitted") === "true",
  );
  // const guestNames = localStorage.getItem("guestNames") || "Guest";

  useEffect(() => {
    const checkRsvp = () => {
      setRsvpSubmitted(localStorage.getItem("rsvpSubmitted") === "true");
    };

    window.addEventListener("storage", checkRsvp); // 👈 listens for localStorage changes
    return () => window.removeEventListener("storage", checkRsvp);
  }, []);

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
        {/* <div className="navbar__welcome">
          <p>Welcome, {guestNames}</p>
        </div> */}
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
        {rsvpSubmitted ? (
          <span className="navbar__link--disabled">RSVP</span>
        ) : (
          <Link to="/rsvp" onClick={() => setMenuOpen(false)}>
            RSVP
          </Link>
        )}
      </div>
    </nav>
  );
}
