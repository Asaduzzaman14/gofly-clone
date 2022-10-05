import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const Testmonial = () => {
    const reviews = [
        {
            _id: 1,
            review: 'Simply hte best! Very easy to book. Have Booked server flights and hotls Awsome GIU, THe best so far',
            name: "sagor",
            title: 'customer',
            rating: 4
        },
        {
            _id: 2,
            review: 'Simply hte best! Very easy to book. Have Booked server flights and hotls Awsome GIU, THe best so far',
            name: "sagor",
            title: 'customer',
            rating: 4
        },
        {
            _id: 3,
            review: 'Simply hte best! Very easy to book. Have Booked server flights and hotls Awsome GIU, THe best so far',
            name: "sagor",
            title: 'customer',
            rating: 4
        },
    ]


    return (
        <div className='my-10 mx-auto max-w-[1100px]'>

            <div className='grid grid-cols-1 lg:grid-cols-2'> {
                reviews.map(review => {
                    return <div className='w-[500px] mx-auto'>
                        <FaQuoteLeft className='mx-auto mt-5 mb-2' />
                        <p className='text-gray-400 text-sm'>{review.review}</p>
                        <h5 className='text-lg'>{review.name}</h5>
                        <span className='text-xs'>{review.title}</span>
                        <br />
                        <span>{review.rating}</span>
                    </div>
                })
            }

            </div>
        </div>
    );
};

export default Testmonial;