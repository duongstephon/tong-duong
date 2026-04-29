import React from "react";
import "../../Components/Navigation/Navigation.scss";
import { Link } from "react-router-dom";

export default function Navigation() {
  const rsvpSubmitted = localStorage.getItem("rsvpSubmitted") === "true";

  return (
    <nav className="navigation">
      <div className="navigation__container">
        {/* left navigation links */}
        <div className="navigation__links navigation__links--left">
          <Link to="/thankyou">Thank You</Link>
          <Link to="/weddingdetails">Wedding Details</Link>
        </div>
        {/* logo */}
        <div className="navigation__logo">
          <Link to="/home">S+C</Link>
        </div>
        {/* right navigation links */}
        <div className="navigation__links navigation__links--right">
          <Link to="/ourstory">Our Story</Link>
          <Link to="/faq">FAQ</Link>
          {rsvpSubmitted ? (
            <span className="navigation__link--disabled">RSVP</span>
          ) : (
            <Link to="/rsvp">RSVP</Link>
          )}
        </div>
      </div>
    </nav>
  );
}
