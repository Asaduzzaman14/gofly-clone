import React from 'react';
import { AiFillDollarCircle } from 'react-icons/ai';
import { MdFlight, MdSupportAgent } from 'react-icons/md';

const ChooseUs = () => {
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-3 mt-5 gap-4 p-6'>

                <div className='flex'>
                    <span className='bg-black p-4 rounded-full lg:rounded-full  text-white  text-4xl'><MdFlight /></span>

                    <div className='ml-3 text-start'>
                        <h2 className='font-bold text-sm '>EASY BOOKING</h2>
                        <p className='font-sm '> We offer easy and convenient flight bookings with attractive offers</p>
                    </div>
                </div>

                <div className='flex'>
                    <span className='bg-black p-4 rounded-full lg:rounded-full text-white text-4xl  '><AiFillDollarCircle /></span>
                    <div className='ml-3 text-start'>
                        <h2 className='font-bold text-sm '>EASY BOOKING</h2>
                        <p className='font-sm '> We offer easy and convenient flight bookings with attractive offers</p>
                    </div>
                </div>
                <div className='flex'>
                    <span className='bg-black p-4 rounded-full lg:rounded-full text-white  text-4xl'><MdSupportAgent /></span>
                    <div className='ml-3 text-start lg:text-start'>
                        <h2 className='font-bold text-sm '>EASY BOOKING</h2>
                        <p className='font-sm font-medium'> We offer easy and convenient flight bookings with attractive offers</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ChooseUs;