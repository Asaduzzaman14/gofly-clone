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


            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <h2>Newsletters </h2>
                <div>
                    <input type="text" />
                    <button>Subscrive</button>
                </div>
                <div className='flex justify-end mt-3 text-lg'>
                    <span>Follow Us</span>
                    <AiOutlineTwitter />
                    <BsInstagram />
                    <FiFacebook />
                    <ImYoutube2 />
                </div>
            </div>

            <br />

            <div className='grid grid-cols-1 lg:grid-cols-4'>

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

            <hr className='border border-red-700' />

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
    );
};

export default Footer;