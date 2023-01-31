import React from 'react';
import Navbar from '../components/Navbar';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { FaFacebook, FaInstagram } from "react-icons/fa"
import { AiFillTwitterCircle } from "react-icons/ai"
import { BsInstagram } from "react-icons/bs"
import { SiDiscord } from "react-icons/si"
import Footer from '../components/Footer';
import { Input } from "@material-tailwind/react";
import { Textarea } from "@material-tailwind/react";
import { TbPhoneCall } from "react-icons/tb"
import { TextField } from '@mui/material';

const Contact = () => {
    return (
        <div>
            <Navbar />
            <div className="m-auto w-[85%] mb-[12%]">
                <div className="text-center space-y-2 py-[5%]">
                    <h1 className="text-3xl font-bold">Contact Us</h1>
                    <p className="">Any question or remarks? Just write us a message!</p>
                </div>

                <div className="shadow rounded-xl p-3 md:flex items-center my-[12% gap-10 md:space-y-0 space-y-8">
                    <div className="bg-[#0063E5] hidden  text-white pl-8 font-light md:flex flex-col justify-between gap-20 rounded-xl xl:w-[40%] py-12 md:h-[80vh]">
                        <div className="space-y-2">
                            <h1 className="font-semibold text-2xl">Contact Information</h1>
                            <p className="font-light text-md text-[#C9C9C9]">Say something to start a live chat!</p>
                        </div>

                        <div className="">
                            <li class="mb-4 flex items-center gap-5">
                                < TbPhoneCall className='text-white text-2xl' />
                                <p class="">+1012 3456 789</p>
                            </li>
                            <li class="mb-4 flex items-center gap-5">
                                <EmailIcon />
                                <p class="">demo@gmail.com</p>
                            </li>
                            <li class="mb-4 flex items-center gap-5">
                                <LocationOnIcon />
                                <p class="">132 Dartmouth Street Boston, <br /> Massachusetts 02156 United States</p>
                            </li>
                        </div>
                        <div className="md:flex justify-between items-center">
                            <div className="flex items-center  gap-4">
                                <AiFillTwitterCircle className='text-3xl bg-white text-blue-600 rounded-full p-1 ' />
                                <FaInstagram className='text-3xl bg-white text-blue-600 rounded-full p-1 ' />
                                <SiDiscord className='text-3xl bg-white text-blue-600 rounded-full p-1 ' />
                            </div>
                            <div className="md:flex hidden">
                                <div className=" z-0">
                                    <div className="bg-blue-800 small-circle rounded-full  "></div>
                                </div>
                                <div className="">
                                    <div className="small-circle rounded-l-full rounded-br-xl rounded-b-full rounded-t-full rounded-tr-full  bg-blue-900 "></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form space-y-8 md:w-[50%]">
                        <div className="md:flex items-center gap-5 md:space-y-0 space-y-8">
                            {/* <div className="w-[100%]">
                                <Input label="First Name" className='bg-gray-50 h-[8vh]' />
                            </div> */}
                            <div className="w-[100%]">
                                <TextField label="First Name" name='first_name' type='number' variant="outlined" className='w-full mx-auto' />
                            </div>
                            <div className="w-[100%]">
                                <TextField label="Last Name" name='last_name' type='number' variant="outlined" className='w-full mx-auto' />
                            </div>
                        </div>

                        <div className="md:flex items-center gap-5 md:space-y-0 space-y-8">
                            <div className="w-[100%]">
                                <TextField label="Email Address" name='email' type='email' variant="outlined" className='w-full mx-auto' />
                            </div>
                            <div className="w-[100%]">
                                <TextField label="Phone Number" name='phone_number' type='number' variant="outlined" className='w-full mx-auto' />
                            </div>
                        </div>
                        <div className="">
                            <TextField label="message" name='phone_number' type='number' variant="outlined" className='w-full mx-auto' />
                        </div>
                        <div className="">
                            <Textarea label="Type your message here..." className='bg-gray-100 ring-1 h-[20vh] resize-none' />
                        </div>
                        <div className="flex md:justify-end justify-center">
                            <button type='submit' className="secondary-button w-full md:w-2/5">Send message</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;