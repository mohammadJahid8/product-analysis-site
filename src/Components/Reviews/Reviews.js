import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import useReview from '../hooks/useReview';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews] = useReview();

    return (
        <div >
            <h1 className="review-title">  Customer Reviews <FontAwesomeIcon icon={faCommentDots}></FontAwesomeIcon></h1>
            <div className="all-reviews">
                {
                    reviews.map((review) => <Review review={review} key={review.id}></Review>)
                }

            </div>
        </div>
    );
};

export default Reviews;