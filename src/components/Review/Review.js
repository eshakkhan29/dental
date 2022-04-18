import React from 'react';

const Review = ({ review }) => {
    const { name, rating, image, description } = review;
    return (
        <div className='col-lg-4'>
            <div className='review-card'>
                <img className='rounded-circle d-block m-auto' src={image} alt="" />
                <div className='mt-3'>
                    <div className='d-flex align-items-center justify-content-center'>
                        <h3 className='logo-main'>{name}</h3>
                        <span className='ms-5 text-warning fw-bold'> Rating: {rating} Stars</span>
                    </div>
                    <p className='text-center'>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;