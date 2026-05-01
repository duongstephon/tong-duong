import React, { useEffect, useState } from "react";
import "./Rsvp.scss";
import { db } from "../../config/firebase-config";
import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
} from "firebase/firestore";

export default function Rsvp() {
  const [guests, setGuests] = useState([]);
  const [responses, setResponses] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const fetchGuests = async () => {
      const email = localStorage.getItem("guestEmail");
      try {
        const q = query(collection(db, "Users"), where("email", "==", email));
        const snapshot = await getDocs(q);
        const guestData = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          ref: doc.ref,
        }));
        guestData.sort((a, b) => a.firstName.localeCompare(b.firstName));
        setGuests(guestData);

        const initial = {};
        guestData.forEach((guest) => {
          initial[guest.id] = {
            attending: null,
            meal: null,
            dietary: "",
          };
        });
        setResponses(initial);
      } catch (err) {
        console.error("Error fetching guests:", err);
      }
    };

    fetchGuests();
  }, []);

  const updateResponse = (guestId, field, value) => {
    setResponses((prev) => ({
      ...prev,
      [guestId]: {
        ...prev[guestId],
        [field]: value,
      },
    }));
  };

  const handleSubmit = async () => {
    setSubmitted(true);
    try {
      for (const guest of guests) {
        const response = responses[guest.id];
        await updateDoc(guest.ref, {
          rsvpSubmitted: true,
          attending: response.attending,
          mealPreference: response.meal,
          dietaryRestrictions: response.dietary,
        });
      }
      localStorage.setItem("rsvpSubmitted", "true");
      window.dispatchEvent(new Event("storage"));
    } catch (err) {
      console.error("Error submitting RSVP:", err);
    }
  };

  const allAnswered =
    guests.length > 0 &&
    guests.every((guest) => {
      const r = responses[guest.id];
      if (!r) return false;
      if (r.attending === "no") return true;
      if (r.attending === "yes" && r.meal) return true;
      return false;
    });

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

        {guests.map((guest) => {
          const response = responses[guest.id] || {};
          return (
            <div key={guest.id} className="rsvp__guest">
              <p className="rsvp__subtitle">{guest.firstName}</p>
              <p className="rsvp__caption">
                Will you be attending the Wedding?
              </p>
              <div className="rsvp__button">
                <button
                  className={`rsvp__button--yes ${response.attending === "yes" ? "active" : ""}`}
                  onClick={() =>
                    !submitted && updateResponse(guest.id, "attending", "yes")
                  }
                  disabled={submitted}
                >
                  Yes
                </button>
                <button
                  className={`rsvp__button--no ${response.attending === "no" ? "active" : ""}`}
                  onClick={() =>
                    !submitted && updateResponse(guest.id, "attending", "no")
                  }
                  disabled={submitted}
                >
                  No
                </button>
              </div>

              {response.attending === "yes" && (
                <div className="rsvp__extra">
                  <div className="rsvp__meal">
                    <p className="rsvp__subtitle">Meal Preference (entrée)</p>
                    <p className="rsvp__caption">
                      Please select your meal choice.
                    </p>
                    <div className="rsvp__button">
                      <button
                        className={`rsvp__button--menu ${response.meal === "chicken" ? "active" : ""}`}
                        onClick={() =>
                          !submitted &&
                          updateResponse(guest.id, "meal", "chicken")
                        }
                        disabled={submitted}
                      >
                        Marinated Boneless Chicken Leg
                      </button>
                      <button
                        className={`rsvp__button--menu ${response.meal === "salmon" ? "active" : ""}`}
                        onClick={() =>
                          !submitted &&
                          updateResponse(guest.id, "meal", "salmon")
                        }
                        disabled={submitted}
                      >
                        Pan-roasted Atlantic Salmon
                      </button>
                      <button
                        className={`rsvp__button--menu ${response.meal === "vegetarian" ? "active" : ""}`}
                        onClick={() =>
                          !submitted &&
                          updateResponse(guest.id, "meal", "vegetarian")
                        }
                        disabled={submitted}
                      >
                        Vegetarian
                      </button>
                      <button
                        className={`rsvp__button--menu ${response.meal === "vegan" ? "active" : ""}`}
                        onClick={() =>
                          !submitted &&
                          updateResponse(guest.id, "meal", "vegan")
                        }
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
                      rows={3}
                      value={response.dietary}
                      onChange={(e) =>
                        updateResponse(guest.id, "dietary", e.target.value)
                      }
                      disabled={submitted}
                    />
                  </div>
                </div>
              )}

              {response.attending === "no" && (
                <p className="rsvp__no">
                  We'll miss you, but we understand. Thank you for letting us
                  know!
                </p>
              )}
            </div>
          );
        })}

        {allAnswered && (
          <div>
            <button
              className={`rsvp__rsvp ${submitted ? "active" : ""}`}
              onClick={handleSubmit}
              disabled={submitted}
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
    </div>
  );
}
