import React from "react";
import "./EmailInvite.scss";
import InviteImage from "../../assets/images/saveTheDateImg.jpg";

export default function EmailInvite() {
  return (
    <div className="email">
      <div className="email__header">
        <p className="email__logo">S+C</p>
        <hr className="email__line" />
      </div>
      <div className="email__sc">
        <p className="email__names">Stephon & Chelsia</p>
        <p className="email__announcement">ARE GETTING MARRIED!</p>
      </div>
      <div className="email__image">
        <img src={InviteImage} alt="Invite Image" />
      </div>
      <div className="email__details">
        <p className="email__para">
          We’re so thankful for the memories, the laughter, and the love we’ve
          shared with you over the years. It means the world to have you with us
          on this special day. This is a moment we’ll cherish forever.
        </p>
        <p className="email__sig">
          With love, <br /> Stephon and Chelsia
        </p>
      </div>
      <div className="email__button">
        <a href="https://stephonandchelsia.ca">
          <button>SAVE THE DATE</button>
        </a>
      </div>
      <div className="email__footer">
        <hr className="email__line" />
        <p className="email__formal">Formal invitation to follow</p>
        <p className="email__emailus">
          If you have questions, kindly email us at{" "}
          <a href="mailto:stephonandchelsia@gmail.com">
            stephonandchelsia@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}
