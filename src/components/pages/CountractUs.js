import React from 'react';

const CountractUs = () => {
    return (
        <div className='mx-auto mx-w-[1100px]  p-4 mb-10'>
            <div className='bg-[#555] '>
                <div className='mx-auto w-[1100px] '>
                    <h2 className='text-start font-medium  py-4 text-white  text-2xl'>Contact Us</h2>
                </div>
            </div>


            <div className='grid grid-cols-1 lg:grid-cols-2 mt-4  w-[1100px] mx-auto'>
                <form className='grid gap-3'>
                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        <input type="text" placeholder="Your Name" className="input input-bordered input-md w-full max-w-lg lg:max-w-xm" />
                        <input type="email" placeholder="Your Email Address" className="input input-bordered input-md w-full max-w-lg lg:max-w-sm" />
                    </div>

                    <input type="number" placeholder="Phone Number" className="input input-bordered input-md w-full max-w-lg" />
                    <input type="text" placeholder="Subject" className="input input-bordered input-md w-full max-w-lg" />
                    <textarea type="text" placeholder="Message *" className="input input-bordered input-md w-full max-w-lg" />
                    <input className='bg-secondary w-32 py-2 mx-auto cursor-pointer text-white rounded hover:bg-secondary/[.9] ' type="submit" value={"Send Message"} />
                </form>

                <div className='text-start lg:ml-12 grid gap-5'>
                    <div>
                        <h4 className='text-primary text-xl font-medium mb-2 '>Have Questions? Call Us !</h4>
                        <h5>01713-289172</h5>
                    </div>
                    <div>
                        <h4 className='text-primary text-xl font-medium mb-2 '>Write us on !</h4>
                        <h5>support@goflybd.com</h5>
                    </div>
                    <div>
                        <h4 className='text-primary text-xl font-medium mb-2 '>Address</h4>
                        <a href="_#"> 1/1, Shukrabad, Mirpur Road,
                            <br />
                            Beside New Model College, Dhaka,
                            <br />
                            Bangladesh, 1207 </a>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default CountractUs;