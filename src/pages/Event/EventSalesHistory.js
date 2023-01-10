import React from 'react';
import Navbar from '../../components/Navbar';
import { SlLocationPin } from "react-icons/sl"
import { useState } from 'react';

const EventSalesHistory = () => {
    const [tab, setTab] = useState(false)
    return (
        <div className='bg-[#F5F5F5]'>
            <Navbar />
            <div className="m-auto w-[85%] py-20">
                <div className="md:grid grid-cols-10 gap-10">
                    <div className=" col-span-3">
                        <Profile />
                    </div>
                    <div className="space-y-5 col-span-7">
                        <div className="shadow-md flex justify-around bg-white p-3 gap-20 px-20 mb-10 ">
                            <p className="cursor-pointer" onClick={() => setTab(false)}>Action Movies</p>
                            <p className="cursor-pointer" onClick={() => setTab(true)}>History</p>
                        </div>

                        {!tab && <div className="md:grid grid-cols-3 items-center gap-3 ">
                            <div className="">
                                <img src="/images/Movie.png" alt="" className="rounded-t-xl object-cover w-[250%] h-[30vh]" />
                                <div className="p-3 py-2 space-y-4 flex flex-col bg-white">
                                    <h1 className="font-semibold">Movie 2</h1>
                                    <button className='border-1 border-[#1B7CFC] py-5 px-12 rounded-md text-[#1B7CFC]'>Add tickets</button>
                                </div>
                            </div>
                            <div className="">
                                <img src="/images/Movie.png" alt="" className="rounded-t-xl object-cover w-[250%] h-[30vh]" />
                                <div className="p-3 py-2 space-y-4 flex flex-col bg-white">
                                    <h1 className="font-semibold">Movie 1</h1>
                                    <button className='bg-[#1B7CFC] py-5 px-12 rounded-md text-[#1B7CFC]'>Add tickets</button>
                                </div>
                            </div>
                            <div className="">
                                <img src="/images/Movie.png" alt="" className="rounded-t-xl object-cover w-[250%] h-[30vh]" />
                                <div className="p-3 py-2 space-y-4 flex flex-col bg-white">
                                    <h1 className="font-semibold">Movie 3</h1>
                                    <button className='bg-[#1B7CFC] text-[#1B7CFC] py-5 px-12 rounded-md '>Add tickets</button>
                                </div>
                            </div>
                        </div>}

                        {tab && <div className="md:grid grid-cols-3 items-center gap-3 ">
                            <div className="">
                                <img src="/images/Old.png" alt="" className="rounded-t-xl object-cover w-[250%] h-[30vh]" />
                                <div className="p-3 py-2 space-y-4 flex flex-col bg-white">
                                    <h1 className="font-semibold">Movie 2</h1>
                                    <div className="w-[30%] text-white">
                                        <p className="bg-[#1B7CFC] text-white rounded-xl py-1">30RP</p>
                                    </div>
                                    <button className='border-1 border-[#1B7CFC] py-5 px-12 rounded-md text-[#1B7CFC]'>Add tickets</button>
                                </div>
                            </div>
                            <div className="">
                                <img src="/images/Old.png" alt="" className="rounded-t-xl object-cover w-[250%] h-[30vh]" />
                                <div className="p-3 py-2 space-y-4 flex flex-col bg-white">
                                    <h1 className="font-semibold">Movie 1</h1>
                                    <div className="w-[30%] text-white">
                                        <p className="bg-[#1B7CFC] text-white rounded-xl py-1">30RP</p>
                                    </div>
                                    <button className='bg-[#1B7CFC] py-5 px-12 rounded-md text-[#1B7CFC]'>Add tickets</button>
                                </div>
                            </div>
                            <div className="">
                                <img src="/images/Old.png" alt="" className="rounded-t-xl object-cover w-[250%] h-[30vh]" />
                                <div className="p-3 py-2 space-y-4 flex flex-col bg-white">
                                    <h1 className="font-semibold">Movie 3</h1>
                                    <div className="w-[30%] text-white">
                                        <p className="bg-[#1B7CFC] text-white rounded-xl py-1">30RP</p>
                                    </div>
                                    <button className='bg-[#1B7CFC] text-[#1B7CFC] py-5 px-12 rounded-md '>Add tickets</button>
                                </div>
                            </div>
                        </div>}
                    </div>
                </div>
                <div className="flex justify-end pt-[20vh] pb-[5vh]">
                    <button className="bg-[#1B7CFC] py-4 px-6 text-sm rounded-md text-white">Create more events</button>
                </div>

                {/* Sales History */}
                <div className="">
                    <h1 className="font-bold text-2xl">Sales History</h1>
                </div>
            </div>
        </div>
    );
};

export default EventSalesHistory;