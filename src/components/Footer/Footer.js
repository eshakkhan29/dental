import React from 'react';
import './Footer.css'

const Footer = () => {
    const day = new Date();
    const year = day.getFullYear();
    return (
        <div className='mt-5 footer d-flex align-items-center justify-content-center'>
            <p className='text-center fs-4 footer-text m-0'>&copy; Dentist Zubayer {year} || All Rights Reserved</p>

        </div>
    );
};

export default Footer;