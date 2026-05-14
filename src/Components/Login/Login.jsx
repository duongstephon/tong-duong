import React from "react";
import "./Login.scss";
import { useState } from "react";
import { db } from "../../config/firebase-config";
import { collection, query, where, getDocs } from "firebase/firestore";

export default function Login() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const usersCollectionRef = collection(db, "Users");

  const getUsersByEmail = async (e) => {
    e.preventDefault();
    try {
      const q = query(usersCollectionRef, where("email", "==", email));
      const data = await getDocs(q);

      const userData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      if (userData.length > 0) {
        const firstNames = userData
          .map((user) => user.firstName)
          .sort((a, b) => a.localeCompare(b));

        let formattedNames;
        if (firstNames.length === 1) {
          formattedNames = firstNames[0];
        } else if (firstNames.length === 2) {
          formattedNames = `${firstNames[0]} and ${firstNames[1]}`;
        } else {
          const allButLast = firstNames.slice(0, -1).join(", ");
          formattedNames = `${allButLast}, and ${firstNames[firstNames.length - 1]}`;
        }

        const alreadySubmitted = userData.some(
          (user) => user.rsvpSubmitted === true,
        );

        localStorage.setItem("guestNames", formattedNames);
        localStorage.setItem("guestEmail", email);
        localStorage.setItem(
          "rsvpSubmitted",
          alreadySubmitted ? "true" : "false",
        );

        setEmail("");
        setEmailError(false);
        window.location.href = `/home`;
      } else {
        setEmailError(true);
      }
    } catch (err) {
      console.error("Error fetching users by name:", err);
    }
  };

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__sc">
          <p className="login__names">Stephon & Chelsia</p>
          <p className="login__announcement">ARE GETTING MARRIED!</p>
        </div>
      </div>
      <div className="login__box">
        <div className="login__box--info">
          <p className="login__heading">We're thrilled you're here!</p>
          <p className="login__description">
            Use the email where you received our invitation to log in.
          </p>
        </div>
        <div className="login__email">
          <label className="login__email--title">Email</label>
          <form className="login__email--heading" onSubmit={getUsersByEmail}>
            <input
              placeholder="you@example.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <div className="login__actions">
              <button className="login__submit" type="submit">
                Access Invitation
              </button>

              <a
                href="mailto:stephonandchelsia@gmail.com"
                className="login__contact"
              >
                Need help? Email us!
              </a>
            </div>
          </form>
          {emailError && (
            <div className="login__error">
              <p className="login__error--message">
                Oops! That email isn't on our guest list. Please try again or
                contact us if you think this is a mistake.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
