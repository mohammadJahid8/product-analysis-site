import React from 'react';
import useReview from '../hooks/useReview';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews] = useReview();

    return (
        <div className="all-reviews">
            {
                reviews.map((review) => <Review review={review} key={review.id}></Review>)
            }
        </div>
    );
};

export default Reviews;