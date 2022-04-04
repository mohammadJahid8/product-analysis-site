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
                    <h1>Name: {name}</h1>
                    <h3>{title}</h3>
                    <p>{message.slice(0, 235)}...</p>
                    <p>Rate: {rate} </p>
                </div>
            </div>
        </div>
    );
};

export default ThreeReviews;