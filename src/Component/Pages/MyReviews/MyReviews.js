import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import Toast from '../../Shared/Toast/Toast';

const MyReviews = () => {
    const { user, logOut } = useContext(AuthContext)
    const [currentUserReviews, setCurrentUserReviews] = useState([]);
    const [emptymessage, setEmptyMessage] = useState('')
    const [edited, setEdited] = useState()
    const [loading, setLoading] = useState(true)


    // get user review
    useEffect(() => {
        fetch(`https://tahminas-kitchen.vercel.app/userReview?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }

                return res.json()
            })
            .then(data => {
                setLoading(false)
                setCurrentUserReviews(data)

                if (data.length === 0) {
                    setEmptyMessage('You have no review')
                }
            })
            .catch(err => console.error(err))
    }, [user?.email, logOut])



    // add loader
    if (loading) {
        return <div className="mx-auto my-8 w-20 h-20 border-4 border-dashed rounded-full animate-spin dark:border-teal-400"></div>
    }



    // add delete system
    const handleDelete = id => {
        fetch(`https://tahminas-kitchen.vercel.app/userReview/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    const remaining = currentUserReviews.filter(rev => rev._id !== id)
                    setCurrentUserReviews(remaining);

                }
            })
            .catch(err => console.error(err))
        tst();
    }


    // toast
    const tst = () => toast.success('Successfully Deleted.', { autoClose: 2000 })



    // update review
    const updatedReview = event => {
        const editedmessage = event.target.text.value;
        console.log(editedmessage)
        fetch(`https://tahminas-kitchen.vercel.app/userReview/${edited}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: editedmessage })

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = currentUserReviews.filter(rev => rev._id !== edited);
                    const approving = currentUserReviews.find(odr => odr._id === edited);
                    approving.status = edited

                    const newReview = [approving, ...remaining];
                    setCurrentUserReviews(newReview);
                }
            })
    }


    // edit review
    const edit = id => {
        setEdited(id)

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
                    <h1 className='text-4xl'>{emptymessage}</h1>
                    {
                        currentUserReviews.map(rev => <table className="table w-full mt-3">
                            <tbody>
                                <tr className=''>
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
                                        <label onClick={() => edit(rev._id)} htmlFor="my-modal" className="btn btn-xs ml-2">Edit</label>
                                        {/* modal */}
                                        {rev &&
                                            <>
                                                <input type="checkbox" id="my-modal" className="modal-toggle" />
                                                <div className="modal">
                                                    <div className="modal-box">
                                                        
                                                        <form onSubmit={updatedReview} >
                                                            <textarea name='text' className='border-2 mt-3' placeholder='Edit Here'></textarea>
                                                            <div className="modal-action">
                                                                <button ><label htmlFor="my-modal" className="btn">Done</label></button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </>

                                        }
                                    </td>
                                    <td className='1/3 text-center'>
                                        <label onClick={() => { handleDelete(rev._id) }}>
                                            <button type='submit' className='btn btn-ghost'>Cancel</button>
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