import React from 'react';
import banner1 from "../../../images/banner1.jpg"
import banner3 from "../../../images/banner3.jpg"
import banner5 from "../../../images/banner5.jpg"
import SingleSlide from './SingleSlide';
const Sliders = () => {
    const sliderData = [
        {
            img: banner1,
            prev: 3,
            id: 1,
            next: 2

        },
        {
            img: banner3,
            prev: 1,
            id: 2,
            next: 3

        },
        {
            img: banner5,
            prev: 2,
            id: 3,
            next: 1

        }
    ]
    return (
        <div className=''>
            <div className="carousel w-full h-96 rounded-xl">
                {
                    sliderData.map(data => <SingleSlide key={data.id} data={data}></SingleSlide>)
                }
            </div>
        </div>
    );
};

export default Sliders;