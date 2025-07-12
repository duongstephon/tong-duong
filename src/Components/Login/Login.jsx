import React from 'react';
import './Login.scss';

export default function Login() {
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
                <p>Email</p>
            </div>
        </div>
    </div>
    );
}