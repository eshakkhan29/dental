import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChooseService } from '../../App';
import useServices from '../../Hook/Services/useServices';
import './Service.css'

const Service = ({ service }) => {

    const setService = useContext(ChooseService);
    const setChooseService = setService[1];

    const [services, setServices] = useServices();
    const { image, name, price, description } = service;
    const navigate = useNavigate();
    const handelBook = async service => {
        await setChooseService(service)
        navigate("/checkout")
    }
    return (
        <div className='col-lg-4'>
            <div className="card border-0 service-card">
                <img className='service-image' src={image} alt="" />
                <div className='card-body p-0 pt-4'>
                    <h2 className='card-title'>{name}</h2>
                    <b className='card-text'>Price: ${price}</b>
                    <p className='card-text mt-3'>{description}</p>
                    <button onClick={() => handelBook(service)} className='btn btn-primary border-0 w-100 position-absolute bottom-0 start-50 translate-middle-x'>Book This Service</button>
                </div>
            </div>
        </div>
    );
};

export default Service;