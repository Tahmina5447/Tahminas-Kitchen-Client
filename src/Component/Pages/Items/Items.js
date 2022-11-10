import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Items = () => {
    const [allItems, steAllItems] = useState([])
    const [loading,setLoading]=useState(true)
    

    useEffect(() => {
        
        fetch('http://localhost:5000/allItems')
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                steAllItems(data)
            })

    }, [])

    if(loading){
        return <div className="mx-auto my-8 w-20 h-20 border-4 border-dashed rounded-full animate-spin dark:border-teal-400"></div>
    }
    return (
        <div>
            <title>Items-Tahmina's Kitchen</title>
        <div className='my-20'>
            <h1 className='text-center font-bold text-teal-400 text-3xl mb-3 mt-12'>Our Items</h1>
            <div className='w-96 h-0.5 mx-auto mb-12 bg-teal-400'>
                <hr />
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 '>
                {
                    allItems.map(item =>
                        <div className="card bg-base-100  shadow-xl border-2">
                            <figure>< img className='h-48 w-full' src={item.img} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="font-bold text-xl">{item.name}</h2>
                                <p className='font-bold text-teal-400 '>Price: <span>{item.price}</span></p>
                                <p>{(item.description).slice(0,100)}...</p>
                                <div className="mt-8">
                                    <Link className='text-white py-4 rounded-xl px-6 bg-teal-400 font-bold' to={`/details/${item._id}`}>SEE DETAILS</Link>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
        </div>
    );
};

export default Items;