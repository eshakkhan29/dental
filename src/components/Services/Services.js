
import useServices from '../../Hook/Services/useServices';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useServices([]);
    return (
        <div className='row container m-auto mt-5 g-lg-4 gy-5 p-0'>
            <h1 className='text-center my-4 title'>My Service</h1>
            {
                services.map(service =><Service key={service.id} service={service}></Service>)
            }
        </div>
    );
};

export default Services;