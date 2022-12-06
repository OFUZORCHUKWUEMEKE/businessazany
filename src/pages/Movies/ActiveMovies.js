import React from 'react';
import Navbar from '../../components/Navbar';
import { SlLocationPin } from "react-icons/sl"
import { useState } from 'react';
import TransactionTable from '../../components/Transaction';
import Profile from '../../components/Profile';

const ActiveMovies = () => {
    const [tab, setTab] = useState(false)

    const [action, setAction] = useState(true)
    const [old, setOld] = useState(false)

    const handleAction = () => {
        setAction(true)
        setOld(false)
    }
    const handleOld = () => {
        setOld(true)
        setAction(false)
    }
    return (
        <div className='bg-[#F5F5F5]'>
            <Navbar />
            <div className="m-auto w-[85%] py-20">
                <div className="md:grid grid-cols-10 gap-10">
                    <div className=" col-span-3">
                        <Profile />
                    </div>

                    <div className="space-y-5 col-span-7">
                        <div className="shadow-md flex justify-around bg-white p-3 gap-20  mb-10">
                            <p className={action ? `cursor-pointer text-blue-500` : 'cursor-pointer text-black'} onClick={() => handleAction()}>Active Movies</p>
                            <p className={old ? `cursor-pointer text-blue-500` : 'cursor-pointer text-black'} onClick={() => handleOld()}>Old Movies</p>
                        </div>

                        {action && <div className="md:grid grid-cols-3 items-center gap-3 ">
                            <div className="">
                                <img src="/images/Old.png" alt="" className="rounded-t-xl object-cover w-[250%] h-[30vh]" />
                                <div className="p-3 py-2 space-y-4 flex flex-col bg-white">
                                    <h1 className="font-semibold">Event 2</h1>
                                    <div className=" text-white w-[30%]">
                                        <p className="bg-[#1B7CFC] text-white rounded-xl py-1 px-4">30RP</p>
                                    </div>
                                    <button className=' bg-transparent border border-[#1B7CFC] text-[#1B7CFC] py-4 px-12 rounded-md '>Add tickets</button>
                                </div>
                            </div>
                            <div className="">
                                <img src="/images/Old.png" alt="" className="rounded-t-xl object-cover w-[250%] h-[30vh]" />
                                <div className="p-3 py-2 space-y-4 flex flex-col bg-white">
                                    <h1 className="font-semibold">Movie 1</h1>
                                    <div className=" text-white w-[30%]">
                                        <p className="bg-[#1B7CFC] text-white rounded-xl py-1 px-4">30RP</p>
                                    </div>
                                    <button className=' bg-transparent border border-[#1B7CFC] text-[#1B7CFC] py-4 px-12 rounded-md '>Add tickets</button>
                                </div>
                            </div>
                            <div className="">
                                <img src="/images/Old.png" alt="" className="rounded-t-xl object-cover w-[250%] h-[30vh]" />
                                <div className="p-3 py-2 space-y-4 flex flex-col bg-white">
                                    <h1 className="font-semibold">Movie 3</h1>
                                    <div className=" text-white w-[30%]">
                                        <p className="bg-[#1B7CFC] text-white rounded-xl py-1 px-4">30RP</p>
                                    </div>
                                    <button className=' bg-transparent border border-[#1B7CFC] text-[#1B7CFC] py-4 px-12 rounded-md '>Add tickets</button>
                                </div>
                            </div>
                        </div>}

                        {old && <div className="md:grid grid-cols-3 items-center gap-3 ">
                            <div className="">
                                <img src="/images/Old.png" alt="" className="rounded-t-xl object-cover w-[250%] h-[30vh]" />
                                <div className="p-3 py-2 space-y-4 flex flex-col bg-white">
                                    <h1 className="font-semibold">Event 2</h1>
                                    <div className=" text-white w-[30%]">
                                        <p className="bg-[#1B7CFC] text-white rounded-xl py-1 px-4">30RP</p>
                                    </div>
                                    <button className=' bg-transparent border border-[#1B7CFC] text-[#1B7CFC] py-4 px-12 rounded-md '>Add tickets</button>
                                </div>
                            </div>
                            <div className="">
                                <img src="/images/Old.png" alt="" className="rounded-t-xl object-cover w-[250%] h-[30vh]" />
                                <div className="p-3 py-2 space-y-4 flex flex-col bg-white">
                                    <h1 className="font-semibold">Movie 1</h1>
                                    <div className=" text-white w-[30%]">
                                        <p className="bg-[#1B7CFC] text-white rounded-xl py-1 px-4">30RP</p>
                                    </div>
                                    <button className=' bg-transparent border border-[#1B7CFC] text-[#1B7CFC] py-4 px-12 rounded-md '>Add tickets</button>
                                </div>
                            </div>
                            <div className="">
                                <img src="/images/Old.png" alt="" className="rounded-t-xl object-cover w-[250%] h-[30vh]" />
                                <div className="p-3 py-2 space-y-4 flex flex-col bg-white">
                                    <h1 className="font-semibold">Movie 3</h1>
                                    <div className=" text-white w-[30%]">
                                        <p className="bg-[#1B7CFC] text-white rounded-xl py-1 px-4">30RP</p>
                                    </div>
                                    <button className=' bg-transparent border border-[#1B7CFC] text-[#1B7CFC] py-4 px-12 rounded-md '>Add tickets</button>
                                </div>
                            </div>
                        </div>}
                    </div>
                </div>
                <div className="flex justify-end pt-[20vh] pb-[5vh]">
                    <button className="bg-[#1B7CFC] py-4 px-6 text-sm rounded-md text-white">Create more Events</button>
                </div>

                {/* Sales History */}
                <div className="">
                    <div className="flex items-center justify-between">
                        <div className="">
                            <h1 className="font-bold text-2xl">Sales History</h1>
                        </div>
                        {old && <div className="">
                            <button className=' bg-transparent border border-[#1B7CFC] text-[#1B7CFC] py-3 px-5 rounded-md text-md font-semibold'>Download sales report</button>
                        </div>}

                    </div>
                    <div className='py-4'>
                        <TransactionTable />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ActiveMovies;