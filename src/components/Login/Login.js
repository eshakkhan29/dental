import React, { useState } from 'react';
import './Login.css'
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [signInWithGoogle, googleUser, loading, error] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        signInUser,
        signInLoading,
        signInError,
      ] = useSignInWithEmailAndPassword(auth);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handelEmail = event =>{
        setEmail(event.target.value);
    }
    const handelPassword = event =>{
        setPassword(event.target.value);
    }

    const navigate = useNavigate();


    if (googleUser || signInUser) {
        navigate('/home')
    }

    const handelSubmit = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    return (
        <div>

            <div className='m-auto from-container mt-4'>
                <h2 className='text-center'>Login</h2>
            <Form onSubmit={handelSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handelEmail} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handelPassword} type="password" placeholder="Password" />
                </Form.Group>
                <Button className='w-100 border-0' variant="primary" type="submit">
                    Login
                </Button>
                <p onClick={()=>navigate('/signup')} className='text-center mt-4'>New to dental care? <span className='bnt btn-link'>Sign Up</span></p>
            </Form>
            <div className='text-center mt-4'>
                <div className='or fs-4'>Or</div>
            </div>
            <div className='text-center mt-4'>
                <button onClick={() => signInWithGoogle()} className='btn btn-primary w-100 border-0'>Login With Google</button>
            </div>
            </div>
        </div>
    );
};

export default Login;