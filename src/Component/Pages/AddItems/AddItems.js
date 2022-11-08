import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const AddItems = () => {
    const addItem=event=>{
        event.preventDefault();
        const form=event.target;
        const name=form.itemName.value;
        const price=form.price.value;
        const img=form.itemImg.value;
        const deliveryTime=form.deliveryTime.value;
        const description=form.description.value;
        // console.log(itemImg,itemName,price,deliveryTime,description)
        const itemsInfo = {
            img,
            name,
            price,
            deliveryTime,
            description
        }



        fetch('http://localhost:5000/allItems', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(itemsInfo)
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.error(err));
    }

   
    return (
        <div className='w-1/2 mx-auto'>
            <form onSubmit={addItem} className='px-6 bg-teal-400 rounded mx-6 pt-1 my-12'>
                <h1 className='text-white font-bold text-xl mt-4  text-center'>Add Item</h1>
                <div className='w-52 h-0.5 mx-auto mb-2 bg-white'>
                    <hr />
                </div>
                <div className='grid grid-cols-1'>
                    <input className='border-2 mt-2 text-center rounded' type="text" name='itemName' placeholder='Item Name' required />
                    <input className='border-2 mt-2 text-center rounded' type="text" name='price' placeholder='Add Price' required />
                    <input className='border-2 mt-2 text-center rounded' type="text" name='itemImg' placeholder='Add Image URL' required />
                    <input className='border-2 mt-2 text-center rounded' type="text" name='deliveryTime' placeholder='Add Delivery Time' required />
                    <textarea className='border-2 mt-4 text-center rounded' name='description' placeholder='Add Description' required></textarea>
                </div>
                <div className='mt-2'>
                    <button type='submit' className='bg-teal-600 text-white font-bold py-2 px-3 rounded-xl mt-1 mb-4'>Add</button>
                </div>
            </form>
        </div>
    );
};

export default AddItems;