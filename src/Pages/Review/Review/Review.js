import React from 'react';
import './Review.css'

const Review = ({ studentReview }) => {

    
    return (
        <div>
            <div className='review-section shadow-sm '>
                <div className='student-info '>
                    <img src={studentReview.picture} alt="" />
                    <div className='review-main'>
                        <h1 className='text-2xl font-semibold'>{studentReview.name}</h1>
                        <h1 className='fs-6 font-semibold'>Ratings : {studentReview.ratings}⭐</h1>
                    </div>
                </div>
                <p className='text-start'>{studentReview.reviews}</p>
            </div>
          
        </div>
    );
}


export default Review;