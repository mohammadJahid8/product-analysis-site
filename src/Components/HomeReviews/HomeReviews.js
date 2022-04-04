import React from 'react';
import useReview from '../hooks/useReview';
import ThreeReviews from './ThreeReviews';

const HomeReviews = () => {
    const [reviews] = useReview();
    return (
        <div className="all-reviews">
            {
                reviews.slice(0, 3).map((review) => <ThreeReviews review={review} key={review.id}></ThreeReviews>)
            }
        </div>
    );
};

export default HomeReviews;