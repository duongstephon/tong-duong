import React from "react";
import { Link } from "react-router-dom";
import "./Details.scss";
import details from "../../assets/images/details.jpg";

export default function Details() {
  return (
    <>
      <div className="details">
        <div className="details__covers">
          <img
            className="details__covers--photo"
            src={details}
            alt="chelsia and stephon hugging"
          />
        </div>
        <div className="details__container">
          <div>
            <p className="details__title">The Wedding</p>
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
              <a
                href="https://www.google.com/maps/place/Village+Loft/@43.7678383,-79.3853813,17z/data=!3m1!4b1!4m6!3m5!1s0x882b2d028bc2ef35:0x45b75cbbe45febef!8m2!3d43.7678383!4d-79.3853813!16s%2Fg%2F11f7bqwqh9?entry=ttu&g_ep=EgoyMDI2MDQyMC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="details__description">Village Loft</p>
              </a>
            </div>

            <div className="details__row">
              <p className="details__subtitle">ADDRESS</p>
              <a
                href="https://www.google.com/maps/place/Village+Loft/@43.7678383,-79.3853813,17z/data=!3m1!4b1!4m6!3m5!1s0x882b2d028bc2ef35:0x45b75cbbe45febef!8m2!3d43.7678383!4d-79.3853813!16s%2Fg%2F11f7bqwqh9?entry=ttu&g_ep=EgoyMDI2MDQyMC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="details__description">
                  2901 Bayview Ave, North York, ON M2K 1E6
                </p>
              </a>
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
          <Link to="/rsvp" className="details__button">
            RSVP
          </Link>
          <div className="details__cover">
            <img
              className="details__cover--photo"
              src={details}
              alt="chelsia and stephon hugging"
            />
          </div>
        </div>
      </div>
      <div className="info">
        <p className="info__title">Wedding Details</p>
        <div className="info__container">
          <p className="info__subtitle">0.1 ARRIVAL</p>
          <div className="info__container--indent">
            <p className="info__time">5:00 PM</p>
            <p className="info__description">
              The doors are open! Get comfortable, chat with friends and family,
              and soak in the excitement before the big moment. Find your seat.
              The ceremony will begin shortly.
            </p>
          </div>
        </div>
        <div className="info__container">
          <p className="info__subtitle">0.2 CEREMONY</p>
          <div className="info__container--indent">
            <p className="info__time">5:15 PM</p>
            <p className="info__description">
              The ceremony will begin shortly, and once it starts, doors will be
              closed to avoid any interruptions. We kindly ask that you arrive
              on time and silence and put away all phones so everyone can be
              fully present for this special moment.
            </p>
          </div>
        </div>
        <div className="info__container">
          <p className="info__subtitle">0.3 COCKTAIL HOUR</p>
          <div className="info__container--indent">
            <p className="info__time">6:00 PM</p>
            <p className="info__description">
              Cocktail hour has started, with drinks and light bites available.
              Please help yourself and take a moment to relax and enjoy the
              start of the evening.
            </p>
          </div>
        </div>
        <div className="info__container">
          <p className="info__subtitle">0.4 RECEPTION</p>
          <div className="info__container--indent">
            <p className="info__time">7:15 PM</p>
            <p className="info__description">
              Join us for dinner, speeches, and a relaxed evening with the
              people we love.
            </p>
          </div>
        </div>
        <div className="info__container">
          <p className="info__subtitle">0.5 DANCE FLOOR OPENS</p>
          <div className="info__container--indent">
            <p className="info__time">9:00 PM</p>
            <p className="info__description">
              The dance floor is open, the open bar is flowing, the photobooth
              is ready, and there are plenty of late-night bites to keep you
              going. Enjoy the rest of the evening.
            </p>
          </div>
        </div>
        <div className="info__container">
          <p className="info__subtitle">0.6 FAREWELL</p>
          <div className="info__container--indent">
            <p className="info__time">1:00 AM</p>
            <p className="info__description">
              As the evening draws to a close, we want to take a moment to thank
              each and every one of you for sharing our special day with us.
              Your love and support mean the world to us. We’ll be saying our
              goodbyes and we couldn’t be more grateful to have you all with us
              today.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
