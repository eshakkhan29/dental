import React from 'react';
import './Header.css'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
// import logo from '../../images/favicon.ico';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const handelLogout = () => {
        signOut(auth)
    }
    return (
        <Navbar className='navigation-bar' collapseOnSelect sticky='top' expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand as={Link} to="/home">
                    {/* <img height={100} src={logo} alt="" /> */}
                    <h3 className='logo-main fs-2'>Dental <span className='logo-sub'>Care</span></h3>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink className={({ isActive }) =>
                            isActive ? "navLink-active" : "navLink"
                        } as={Link} to="/home">Home</NavLink>
                        <NavLink className={({ isActive }) =>
                            isActive ? "navLink-active" : "navLink"
                        } as={Link} to="/blogs">Blogs</NavLink>
                        <NavLink className={({ isActive }) =>
                            isActive ? "navLink-active" : "navLink"
                        } as={Link} to="/checkout">CheckOut</NavLink>
                        <NavLink className={({ isActive }) =>
                            isActive ? "navLink-active" : "navLink"
                        } as={Link} to="/about">About</NavLink>
                        {!user?.uid ?
                            <NavLink className={({ isActive }) =>
                                isActive ? "navLink-active" : "navLink"
                            } as={Link} to="/login">Login</NavLink>
                            :
                            <Button onClick={handelLogout} className='btn border-0'>Log Out</Button>
                        }
                    </Nav>
                    <Nav>
                        {user?.uid &&
                            <img src={user?.photoURL} width={30} height={30} className="rounded-circle ms-3" alt="profile" />
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;