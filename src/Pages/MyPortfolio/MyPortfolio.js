import React from 'react';
import MyProjects from './MyProjects';
import myPic from '../../Assets/myProfile/myImg.jpg';




const MyPortfolio = () => {
    return (
        <div>
            <div class="avatar online lg:mx-96 mx-20 mt-8">
                <div class="w-52 rounded-full text-center">
                    <img src={myPic} alt='' />
                </div>
            </div>
            <div className='lg:flex'>
                <div class="mockup-phone mt-12">
                    <div class="camera"></div>
                    <div class="display">
                        <div class="artboard artboard-demo phone-1">
                            <h1 className='text-xl mt-2'><span className='font-bold'>list of skills:-</span>
                                <li>HTMl</li>
                                <li>CSS</li>
                                <li>Bootstarp</li>
                                <li>Tailwind</li>
                                <li>Daisyui</li>
                                <li>Javascript</li>
                                <li>React</li>
                                <li>Firebase</li>
                                <li>Node</li>
                                <li>Mongodb</li>
                                <li>GITHUB</li>
                                <li>React Others Library</li>
                            </h1>
                        </div>
                    </div>
                </div>
                <div className='lg:w-96 mr-20 mt-56'>
                    <h1 className='text-primary text-center font-bold text-4xl'>Md Anik Hossain</h1>
                    <h1 className='text-center text-xl'><span className='font-bold'>Email:-</span>anikh499@gmail.com</h1>
                    <h1 className='text-center text-xl mt-2'><span className='font-bold'>Educational Background:-<br /></span>
                        <li>I'm studying in BBA 2nd year at Gvt Shahid Suhrawardy College in Accounting Department</li>
                    </h1>
                    <div className='ml-12'>
                        <h1 className='text-primary font-bold text-xl'>My Projects:-</h1>
                        <li>
                            <a target="blank" href="https://splendorous-madeleine-52daa1.netlify.app/home">
                                The Beer House
                            </a>
                        </li>
                        <li>
                            <a target="blank" href="https://power-zone-d77bd.web.app/">
                                Power Zone
                            </a>
                        </li>
                        <li>
                            <a target="blank" href="https://smart-gadget-warehouse.web.app/">
                                Smart Gadget Warehouse
                            </a>
                        </li>
                    </div>
                </div>
            </div>
            <MyProjects></MyProjects>
        </div>
    );
};

export default MyPortfolio;
