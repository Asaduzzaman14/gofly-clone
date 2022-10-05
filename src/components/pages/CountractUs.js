import React from 'react';

const CountractUs = () => {
    return (
        <div>
            <div className='bg-[#555] '>
                <div className='mx-auto w-[1100px] '>
                    <h2 className='text-start font-medium  py-4 text-white  text-2xl'>Contact Us</h2>
                </div>
            </div>


            <div className='grid grid-cols-1 lg:grid-cols-2 mt-4  w-[1100px] mx-auto'>
                <div className='grid gap-3'>
                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        <input type="text" placeholder="Your Name" className="input input-bordered input-md w-full max-w-lg" />
                        <input type="email" placeholder="Your Name" className="input input-bordered input-md w-full max-w-lg" />
                    </div>

                    <input type="number" placeholder="Your Name" className="input input-bordered input-md w-full max-w-lg" />
                    <input type="text" placeholder="Your Name" className="input input-bordered input-md w-full max-w-lg" />
                    <input type="subject" placeholder="Your Name" className="input input-bordered input-md w-full max-w-lg" />
                    <textarea type="text" placeholder="Your Name" className="input input-bordered input-md w-full max-w-lg" />
                </div>

                <div>
                    <div>
                        <h4>Have Questions? Call Us !</h4>
                        <h5>01713-289172</h5>
                    </div>
                    <div>
                        <h4>Write us on !</h4>
                        <h5>support@goflybd.com</h5>
                    </div>
                    <div>
                        <h4>Address</h4>
                        <a href="_#"> 1/1, Shukrabad, Mirpur Road,
                            Beside New Model College, Dhaka,
                            Bangladesh, 1207 </a>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default CountractUs;