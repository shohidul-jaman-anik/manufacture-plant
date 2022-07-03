import { Carousel } from 'react-bootstrap';
import React from 'react';
import banner2 from '../../../Assets/Banner/Banner2.jpg'
import './Banner.css'


const Banner = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/Jq3zYFc/Banner1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className='description'>
                        <p>Manufacture Plant is a trusted brand by the farmers of more than 100+ countries globally.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className='description'>
                        <p>Today the name Agrovision has become a synonym to exceptional and impeccable manufacturer of agriculture machinery across the world.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/Jq3zYFc/Banner1.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption className='description'>
                        <p>We use best quality of raw material and sustainable engineering designs for manufacturing innovative implements of International standards. </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;