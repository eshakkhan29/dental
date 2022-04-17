import React from 'react';

const Loading = () => {
    return (
        <div style={{height:'550px'}} className='d-flex align-items-center justify-content-center'>
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;