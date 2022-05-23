import React from 'react';
import './BusinessSummary.css'
import factory from '../../../Assets/Other/factory.jpg'
import CountUp from 'react-countup';


const BusinessSummary = () => {

    return (

        <section className="our-facts">
            <div className="container">
                <div className="row">
                    <h2>A Few Facts About <span className='name-style'> Our Company</span></h2>
                    <p>Try to understand customer expectation</p>
                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-lg-12">

                            </div>
                            <div className="col-lg-6">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="count-area-content percentage">
                                            <div className="count-digit">
                                                <CountUp end={100} delay={2} duration={5} />
                                            </div>
                                            <div className="count-title">Succesed Deals <span className='emoji'>🤝</span></div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="count-area-content">
                                            <div className="count-digit">
                                            <CountUp end={102} delay={1} duration={5} />
                                            </div>
                                            <div className="count-title"><small>Buyer in the world</small><span className='emoji'>🌍</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="count-area-content new-students">
                                            <div className="count-digit">
                                                <CountUp end={2178} delay={1} duration={7} />
                                                </div>
                                            <div className="count-title">Happy Clints <span className='emoji'>😊</span></div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="count-area-content">
                                            <div className="count-digit">
                                                <CountUp end={25} delay={1} duration={3} />
                                                </div>
                                            <div className="count-title">Wining Awards <span className='emoji'>🏆</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 align-self-center">
                        <div className="">
                            <img src={factory} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessSummary;