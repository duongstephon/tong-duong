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
        <div className="email__image--overlay">
          <p className="email__welcome">Welcome, [FirstName]</p>
          <p className="email__message">
            We would be thrilled to celebrate this special day with you.
          </p>
          <button className="email__button">SAVE THE DATE</button>
        </div>
      </div>
      <p className="email__formal">Formal invitation to follow</p>
      <div className="email__footer">
        <hr className="email__line" />
        <p className="email__emailus">
          If you have questions, kindly email us at stephonandchelsia@gmail.com
        </p>
      </div>
    </div>
  );
}
