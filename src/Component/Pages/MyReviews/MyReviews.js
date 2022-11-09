import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import Toast from '../../Shared/Toast/Toast';

const MyReviews = () => {
    const { user,logOut } = useContext(AuthContext)
    const [currentUserReviews, setCurrentUserReviews] = useState([]);
    const [emptymessage, setEmptyMessage] = useState('')

    useEffect(() => {
        fetch(`http://localhost:5000/userReview?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res =>{
                if(res.status === 401 || res.status === 403){
                    return logOut();
                }

                return res.json()
            })
            .then(data => {
                setCurrentUserReviews(data)
                if (data.length === 0) {
                    setEmptyMessage('You did not add any review')
                }
            })
            .catch(err => console.error(err))
    }, [user?.email,logOut])


    const handleDelete = id => {
        fetch(`http://localhost:5000/userReview/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount>0) {
                    const remaining = currentUserReviews.filter(rev => rev._id !== id)
                    setCurrentUserReviews(remaining);

                }
            })
            .catch(err => console.error(err))
        tst();
    }
    const tst = () => toast.success('Successfully Deleted.', { autoClose: 2000 })


    const handleEdit=event=>{
        event.preventDefault();
        const message=event.target.editedReview.value;
        return message;
    }


    return (
        <div>
            <title>My Reviews-Tahmina's Kitchen</title>
        <div className='my-20'>
            <h1 className='text-center font-bold text-teal-400 text-3xl mb-3 mt-12'>My Reviews</h1>
            <div className='w-96 h-0.5 mx-auto mb-12 bg-teal-400'>
                <hr />
            </div>
            <div className='bg-teal-400 p-12'>
                <h1 className='text-white text-2xl font-bold'>{emptymessage}</h1>
                {
                    currentUserReviews.map(rev => <table className="table w-full mt-3">
                        <tbody>
                            <tr>
                                <td className='w-1/3'>
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
                                <td className='w-1/3'>
                                    <span className='font-bold'>My-Review:</span> {rev.message}
                                    <label htmlFor="my-modal" className="btn btn-xs ml-2">Edit</label>
                                        {/* moda */}
                                    <input type="checkbox" id="my-modal" className="modal-toggle" />
                                    <div className="modal">
                                        <form onSubmit={handleEdit} className="modal-box">
                                            <h3 className="font-bold text-lg">{rev.message}</h3>
                                            <textarea name='editedReview' className='border-2' placeholder='Edit Here'></textarea>
                                            <div className="modal-action">
                                                <button type='submit'><label htmlFor="my-modal" className="btn">Done</label></button>
                                            </div>
                                        </form>
                                    </div>
                                </td>
                                <td className='1/3 text-center'>
                                    <label onClick={() => { handleDelete(rev._id) }}>
                                        <button className='btn btn-ghost'>Cancel</button>
                                    </label>
                                </td>
                            </tr>
                        </tbody>
                    </table>)
                }
            </div>
            <Toast></Toast>
        </div>
        </div>
    );
};

export default MyReviews;