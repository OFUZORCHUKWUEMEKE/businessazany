import React from 'react';
import Navbar from '../components/Navbar';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import { Link } from "react-router-dom";
import { Input } from "@material-tailwind/react";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from '@mui/material/IconButton';

const SignUp = () => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <div className='overflow-x-hidden'>
            <Navbar />
            <div className='w-full flex justify-center'>
                <div className="mx-auto  text-sm py-12">
                    <div className="space-y-2 pb-8">
                        <h1 className="text-3xl font-bold">Create Account</h1>
                        <p className="">Create an account to partner with Azany Business</p>
                    </div>
                    <form action="" className="">
                        <div className="space-y-5">
                            <div>
                                <TextField label="First Name" id="outlined-size-normal" className='w-[100%] bg-gray-100 text-sm' />
                            </div>
                            <div>
                                <TextField label="Last Name" id="outlined-size-normal" className='w-[100%] bg-gray-100' />
                            </div>
                            <div>
                                <TextField label="Email address" id="outlined-size-normal" className='w-[100%] bg-gray-100' />
                            </div>
                            <div className=''>
                                <TextField label="Enter Password" id="outlined-size-normal" className='w-[100%] bg-gray-100' />
                            </div>
                            <div>
                                <TextField label="Confirm Password" id="outlined-size-normal" className='w-[100%] bg-gray-100' />
                            </div>
                            <div className="flex items-center text-sm ">
                                <Checkbox {...label} />
                                <p className="">By clicking ‘sign up’ I agree to <span className='font-semibold text-[#1B7CFC]'>Terms & Conditions</span></p>
                            </div>
                        </div>
                        <div className="py-5">
                            <button className='secondary-button my-3 py- bg-blue-500 w-[100%]'>Submit</button>
                            <p className="text-center py-2">Already have an account?<span className='font-semibold text-[#1B7CFC]'><Link to="emailVerification"> Log In</Link></span></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;