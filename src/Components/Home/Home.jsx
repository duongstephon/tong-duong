import React from "react";
import "./Home.scss";

export default function Home() {
  const guestNames = localStorage.getItem("guestNames") || "Guest";
  return (
    <div className="home">
      <div className="home__welcome">
        <p>Welcome, {guestNames}</p>
      </div>
      <div className="home__sc">
        <p className="home__names">Stephon & Chelsia</p>
        <p className="home__announcement">ARE GETTING MARRIED!</p>
      </div>
      <div className="home__location-time">
        <p>
          NORTH YORK, ONTARIO <br />
          SUNDAY, SEPTEMBER 6, 2026
        </p>
      </div>
    </div>
  );
}
