import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import Toast from '../../Shared/Toast/Toast';

const MyReviews = () => {
    const { user, logOut } = useContext(AuthContext)
    const [currentUserReviews, setCurrentUserReviews] = useState([]);
    const [emptymessage, setEmptyMessage] = useState(true)
    const [edited, setEdited] = useState()



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

                setCurrentUserReviews(data)
                setEmptyMessage(false)

            })
            .catch(err => console.error(err))
    }, [user?.email, logOut])


    if (currentUserReviews.length === 0) {
        return <p className='text-3xl my-10'>No reviews were added</p>
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
        event.preventDefault();
        const editedmessage = event.target.text.value;
        console.log(editedmessage)
        fetch(`https://tahminas-kitchen.vercel.app/userReview/${edited}`, {
            method: 'PUT',
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
                    approving.message = editedmessage

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
                        currentUserReviews.map(rev => <div className='bg-white flex my-2 py-2'>
                            <div className=' w-1/4 '>
                                <div className='h-14 w-14 avatar'><img className='w-full h-full  rounded-full' src={rev.itemImg} alt="" /></div>
                                <div className="font-bold">{rev.itemName}</div>
                                <div className="text-sm text-teal-600">Rating: {rev.rating}</div>
                            </div>
                            <div className='w-2/4 '>
                                <div>
                                    <span className='font-bold'>My-Review:</span>

                                </div>
                                <div className='my-2'>
                                    {rev.message}
                                </div>
                                <div>
                                    <label onClick={() => edit(rev._id)} htmlFor="my-modal" className="btn btn-xs ml-2">Edit</label>
                                </div>
                                {/* modal */}
                                {rev &&
                                    <>
                                        <input type="checkbox" id="my-modal" className="modal-toggle" />
                                        <div className="modal">
                                            <div className="modal-box">
                                                <label htmlFor="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
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
                            </div>
                            <div className='w-1/4 flex items-center '>
                                <div onClick={() => { handleDelete(rev._id) }}>
                                    <button type='submit' className='btn btn-error btn-xs '>Cancel</button>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
                <Toast></Toast>
            </div>
        </div>
    );
};

export default MyReviews;