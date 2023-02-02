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
        <div className='md:bg-[#F5F5F5] bg-white'>
            <Navbar />
            <div className="m-auto w-[85%] md:py-20 ">
                <div className="md:grid grid-cols-10 gap-10">
                    <div className=" col-span-3">
                        <Profile />
                    </div>
                    <div className="space-y-5 col-span-7">
                        <div className="md:shadow-md flex justify-around md:bg-white mt-3 md:mt-0 p-3 gap-20 mb-10 ">
                            <p className={action ? `cursor-pointer text-blue-500 underline decoration-2` : 'cursor-pointer text-black'} onClick={() => handleAction()}>Active Events</p>
                            <p className={old ? `cursor-pointer text-blue-500 underline decoration-2` : 'cursor-pointer text-black'} onClick={() => handleOld()}>History</p>
                        </div>

                        {action && <div className="md:grid grid-cols-3 items-center gap-3 space-y-10 md:space-y-0">
                            {!isSelected && <div className="relative md:block flex items-center">
                                <img src="/images/event.png" alt="" className="md:rounded-t-xl rounded-l-xl object-cover md:w-[250%] h-[156px] w-[132px] md:h-[30vh]" />
                                <div className='absolute right-1 top-4 hidden md:flex' onClick={() => setEvent(false)}>
                                    <IconButton onClick={() => setIsSelected(true)}>
                                        <TbEdit className="text-white hidden md:flex" />
                                    </IconButton>
                                </div>
                                <div className="p-3 py-2 space-y-4 flex flex-col bg-white">
                                    <h1 className="font-semibold">Event 1</h1>
                                    <Link to="/event/createEventTicket">
                                        <button className=' bg-transparent border border-[#1B7CFC] text-[#1B7CFC] md:py-4 py-2 md:px-12 px-4 rounded-md '>Add tickets</button>
                                    </Link>
                                </div>
                            </div>}
                            {isSelected && <div className='py-4 '>
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

                            {!isSelectedTwo && <div className="relative md:block flex items-center">
                                <img src="/images/event.png" alt="" className="md:rounded-t-xl rounded-l-xl object-cover md:w-[250%]  h-[156px] w-[132px] md:h-[30vh]" />
                                <div className='absolute right-1 top-4 hidden md:flex' onClick={() => setEvent(false)}>
                                    <IconButton onClick={() => setIsSelectedTwo(true)}>
                                        <TbEdit className="text-white hidden md:flex" />
                                    </IconButton>
                                </div>
                                <div className="p-3 py-2 space-y-4 flex flex-col bg-white">
                                    <h1 className="font-semibold">Event 2</h1>
                                    <Link to="/event/createEventTicket">
                                        <button className='  bg-transparent border border-[#1B7CFC] text-[#1B7CFC] md:py-4 py-2 md:px-12 px-4 rounded-md '>Add tickets</button>
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

                            {!isSelectedThree && <div className="relative md:block flex items-center">
                                <img src="/images/event.png" alt="" className="md:rounded-t-xl rounded-l-xl object-cover md:w-[250%]  h-[156px] w-[132px] md:h-[30vh]" />
                                <div className='absolute right-1 top-4 hidden md:flex' onClick={() => setEvent(false)}>
                                    <IconButton onClick={() => setIsSelectedThree(true)}>
                                        <TbEdit className="text-white hidden md:flex" />
                                    </IconButton>
                                </div>
                                <div className="p-3 py-2 space-y-4 flex flex-col bg-white">
                                    <h1 className="font-semibold">Event 2</h1>
                                    <Link to="/event/createEventTicket">
                                        <button className=' bg-transparent border border-[#1B7CFC] text-[#1B7CFC] md:py-4 py-2 md:px-12 px-4 rounded-md '>Add tickets</button>
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

                        {old && <div className="md:grid grid-cols-3 items-center gap-3 space-y-10 md:space-y-0">
                            <div className="md:block flex items-center">
                                <img src="/images/Old.png" alt="" className="md:rounded-t-xl rounded-l-xl object-cover md:w-[250%] h-[156px] w-[132px] md:h-[30vh]" />
                                <div className="p-3 py-2 space-y-4 flex flex-col bg-white ">
                                    <h1 className="font-semibold">Event 2</h1>
                                    <div className=" text-white flex items-center text-[8px] text-center md:text-[14px] font-bold md:font-semibold md:grid grid-cols-2 gap-2">
                                        <p className="md:bg-[#1B7CFC] md:text-white text-[#1B7CFC] md:rounded-xl py-1 md:px-4">Reg. 30RP</p>
                                        <p className="md:bg-[#FB4A4A] md:text-white text-[#FB4A4A] md:rounded-xl py-1 md:px-4">VIP 50RP</p>
                                        <p className="md:bg-[#007254] md:text-white text-[#007254] md:rounded-xl py-1 md:px-4">VVIP 80RP</p>
                                    </div>
                                    <Link to="/event/createEventTicket">
                                        <button className=' bg-transparent border border-[#1B7CFC] text-[#1B7CFC] md:py-4 py-2 md:px-12 px-4 rounded-md '>Add tickets</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="md:block flex items-center">
                                <img src="/images/Old.png" alt="" className="md:rounded-t-xl rounded-l-xl object-cover md:w-[250%] h-[156px] w-[132px] md:h-[30vh]" />
                                <div className="p-3 py-2 space-y-4 flex flex-col bg-white">
                                    <h1 className="font-semibold">Event 2</h1>
                                    <div className=" text-white flex items-center text-[8px] text-center md:text-[14px] font-bold md:font-semibold md:grid grid-cols-2 gap-2">
                                        <p className="md:bg-[#1B7CFC] md:text-white text-[#1B7CFC] md:rounded-xl py-1 md:px-4">Reg. 30RP</p>
                                        <p className="md:bg-[#FB4A4A] md:text-white text-[#FB4A4A] md:rounded-xl py-1 md:px-4">VIP 50RP</p>
                                        <p className="md:bg-[#007254] md:text-white text-[#007254] md:rounded-xl py-1 md:px-4">VVIP 80RP</p>
                                    </div>
                                    <Link to="/event/createEventTicket">
                                        <button className=' bg-transparent border border-[#1B7CFC] text-[#1B7CFC] md:py-4 py-2 md:px-12 px-4 rounded-md '>Add tickets</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="md:block flex items-center">
                                <img src="/images/Old.png" alt="" className="md:rounded-t-xl rounded-l-xl object-cover md:w-[250%] h-[156px] w-[132px] md:h-[30vh]" />
                                <div className="p-3 py-2 space-y-4 flex flex-col bg-white">
                                    <h1 className="font-semibold">Event 2</h1>
                                    <div className=" text-white flex items-center text-[8px] text-center md:text-[14px] font-bold md:font-semibold md:grid grid-cols-2 gap-2">
                                        <p className="md:bg-[#1B7CFC] md:text-white text-[#1B7CFC] md:rounded-xl py-1 md:px-4">Reg. 30RP</p>
                                        <p className="md:bg-[#FB4A4A] md:text-white text-[#FB4A4A] md:rounded-xl py-1 md:px-4">VIP 50RP</p>
                                        <p className="md:bg-[#007254] md:text-white text-[#007254] md:rounded-xl py-1 md:px-4">VVIP 80RP</p>
                                    </div>
                                    <Link to="/event/createEventTicket">
                                        <button className=' bg-transparent border border-[#1B7CFC] text-[#1B7CFC] md:py-4 py-2 md:px-12 px-4 rounded-md '>Add tickets</button>
                                    </Link>
                                </div>
                            </div>
                        </div>}
                    </div>
                </div>
                <div className="md:flex md:justify-end md:pt-[12vh] pt-[30px] pb-[10vh]">
                    <Link to="/event/create">
                        <button className="bg-[#1B7CFC] w-[100%] py-4 px-6 text-sm rounded-md text-white">Create more Events</button>
                    </Link>
                </div>

                {/* Sales History */}
                <div className="">
                    <div className="flex items-center justify-between">
                        <div className="">
                            <h1 className="font-bold md:text-2xl ">Sales History</h1>
                        </div>
                        {old && <div className="">
                            <button className=' bg-transparent md:border border-[#1B7CFC] text-[#1B7CFC] py-3 px-5 rounded-md md:text-md font-semibold underline md:no-underline'>Download report</button>
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