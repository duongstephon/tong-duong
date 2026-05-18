import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import heroWebp from "../../assets/images/hero.webp";
import heroJpg from "../../assets/images/hero.jpg";

export default function Home() {
  const guestNames = localStorage.getItem("guestNames") || "Guest";
  const isLoggedIn = localStorage.getItem("guestEmail");

  return (
    <div className="home">
      <picture className="home__picture">
        <source srcSet={heroWebp} type="image/webp" />
        <img src={heroJpg} alt="home background" className="home__bg" />
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
      <div>
        <div className="home__sc">
          <p className="home__names">Stephon & Chelsia</p>
          <p className="home__announcement">ARE GETTING MARRIED!</p>
        </div>
        {isLoggedIn && (
          <div className="home__location-time">
            <p>
              <a href="http://google.com/maps/place/Village+Loft/@43.7678421,-79.3879562,17z/data=!3m1!4b1!4m6!3m5!1s0x882b2d028bc2ef35:0x45b75cbbe45febef!8m2!3d43.7678383!4d-79.3853813!16s%2Fg%2F11f7bqwqh9?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D">
                2901 BAYVIEW AVE, NORTH YORK
              </a>
              <br />
              SUNDAY, SEPTEMBER 6, 2026
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
