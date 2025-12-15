import React from 'react';
import './Login.scss';
import { useState, useEffect } from 'react';
import { db } from '../../config/firebase-config';
import { collection, query, where, getDocs } from 'firebase/firestore';

export default function Login() {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false)

    const usersCollectionRef = collection(db, "Users");

    const getUsersByEmail = async () => {
        try {
            const q = query(usersCollectionRef, where("email", "==", email));
            const data = await getDocs(q);

            const userData = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));

            if (userData.length > 0) {
                setEmail("")
                window.location.href = `/savethedate/${encodeURIComponent(userData[0].email)}`;
            } else {
                setEmailError(true)
            }

        } catch (err) {
            console.error("Error fetching users by name:", err);
        }
    };


    return (
        <div className="login">
            <div className="login__container">
                <div className="login__sc">
                    <p className="login__names">Stephon  & Chelsia</p>
                    <p className="login__announcement">ARE GETTING MARRIED!</p>
                </div>
            </div>
            <div className="login__box">
                <div>
                    <p className="login__heading">We're thrilled you're here!</p>
                    <p className="login__description">Use the email where you received our invitation to log in.</p>
                </div>
                <div>
                    <label>Email</label>
                    <div className="login__heading">
                        <input placeholder='Enter email...' onChange={(e) => setEmail(e.target.value)} value={email} />
                        <button onClick={getUsersByEmail}>Submit</button>
                    </div>
                    {emailError &&
                        <div>
                            <p>Oops! That email isn't on our guest list. Please try again or contact us if you think this is a mistake.</p>
                        </div>}
                </div>
            </div>
        </div>
    );
}
