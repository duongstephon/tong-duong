import React from "react";
import { Link } from "react-router-dom";
import "./Rsvp.scss";

export default function Rsvp() {
  const [attending, setAttending] = React.useState(null);
  const [meal, setMeal] = React.useState(null);
  const [submitted, setSubmitted] = React.useState(false);

  return (
    <div className="rsvp">
      <div className="rsvp__container">
        <div>
          <p className="rsvp__title">RSVP</p>
          <p className="rsvp__description">
            We're so grateful to have you with us. Your presence means the
            world. Please RSVP below.
          </p>
        </div>
        <div>
          <p className="rsvp__subtitle">Guest Name</p>
          <p className="rsvp__caption">Will you be attending the Wedding?</p>
          <div className="rsvp__button">
            <button
              className={`rsvp__button--yes ${attending === "yes" ? "active" : ""}`}
              onClick={() => !submitted && setAttending("yes")}
              disabled={submitted}
            >
              Yes
            </button>
            <button
              className={`rsvp__button--no ${attending === "no" ? "active" : ""}`}
              onClick={() => !submitted && setAttending("no")}
              disabled={submitted}
            >
              No
            </button>
          </div>
          {attending === "yes" && (
            <div className="rsvp__extra">
              <div className="rsvp__meal">
                <p className="rsvp__subtitle">Meal Preference (entrée)</p>
                <p className="rsvp__caption">Please select your meal choice.</p>
                <div className="rsvp__button">
                  {console.log("current meal:", meal)}
                  <button
                    className={`rsvp__button--menu ${meal === "chicken" ? "active" : ""}`}
                    onClick={() => !submitted && setMeal("chicken")}
                    disabled={submitted}
                  >
                    Marinated Boneless Chicken Leg
                  </button>
                  <button
                    className={`rsvp__button--menu ${meal === "salmon" ? "active" : ""}`}
                    onClick={() => !submitted && setMeal("salmon")}
                    disabled={submitted}
                  >
                    Pan-roasted Atlantic Salmon
                  </button>
                  <button
                    className={`rsvp__button--menu ${meal === "vegetarian" ? "active" : ""}`}
                    onClick={() => !submitted && setMeal("vegetarian")}
                    disabled={submitted}
                  >
                    Vegetarian
                  </button>
                  <button
                    className={`rsvp__button--menu ${meal === "vegan" ? "active" : ""}`}
                    onClick={() => !submitted && setMeal("vegan")}
                    disabled={submitted}
                  >
                    Vegan
                  </button>
                </div>
              </div>

              <div className="rsvp__dietary">
                <p className="rsvp__subtitle">
                  Dietary Restrictions or Allergies
                </p>

                <textarea
                  className="rsvp__caption--type"
                  placeholder="Please let us know if you have any dietary restrictions or allergies."
                  rows={5}
                />
              </div>
              {meal && (
                <div>
                  <button
                    className={`rsvp__rsvp ${submitted ? "active" : ""}`}
                    onClick={() => {
                      setSubmitted(true);
                      localStorage.setItem("rsvpSubmitted", "true"); // 👈 save it
                    }}
                  >
                    {submitted ? "RSVP Submitted!" : "Submit RSVP"}
                  </button>
                  {submitted && (
                    <p className="rsvp__confirmed">
                      You're in! We'll see you on the big day.
                    </p>
                  )}
                </div>
              )}
            </div>
          )}
          {attending === "no" && (
            <p className="rsvp__no">
              We’ll miss you, but we understand. Thank you for letting us know!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
