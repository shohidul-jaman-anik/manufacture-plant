import React from 'react';
import { Card } from 'react-bootstrap';
import './HowWeWorks.css'
import process from '../../../Assets/how-we-work/Payment Information-bro.svg'
import manufactured from '../../../Assets/how-we-work/Manufacturing Process-bro.svg'
import shipping from '../../../Assets/how-we-work/Free shipping-amico.svg'


const HowWeWorks = () => {
    return (
        <div className='works-container'>
            <div className='text-center'>
                <h1>How we works ?</h1>
                <p>We are your partner from prototyping to production and beyond</p>
            </div>
            <div>
                <ul className="steps  lg:steps-horizontal baltus">
                    <li className="step "></li>
                    <li className="step "></li>
                    <li className="step "></li>
                </ul>
            </div>
            <div className='process-section container'>
                <div>
                    <Card className='shadow-sm' style={{ width: '14rem', border: '0px' }}>
                        <Card.Img variant="top" src={process} />
                        <Card.Body>
                            <Card.Title className='title'>Order your desire product</Card.Title>
                            <Card.Text className='details'>
                                First Signup and choose your desire product.Then finish  payment  process.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card className='shadow-sm' style={{ width: '14rem', border: '0px' }}>
                        <Card.Img variant="top" src={manufactured} />
                        <Card.Body>
                            <Card.Title className='title'>Manufactured your parts</Card.Title>
                            <Card.Text className='details'>
                                The best manufacturer is our quality verified network will start producting them righ way.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card className='shadow-sm' style={{ width: '14rem', border: '0px' }}>
                        <Card.Img variant="top" src={shipping} />
                        <Card.Body>
                            <Card.Title className='title'>Your Parts are shipped</Card.Title>
                            <Card.Text className='details'>
                                We handle all order logistics and communication, make  sure your parts arrive on time.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default HowWeWorks;