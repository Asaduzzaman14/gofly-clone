import React from 'react';

const Banner = () => {
    return (
        <div className='mx-auto max-w-[1100px]'>

            <form className=' max-w-[600px]'>
                {/* <label htmlFor="from">LEAVING FORM</label>
                <input type="text" />

                <label htmlFor="from">LEAVING FORM</label>
                <input type="text" />

                <label htmlFor="from">LEAVING FORM</label>
                <input type="text" />

                <input type="text" /> */}

                <div className='grid grid-cols-2 gap-5'>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">LEAVING FORM</span>
                        </label>
                        <input type="text" placeholder="Dhaka (Zia inti Airport, DAC)" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">GOING TO</span>
                        </label>
                        <input type="text" placeholder="Kolkata (Netaji Subhas Chandra Bose Intl), CCU" class="input input-bordered" />
                    </div>

                </div>

                <div className='grid grid-cols-2  gap-5'>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">DEPART DATE</span>
                        </label>
                        <input type="text" placeholder="Depart Date" class="input input-bordered" />
                    </div>

                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">RETURN DATE</span>
                        </label>
                        <input type="text" placeholder="Return Date" class="input input-bordered" />
                    </div>

                </div>

                <input className='p-2 bg-secondary w-full mt-3 rounded-sm' type="submit" value={"SEARCH FLIGHT"} />




                {/* 

                <div className='input-group-md'>
                    <label htmlFor="from">LEAVING FORM</label>
                    <input className='border-2 m-2 w-full p-1 rounded-lg border-black' type="text" placeholder='Dhaka' />
                </div>


                <label htmlFor="from" className='text-start'>LEAVING FORM
                    <input className='border-2 m-2 w-full p-1 rounded-lg border-black' type="text" placeholder='Dhaka' />
                </label>
                <input className='border-2 m-2 w-full p-1 rounded-lg border-black' type="password" name="" id="" placeholder='Password' /> */}

            </form>
        </div>
    );
};

export default Banner;