import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'
import notFound from '../../../Assets/Other/notfound.png'
const NotFound = () => {
    return (
        <div className='not-found'>
            <div className='descripiton'>
                <h1>The Page You have Enter Not Found</h1>
            </div>
            <div>
                <img className='sleeping ' src={notFound} alt="" />
                <Link className='not-found-btn' to='/'>Go to Home</Link>
            </div>
        </div>
    );
};

export default NotFound;

