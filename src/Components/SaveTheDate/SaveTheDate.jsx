import React from 'react';
import '../../Components/SaveTheDate/SaveTheDate.scss'
// import saveTheDate from '../../assets/images/saveTheDateImg.jpg';

export default function SaveTheDate() {
    return (
    <div className="std">
        <div className="std__container">
            <div className="std__hero">
                <p>SAVE THE<br/>DATE</p>
            </div>
            <div className="std__sc">
                <p className="std__names">Stephon & Chelsia</p>
                <p className="std__announcement">ARE GETTING MARRIED!</p>
            </div>
            <div className="std__location-time">
                <p>NORTH YORK, ONTARIO <br/>SUNDAY, SEPTEMBER 6, 2026</p>
            </div>
        </div>
    </div>
    );
}