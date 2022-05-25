import React from 'react';
import { Link } from 'react-router-dom';
import mission from '../../../Assets/Other/mission.jpg'
import signature from '../../../Assets/Other/signature.png'
import './OurMission.css'

const OurMission = () => {
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={mission} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-3xl font-bold"><span className='name-style'>Manufacture plant</span> is an Industrial operator providing full range of services in the sphere of Mechanical Engineering worldwide!</h1>

                        <div className="flex w-full">
                            <div className="grid  flex-grow   place-items-center"><p>To further develop our strengths we have established a corporate mandate to maintain strong core values reflect our philosophy.</p>
                                <img src={signature} alt="" />
                            </div>
                            <div className="divider divider-horizontal"></div>
                            <div className="grid  flex-grow"><p className="py-6"><span className='name-style'>Manufacture plant</span> are threatened as technology disrupts and software “eats the world.” Yet those that embrace change are thriving, building bigger, better, faster, and stronger products than ever before.
                                You are helping to lead the charge; we can help you build on your past successes and prepare for your great future.</p></div>
                        </div>


                        <button className='explore-btn'>
                            <Link to="/whyUs">Explore More</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurMission;