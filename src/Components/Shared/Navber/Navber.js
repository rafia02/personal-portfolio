import React from 'react';
import { Link } from 'react-router-dom'


const Navber = () => {
    const manuItem = <>
        <li><Link className='font-bold text-white' to="/">Home</Link></li>
        <li><Link className='font-bold text-white' to="/about">About Me</Link></li>
        <li><Link className='font-bold text-white' to="/blog">Blog</Link></li>
        <li><Link className='font-bold text-white' to="/contact">Contact</Link></li>


    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 rounded-box w-52">
                        {manuItem}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-4xl font-bold text-white">Rafia Binte Rashed</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                    {manuItem}

                </ul>
            </div>
        </div>
    );
};

export default Navber;