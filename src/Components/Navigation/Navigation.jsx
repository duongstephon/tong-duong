import React from "react";
import "../../Components/Navigation/Navigation.scss";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="navigation">
      <div className="navigation__container">
        <div className="navigation__links navigation__links--left">
          <Link to="/thankyou">Thank You</Link>
          <Link to="/weddingdetails">Wedding Details</Link>
        </div>

        <div className="navigation__logo">
          <Link to="/home">S+C</Link>
        </div>

        <div className="navigation__links navigation__links--right">
          <Link to="/ourstory">Our Story</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/rsvp">RSVP</Link>
        </div>
      </div>
    </nav>
  );
}
