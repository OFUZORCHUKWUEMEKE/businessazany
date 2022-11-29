import React from 'react';
import Navbar from '../components/Navbar';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import { Link } from "react-router-dom";

const BusinessVerification = () => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <div className='overflow-x-hidden'>
            <Navbar />
            <div className='w-full flex justify-center'>
                <div className="mx-auto  text-sm py-12">
                    <div className="space-y-2 pb-8">
                        <h1 className="text-3xl font-bold">Business Account Verification</h1>
                        <p className="">Kindly fill your business details on this form</p>
                    </div>
                    <form action="" className="">
                        <div className="space-y-5">
                            <div>
                                <TextField label="Business Name" id="outlined-size-normal" className='w-[100%] bg-gray-100 text-sm' />
                            </div>
                            <div>
                                <TextField label="Business Phone Number 1" id="outlined-size-normal" className='w-[100%] bg-gray-100' />
                            </div>
                            <div>
                                <TextField label="Business Phone Number 2" id="outlined-size-normal" className='w-[100%] bg-gray-100' />
                            </div>
                            <div className=''>
                                <TextField label="Business Address" id="outlined-size-normal" className='w-[100%] bg-gray-100' />
                            </div>
                            <div>
                                <TextField label="Country" id="outlined-size-normal" className='w-[100%] bg-gray-100' />
                            </div>
                            <div>
                                <TextField label="City" id="outlined-size-normal" className='w-[100%] bg-gray-100' />
                            </div>
                            <div>
                                <TextField label="Zipcode" id="outlined-size-normal" className='w-[100%] bg-gray-100' />
                            </div>
                            <div>
                                <TextField label="Services" id="outlined-size-normal" className='w-[100%] bg-gray-100' />
                            </div>
                            <div>
                                <TextField label="Registration number" id="outlined-size-normal" className='w-[100%] bg-gray-100' />
                            </div>
                            <div className="">
                                <TextField label="Business  Document" id="outlined-size-normal" className='w-[100%] bg-gray-100' />
                            </div>
                        </div>
                        <div className="py-5">
                            <button className='secondary-button py-5 my-3 bg-blue-500 w-[100%]'>Proceed</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default BusinessVerification;