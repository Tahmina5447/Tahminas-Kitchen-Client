import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ItemsDetails = () => {
    const itemDetails = useLoaderData();
    console.log(itemDetails)
    const { img, price, deliveryTime, name, description } = itemDetails;
    return (
        <div>
            <div className='w-2/3 mx-auto my-14'>
                <h2 className='text-teal-400 font-bold text-4xl my-6 text-center'>{name}</h2>
                <div className='w-96 h-0.5 mx-auto mb-12 bg-teal-400'>
                <hr/>
            </div>
                <div>
                    <img className='w-full h-96' src={img} alt="" />
                </div>
                <div>
                    <div className='flex mt-6 text-teal-400 font-bold justify-between'>
                        <p>price: {price}</p>
                        <p>Delivery-Time: {deliveryTime}</p>
                    </div>
                    <p className='text-center my-12'>{description}</p>
                </div>

            </div>
        </div>
    );
};

export default ItemsDetails;