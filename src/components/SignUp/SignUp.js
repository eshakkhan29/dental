import { async } from '@firebase/util';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';

const SignUp = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        createUser,
        createLoading,
        createError,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);


    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handelName = event => {
        setName(event.target.value);
    }
    const handelEmail = event => {
        setEmail(event.target.value);
    }
    const handelPassword = event => {
        setPassword(event.target.value);
    }
    const handelConfirmPassword = event => {
        setConfirmPassword(event.target.value);
    }


    if (googleUser || createUser) {
        navigate('/home')
    }

    const handelSubmit = async event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('password not match');
        }
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
    }

    return (
        <div>
            <div className='m-auto from-container mt-4'>
                <h2 className='text-center'>Sign Up</h2>
                <Form onSubmit={handelSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onBlur={handelName} type="text" placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handelEmail} type="email" placeholder="Enter email" />
                        {error &&
                            <Form.Text className="text-muted">
                                {error}
                            </Form.Text>
                        }
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handelPassword} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control onBlur={handelConfirmPassword} type="password" placeholder="Confirm Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button className='w-100 border-0' variant="primary" type="submit">
                        Sign Up
                    </Button>
                    <p onClick={()=>navigate('/login')} className='text-center mt-4'>Already have an Account? <span className='bnt btn-link'>Login</span></p>
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

export default SignUp;