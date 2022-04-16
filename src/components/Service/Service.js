import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { image, name, price, description } = service;
    return (
        <div className='col-lg-4'>
            <div className="card border-0 service-card">
                <img src={image} alt="" />
                <div className='card-body'>
                    <h2 className='card-title'>{name}</h2>
                    <b className='card-text'>Price: ${price}</b>
                    <p className='card-text'>{description}</p>
                    <button className='btn btn-primary border-0 w-100 position-absolute bottom-0 start-50 translate-middle-x'>Bye This Service</button>
                </div>
            </div>
        </div>
    );
};

export default Service;