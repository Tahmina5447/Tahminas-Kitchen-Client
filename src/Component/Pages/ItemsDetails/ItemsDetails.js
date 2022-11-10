import { data } from 'autoprefixer';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import Toast from '../../Shared/Toast/Toast';



const ItemsDetails = () => {
    const { user } = useContext(AuthContext)
    const itemDetails = useLoaderData();
    const [review, setReview] = useState([]);
    // const [rid,setrid]=useState();
    const { img, price, deliveryTime, name, description, _id } = itemDetails;



    // add review
    const addReview =(event) => {
        const form = event.target;
        const userName = `${form.userName.value}`;
        const email = user?.email;
        const rating = form.rating.value;
        const userImg = form.userImg.value;
        const message = form.message.value;
        form.reset();


        const review = {
            item: _id,
            price,
            itemName: name,
            userName,
            email,
            message,
            userImg,
            rating,
            itemImg: img

        }


        if (user) {
            fetch('https://tahminas-kitchen.vercel.app/review', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(review)
            })
                .then(res => res.json())
                .then(data => console.log(data))
                .catch(err => console.error(err));
        }
        tst();
    }


    // get review


    useEffect(() => {
        fetch(`https://tahminas-kitchen.vercel.app/review?item=${itemDetails._id}`)
            .then(res => res.json())
            .then(data =>setReview(data))
               
                
           
            .catch(err => console.error(err))
    }, [itemDetails._id])
const tst=()=>toast.success("Review Added",{autoClose:2000})

    return (
        <div>
            <title>Item Details-Tahmina's Kitchen</title>
            {/* item details */}
            <div className='mx-auto lg:flex my-14 shadow-xl'>

                <div className='lg:w-1/2 sm-full'>
                    <img className='w-full h-96' src={img} alt="" />
                </div>
                <div className='lg:w-1/2 sm:full'>
                    <h2 className='text-teal-400 font-bold text-3xl mt-4 mb-2 text-center'>{name}</h2>
                    <div className='w-52 h-0.5 mx-auto mb-2 bg-teal-400'>
                        <hr />
                    </div>
                    <div className='mx-auto w-1/2'>
                        <div className=' mt-2 text-teal-400 flex '>
                            <p className='mr-3'>price: {price}</p>
                            <p className='mr-3'>Delivery-Time: {deliveryTime}</p>

                        </div>
                    </div>
                    <p className='text-center my-3 px-5'>{description}</p>

                </div>

            </div>

            {/* review section */}
            <h2 className='text-teal-400 font-bold text-3xl mt-4 mb-2 text-center'>Review</h2>
            <div className='w-52 h-0.5 mx-auto mb-8 bg-teal-400'>
                <hr />
            </div>
            <div className=' py-6 lg:flex border-2 bg-teal-400 mb-16'>

                {/* see review section */}
                <div className='lg:w-2/3 sm:w-full'>
                    <h1 className='text-white font-bold text-xl mt-4 mb-2 text-center'>Others Review</h1>
                    <div className='w-52 h-0.5 mx-auto mb-2 bg-white'>
                        <hr />
                    </div>

                    {/* review table */}

                    <div className='mx-6 mt-3'>
                        {
                            review.map(rev => <div className="overflow-x-auto w-full mt-3">
                                <table className="table w-full">
                                    <tbody>
                                        <tr>
                                            <td className='w-1/2'>
                                                <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={rev.userImg} alt="" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{rev.userName}</div>
                                                        <div className="text-sm text-teal-600">Rating: {rev.rating}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='w-1/2'><span className='font-bold'>Feedback:</span> {rev.message}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>)
                        }
                    </div>

                </div>
                {
                user?.email ?
                    <>
                        <form onSubmit={addReview} className='lg:w-1/3 sm:w-full bg-teal-600 rounded mx-6'>
                            <h1 className='text-white font-bold text-xl mt-4 mb-2 text-center'>Add Your Review</h1>
                            <div className='w-52 h-0.5 mx-auto mb-2 bg-white'>
                                <hr />
                            </div>
                            <input className='border-2 mt-2 text-center rounded' type="text" name='userName' placeholder='Name' required />
                            <input className='border-2 mt-2 text-center rounded' type="text" name='rating' placeholder='Add rating' required />
                            <input className='border-2 mt-2 text-center rounded' type="text" name='userImg' placeholder='Add Image URL' required />
                            <textarea className='border-2 mt-4 text-center rounded' name='message' placeholder='Add your message' required></textarea>
                            <div>
                                <button type='submit' className='bg-teal-400 text-white font-bold py-2 px-3 rounded-xl mt-1 mb-4'>Add</button>
                            </div>
                        </form>
                    </>
                    :
                    <>
                        <h1 className='text-white text-xl font-bold text-center'>Please Log In to add your review. <Link className='btn-link' to='/login'>Login</Link></h1>
                    </>
            }

            </div>
            <Toast></Toast>

        </div>
    );
};

export default ItemsDetails;