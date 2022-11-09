import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold text-center mt-20'>4o4</h1>
            <p>Page not founded <Link to='/' className='btn btn-link'>Go to home page</Link></p>
        </div>
    );
};

export default ErrorPage;