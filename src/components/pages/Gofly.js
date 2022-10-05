import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import icon1 from '../assets/plane-ticket.png'
import icon2 from '../assets/flight-reverse.png'
import icon3 from '../assets/holiday-vacation.png'
import icon4 from '../assets/hotel-icon.png'
import icon5 from '../assets/Smiley-face.png'
import icon6 from '../assets/departure-flight.png'
import background from '../assets/why-book-with-gofly.jpg'


const Gofly = () => {
    return (
        <div
            style={{
                background: `url(${background})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: "cover",

            }}
            className=' text-white p-5 lg:p-10  mt-5 '>

            <div className='mx-auto max-w-[1100px] pt-7'>
                <div className='relative '>

                    <span className=' text-3xl absolute '>
                        <FaPaperPlane />
                    </span>
                    <span className='text-3xl ml-10 font-semibold  '>
                        Why Book with <span>GOFLY</span> Limited ?
                    </span>
                </div>

                <div className=' grid grid-cols-1 lg:grid-cols-3'>
                    <div className='p-3 lg:w-[300px]'>
                        <img className='w-[70px] mx-auto text-white' src={icon1} alt="" />
                        <h3 className='text-[18px] font-medium my-[10px] '>Book Cheap Air tickets to any destination across the world.</h3>
                        <p className='text-sm my-[10px] '>Best Price Guarantee.</p>
                    </div>

                    <div className='p-3 lg:w-[300px]'>
                        <img className='w-[70px] mx-auto text-white' src={icon2} alt="" />
                        <h3 className='text-[18px] font-medium my-[10px] '>Choose from more than 1000 Best rated Hotels.</h3>
                        <p className='text-sm my-[10px] '>From cheap hotels to luxurious resorts..</p>
                    </div>
                    <div className='p-3 lg:w-[300px]'>
                        <img className='w-[70px] mx-auto text-white' src={icon3} alt="" />
                        <h3 className='text-[18px] font-medium my-[10px] '>Get the Best deals on Holiday Packages to multiple.</h3>
                        <p className='text-sm my-[10px] '>destinations.</p>
                    </div>

                    {/* 2 */}
                    <div className='p-3 lg:w-[300px]'>
                        <img className='w-[70px] mx-auto text-white' src={icon4} alt="" />
                        <h3 className='text-[18px] font-medium my-[10px] '>Find Budget Airlines and Full service Airlines in one screen.</h3>
                    </div>

                    <div className='p-3 lg:w-[300px]'>
                        <img className='w-[70px] mx-auto text-white' src={icon5} alt="" />
                        <h3 className='text-[18px] font-medium my-[10px] '>Experience the convenience and savings.</h3>
                        <p className='text-sm my-[10px] '>Browse cheap flight tickets in a user-friendly website.</p>
                    </div>
                    <div className='p-3 lg:w-[300px] '>
                        <img className='w-[70px] mx-auto text-white' src={icon6} alt="" />
                        <h3 className='text-[18px] font-medium text-justify my-[10px] '>Book Cheap Air tickets to any destination across the world.</h3>
                        <p className='text-sm my-[10px] '>Book Airline tickets from a wide choice of Airlines.</p>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Gofly;