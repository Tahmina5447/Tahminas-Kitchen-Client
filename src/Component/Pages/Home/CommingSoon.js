import React from 'react';
import img1 from '../../../images/commingSoon1.jpg'
import img2 from '../../../images/commingSoon2.jpg'
import img3 from '../../../images/commingSoon3.jpg'
import img4 from '../../../images/commingSoon4.jpg'
import img5 from '../../../images/commingSoon5.jpg'
import img6 from '../../../images/commingSoon6.jpg'

const CommingSoon = () => {
    return (
        <div className='mb-16'>
            <h1 className='text-center font-bold text-teal-400 text-3xl mb-3 mt-12'>Coming Soon</h1>
            <div className='w-96 h-0.5 mx-auto mb-12 bg-teal-400'>
                <hr />
            </div>
            <div className='grid grid-cols-3'>
                <img className='w-full h-48' src={img1} alt="" />
                <img className='w-full h-48' src={img6} alt="" />
                <img className='w-full h-48' src={img5} alt="" />
                <img className='w-full h-48' src={img4} alt="" />
                <img className='w-full h-48' src={img3} alt="" />
                <img className='w-full h-48' src={img2} alt="" />
            </div>
        </div>
    );
};

export default CommingSoon;