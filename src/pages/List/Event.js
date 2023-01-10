import { Grid, IconButton } from '@mui/material'
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EventModal from '../../components/list/EventModal';
import QuestionModal from '../../components/list/Question';
import StatusModal from '../../components/list/Status';
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

    const trigger = ()=>{
        handleClose()
        handleOpened()
    }

    const success=()=>{
        handleCloseed()
        handleOpener()
    }


    return (
        <>
            <div className='bg-gray-50 min-h-screen'>
                <div className='bg-white py-6'>
                    <div className='flex justify-between items-center w-4/5 mx-auto'>
                        <div className='flex items-center space-x-4'>
                            <IconButton>
                                <ArrowBackIcon />
                            </IconButton>
                            <h2 className="font-bold text-xl">Events</h2>
                        </div>
                        <div>
                            <input className='py-2 px-6 bg-gray-100 rounded-md border border-gray-100 outline-none ' placeholder='Search Events' />
                        </div>
                    </div>
                </div>
                <div className='mt-3 py-2'>
                    <div className="w-3/5 mx-auto space-y-3">

                        <div className='flex items-center space-x-4'>
                            <div>
                                <img src="/images/event (3).png" className="w-4/5 mx-auto" />
                            </div>
                            <div className='px-3'>
                                <h2 className="font-bold">Event 1</h2>
                                <div className='py-3'>
                                    <div className='py-4 flex items-center space-x-4'>
                                        <div>
                                            <button className='bg-[#1B7CFC] text-white rounded-md py-2 px-4' onClick={()=>handleOpen()}>Reg 30RP</button>
                                        </div>
                                        <div>
                                            <button className='bg-[#FB4A4A] text-white rounded-md py-2 px-4' onClick={()=>handleOpen()}>VIP 60RP</button>
                                        </div>
                                    </div>
                                    <div>
                                        <button className='bg-[#007254] text-white rounded-md py-2 px-4' onClick={()=>handleOpen()}>VVIP 80RP</button>
                                    </div>
                                </div>
                            </div>



                        </div>
                        <div className='flex items-center space-x-4'>
                            <div>
                                <img src="/images/event (1).png" className="w-4/5 mx-auto" />
                            </div>
                            <div className='px-3'>
                                <h2 className="font-bold">Event 2</h2>
                                <div className='py-3'>
                                    <div className='py-4 flex items-center space-x-4'>
                                        <div>
                                            <button className='bg-[#1B7CFC] text-white rounded-md py-2 px-4' onClick={()=>handleOpen()}>Reg 30RP</button>
                                        </div>
                                        <div>
                                            <button className='bg-[#FB4A4A] text-white rounded-md py-2 px-4' onClick={()=>handleOpen()}>VIP 60RP</button>
                                        </div>
                                    </div>
                                    <div>
                                        <button className='bg-[#007254] text-white rounded-md py-2 px-4' onClick={()=>handleOpen()}>VVIP 80RP</button>
                                    </div>
                                </div>
                            </div>



                        </div>

                        <div className='flex items-center space-x-4'>
                            <div>
                                <img src="/images/event (2).png" className="w-4/5 mx-auto" />
                            </div>
                            <div className='px-3'>
                                <h2 className='font-bold'>Event3</h2>
                                <div className='py-3'>
                                    <div className='py-4 flex items-center space-x-4'>
                                        <div>
                                            <button className='bg-[#1B7CFC] text-white rounded-md py-2 px-4' onClick={()=>handleOpen()}>Reg 30RP</button>
                                        </div>
                                        <div>
                                            <button className='bg-[#FB4A4A] text-white rounded-md py-2 px-4' onClick={()=>handleOpen()}>VIP 60RP</button>
                                        </div>
                                    </div>
                                    <div>
                                        <button className='bg-[#007254] text-white rounded-md py-2 px-4' onClick={()=>handleOpen()}>VVIP 80RP</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center space-x-4'>
                            <div>
                                <img src="/images/event (4).png" className="w-4/5 mx-auto" />
                            </div>
                            <div className='px-3'>
                                <h2 className='font-bold'>Event4</h2>
                                <div className='py-3'>
                                    <div className='py-4 flex items-center space-x-4'>
                                        <div>
                                            <button className='bg-[#1B7CFC] text-white rounded-md py-2 px-4' onClick={()=>handleOpen()}>Reg 30RP</button>
                                        </div>
                                        <div>
                                            <button className='bg-[#FB4A4A] text-white rounded-md py-2 px-4' onClick={()=>handleOpen()}>VIP 60RP</button>
                                        </div>
                                    </div>
                                    <div>
                                        <button className='bg-[#007254] text-white rounded-md py-2 px-4' onClick={()=>handleOpen()}>VVIP 80RP</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <EventModal open={open} setOpen={setOpen} handleOpen={handleOpen} handleClose={handleClose} trigger={trigger}/>
            <QuestionModal opened={opened} setOpened={setOpened} handleOpened={handleOpened} handleCloseed={handleCloseed} success={success}/>
            <StatusModal opener={opener} setOpener={setOpener} handleOpener={handleOpener} handleCloseer={handleCloseer} />
        </>
    )
}

export default EventList