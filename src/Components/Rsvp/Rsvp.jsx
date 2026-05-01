import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
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
  const [loading, setLoading] = useState(false);
  const [initialized, setInitialized] = useState(false);

  const mealLabels = {
    chicken: "Marinated Boneless Chicken Leg",
    salmon: "Pan-roasted Atlantic Salmon",
    vegetarian: "Vegetarian",
    vegan: "Vegan",
  };

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
            attending: guest.attending || null,
            meal: guest.mealPreference || null,
            dietary: guest.dietaryRestrictions || "",
          };
        });

        setResponses(initial);

        const alreadySubmitted =
          guestData.length > 0 &&
          guestData.every((g) => g.rsvpSubmitted === true);

        setSubmitted(alreadySubmitted);
      } catch (err) {
        console.error("Error fetching guests:", err);
      } finally {
        setInitialized(true);
      }
    };

    fetchGuests();
  }, []);

  const updateResponse = (guestId, field, value) => {
    if (submitted) return;

    setResponses((prev) => ({
      ...prev,
      [guestId]: {
        ...prev[guestId],
        [field]: value,
      },
    }));
  };

  const handleSubmit = async () => {
    if (loading || submitted) return;

    setLoading(true);

    try {
      const email = localStorage.getItem("guestEmail");
      const guestNames = guests.map((g) => g.firstName).join(", ");

      // 1. Validate responses first
      const safeResponses = {};
      guests.forEach((g) => {
        safeResponses[g.id] = responses[g.id] || {
          attending: null,
          meal: null,
          dietary: "",
        };
      });

      // 2. Build summary safely
      const summary = guests
        .map((guest) => {
          const r = safeResponses[guest.id];

          if (r.attending === "yes") {
            return `${guest.firstName}: Attending | Meal: ${
              mealLabels[r.meal] || "Not selected"
            } | Dietary: ${r.dietary || "None"}`;
          }

          return `${guest.firstName}: Not Attending`;
        })
        .join("\n");

      // 3. Update Firestore FIRST
      for (const guest of guests) {
        const r = safeResponses[guest.id];

        await updateDoc(guest.ref, {
          rsvpSubmitted: true,
          attending: r.attending,
          mealPreference: r.meal,
          dietaryRestrictions: r.dietary,
        });
      }

      // 4. Send EmailJS AFTER Firestore succeeds
      console.log("Sending EmailJS...");

      const result = await emailjs.send(
        "service_gdmgwlh",
        "template_wwg0cyg",
        {
          guest_email: email,
          guest_names: guestNames,
          summary,
        },
        "qZQ5X8u9-41-_J5ty",
      );

      console.log("EmailJS success:", result);

      setSubmitted(true);
    } catch (err) {
      console.error("RSVP submission failed:", err);
    } finally {
      setLoading(false);
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

  if (!initialized) return null;

  const summaryList = guests.map((guest) => {
    const r = responses[guest.id] || {};
    return {
      name: guest.firstName,
      attending: r.attending,
      meal: r.meal,
      dietary: r.dietary,
    };
  });

  return (
    <div className="rsvp">
      <div className="rsvp__container">
        {submitted ? (
          <div className="rsvp__confirmation">
            <p className="rsvp__title">RSVP</p>

            <p className="rsvp__confirmed" style={{ marginTop: "1rem" }}>
              We have received your RSVP. Thank you!
            </p>

            <div style={{ marginTop: "1.5rem" }}>
              {summaryList.map((guest, i) => (
                <div key={i} className="rsvp__guest">
                  <p className="rsvp__subtitle">{guest.name}</p>

                  {guest.attending === "yes" ? (
                    <>
                      <p className="rsvp__caption">
                        Attending – {mealLabels[guest.meal]}
                      </p>

                      {guest.dietary && (
                        <p className="rsvp__caption">
                          Dietary: {guest.dietary}
                        </p>
                      )}
                    </>
                  ) : (
                    <p className="rsvp__caption">Not attending</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <>
            <p className="rsvp__title">RSVP</p>

            <p className="rsvp__description">
              We're so grateful to have you with us. Your presence means the
              world.
            </p>

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
                      className={`rsvp__button--yes ${
                        response.attending === "yes" ? "active" : ""
                      }`}
                      onClick={() =>
                        updateResponse(guest.id, "attending", "yes")
                      }
                    >
                      Yes
                    </button>

                    <button
                      className={`rsvp__button--no ${
                        response.attending === "no" ? "active" : ""
                      }`}
                      onClick={() =>
                        updateResponse(guest.id, "attending", "no")
                      }
                    >
                      No
                    </button>
                  </div>

                  {response.attending === "yes" && (
                    <div className="rsvp__extra">
                      <p className="rsvp__subtitle">Meal Preference (entrée)</p>

                      <div className="rsvp__button">
                        {Object.entries(mealLabels).map(([key, label]) => (
                          <button
                            key={key}
                            className={`rsvp__button--menu ${
                              response.meal === key ? "active" : ""
                            }`}
                            onClick={() =>
                              updateResponse(guest.id, "meal", key)
                            }
                          >
                            {label}
                          </button>
                        ))}
                      </div>

                      <p className="rsvp__subtitle">Dietary Restrictions</p>

                      <textarea
                        className="rsvp__caption--type"
                        rows={3}
                        value={response.dietary}
                        onChange={(e) =>
                          updateResponse(guest.id, "dietary", e.target.value)
                        }
                      />
                    </div>
                  )}
                </div>
              );
            })}

            {allAnswered && (
              <button
                className="rsvp__rsvp"
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit RSVP"}
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}
