import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import icon1 from '../assets/departure-flight.png'
import icon2 from '../assets/flight-reverse.png'
import icon3 from '../assets/holiday-vacation.png'
import icon4 from '../assets/hotel-icon.png'
import icon5 from '../assets/Smiley-face.png'
import icon6 from '../assets/Smiley-face.png'
import background from '../assets/why-book-with-gofly.jpg'


const Gofly = () => {
    return (
        <div
            style={{
                background: `url(${background})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: "cover",

            }}
            className=' text-white p-5'>
            <h2 className='text-3xl m-6 font-semibold '><span><FaPaperPlane /> </span> Why Book with <span>GOFLY</span> Limited ?</h2>

            <div className=' grid grid-cols-1 lg:grid-cols-3'>
                <div className='p-3'>
                    <img className='w-[70px] mx-auto text-white' src={icon2} alt="" />
                    <h3 className='text-[18px] font-medium my-[10px] '>Book Cheap Air tickets to any destination across the world.</h3>
                    <p className='text-sm my-[10px] '>Best Price Guarantee.</p>
                </div>

                <div className='p-3'>
                    <img className='w-[70px] mx-auto text-white' src={icon2} alt="" />
                    <h3 className='text-[18px] font-medium my-[10px] '>Book Cheap Air tickets to any destination across the world.</h3>
                    <p className='text-sm my-[10px] '>Best Price Guarantee.</p>
                </div>
                <div className='p-3'>
                    <img className='w-[70px] mx-auto text-white' src={icon2} alt="" />
                    <h3 className='text-[18px] font-medium my-[10px] '>Book Cheap Air tickets to any destination across the world.</h3>
                    <p className='text-sm my-[10px] '>Best Price Guarantee.</p>
                </div>


            </div>
        </div>
    );
};

export default Gofly;