import React from 'react';
import WhyChooseUs from '../../About/WhyChooseUs/WhyChooseUs';
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import HowWeWorks from '../HowWeWorks/HowWeWorks';
import OurMission from '../OurMission/OurMission';
import Products from '../Products/Products';
import './Home.css';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurMission></OurMission>
            <Products></Products>
            <HowWeWorks></HowWeWorks>
            <BusinessSummary></BusinessSummary>
            <WhyChooseUs></WhyChooseUs>
        </div>
    );
};

export default Home;