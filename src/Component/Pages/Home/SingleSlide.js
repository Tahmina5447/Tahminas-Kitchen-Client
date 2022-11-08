import React from 'react';
import { Link } from 'react-router-dom';
import './Sliders.css'

const SingleSlide = ({data}) => {
    const {img,id,prev,next}=data;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
                <div className='slide-img'>
                    <img src={img}  alt="" className="w-full" />
                </div>
                <div className="absolute flex transform -translate-y-1/2  right-5 bottom-0">
                    <a href={`#slide${prev}`} className="btn btn-circle mr-3">❮</a>
                    <a href={`#slide${next}`} className="btn btn-circle">❯</a>
                </div>
                <div className='absolute transform -translate-y-1/2  left-8 top-1/2 w-1/2'>
                    <h1 className='text-6xl text-white font-bold'>Welcome to My Kitchen</h1>
                    <p className='text-teal-400 text-semibold my-6'>Order your favorite food and add a review about these delicious foods.</p>
                    <div>
                        <Link className=' text-teal-400 py-4 rounded-xl px-6 bg-white font-bold'>Order Now</Link>
                    </div>
                </div>
            </div>
    );
};

export default SingleSlide;