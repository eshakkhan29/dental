import React from 'react';
import './Home.css'
import { Carousel } from 'react-bootstrap';
import benner1 from '../../images/benner/benner1 .jpg'
import benner2 from '../../images/benner/benner2.jpg'
import benner3 from '../../images/benner/benner3.jpg'
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100 benner-image"
                        src={benner1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 benner-image"
                        src={benner2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 benner-image"
                        src={benner3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <div>
                <Services></Services>
            </div>
        </>
    );
};

export default Home;