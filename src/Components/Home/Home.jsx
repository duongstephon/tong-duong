import React from 'react';
import './Home.scss';
import ThankYou from '../ThankYou/ThankYou';

export default function Home() {
    return (
    <div className="home">
        <h1>This is My Home page</h1>
        <ThankYou></ThankYou>
    </div>
    );
}