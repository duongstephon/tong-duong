import React from 'react';
import '../../Components/Navigation/Navigation.scss'

export default function Navigation() {
  return (
    <nav className="navigation">
      <div className="navigation__container">
        {/* left navigation links */}
        <div className="navigation__links navigation__links--left">
          <p><a href="#thankyou">Thank You</a></p>
          <p><a href="#weddingdetails">Wedding Details</a></p>
        </div>
        {/* logo */}
        <div className="navigation__logo">
            <a href="#home">S+C</a>
        </div>
        {/* right navigation links */}
         <div className="navigation__links navigation__links--right">
          <p><a href="#ourstory">Our Story</a></p>
          <p><a href="#faq">FAQ</a></p>
          <p><a href="#rsvp">RSVP</a></p>
        </div>
      </div>
    </nav>
  );
}