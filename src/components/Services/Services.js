import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('service.json')
        .then(res=> res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='row container m-auto mt-5 g-4'>
            <h1 className='text-center'>My Service</h1>
            {
                services.map(service =><Service key={service.id} service={service}></Service>)
            }
        </div>
    );
};

export default Services;