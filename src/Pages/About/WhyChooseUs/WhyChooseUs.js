import React from 'react';
import whyUs from '../../../Assets/Other/WhyUs.jpg'
const WhyChooseUs = () => {
    return (
        <div className="hero-content flex-col lg:flex-row-reverse">
            <figure><img className='w-100' src={whyUs} alt="Album" /></figure>
            <div className="card-body w-44">
                <p>Our work meets the requirements of the farmers - takes the weight off clients’ shoulders and leaves them delighted with the results.</p>
                <h2 className="card-title">We achieve this because we believe in providing quality not just the first time, but every time.</h2>
                <div>
                    <li>Experience & knowledge of more than 50 years</li>
                    <li>Comparative prices</li>
                    <li>Top quality products</li>
                    <li>Transparent and ethical business practices</li>
                    <li>Strong network of dealers & distributors</li>
                    <li>Growth oriented philosophy</li>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;