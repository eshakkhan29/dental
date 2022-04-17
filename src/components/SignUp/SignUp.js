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
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);


    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [check, setCheck] = useState(Boolean);

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
    const handelCheck = event => {
        setCheck(event.target.checked);

    }

    if (googleUser || createUser) {
        navigate('/home')
    }

    const handelSubmit = async event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            return setError('Password not match');
        }
        if (password.length < 6) {
            return setError('Password minimum characters 6');
        }
        else {
            await createUserWithEmailAndPassword(email, password);
            await updateProfile({ displayName: name });
            setError('');
        }
    }

    return (
        <div>
            <div className='m-auto from-container mt-4'>
                <h2 className='text-center'>Sign Up</h2>
                <Form onSubmit={handelSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onBlur={handelName} required type="text" placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handelEmail} required type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handelPassword} required type="password" placeholder="Password" />
                        {error &&
                            <Form.Text className="text-danger">
                                {error}
                            </Form.Text>
                        }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control onBlur={handelConfirmPassword} required type="password" placeholder="Confirm Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onClick={handelCheck} type="checkbox" label="Agree Trams and Condition" />
                    </Form.Group>
                    <Button disabled={!check} className='w-100 border-0' variant="primary" type="submit">
                        Sign Up
                    </Button>
                    <p onClick={() => navigate('/login')} className='mt-4 d-inline-block'>Already have an Account? <span className='other-link'>Login</span></p>
                </Form>
                <div className='text-center mt-4'>
                    <div className='or fs-5'>Or</div>
                </div>
                <div className='text-center mt-4'>
                    <button onClick={() => signInWithGoogle()} className='btn btn-primary w-100 border-0'>Login With Google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;