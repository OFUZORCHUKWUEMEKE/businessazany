import { Grid, IconButton } from '@mui/material'
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import TransportModal from '../../components/list/transport/TransportModal';
import QuestionModal from '../../components/list/transport/Question';
import StatusModal from '../../components/list/transport/Status';
const SingleTransport = () => {
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
                    <div className='flex justify-between items-center w-[90%] mx-auto'>
                        <div className='flex items-center space-x-4'>
                            <IconButton>
                                <ArrowBackIcon />
                            </IconButton>
                            <h2 className='font-bold'>Victor Vehicle Company </h2>
                        </div>
                    </div>
                </div>
                <div className='w-4/5 mx-auto py-4 mt-3'>
                    <div className='flex items-center space-x-6'>
                        <div>
                            <h2 className="text-blue-500 cursor-pointer">Return</h2>
                        </div>
                        <div>
                            <h2 className='cursor-pointer text-gray-400'>One-Way</h2>
                        </div>
                        <div>
                            <h2 className='cursor-pointer text-gray-400'>Multi-city</h2>
                        </div>
                    </div>

                    <div className='w-[95%] mx-auto mt-3 py-6 flex items-center'>
                        <div className='bg-white flex-1 py-4 px-3 shadow-md rounded-md'>
                            <div className='w-[90%] mx-auto flex justify-between items-center'>
                                <div>
                                    <p className='text-gray-400'>From</p>
                                </div>
                                <div>
                                    <IconButton>
                                        <SyncAltIcon />
                                    </IconButton>
                                </div>
                                <div className="cursor-pointer">
                                    <p className='text-gray-400'>To</p>
                                </div>
                                <div className="cursor-pointer">
                                    <div>
                                        <h2 className='text-gray-400'>Departure</h2>
                                    </div>
                                </div>
                                <div className="cursor-pointer">
                                    <div>
                                        <h2 className='text-gray-400'>Return</h2>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div>
                            <button className='bg-blue-500 text-white py-6 px-12 rounded-md'>Search</button>
                        </div>
                    </div>
                    <div className="py-4 px-2 w-[95%] mx-auto">
                        <div className='w-[70%]'>
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={6}>
                                    <div>
                                        <div className="flex justify-between items-center">
                                            <h3 className='text-[#1B7CFC] font-bold'>GIG</h3>
                                            <h3 className="text-gray-400">Departure Trip</h3>
                                        </div>
                                        <div className='bg-white shadow-md mt-3'>
                                            <div className='w-4/5 mx-auto'>
                                                <div className='py-4'>
                                                    <h2>Sienna</h2>
                                                    <div className="py-4 flex justify-between items-center">
                                                        <p>Lagos</p>
                                                        <IconButton>
                                                            <SyncAltIcon />
                                                        </IconButton>
                                                        <p>Kwara</p>
                                                    </div>
                                                    <p className='py-3 font-bold'>30 RP</p>
                                                    <div className='mt-4 py-1'>
                                                        <button onClick={()=>handleOpen()} className='py-3 px-3 bg-[#1B7CFC] rounded-md text-white'>Add to Booking</button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <div>
                                        <div className="flex justify-between items-center">
                                            <h3 className='text-[#1B7CFC] font-bold'>GIG</h3>
                                            <h3 className="text-gray-400">Departure Trip</h3>
                                        </div>
                                        <div className='bg-white shadow-md mt-3'>
                                            <div className='w-4/5 mx-auto'>
                                                <div className='py-4'>
                                                    <h2>Sienna</h2>
                                                    <div className="py-4 flex justify-between items-center">
                                                        <p>Lagos</p>
                                                        <IconButton>
                                                            <SyncAltIcon />
                                                        </IconButton>
                                                        <p>Kwara</p>
                                                    </div>
                                                    <p className='py-3 font-bold'>30 RP</p>
                                                    <div className='mt-4 py-1'>
                                                        <button onClick={()=>handleOpen()} className='py-3 px-3 bg-[#1B7CFC] rounded-md text-white'>Add to Booking</button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <div>
                                        <div className="flex justify-between items-center">
                                            <h3 className='text-[#1B7CFC] font-bold'>GIG</h3>
                                            <h3 className="text-gray-400">Departure Trip</h3>
                                        </div>
                                        <div className='bg-white shadow-md mt-3'>
                                            <div className='w-4/5 mx-auto'>
                                                <div className='py-4'>
                                                    <h2>Sienna</h2>
                                                    <div className="py-4 flex justify-between items-center">
                                                        <p>Lagos</p>
                                                        <IconButton>
                                                            <SyncAltIcon />
                                                        </IconButton>
                                                        <p>Kwara</p>
                                                    </div>
                                                    <p className='py-3 font-bold'>30 RP</p>
                                                    <div className='mt-4 py-1'>
                                                        <button onClick={()=>handleOpen()} className='py-3 px-3 bg-[#1B7CFC] rounded-md text-white'>Add to Booking</button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <div>
                                        <div className="flex justify-between items-center">
                                            <h3 className='text-[#1B7CFC] font-bold'>GIG</h3>
                                            <h3 className="text-gray-400">Departure Trip</h3>
                                        </div>
                                        <div className='bg-white shadow-md mt-3'>
                                            <div className='w-4/5 mx-auto'>
                                                <div className='py-4'>
                                                    <h2>Sienna</h2>
                                                    <div className="py-4 flex justify-between items-center">
                                                        <p>Lagos</p>
                                                        <IconButton>
                                                            <SyncAltIcon />
                                                        </IconButton>
                                                        <p>Kwara</p>
                                                    </div>
                                                    <p className='py-3 font-bold'>30 RP</p>
                                                    <div className='mt-4 py-1'>
                                                        <button onClick={()=>handleOpen()} className='py-3 px-3 bg-[#1B7CFC] rounded-md text-white'>Add to Booking</button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                    <div className='py-2'>
                        <div className='py-2'>
                            <h2 className='text-xl font-bold text-gray-500'>Booking List</h2>
                        </div>
                        <div className='w-[95%] mx-auto mt-3 py-6 flex items-center'>
                            <div className='bg-white flex-1 py-4 px-3 shadow-md rounded-md'>
                                <div className='w-[90%] mx-auto flex justify-between items-center'>
                                    <div>
                                        <p className='text-gray-400'>Route</p>
                                    </div>
                                    <div className="cursor-pointer">
                                        <p className='text-gray-400'>Ticket Type</p>
                                    </div>
                                    <div className="cursor-pointer">
                                        <div>
                                            <h2 className='text-gray-400'>Ticket Price</h2>
                                        </div>
                                    </div>
                                    <div className="cursor-pointer">
                                        <div>
                                            <h2 className='text-gray-400'>Departure Date</h2>
                                        </div>
                                    </div>
                                    <div className="cursor-pointer">
                                        <div>

                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className='w-[95%] mx-auto mt-3 py-1 flex items-center'>
                            <div className='flex-1 py-2 px-3 rounded-md'>
                                <div className='w-[90%] mx-auto flex justify-between items-center'>
                                    <div>
                                        <p className='text-gray-400'>Lagos-Kwara</p>
                                    </div>
                                    <div className="cursor-pointer">
                                        <p className='text-gray-400'>Departure</p>
                                    </div>
                                    <div className="cursor-pointer">
                                        <div>
                                            <h2 className='text-gray-400'>30 Rp</h2>
                                        </div>
                                    </div>
                                    <div className="cursor-pointer">
                                        <div>
                                            <h2 className='text-gray-400'>20/22/2022   1:30PM</h2>
                                        </div>
                                    </div>
                                    <div className="cursor-pointer">
                                        <div className='mt-4 py-1'>
                                            <button onClick={()=>handleOpen()} className='py-3 px-3 bg-[#1B7CFC] rounded-md text-white'>Book Now</button>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className='w-[95%] mx-auto mt-3 py-1 flex items-center'>
                            <div className=' flex-1 py-2 px-3 rounded-md'>
                                <div className='w-[90%] mx-auto flex justify-between items-center'>
                                    <div>
                                        <p className='text-gray-400'>Lagos-Kwara</p>
                                    </div>
                                    <div className="cursor-pointer">
                                        <p className='text-gray-400'>Departure</p>
                                    </div>
                                    <div className="cursor-pointer">
                                        <div>
                                            <h2 className='text-gray-400'>30 Rp</h2>
                                        </div>
                                    </div>
                                    <div className="cursor-pointer">
                                        <div>
                                            <h2 className='text-gray-400'>20/22/2022   1:30PM</h2>
                                        </div>
                                    </div>
                                    <div className="cursor-pointer">
                                        <div className='mt-4 py-1'>
                                            <button onClick={()=>handleOpen()} className='py-3 px-3 bg-[#1B7CFC] rounded-md text-white'>Book Now</button>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <TransportModal open={open} setOpen={setOpen} handleOpen={handleOpen} handleClose={handleClose} trigger={trigger}/>
            <QuestionModal opened={opened} setOpened={setOpened} handleOpened={handleOpened} handleCloseed={handleCloseed} success={success}/>
            <StatusModal opener={opener} setOpener={setOpener} handleOpener={handleOpener} handleCloseer={handleCloseer} />
        </>
    )
}

export default SingleTransport