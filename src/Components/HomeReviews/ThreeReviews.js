import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ThreeReviews = ({ review }) => {
    const { image, message, title, rate, name } = review;

    return (
        <div className="review-card-container">
            <div className="review-card">
                <div>
                    <img src={image} alt="" />
                </div>
                <div className="review-info">
                    <h1><FontAwesomeIcon className="user-icon" icon={faUser}></FontAwesomeIcon>{name}</h1>
                    <h3>{title}</h3>
                    <p>{message.slice(0, 235)}...</p>
                    <p>Rate: {rate} </p>
                </div>
            </div>
        </div>
    );
};

export default ThreeReviews;