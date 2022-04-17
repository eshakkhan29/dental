import React from 'react';
import errorPage from "../../images/benner/404error-page.png";

const NotFound = () => {
    return (
        <div>
            <img className='w-100 error-image' src={errorPage} alt="" />
        </div>
    );
};

export default NotFound;