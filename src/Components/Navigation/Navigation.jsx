import React, { useState, useEffect } from "react";
import "../../Components/Navigation/Navigation.scss";
import { Link } from "react-router-dom";

export default function Navigation() {
  const [rsvpSubmitted, setRsvpSubmitted] = useState(
    localStorage.getItem("rsvpSubmitted") === "true",
  );

  useEffect(() => {
    const checkRsvp = () => {
      setRsvpSubmitted(localStorage.getItem("rsvpSubmitted") === "true");
    };

    window.addEventListener("storage", checkRsvp);
    return () => window.removeEventListener("storage", checkRsvp);
  }, []);

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
