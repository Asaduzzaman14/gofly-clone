import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/gofly-logo1.png'

import { MdHotel, MdOutlineFlight } from 'react-icons/md';
import { FaClinicMedical } from 'react-icons/fa';
import { AiTwotoneHome } from 'react-icons/ai';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';



const Navbar = () => {
    const [user] = useAuthState(auth)

    const logout = () => {
        signOut(auth)
        localStorage.removeItem('accessToken');
    }
    const menuItem = <>
        <li><Link className='rounded-lg text-xl' to='/home'><span><AiTwotoneHome /></span> Home</Link></li>
        <li> <Link className='rounded-lg text-xl' to='/home'> <span><MdOutlineFlight /> </span>FLIGHTS</Link></li>
        <li><Link className='rounded-lg text-xl' to='/home'><span> <MdHotel /></span> HOTELS</Link></li>
        <li><Link className='rounded-lg text-xl' to='/medical'><span><FaClinicMedical /></span> MEDICAL</Link></li>

    </>

    const topMenuItem = <>
        <li><Link className='rounded-lg text-xl' to='/about-us'>About Us</Link></li>
        <li><Link className='rounded-lg text-xl' to='/contract-us'>Contract Us</Link></li>
        {/* <li><Link className='rounded-lg text-xl' to='/login'>Agent Login</Link></li> */}

        <li>{user ? <>
            <Link to='/dashborad' className='btn btn-ghost text-xl'>Dashborad</Link>
            <button onClick={logout} className='btn btn-ghost text-xl' >Sign out</button>
        </>
            : <div>
                <Link className='rounded-lg text-xl' to='/login'>Agent Login</Link>
                <li><Link className='rounded-lg text-xl' to='/login'>Customer Login</Link></li>
            </div>
        }

        </li>


    </>


    return (
        <div className='mx-auto max-w-[1100px]'>
            <div className=''>
                <div className=" grid grid-cols-1 justify-items-end ">
                    <ul className="menu menu-horizontal p-0 bg-base-200 border border- ">
                        {topMenuItem}
                    </ul>
                </div>
            </div>


            <div className="navbar h-28  z-10  shadow-sm">

                <div className="navbar-start">
                    <span className=""><img src={logo} alt="" /></span>
                </div>


                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 ">
                        {menuItem}
                    </ul>
                </div>

                <div className="navbar-center">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu  menu-compact dropdown-content mt-5 p-5 shadow-lg bg-primary text-white rounded-box w-52">
                            {menuItem}
                        </ul>
                    </div>
                </div>

            </div>

        </div>

    );
};

export default Navbar;


/* 
https://i.ibb.co/rQckYzY/tool2.jpg
https://i.ibb.co/9ZbYzGN/tool3.jpg
https://i.ibb.co/PzTgjXQ/tool4.jpg
https://i.ibb.co/BPDvdvx/tool5.jpg
https://i.ibb.co/KDnstdZ/tool6.jpg
https://i.ibb.co/f8SjyVj/tool8.jpg */