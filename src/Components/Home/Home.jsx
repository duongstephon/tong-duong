import React from "react";
import "./Home.scss";

export default function Home() {
  return (
    <div className="home">
      <div className="home__welcome">
        <p>Welcome, #name</p>
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
