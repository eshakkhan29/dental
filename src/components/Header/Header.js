import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/favicon.ico';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">
                    <img height={100} src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink className={({ isActive }) =>
                            isActive ? "navLink-active" : "navLink"
                        } as={Link} to="/home">Home</NavLink>
                        <NavLink className={({ isActive }) =>
                            isActive ? "navLink-active" : "navLink"
                        } as={Link} to="/service">Service</NavLink>
                        <NavLink className={({ isActive }) =>
                            isActive ? "navLink-active" : "navLink"
                        } as={Link} to="/blogs">Blogs</NavLink>
                        <NavLink className={({ isActive }) =>
                            isActive ? "navLink-active" : "navLink"
                        } as={Link} to="/about">About</NavLink>
                        <NavLink className={({ isActive }) =>
                            isActive ? "navLink-active" : "navLink"
                        } as={Link} to="/login">Login</NavLink>
                        <NavLink className={({ isActive }) =>
                            isActive ? "navLink-active" : "navLink"
                        } as={Link} to="/signup">Sign Up</NavLink>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#user">User</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;