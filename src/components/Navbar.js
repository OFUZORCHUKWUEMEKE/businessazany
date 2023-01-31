import { Avatar, IconButton } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { useLocation } from 'react-router-dom'
import { gsap, Expo } from 'gsap'
import CancelIcon from '@mui/icons-material/Cancel';
const Navbar = () => {

    const location = useLocation()
    let d = new Date()
    const hour = d.getHours()
    const minutes = d.getMinutes()
    const seconds = d.getSeconds()
    let name = useRef(null)
    let menuOne = useRef(null)
    let time = useRef(null)
    // console.log(menu.current)
    const t1 = gsap.timeline()

    let header = useRef(null)
    let menu = useRef(null)
    let web = useRef(null)
    let lagos = useRef(null)
    let menuRef = useRef(null)
    let home = useRef(null)
    let about = useRef(null)
    let blog = useRef(null)
    let facebook = useRef(null)
    let linkedin = useRef(null)
    let twitter = useRef(null)

    const menuToggle = () => {
        const t2 = gsap.timeline()
        t2.to(menuRef, {
            duration: 1,
            y: "0%",
            ease: Expo.easeInOut
        })
        // t2.from([home, about, blog], {
        //     opacity: 0,
        //     y: 20,
        //     stagger: .4
        // })
        t2.from(header, {
            opacity: 0
        })

    }
    const menuClose = () => {
        const t2 = gsap.timeline()
        t2.to(menuRef, {
            duration: 1,
            y: "-100%",
            ease: Expo.easeInOut
        })

        // t2.from()
        // t2.play()
    }
    // useEffect(() => {
    //     t1.from([name.current, menu.current, time.current], {
    //         stagger: {
    //             amount: .3
    //         },
    //         opacity: 0,
    //         y: -20,
    //         duration: .9
    //     })
    // }, [location.pathname])


    const token = JSON.parse(localStorage.getItem('token'))
    const { user } = useSelector((state) => state.user)
    // console.log(user)
    return (
        <div className='sticky top-0 bg-white z-30'>
            <div className='menu scroll-m-0' ref={el => menuRef = el}>
                <div className='absolute top-5 right-10'>
                    <p className='font-bold text-[28px] cursor-pointer text-white' onClick={menuClose}>x</p>
                    {/* <IconButton onClick={menuClose}>
                         <CancelIcon/>
                    </IconButton> */}
                </div>
                <div className='flex justify-center items-center w-full h-[100vh]'>
                    <div className='w-4/5 mx-auto'>
                        <h1 className='text-white text-center main'>Azany Business</h1>
                        <p className='text-center text-white'>Lorem ipsum dolor sit amet. Sed aliquid veritatis qui perspiciatis sint est veniam quasi </p>
                    </div>
                    <div>
                        
                    </div>

                    {/* <div className='flex-1'>
                        <img src="/images/emeke (2).jpeg" />
                    </div> */}
                </div>
            </div>
            <div className="md:flex justify-around items-center py-5 m-auto w-[85%]">
                <div className="flex-[0.5%] flex justify-between items-center">
                    <Link to="/">
                        <h1 className="text-blue-500 text-sm md:text-xl font-semibold">Azany Business</h1>
                    </Link>
                    <div className="block md:hidden">
                        <IconButton onClick={() => menuToggle()}>
                            <MenuIcon />
                        </IconButton>
                    </div>
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


                {token && user ? (
                    <div className="gap-5 md:flex hidden">
                        {/* <Link to="/login">
                            <p className="hover:hover px-3 py-2">Login</p>
                        </Link> */}
                        <Link to="/profile">
                            <div className='flex items-center space-x-2'>
                                <Avatar alt={user[0]?.profile[0]?.first_name} />
                                <p className="rounded px-2 py-2 text-sm">{user[0]?.profile[0]?.first_name}</p>
                            </div>
                        </Link>
                    </div>
                ) : (
                    <div className="gap-5 md:flex hidden">
                        <Link to="/login">
                            <p className="hover:hover px-3 py-2">Login</p>
                        </Link>
                        <Link to="/business/signup">
                            <p className="text-red-500 border border-red-500 rounded px-2 py-2">Create Account</p>
                        </Link>
                    </div>
                )}
                {/* <div className="gap-5 md:flex hidden">
                    <Link to="/login">
                        <p className="hover:hover px-3 py-2">Login</p>
                    </Link>
                    <Link to="/business/signup">
                        <p className="text-red-500 border border-red-500 rounded px-2 py-2">Create Account</p>
                    </Link>
                </div> */}
            </div>
        </div>
    );
};

export default Navbar;