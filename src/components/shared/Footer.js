import React from 'react';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import { FiFacebook } from 'react-icons/fi';
import { ImYoutube2 } from 'react-icons/im';
import ssl from '../assets/ssl-cl.png'
import iata from '../assets/iata-1-logo.png'

const Footer = () => {
    return (
        <div className='bg-[#dae3ea] p-10'>

            <div className='mx-auto max-w-[1100px]'>
                <div className='grid  grid-cols-2 content-center p-5'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 content-center  '>

                        <h2 className='mb-2'>Newsletters </h2>

                        <div className='flex content-center'>
                            <input type="text" className='p-1  rounded' placeholder='Your Email' />
                            <button className='bg-secondary inline-block rounded mt-2 p-1 text-white'>Subscrive</button>
                        </div>

                    </div>


                    <div className='flex justify-end mt-3 text-lg gap-3'>
                        <span>Follow Us</span>
                        <AiOutlineTwitter />
                        <BsInstagram />
                        <FiFacebook />
                        <ImYoutube2 />
                    </div>

                </div>

                <hr className='border-x-2 mt-4 border-gray-700' />

                <div className='grid grid-cols-1 lg:grid-cols-4 text-start'>

                    <div >
                        <h4 className='font-semibold my-4'>CUSTOMER CARE</h4>
                        <ul>
                            <li className='py-1.5'>About Us</li>
                            <li>Contact Us</li>
                            <li>Bank Details</li>
                        </ul>
                    </div >
                    <div >
                        <h4 className='font-semibold my-4'>CUSTOMER CARE</h4>
                        <ul>
                            <li className='py-1.5'>About Us</li>
                            <li>Contact Us</li>
                            <li>Bank Details</li>
                        </ul>
                    </div >
                    <div >
                        <h4 className='font-semibold my-4'>CUSTOMER CARE</h4>
                        <ul>
                            <li className='py-1.5'>About Us</li>
                            <li>Contact Us</li>
                            <li>Bank Details</li>
                        </ul>
                    </div >
                    <div >
                        <h4 className='font-semibold my-4'>CUSTOMER CARE</h4>
                        <ul>
                            <li className='py-1.5'>About Us</li>
                            <li>Contact Us</li>
                            <li>Bank Details</li>
                        </ul>
                    </div >
                </div >

                <hr className='border-x-2 mt-4 border-gray-700' />

                <div className='mt-10 grid grid-cols-1 lg:grid-cols-2'>
                    <div>
                        <img src={ssl} alt="" />
                    </div>
                    <div>
                        <img className='w-20 mx-auto' src={iata} alt="" />
                    </div>
                </div>
                <span>Copyright &copy; 2022 goFLY.com.bd . All Rights Reserved.</span>
            </div >
        </div>
    );
};

export default Footer;