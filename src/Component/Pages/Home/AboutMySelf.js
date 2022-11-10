import React from 'react';
import imgMe from '../../../images/me.jpg'

const AboutMySelf = () => {
    return (
        <div className='lg:flex mt-20'>
            <div className='lg:w-1/2 sm:w-full  bg-teal-400'>
                <h1 className='text-center font-bold text-white text-2xl mb-3 mt-12'>About Myself</h1>
                <div className='w-96 h-0.5 mx-auto my-3 bg-white'>
                    <hr />
                </div>
                <p className='text-white w-2/3 mx-auto'>My Name is Tahmina. I live in Dhaka. As a cook, my first priority is to satisfy my customer.</p>
            </div>
            <div className='lg:w-1/2 sm:w-full  '>
                <img className='w-full' src={imgMe} alt="" />
            </div>
        </div>
    );
};

export default AboutMySelf;