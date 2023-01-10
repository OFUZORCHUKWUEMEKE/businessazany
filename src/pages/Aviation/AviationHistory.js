import React from 'react';
import Navbar from '../../components/Navbar';
import { SlLocationPin } from "react-icons/sl"
import { useState } from 'react';
import TransactionTable from '../../components/Transaction';
import { TbArrowsLeftRight, TbEdit } from "react-icons/tb"
import Profile from '../../components/Profile';


const AviationHistory = () => {
    const [tab, setTab] = useState(false)

    const [action, setAction] = useState(true)
    const [center, setCenter] = useState(false)
    const [old, setOld] = useState(false)

    const handleAction = () => {
        setAction(true)
        setOld(false)
        setCenter(false)
    }
    const handleOld = () => {
        setOld(true)
        setAction(false)
        setCenter(false)
    }
    const handleCenter = () => {
        setOld(false)
        setAction(false)
        setCenter(true)
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
                        <div className="shadow-md flex justify-around bg-white p-3 gap-20 px-20 mb-10 ">
                            <p className={action ? `cursor-pointer text-blue-500` : 'cursor-pointer  text-black'} onClick={() => handleAction()}>Routes</p>
                            <p className={center ? `cursor-pointer text-blue-500` : 'cursor-pointer text-black'} onClick={() => handleCenter()}>Flight</p>
                            <p className={old ? `cursor-pointer text-blue-500` : 'cursor-pointer text-black'} onClick={() => handleOld()}>Tickets</p>
                        </div>

                        {action && <div className="md:grid grid-cols-3 items-center gap-3 ">
                            <div className="">
                                <img src="/images/Vehicle.png" alt="" className="rounded-t-xl object-cover w-[250%] h-[30vh]" />
                                <div className="p-3 py-2 space-y-4 flex flex-col bg-white h-[20vh] text-center justify-center rounded-b-xl">
                                    <h1 className="font-semibold">Okota, Lagos - Enugu</h1>
                                </div>
                            </div>
                            <div className="">
                                <img src="/images/Vehicle.png" alt="" className="rounded-t-xl object-cover w-[250%] h-[30vh]" />
                                <div className="p-3 py-2 space-y-4 flex flex-col bg-white h-[20vh] text-center justify-center rounded-b-xl">
                                    <h1 className="font-semibold">Okota, Lagos - Enugu</h1>
                                </div>
                            </div>
                            <div className="">
                                <img src="/images/Vehicle.png" alt="" className="rounded-t-xl object-cover w-[250%] h-[30vh]" />
                                <div className="p-3 py-2 space-y-4 flex flex-col bg-white h-[20vh] text-center justify-center rounded-b-xl">
                                    <h1 className="font-semibold">Okota, Lagos - Enugu</h1>
                                </div>
                            </div>
                        </div>}

                        {center && <div className="md:grid grid-cols-3 items-center gap-3 ">
                            <div className="">
                                <img src="/images/Plane.png" alt="" className="rounded-t-xl object-cover w-[250%] h-[30vh]" />
                                <div className="p-3 py-2 space-y-4 flex flex-col bg-white h-[20vh] text-center justify-center rounded-b-xl">
                                    <h1 className="font-semibold text-[#1B7CFC] ">CRJ Series.</h1>
                                    <h1 className="font-semibold">Okota, Lagos - Enugu</h1>
                                </div>
                            </div>
                            <div className="">
                                <img src="/images/Plane.png" alt="" className="rounded-t-xl object-cover w-[250%] h-[30vh]" />
                                <div className="p-3 py-2 space-y-4 flex flex-col bg-white h-[20vh] text-center justify-center rounded-b-xl">
                                    <h1 className="font-semibold text-[#1B7CFC] ">CRJ Series.</h1>
                                    <h1 className="font-semibold">Okota, Lagos - Enugu</h1>
                                </div>
                            </div>
                            <div className="">
                                <img src="/images/Plane.png" alt="" className="rounded-t-xl object-cover w-[250%] h-[30vh]" />
                                <div className="p-3 py-2 space-y-4 flex flex-col bg-white h-[20vh] text-center justify-center rounded-b-xl">
                                    <h1 className="font-semibold text-[#1B7CFC] ">CRJ Series.</h1>
                                    <h1 className="font-semibold">Okota, Lagos - Enugu</h1>
                                </div>
                            </div>
                        </div>}

                        {old && <div className=" space-y-5 md:space-y-0">
                            <div className="md:grid grid-cols-2 items-center gap-3">
                                <div className=" ">
                                    <div className="bg-[#F2F8FF] flex items-center justify-between p-3 text-sm ">
                                        <h1 className="text-[#1B7CFC] font-semibold">GIG</h1>
                                        <p className="text-[#A0A0A0]">Departure trip</p>
                                    </div>
                                    <div className="p-3 py-2 space-y-4 bg-white h-[20vh]  rounded-b-xl">
                                        <h1 className="font-semibold">Toyota Sienna</h1>
                                        <div className="flex items-center gap-10">
                                            <p className="font-semibold">Lagos</p>
                                            <TbArrowsLeftRight className='text-gray-500' />
                                            <p className="font-semibold">Kwara</p>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <p className="font-semibold">3,000RP</p>
                                            <TbEdit className='text-[#1B7CFC] text-xl' />
                                        </div>
                                    </div>
                                </div>
                                <div className=" ">
                                    <div className="bg-[#F2F8FF] flex items-center justify-between p-3 text-sm ">
                                        <h1 className="text-[#1B7CFC] font-semibold">GIG</h1>
                                        <p className="text-[#A0A0A0]">Departure trip</p>
                                    </div>
                                    <div className="p-3 py-2 space-y-4 bg-white h-[20vh]  rounded-b-xl">
                                        <h1 className="font-semibold">Toyota Sienna</h1>
                                        <div className="flex items-center gap-10">
                                            <p className="font-semibold">Lagos</p>
                                            <TbArrowsLeftRight className='text-gray-500' />
                                            <p className="font-semibold">Kwara</p>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <p className="font-semibold">3,000RP</p>
                                            <TbEdit className='text-[#1B7CFC] text-xl' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:grid grid-cols-2 items-center gap-3 pt-5">
                                <div className=" ">
                                    <div className="bg-[#F2F8FF] flex items-center justify-between p-3 text-sm ">
                                        <h1 className="text-[#1B7CFC] font-semibold">GIG</h1>
                                        <p className="text-[#A0A0A0]">Departure trip</p>
                                    </div>
                                    <div className="p-3 py-2 space-y-4 bg-white h-[20vh]  rounded-b-xl">
                                        <h1 className="font-semibold">Toyota Sienna</h1>
                                        <div className="flex items-center gap-10">
                                            <p className="font-semibold">Lagos</p>
                                            <TbArrowsLeftRight className='text-gray-500' />
                                            <p className="font-semibold">Kwara</p>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <p className="font-semibold">3,000RP</p>
                                            <TbEdit className='text-[#1B7CFC] text-xl' />
                                        </div>
                                    </div>
                                </div>
                                <div className=" ">
                                    <div className="bg-[#F2F8FF] flex items-center justify-between p-3 text-sm ">
                                        <h1 className="text-[#1B7CFC] font-semibold">GIG</h1>
                                        <p className="text-[#A0A0A0]">Departure trip</p>
                                    </div>
                                    <div className="p-3 py-2 space-y-4 bg-white h-[20vh]  rounded-b-xl">
                                        <h1 className="font-semibold">Toyota Sienna</h1>
                                        <div className="flex items-center gap-10">
                                            <p className="font-semibold">Lagos</p>
                                            <TbArrowsLeftRight className='text-gray-500' />
                                            <p className="font-semibold">Kwara</p>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <p className="font-semibold">3,000RP</p>
                                            <TbEdit className='text-[#1B7CFC] text-xl' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>}
                    </div>
                </div>
                <div className="flex justify-end pt-[20vh] pb-[5vh]">
                    {action && <button className="bg-[#1B7CFC] py-4 px-6 text-sm rounded-md text-white">Create Route</button>}
                    {center && <button className="bg-[#1B7CFC] py-4 px-6 text-sm rounded-md text-white">Add Flight</button>}
                    {old && <button className="bg-[#1B7CFC] py-4 px-6 text-sm rounded-md text-white">Add Ticket</button>}
                </div>

                {/* Sales History */}
                <div className="">
                    <h1 className="font-bold text-2xl">Sales History</h1>
                    <div className='py-4'>
                        <TransactionTable />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AviationHistory;