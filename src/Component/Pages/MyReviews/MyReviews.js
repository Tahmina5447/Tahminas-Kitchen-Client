import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const MyReviews = () => {
    const { user } = useContext(AuthContext)
    const [currentUserReviews, setCurrentUserReviews] = useState([]);
    console.log(currentUserReviews);

    useEffect(() => {
        fetch(`http://localhost:5000/userReview?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setCurrentUserReviews(data))
            .catch(err => console.error(err))
    }, [user?.email])
    return (
        <div className='my-20'>
            <h1 className='text-center font-bold text-teal-400 text-3xl mb-3 mt-12'>My Reviews</h1>
            <div className='w-96 h-0.5 mx-auto mb-12 bg-teal-400'>
                <hr />
            </div>
            <div className='bg-teal-400 p-12'>
                {
                    currentUserReviews.map(rev => <table className="table w-full mt-3">
                        <tbody>
                            <tr>
                                <td className='w-1/2'>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={rev.itemImg} alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{rev.itemName}</div>
                                            <div className="text-sm text-teal-600">Rating: {rev.rating}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className='w-1/2'><span className='font-bold'>My-Review:</span> {rev.message}</td>
                            </tr>
                        </tbody>
                    </table>)
                }
            </div>

        </div>
    );
};

export default MyReviews;