import React from 'react';
import { Button, Form } from 'react-bootstrap';
import auth from '../../Firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const CheckOut = () => {
    const [user, loading, error] = useAuthState(auth);

    const handelSubmit = event => {
        event.preventDefault();
    }
    return (
        <div>
            <div className='m-auto from-container mt-5'>

                    <h1>Submit your information</h1>
                <Form onSubmit={handelSubmit}>

                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control placeholder='Name' type="text" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control placeholder={user.email} readOnly type="email" />
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
                    <Button variant="btn btn-primary border-0" type="submit">
                        Submit Info
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default CheckOut;