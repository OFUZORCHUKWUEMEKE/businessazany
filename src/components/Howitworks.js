import React from 'react';
import { Input } from "@material-tailwind/react";

const HowItWorks = () => {
    return (
        <div className='my-10 hidden md:block'>
            <div className="m-auto w-[85%] bg-[#fff9fd] md:flex md:space-y-0 space-y-5  px-10 py-20 items-center gap-[10%] ">
                <div className="space-y-5">
                    <h1 className="font-bold text-2xl">Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.!</h1>
                    <div className="flex items-center ">
                        <div className="w-72 bg-white py-2">
                            <Input placeholder="locate a rewarding store near you" className='bg-white  px-5  border-none active:outline-none outline-0' />
                        </div>
                        <div className="">
                            <i className="bg-[#e51b48] rounded px-8 py-3 text-white"></i>
                        </div>
                    </div>
                    <div className="">
                        <div className="">
                            <div className="md:grid grid-cols-3 gap-5 space-y-5 md:space-y-0">
                                <li className="list-style">Lorem Ipsum dolor</li>
                                <li className="list-style">Lorem Ipsum dolor</li>
                                <li className="list-style">Lorem Ipsum dolor</li>
                                <li className="list-style">Lorem Ipsum dolor</li>
                                <li className="list-style">Lorem Ipsum dolor</li>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className=" h-[420.47px] w-[329.91px] border-none rounded-xl bg-[#1b7cfc] absolute" />
                    <div className="girl  relative top-10 left-16"></div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;