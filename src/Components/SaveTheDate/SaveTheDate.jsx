import React from "react";
import { useEffect, useState } from "react";
import "../../Components/SaveTheDate/SaveTheDate.scss";
import { useParams } from "react-router-dom";
import { db } from "../../config/firebase-config";
import { collection, query, where, getDocs } from "firebase/firestore";

export default function SaveTheDate() {
  const { email } = useParams();
  const [valid, setValid] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const decodedEmail = decodeURIComponent(email);

  const usersCollectionRef = collection(db, "Users");

  useEffect(() => {
    const getUsersByEmail = async () => {
      try {
        const q = query(usersCollectionRef, where("email", "==", decodedEmail));
        const data = await getDocs(q);

        const userData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        if (userData.length > 0) {
          setValid(true);
        } else {
          window.location.href =
            "https://uploads.dailydot.com/2024/04/confused-nick-young-.jpg?auto=compress&fit=fit&fm=jpg&h=600&w=1200";
        }

        setLoaded(true);
      } catch (err) {
        console.error("Error fetching users by name:", err);
      }
    };

    getUsersByEmail();
  }, []);

  if (loaded) {
    if (valid) {
      return (
        <div className="std">
          <div className="std__container">
            <div className="std__hero">
              <p>
                SAVE THE
                <br className="std__hero--break" />
                &nbsp;DATE
              </p>
            </div>
            <div className="std__sc">
              <p className="std__names">Stephon & Chelsia</p>
              <p className="std__announcement">ARE GETTING MARRIED!</p>
            </div>
            <div className="std__location-time">
              <p>
                NORTH YORK, ONTARIO <br />
                SUNDAY, SEPTEMBER 6, 2026
              </p>
            </div>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  } else {
    return <div></div>;
  }
}
