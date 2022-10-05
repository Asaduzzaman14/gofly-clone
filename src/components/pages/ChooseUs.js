import React from 'react';
import { AiFillDollarCircle } from 'react-icons/ai';
import { MdFlight, MdSupportAgent } from 'react-icons/md';

const ChooseUs = () => {
    return (
        <div className='mx-auto max-w-[1100px]'>
            <div className='grid grid-cols-1 lg:grid-cols-3 mt-5 gap-4 p-6'>

                <div className='flex'>
                    <label className="btn btn-circle bg-black text-2xl  text-white">
                        <MdFlight />
                    </label>
                    <div className='ml-3 text-start'>
                        <h2 className='font-bold text-sm '>EASY BOOKING</h2>
                        <p className='font-sm '> We offer easy and convenient flight bookings with attractive offers</p>
                    </div>
                </div>

                <div className='flex'>

                    <label className="btn btn-circle bg-black text-2xl  text-white">
                        <AiFillDollarCircle />
                    </label>  <div className='ml-3 text-start'>
                        <h2 className='font-bold text-sm '>LOWEST PRICE</h2>
                        <p className='font-sm '>We ensure low rates on hotel reservation, holiday packages and on flight tickets.</p>
                    </div>
                </div>
                <div className='flex'>
                    <label className="btn btn-circle bg-black text-2xl  text-white">
                        <MdSupportAgent />
                    </label>
                    <div className='ml-3 text-start lg:text-start'>
                        <h2 className='font-bold text-sm '>24X7 SUPPORT</h2>
                        <p className='font-sm font-medium'> Get assistance 24/7 on any kind of travel related query. We are happy to assist you.</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default ChooseUs;