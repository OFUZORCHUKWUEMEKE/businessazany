import { Grid, IconButton } from '@mui/material'
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EventModal from '../../components/list/EventModal';
import QuestionModal from '../../components/list/Question';
import StatusModal from '../../components/list/Status';
import {BiSearch} from "react-icons/bi"
const EventList = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [opened, setOpened] = React.useState(false);
    const handleOpened = () => setOpened(true);
    const handleCloseed = () => setOpened(false);
    const [opener, setOpener] = React.useState(false);
    const handleOpener = () => setOpener(true);
    const handleCloseer = () => setOpener(false);

    const trigger = () => {
        handleClose()
        handleOpened()
    }

    const success = () => {
        handleCloseed()
        handleOpener()
    }


    return (
        <div className='bg-gray-50'>
            <div className=''>
                <div className='bg-white py-6'>
                    <div className='flex justify-between items-center m-auto w-[90%]'>
                        <div className='flex items-center space-x-4'>
                            <IconButton>
                                <ArrowBackIcon />
                            </IconButton>
                            <h2 className="font-bold text-xl">Events</h2>
                        </div>
                        <div>
                            <input className='hidden md:flex py-2 px-6 bg-gray-100 rounded-md border border-gray-100 outline-none ' placeholder='Search Events' />
                            <BiSearch className='md:hidden text-2xl'/>
                        </div>
                    </div>
                </div>

                <div className='mt-3 py-2 w-[90%] m-auto'>
                    <div className="flex flex-col items-center space-y-5 ">
                        <div className='flex items-center md:space-x-4 gap-3'>
                            <div className=''>
                                <img src="/images/event (3).png" className="md:rounded rounded-l-xl md:h-[250px] md:w-[350px] w-[135px] h-[148px] object-cover md:mx-auto" />
                            </div>

                            <div className='space-y-2 md:space-y-4'>
                                <div className="">
                                    <h2 className="font-bold">Event 1</h2>
                                </div>

                                <div className='text-sm md:text-md'>
                                    <div className='flex gap-3 items-center md:space-x-4 '>
                                        <div className='space-x-2'>
                                            <button className='md:w-[100px] w-[84px] bg-[#1B7CFC] text-white rounded-md py-2 md:px-4 px-2 text-center' onClick={() => handleOpen()}>Reg 30RP</button>
                                            <button className='md:w-[100px] w-[84px] bg-[#1B7CFC] text-white rounded-md py-2 md:px-4 px-2 text-center' onClick={() => handleOpen()}>VIP 60RP</button>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <button className='bg-[#007254] text-white rounded-md text-center py-2 px-4 text-sm md:text-md' onClick={() => handleOpen()}>VVIP 80RP</button>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center md:space-x-4 gap-3'>
                            <div className=''>
                                <img src="/images/event (2).png" className="md:rounded rounded-l-xl md:h-[250px] md:w-[350px] w-[135px] h-[148px] object-cover md:mx-auto" />
                            </div>

                            <div className='space-y-2 md:space-y-4'>
                                <div className="">
                                    <h2 className="font-bold">Event 2</h2>
                                </div>

                                <div className='text-sm md:text-md'>
                                    <div className='flex gap-3 items-center md:space-x-4 '>
                                        <div className='space-x-2'>
                                            <button className='md:w-[100px] w-[84px] bg-[#1B7CFC] text-white rounded-md py-2 md:px-4 px-2 text-center' onClick={() => handleOpen()}>Reg 30RP</button>
                                            <button className='md:w-[100px] w-[84px] bg-[#1B7CFC] text-white rounded-md py-2 md:px-4 px-2 text-center' onClick={() => handleOpen()}>VIP 60RP</button>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <button className='bg-[#007254] text-white rounded-md text-center py-2 px-4 text-sm md:text-md' onClick={() => handleOpen()}>VVIP 80RP</button>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center md:space-x-4 gap-3'>
                            <div className=''>
                                <img src="/images/event (4).png" className="md:rounded rounded-l-xl md:h-[250px] md:w-[350px] w-[135px] h-[148px] object-cover md:mx-auto" />
                            </div>

                            <div className='space-y-2 md:space-y-4'>
                                <div className="">
                                    <h2 className="font-bold">Event 3</h2>
                                </div>

                                <div className='text-sm md:text-md'>
                                    <div className='flex gap-3 items-center md:space-x-4 '>
                                        <div className='space-x-2'>
                                            <button className='md:w-[100px] w-[84px] bg-[#1B7CFC] text-white rounded-md py-2 md:px-4 px-2 text-center' onClick={() => handleOpen()}>Reg 30RP</button>
                                            <button className='md:w-[100px] w-[84px] bg-[#1B7CFC] text-white rounded-md py-2 md:px-4 px-2 text-center' onClick={() => handleOpen()}>VIP 60RP</button>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <button className='bg-[#007254] text-white rounded-md text-center py-2 px-4 text-sm md:text-md' onClick={() => handleOpen()}>VVIP 80RP</button>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center md:space-x-4 gap-3'>
                            <div className=''>
                                <img src="/images/event (1).png" className="md:rounded rounded-l-xl md:h-[250px] md:w-[350px] w-[135px] h-[148px] object-cover md:mx-auto" />
                            </div>

                            <div className='space-y-2 md:space-y-4'>
                                <div className="">
                                    <h2 className="font-bold">Event 4 </h2>
                                </div>

                                <div className='text-sm md:text-md'>
                                    <div className='flex gap-3 items-center md:space-x-4 '>
                                        <div className='space-x-2'>
                                            <button className='md:w-[100px] w-[84px] bg-[#1B7CFC] text-white rounded-md py-2 md:px-4 px-2 text-center' onClick={() => handleOpen()}>Reg 30RP</button>
                                            <button className='md:w-[100px] w-[84px] bg-[#1B7CFC] text-white rounded-md py-2 md:px-4 px-2 text-center' onClick={() => handleOpen()}>VIP 60RP</button>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <button className='bg-[#007254] text-white rounded-md text-center py-2 px-4 text-sm md:text-md' onClick={() => handleOpen()}>VVIP 80RP</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <EventModal open={open} setOpen={setOpen} handleOpen={handleOpen} handleClose={handleClose} trigger={trigger} />
            <QuestionModal opened={opened} setOpened={setOpened} handleOpened={handleOpened} handleCloseed={handleCloseed} success={success} />
            <StatusModal opener={opener} setOpener={setOpener} handleOpener={handleOpener} handleCloseer={handleCloseer} />
        </div>
    )
}

export default EventList