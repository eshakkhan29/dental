import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import auth from '../../Firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ChooseService } from '../../App';

const CheckOut = () => {

    const setService = useContext(ChooseService);
    const chooseService = setService[0];
    const [user, loading, error] = useAuthState(auth);
    const price= `$ ${chooseService?.price}`

    const handelSubmit = event => {
        event.preventDefault();
    }
    return (
        <div className='vh-100'>
            <div className='m-auto from-container mt-5'>

                    <h2 className='text-center title'>Submit your information</h2>
                <Form onSubmit={handelSubmit}>

                    <Form.Group className="mb-3">
                        <Form.Label>Service Price</Form.Label>
                        <Form.Control readOnly  placeholder={price} type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Service Name</Form.Label>
                        <Form.Control readOnly  placeholder={chooseService?.name} type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control  placeholder={user?.displayName} type="text" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control placeholder={user?.email} readOnly type="email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Address" />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="number" placeholder="Age" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="number" placeholder="Phone Number" />
                    </Form.Group>
                    <Button variant="btn btn-primary w-100 border-0" type="submit">
                        Submit Info
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default CheckOut;