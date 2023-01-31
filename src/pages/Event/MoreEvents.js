import React from 'react';
import Navbar from '../../components/Navbar';
import { SlLocationPin } from "react-icons/sl"
import { useState } from 'react';
import TransactionTable from '../../components/Transaction';
import Profile from '../../components/Profile';
import { Link } from 'react-router-dom';
import { IconButton, Stack } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { TbEdit } from 'react-icons/tb';

const MoreEvents = () => {
    const [tab, setTab] = useState(false)
    const [active, setActive] = useState(true)
    const [history, setHistory] = useState(false)
    const [action, setAction] = useState(true)
    const [old, setOld] = useState(false)
    const [event, setEvent] = useState(true)
    const [edit, setEdit] = useState(false)
    const [isSelected, setIsSelected] = useState(false)
    const [isSelectedTwo, setIsSelectedTwo] = useState(false)
    const [isSelectedThree, setIsSelectedThree] = useState(false)
    const handleAction = () => {
        setAction(true)
        setOld(false)
    }
    const handleOld = () => {
        setOld(true)
        setAction(false)
    }

    const array = [
        {
            id: 1,
            number: 1,
            isSelected: false
        },
        {
            id: 2,
            number: 2,
            isSelected: false
        },
        {
            id: 3,
            number: 3,
            isSelected: false
        }

    ]
    return (
        <div className='bg-[#F5F5F5]'>
            <Navbar />
            <div className="m-auto w-[85%] py-20">
                <div className="md:grid grid-cols-10 gap-10">
                    <div className=" col-span-3">
                        <Profile />
                    </div>
                    <div className="space-y-5 col-span-7">
                        <div className="shadow-md flex justify-around bg-white p-3 gap-20 mb-10 ">
                            <p className={action ? `cursor-pointer text-blue-500` : 'cursor-pointer text-black'} onClick={() => handleAction()}>Active Events</p>
                            <p className={old ? `cursor-pointer text-blue-500` : 'cursor-pointer text-black'} onClick={() => handleOld()}>History</p>
                        </div>

                        {action && <div className="md:grid grid-cols-3 items-center gap-3 ">
                            {!isSelected && <div className="relative" >
                                <img src="/images/event.png" alt="" className="rounded-t-xl object-cover w-[250%] h-[30vh]" />
                                <div className='absolute right-1 top-4' onClick={() => setEvent(false)}>
                                    <IconButton onClick={() => setIsSelected(true)}>s
                                        <TbEdit className="text-white" />
                                    </IconButton>
                                </div>
                                <div className="p-3 py-2 space-y-4 flex flex-col bg-white">
                                    <h1 className="font-semibold">Event 1</h1>
                                    <Link to="/event/createEventTicket">
                                        <button className=' bg-transparent border border-[#1B7CFC] text-[#1B7CFC] py-4 px-12 rounded-md '>Add tickets</button>
                                    </Link>
                                </div>
                            </div>}
                            {isSelected && <div className='py-4'>
                                <Stack spacing={3}>

                                    <Link to="/event/edit">
                                        <button className=' bg-transparent border  w-full border-[#1B7CFC] text-[#1B7CFC] py-4 px-12 rounded-md '>Edit Events</button>
                                    </Link>
                                    <Link to="/event/createEventTicket">
                                        <button className=' bg-transparent w-full border border-[#1B7CFC] text-[#1B7CFC] py-4 px-12 rounded-md '>Edit Ticket</button>
                                    </Link>

                                    <button className=' bg-transparent border border-[#1B7CFC] text-[#1B7CFC] py-4 px-12 rounded-md '>Delete</button>
                                </Stack>
                            </div>}

                            {!isSelectedTwo && <div className="relative">
                                <img src="/images/event.png" alt="" className="rounded-t-xl object-cover w-[250%] h-[30vh]" />
                                <div className='absolute right-1 top-4' onClick={() => setEvent(false)}>
                                    <IconButton onClick={() => setIsSelectedTwo(true)}>
                                        <TbEdit className="text-white" />
                                    </IconButton>
                                </div>
                                <div className="p-3 py-2 space-y-4 flex flex-col bg-white">
                                    <h1 className="font-semibold">Event 2</h1>
                                    <Link to="/event/createEventTicket">
                                        <button className=' bg-transparent border border-[#1B7CFC] text-[#1B7CFC] py-4 px-12 rounded-md '>Add tickets</button>
                                    </Link>
                                </div>
                            </div>}
                            {isSelectedTwo && <div>
                                <Stack spacing={3}>

                                    <Link to="/event/edit">
                                        <button className=' bg-transparent border w-full border-[#1B7CFC] text-[#1B7CFC] py-4 px-12 rounded-md '>Edit Events</button>
                                    </Link>
                                    <Link to="/event/createEventTicket">
                                        <button className=' bg-transparent w-full border border-[#1B7CFC] text-[#1B7CFC] py-4 px-12 rounded-md '>Edit Ticket</button>
                                    </Link>

                                    <button className=' bg-transparent border border-[#1B7CFC] text-[#1B7CFC] py-4 px-12 rounded-md '>Delete</button>
                                </Stack>
                            </div>}

                            {!isSelectedThree && <div className="relative">
                                <img src="/images/event.png" alt="" className="rounded-t-xl object-cover w-[250%] h-[30vh]" />
                                <div className='absolute right-1 top-4' onClick={() => setEvent(false)}>
                                    <IconButton onClick={() => setIsSelectedThree(true)}>
                                        <TbEdit className="text-white" />
                                    </IconButton>
                                </div>
                                <div className="p-3 py-2 space-y-4 flex flex-col bg-white">
                                    <h1 className="font-semibold">Event 2</h1>
                                    <Link to="/event/createEventTicket">
                                        <button className=' bg-transparent border border-[#1B7CFC] text-[#1B7CFC] py-4 px-12 rounded-md '>Add tickets</button>
                                    </Link>
                                </div>
                            </div>}
                            {isSelectedThree && <div className='py-4'>
                                <Stack spacing={3}>
                                    <Link to="/event/edit">
                                        <button className=' bg-transparent border  w-full border-[#1B7CFC] text-[#1B7CFC] py-4 px-12 rounded-md '>Edit Events</button>
                                    </Link>

                                    <Link to="/event/createEventTicket">
                                        <button className=' bg-transparent w-full border border-[#1B7CFC] text-[#1B7CFC] py-4 px-12 rounded-md '>Edit Ticket</button>
                                    </Link>
                                    <button className=' bg-transparent border border-[#1B7CFC] text-[#1B7CFC] py-4 px-12 rounded-md '>Delete</button>
                                </Stack>
                            </div>

                            }


                            {/* <div className='py-4'>
                                <Stack spacing={3}>
                                    <button className=' bg-transparent border border-[#1B7CFC] text-[#1B7CFC] py-4 px-12 rounded-md '>Edit Events</button>
                                    <button className=' bg-transparent border border-[#1B7CFC] text-[#1B7CFC] py-4 px-12 rounded-md '>Edit Ticket</button>
                                    <button className=' bg-transparent border border-[#1B7CFC] text-[#1B7CFC] py-4 px-12 rounded-md '>Delete</button>
                                </Stack>
                            </div> */}









                        </div>}

                        {old && <div className="md:grid grid-cols-3 items-center gap-3 ">
                            <div className="">
                                <img src="/images/Old.png" alt="" className="rounded-t-xl object-cover w-[250%] h-[30vh]" />
                                <div className="p-3 py-2 space-y-4 flex flex-col bg-white">
                                    <h1 className="font-semibold">Event 2</h1>
                                    <div className=" text-white  grid grid-cols-2 gap-2">
                                        <p className="bg-[#1B7CFC] text-white rounded-xl py-1 px-4">Reg. 30RP</p>
                                        <p className="bg-[#FB4A4A] text-white rounded-xl py-1 px-4">VIP 50RP</p>
                                        <p className="bg-[#007254] text-white rounded-xl py-1 px-4">VVIP 80RP</p>
                                    </div>
                                    <Link to="/event/createEventTicket">
                                        <button className='bg-transparent border border-[#1B7CFC] text-[#1B7CFC] py-4 px-12 rounded-md '>Add tickets</button>
                                    </Link>

                                </div>
                            </div>
                            <div className="">
                                <img src="/images/Old.png" alt="" className="rounded-t-xl object-cover w-[250%] h-[30vh]" />
                                <div className="p-3 py-2 space-y-4 flex flex-col bg-white">
                                    <h1 className="font-semibold">Event 2</h1>
                                    <div className=" text-white  grid grid-cols-2 gap-2">
                                        <p className="bg-[#1B7CFC] text-white rounded-xl py-1 px-4">Reg. 30RP</p>
                                        <p className="bg-[#FB4A4A] text-white rounded-xl py-1 px-4">VIP 50RP</p>
                                        <p className="bg-[#007254] text-white rounded-xl py-1 px-4">VVIP 80RP</p>
                                    </div>
                                    <Link to="/event/createEventTicket">
                                        <button className=' bg-transparent border border-[#1B7CFC] text-[#1B7CFC] py-4 px-12 rounded-md '>Add tickets</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="">
                                <img src="/images/Old.png" alt="" className="rounded-t-xl object-cover w-[250%] h-[30vh]" />
                                <div className="p-3 py-2 space-y-4 flex flex-col bg-white">
                                    <h1 className="font-semibold">Event 2</h1>
                                    <div className=" text-white  grid grid-cols-2 gap-2">
                                        <p className="bg-[#1B7CFC] text-white rounded-xl py-1 px-4">Reg. 30RP</p>
                                        <p className="bg-[#FB4A4A] text-white rounded-xl py-1 px-4">VIP 50RP</p>
                                        <p className="bg-[#007254] text-white rounded-xl py-1 px-4">VVIP 80RP</p>
                                    </div>
                                    <button className=' bg-transparent border border-[#1B7CFC] text-[#1B7CFC] py-4 px-12 rounded-md '>Add tickets</button>
                                </div>
                            </div>
                        </div>}
                    </div>
                </div>
                <div className="flex justify-end pt-[20vh] pb-[5vh]">
                    <Link to="/event/create">
                        <button className="bg-[#1B7CFC] py-4 px-6 text-sm rounded-md text-white">Create more Events</button>
                    </Link>

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

export default MoreEvents;