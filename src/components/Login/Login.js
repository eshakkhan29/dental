import React, { useState } from 'react';
import './Login.css'
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
    const [signInWithGoogle, googleUser, loading, error] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        signInUser,
        signInLoading,
        signInError,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, reseterror] = useSendPasswordResetEmail(auth);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handelEmail = event => {
        setEmail(event.target.value);
    }
    const handelPassword = event => {
        setPassword(event.target.value);
    }

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    
    if (sending) {
        toast.success('Password reset email send')
    }

    if (googleUser || signInUser) {
        navigate(from, { replace: true })
    }

    const handelSubmit = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    const handelForgetPassword = () => {
        sendPasswordResetEmail(email)
    }

    return (
        <div className='vh-100'>
            <div className='m-auto from-container mt-5'>
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
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <p onClick={handelForgetPassword} className='btn-link'>Forget Password?</p>
                    </Form.Group>
                    <Button className='w-100 border-0' variant="primary" type="submit">
                        Login
                    </Button>
                    <p onClick={() => navigate('/signup')} className='text-center mt-4'>New to dental care? <span className='bnt btn-link'>Sign Up</span></p>
                </Form>
                <div className='text-center mt-4'>
                    <div className='or fs-5'>Or</div>
                </div>
                <div className='text-center mt-4'>
                    <button onClick={() => signInWithGoogle()} className='btn btn-primary w-100 border-0'>Login With Google</button>
                </div>
                <Toaster/>
            </div>
        </div>
    );
};

export default Login;