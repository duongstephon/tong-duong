import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import heroWebp from "../../../src/assets/images/hero.webp";
import heroJpg from "../../../src/assets/images/hero.jpg";

export default function Home() {
  const guestNames = localStorage.getItem("guestNames") || "Guest";
  const isLoggedIn = localStorage.getItem("guestEmail");

  return (
    <div className="home">
      <picture className="home__picture">
        <source srcSet={heroWebp} type="image/webp" />
        <img src={heroJpg} alt="hero background" className="home__bg" />
      </picture>
      <div className="home__welcome">
        {isLoggedIn ? (
          <p>Welcome, {guestNames}</p>
        ) : (
          <p>
            Welcome.
            <br /> Please <Link to="/">Sign in</Link> to view your invite!
          </p>
        )}
      </div>
      <div className="home__sc">
        <p className="home__names">Stephon & Chelsia</p>
        <p className="home__announcement">ARE GETTING MARRIED!</p>
      </div>
      {isLoggedIn && (
        <div className="home__location-time">
          <p>
            NORTH YORK, ONTARIO <br />
            SUNDAY, SEPTEMBER 6, 2026
          </p>
        </div>
      )}
    </div>
  );
}
