import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Review.css'


const Review = ({ review }) => {
    const { image, message, title, rate, name } = review;
    return (
        <div className="review-card-container">

            <div className="review-card">
                <div>
                    <img src={image} alt="" />
                </div>
                <div className="review-info">
                    <h1><FontAwesomeIcon icon={faUser}></FontAwesomeIcon> {name}</h1>
                    <h3>{title}</h3>
                    <p>{message.slice(0, 235)}...</p>
                    <p id='rate'><span id='rating'>Rate:</span> {rate}/5 </p>

                </div>
            </div>
        </div>
    );
};

export default Review;