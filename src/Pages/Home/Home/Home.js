import React from 'react';
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import HowWeWorks from '../HowWeWorks/HowWeWorks';
import OurMission from '../OurMission/OurMission';
import Products from '../Products/Products';
import Reviews from '../Review/Reviews/Reviews';
import './Home.css';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurMission></OurMission>
            <Products></Products>
            <HowWeWorks></HowWeWorks>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;