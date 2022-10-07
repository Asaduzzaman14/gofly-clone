import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashbord = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">

                    {/* <!-- Page content here --> */}
                    <h2 className='text-4xl text-cyan-600 font-semibold py-2'>Welcome to Your  Dashboard</h2>
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                    <ul className="bg-blue-900  text-white  font-semibold menu p-4 overflow-y-auto w-48  font-serif ">

                        <>
                            <li><Link to='myprofile'>My Profile</Link></li>
                            <li><Link to='addreview'>Add Review</Link></li>
                            <li><Link to='orders'>All Orders</Link></li>
                            <li><Link to='allFlight'>All Flight</Link></li>
                        </>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashbord;