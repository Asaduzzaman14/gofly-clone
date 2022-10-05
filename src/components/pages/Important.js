import React from 'react';

const Important = () => {
    return (
        <div className='bg-gray-200 pt-3 pb-7'>

            <div className='border-2 w-[600px] mx-auto lg:w-[1100px] h-20  bg-white '>
                <div className='grid grid-cols-12' >
                    <span className='col-span-3 lg:col-span-2 bg-primary p-4 text-white font-medium'>
                        Important
                        Information
                    </span>
                    <marquee direction="true" scrollamount="4" className="col-span-9 lg:col-span-10 p-6 text-red-700 px-2"><span className='text-[#337ab7]'>kind Reminder : -</span> We strongly recommend for International passengers to check the Entry Requirements/Travel Restrictions/Travel Advisory published by the governments of their origin and destination country before traveling.</marquee>
                </div>
            </div>

        </div>
    );
};

export default Important;