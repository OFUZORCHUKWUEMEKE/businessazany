import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className='sticky top-0 bg-white z-30'>
            <div className="md:flex justify-around items-center h-[13vh] m-auto w-[85%]">
                <div className="flex-[0.5%]">
                    <Link to="/">
                        <h1 className="text-blue-500 text-xl font-semibold">Azany Business</h1>
                    </Link>
                </div>
                <div className="md:flex  hidden gap-5">
                    <div className="md:flex gap-5">
                        <Link to="/">
                            <p className="hover:hover px-3 py-2">Home</p>
                        </Link>
                        <Link to="/listofservices">
                            <p className="hover:hover px-3 py-2">Services</p>
                        </Link>
                        <Link to="/blog">
                            <p className="hover:hover px-3 py-2">Blog</p>
                        </Link>
                    </div>

                    <div className="mx-5 md:flex gap-5">
                        <Link to="/faq">
                            <p className="hover:hover px-3 py-2">FAQ</p>
                        </Link>
                        <Link to="/contact">
                            <p className="hover:hover px-3 py-2">Contact</p>
                        </Link>
                        <Link to="/emailVerification" className="flex items-center ">
                            <p className="hover:hover px-3 py-2">EN</p>
                            <div className="flag"></div>
                        </Link>
                    </div>
                </div>

                <div className="gap-5 md:flex hidden">
                    <Link to="/login">
                        <p className="hover:hover px-3 py-2">Login</p>
                    </Link>
                    <Link to="/signup">
                        <p className="text-red-500 border border-red-500 rounded px-2 py-2">Create Account</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;