import React from "react";
import { Link } from "react-router-dom";
import "./Details.scss";

export default function Details() {
  return (
    <div className="details">
      <div className="details__container">
        <div>
          <p className="details__title">The Wedding Details</p>
          <p className="details__caption">
            We’d be honoured to have you with us as we say “I do.” Here’s
            everything you need to know about the wedding.
          </p>
        </div>
        <div className="details__section">
          <div className="details__row">
            <p className="details__subtitle">WHEN</p>
            <p className="details__description">
              Sunday, September 6, 2026 at 5:00 PM
            </p>
          </div>

          <div className="details__row">
            <p className="details__subtitle">WHERE</p>
            <p className="details__description">Village Loft</p>
          </div>

          <div className="details__row">
            <p className="details__subtitle">ADDRESS</p>
            <p className="details__description">
              2901 Bayview Ave, North York, ON M2K 1E6
            </p>
          </div>

          <div className="details__row">
            <p className="details__subtitle">PARKING</p>
            <p className="details__description">Free, On-site Parking</p>
          </div>

          <div className="details__row">
            <p className="details__subtitle">DRESS CODE</p>
            <div className="details__description">
              <p>Formal or Black-Tie Optional:</p>
              <p className="details__description--small">
                Men should wear a suit with a white dress shirt, a tie
                (optional), and formal shoes. A tuxedo is not required. Women
                can opt for a floor-length gown, cocktail dress, or formal
                jumpsuit, paired with dressy heels or flats. We kindly ask our
                female guests to steer clear of white and yellow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
