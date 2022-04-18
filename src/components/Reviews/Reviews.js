import React from 'react';
import './Reviews.css'
import useReviews from '../../Hook/Reviews/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div className='container'>
            <h1 className='title mt-5 text-center'>My Patients Reviews</h1>
            <div className="row mt-5 g-5">
                {
                    reviews.map(review => <Review key={review.id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;