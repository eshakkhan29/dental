import React from 'react';
import eshakKhan from "../../images/eshak-khan.jpg";

const About = () => {
    return (
        <div className='container'>
            <h1 className='title text-center mt-5'>About Me</h1>
            <div className="row mt-5 g-4 align-items-center">
                <div className="col-lg-6">
                    <h3 className='quarry-title'>MD. Eshak Khan</h3>
                    <p>Hello! Md. EshaK Khan is my name. My ambition is to express myself as a capable web developer as soon as possible. I'm currently studying it on a difficult level. Every day and night, I put forth a lot of effort. Now I'm learning without eating or sleeping for the rest of my life. I wish to work on major projects around the world and build my own web development firm. Now I'm familiar with HTML, CSS, Bootstrap, Tailwind CSS, Javascript, and ReactJS. And, inshaAllah, I'll work with a variety of other technologies.</p>
                </div>
                <div className="col-lg-6">
                    <img className=' img-thumbnail img-fluid' src={eshakKhan} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;