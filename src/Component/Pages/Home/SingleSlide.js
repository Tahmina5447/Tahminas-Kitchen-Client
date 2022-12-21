import React from 'react';
import './Sliders.css'

const SingleSlide = ({ data }) => {
    const { img, id, prev, next } = data;
    return (
        
        <div id={`slide${id}`} className="carousel-item relative w-full pb-3">
            <div className='slide-img w-full'>
                <img src={img} alt="" className=" h-96 w-full" />
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${prev}`} className="btn btn-circle bg-teal-400">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle bg-teal-400">❯</a>
            </div>
            <div className='absolute transform -translate-y-1/2 left-1/4 top-1/2 w-1/2'>
                <h1 className='text-6xl text-white font-bold'>Welcome to My Kitchen</h1>
                <p className='text-teal-400 text-semibold my-6 text-xl'>Order your favorite food and add a review about these delicious foods.</p>
            </div>
        </div>
    );
};

export default SingleSlide;