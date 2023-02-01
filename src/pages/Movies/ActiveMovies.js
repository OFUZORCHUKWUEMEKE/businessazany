import React from 'react';
import Navbar from '../../components/Navbar';
import { SlLocationPin } from "react-icons/sl"
import { useState } from 'react';
import TransactionTable from '../../components/Transaction';
import Profile from '../../components/Profile';
import { Link } from 'react-router-dom';

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
        <div className='md:bg-[#F5F5F5]'>
            <Navbar />
            <div className="m-auto w-[85%] py-20">
                <div className="md:grid grid-cols-10 gap-10">
                    <div className=" col-span-3">
                        <Profile />
                    </div>

                    <div className="space-y-5 col-span-7">
                        <div className="md:shadow-md flex justify-around md:bg-white mt-3 md:mt-0 p-3 gap-20 mb-10 ">
                            <p className={action ? `cursor-pointer text-blue-500 underline decoration-2` : 'cursor-pointer text-black'} onClick={() => handleAction()}>Active Movies</p>
                            <p className={old ? `cursor-pointer text-blue-500 underline decoration-2` : 'cursor-pointer text-black'} onClick={() => handleOld()}>Old Movies</p>
                        </div>

                        {action && <div className="md:grid grid-cols-3 items-center gap-3 space-y-10 md:space-y-0">
                            <div className="md:block flex items-center">
                                <img src="/images/Old.png" alt="" className="md:rounded-t-xl rounded-l-xl object-cover md:w-[250%] h-[156px] w-[132px] md:h-[30vh]" />
                                <div className="p-3 py-2 md:space-y-4 space-y-3 md:flex flex-col bg-white">
                                    <h1 className="font-semibold">Movie 1</h1>
                                    <div className=" text-white md:w-[50%] md:text-center">
                                        <p className="md:bg-[#1B7CFC] font-bold md:font-semibold text-sm text-[#1B7CFC] md:text-white rounded-xl py-1 md:px-4">Reg. 30RP</p>
                                    </div>
                                    <button className=' bg-transparent border border-[#1B7CFC] text-[#1B7CFC] md:py-4 py-2 md:px-12 px-5 rounded-md '>Add tickets</button>
                                </div>
                            </div>
                            <div className="md:block flex items-center">
                                <img src="/images/Old.png" alt="" className="md:rounded-t-xl rounded-l-xl object-cover md:w-[250%] h-[156px] w-[132px] md:h-[30vh]" />
                                <div className="p-3 py-2 md:space-y-4 space-y-3 md:flex flex-col bg-white">
                                    <h1 className="font-semibold">Movie 2</h1>
                                    <div className=" text-white md:w-[50%] md:text-center">
                                        <p className="md:bg-[#1B7CFC] font-bold md:font-semibold text-sm text-[#1B7CFC] md:text-white rounded-xl py-1 md:px-4">Reg. 30RP</p>
                                    </div>
                                    <button className=' bg-transparent border border-[#1B7CFC] text-[#1B7CFC] md:py-4 py-2 md:px-12 px-5 rounded-md '>Add tickets</button>
                                </div>
                            </div>
                            <div className="md:block flex items-center">
                                <img src="/images/Old.png" alt="" className="md:rounded-t-xl rounded-l-xl object-cover md:w-[250%] h-[156px] w-[132px] md:h-[30vh]" />
                                <div className="p-3 py-2 md:space-y-4 space-y-3 md:flex flex-col bg-white">
                                    <h1 className="font-semibold">Movie 3</h1>
                                    <div className=" text-white md:w-[50%] md:text-center">
                                        <p className="md:bg-[#1B7CFC] font-bold md:font-semibold text-sm text-[#1B7CFC] md:text-white rounded-xl py-1 md:px-4">Reg. 30RP</p>
                                    </div>
                                    <button className=' bg-transparent border border-[#1B7CFC] text-[#1B7CFC] md:py-4 py-2 md:px-12 px-5 rounded-md '>Add tickets</button>
                                </div>
                            </div>
                        </div>}

                        {old && <div className="md:grid grid-cols-3 items-center gap-3 space-y-10 md:space-y-0">
                        <div className="md:block flex items-center">
                                <img src="/images/event.png" alt="" className="md:rounded-t-xl rounded-l-xl object-cover md:w-[250%] h-[156px] w-[132px] md:h-[30vh]" />
                                <div className="p-3 py-2 md:space-y-4 space-y-3 md:flex flex-col bg-white">
                                    <h1 className="font-semibold">Movie 1</h1>
                                    <div className=" text-white md:w-[50%] md:text-center">
                                        <p className="md:bg-[#1B7CFC] font-bold md:font-semibold text-sm text-[#1B7CFC] md:text-white rounded-xl py-1 md:px-4">Reg. 30RP</p>
                                    </div>
                                    <button className=' bg-transparent border border-[#1B7CFC] text-[#1B7CFC] md:py-4 py-2 md:px-12 px-5 rounded-md '>Add tickets</button>
                                </div>
                            </div>
                            <div className="md:block flex items-center">
                                <img src="/images/event.png" alt="" className="md:rounded-t-xl rounded-l-xl object-cover md:w-[250%] h-[156px] w-[132px] md:h-[30vh]" />
                                <div className="p-3 py-2 md:space-y-4 space-y-3 md:flex flex-col bg-white">
                                    <h1 className="font-semibold">Movie 2</h1>
                                    <div className=" text-white md:w-[50%] md:text-center">
                                        <p className="md:bg-[#1B7CFC] font-bold md:font-semibold text-sm text-[#1B7CFC] md:text-white rounded-xl py-1 md:px-4">Reg. 30RP</p>
                                    </div>
                                    <button className=' bg-transparent border border-[#1B7CFC] text-[#1B7CFC] md:py-4 py-2 md:px-12 px-5 rounded-md '>Add tickets</button>
                                </div>
                            </div>
                            <div className="md:block flex items-center">
                                <img src="/images/event.png" alt="" className="md:rounded-t-xl rounded-l-xl object-cover md:w-[250%] h-[156px] w-[132px] md:h-[30vh]" />
                                <div className="p-3 py-2 md:space-y-4 space-y-3 md:flex flex-col bg-white">
                                    <h1 className="font-semibold">Movie 3</h1>
                                    <div className=" text-white md:w-[50%] md:text-center">
                                        <p className="md:bg-[#1B7CFC] font-bold md:font-semibold text-sm text-[#1B7CFC] md:text-white rounded-xl py-1 md:px-4">Reg. 30RP</p>
                                    </div>
                                    <button className=' bg-transparent border border-[#1B7CFC] text-[#1B7CFC] md:py-4 py-2 md:px-12 px-5 rounded-md '>Add tickets</button>
                                </div>
                            </div>
                        </div>}
                    </div>
                </div>
                <div className="md:flex md:justify-end md:pt-[12vh] pt-[30px] pb-[10vh]">
                    <Link to="#">
                        <button className="bg-[#1B7CFC] w-[100%] py-4 px-6 text-sm rounded-md text-white">Create more Events</button>
                    </Link>
                </div>

                {/* Sales History */}
                <div className="">
                    <div className="flex items-center justify-between">
                        <div className="">
                            <h1 className="font-bold md:text-2xl">Sales History</h1>
                        </div>
                        {old && <div className="">
                            <button className=' bg-transparent md:border border-[#1B7CFC] text-[#1B7CFC] py-3 px-5 rounded-md text-md font-semibold underline md:no-underline'>Download report</button>
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