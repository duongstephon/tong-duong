import React from "react";
import { Link } from "react-router-dom";
import "./Faq.scss";

export default function Faq() {
  return (
    <div className="faq">
      <div className="faq__container">
        <p className="faq__title">Frequently Asked Questions</p>
        <div className="faq__questions">
          <p className="faq__questions--title">When should I RSVP by?</p>
          <p className="faq__questions--answer">
            Please RSVP by July 1, 2026. If you’re unable to attend, please let
            us know as soon as possible by RSVPing “no”. If we do not receive
            your RSVP by July 1, 2026, we will assume you are unable to attend.
          </p>
        </div>
        <div className="faq__questions">
          <p className="faq__questions--title">What time should I arrive?</p>
          <p className="faq__questions--answer">
            Please arrive by 5:00 PM. Please note that the doors will close once
            the ceremony begins to ensure a smooth and respectful experience. If
            you arrive late, the doors will remain closed until the ceremony
            concludes. We appreciate your understanding and encourage timely
            arrival so you don’t miss any part of this special moment.
          </p>
        </div>
        <div className="faq__questions">
          <p className="faq__questions--title">
            Can I take photos or videos during the ceremony?
          </p>
          <p className="faq__questions--answer">
            We’re having an unplugged ceremony, so we kindly ask that you keep
            phones and cameras tucked away. We’ve hired a professional
            photographer and would love to keep the moment free of screens.
            Thank you so much for understanding!
          </p>
        </div>
        <div className="faq__questions">
          <p className="faq__questions--title">Is there a gifts registry?</p>
          <p className="faq__questions--answer">
            Your presence at our wedding is the greatest gift of all. If you’d
            like to give a gift, we’d be grateful for a cash contribution or
            e-transfer. If you prefer to gift via e-transfer, you can transfer
            to <span>chelsiatong@gmail.com</span>. Please include your names in
            the transfer message.
          </p>
        </div>
        <div className="faq__questions">
          <p className="faq__questions--title">
            Can I bring a plus-one to the wedding?
          </p>
          <p className="faq__questions--answer">
            As much as we wish we could invite everyone we love, we've had to
            make some thoughtful decisions to keep things intimate. We truly
            appreciate your understanding and support.
          </p>
        </div>
        <div className="faq__questions">
          <p className="faq__questions--title">Where can I park?</p>
          <p className="faq__questions--answer">
            There is complimentary on-site parking available for all guests.
          </p>
        </div>
        <div className="faq__questions">
          <p className="faq__questions--title">Is there an open bar?</p>
          <p className="faq__questions--answer">
            An open bar will be available for all guests. In accordance with
            venue policies, outside alcohol is not permitted.
          </p>
        </div>
        <Link to="/rsvp" className="faq__button">
          RSVP
        </Link>
        <div>
          <p className="faq__email">
            More questions? Email us at{" "}
            <a href="mailto:stephonandchelsia@gmail.com">
              <span>stephonandchelsia@gmail.com</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
