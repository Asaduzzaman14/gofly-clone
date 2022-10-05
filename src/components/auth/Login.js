import React from 'react';
import logo from '../assets/gofly-logo1.png'

const Login = () => {
    return (
        <div className='shadow my-5 grid grid-cols-1 lg:grid-cols-2 lg:w-[800px] w-96 mx-auto p-2 lg:p-5'>
            <div>
                <img className='w-40 mx-auto mt-10 mb-20' src={logo} alt="" />
                <p className=' my-5'>Login Using social media</p>
                <button className='btn bg-secondary text-white w-full mb-3'>Login with facebook</button>
                <button className='btn bg-red-500 text-white w-full mb-3'>Login with google</button>
            </div>

            <div className='grid content-around'>

                <div>
                    <h2 className='mb-3 text-2xl '>Login to your account</h2>
                    <p>Don't have any account?<span className='text-primary font-medium'>Create An Account</span> </p>
                </div>

                <form action="">
                    <input className='border-2 m-2 w-full p-1 rounded-lg border-black' type="password" name="" id="" placeholder='Password' />
                    <input className='border-2 m-2 w-full p-1 rounded-lg border-black' type="email" placeholder='Email' />
                    <input className='border-2 rounded-md p-2 m-2 w-full text-white cursor-pointer hover:bg-secondary/[.9] bg-secondary' type="submit" value="Login" />
                </form>

            </div>
        </div>
    );
};

export default Login;