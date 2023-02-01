import { Grid, IconButton } from '@mui/material'
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { BiSearch } from "react-icons/bi"
// import EventModal from '../../components/list/EventModal';
// import QuestionModal from '../../components/list/Question';
// import StatusModal from '../../components/list/Status';
import { useNavigate } from 'react-router-dom';
const Transportlist = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const navigate = useNavigate()
    return (
        <>
            <div className='bg-gray-50 min-h-screen'>
                <div className='bg-white py-6'>
                    <div className='flex justify-between items-center w-[90%] m-auto'>
                        <div className='flex items-center space-x-4'>
                            <IconButton>
                                <ArrowBackIcon />
                            </IconButton>
                            <h2>Transport</h2>
                        </div>
                        <div>
                            <input className='hidden md:flex py-2 px-6 bg-gray-100 rounded-md border border-gray-100 outline-none ' placeholder='Search Events' />
                            <BiSearch className='md:hidden text-2xl' />
                        </div>
                    </div>
                </div>
                <div className='mt-3 py-2'>
                    <div className="flex flex-col items-center space-y-5 w-[90%] m-auto">
                        <div className='flex items-center space-x-4 cursor-pointer' onClick={() => navigate("/list/single/transport")}>
                            <div>
                                <img src="/images/Volkswagon.png" className="md:rounded rounded-l-xl md:h-[250px] md:w-[350px] w-[135px] h-[148px] object-cover md:mx-auto" />
                            </div>
                            <div className='space-y-2 md:space-y-4'>
                                <h2 className='font-bold text-sm md:text-[18px]'>Victor Vehicle Company</h2>
                                <h2 className='text-gray-400'>Transport services</h2>
                                <div className='flex items-center'>
                                    <div className="">
                                    {/* <IconButton> */}
                                        <LocationOnIcon className='text-gray-500'/>
                                    {/* </IconButton> */}
                                    </div>
                                    <div className="">
                                    <h2 className='text-gray-400'>13 Tejusho, Yaba</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center space-x-4 cursor-pointer' onClick={() => navigate("/list/single/transport")}>
                            <div>
                                <img src="/images/Volkswagon.png" className="md:rounded rounded-l-xl md:h-[250px] md:w-[350px] w-[135px] h-[148px] object-cover md:mx-auto" />
                            </div>
                            <div className=' space-y-2 md:space-y-4'>
                                <h2 className='font-bold text-sm md:text-[18px]'>Victor Vehicle Company</h2>
                                <h2 className='text-gray-400'>Transport services</h2>
                                <div className='flex items-center'>
                                    <div className="">
                                    {/* <IconButton> */}
                                        <LocationOnIcon className='text-gray-500'/>
                                    {/* </IconButton> */}
                                    </div>
                                    <div className="">
                                    <h2 className='text-gray-400'>13 Tejusho, Yaba</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center space-x-4 cursor-pointer' onClick={() => navigate("/list/single/transport")}>
                            <div>
                                <img src="/images/Volkswagon.png" className="md:rounded rounded-l-xl md:h-[250px] md:w-[350px] w-[135px] h-[148px] object-cover md:mx-auto" />
                            </div>
                            <div className=' space-y-2 md:space-y-4'>
                                <h2 className='font-bold text-sm md:text-[18px]'>Victor Vehicle Company</h2>
                                <h2 className='text-gray-400'>Transport services</h2>
                                <div className='flex items-center'>
                                    <div className="">
                                    {/* <IconButton> */}
                                        <LocationOnIcon className='text-gray-500'/>
                                    {/* </IconButton> */}
                                    </div>
                                    <div className="">
                                    <h2 className='text-gray-400'>13 Tejusho, Yaba</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center space-x-4 cursor-pointer' onClick={() => navigate("/list/single/transport")}>
                            <div>
                                <img src="/images/Volkswagon.png" className="md:rounded rounded-l-xl md:h-[250px] md:w-[350px] w-[135px] h-[148px] object-cover md:mx-auto" />
                            </div>
                            <div className=' space-y-2 md:space-y-4'>
                                <h2 className='font-bold text-sm md:text-[18px]'>Victor Vehicle Company</h2>
                                <h2 className='text-gray-400'>Transport services</h2>
                                <div className='flex items-center'>
                                    <div className="">
                                    {/* <IconButton> */}
                                        <LocationOnIcon className='text-gray-500'/>
                                    {/* </IconButton> */}
                                    </div>
                                    <div className="">
                                    <h2 className='text-gray-400'>13 Tejusho, Yaba</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <EventModal open={open} setOpen={setOpen} handleOpen={handleOpen} handleClose={handleClose} trigger={trigger} />
            <QuestionModal opened={opened} setOpened={setOpened} handleOpened={handleOpened} handleCloseed={handleCloseed} success={success} />
            <StatusModal opener={opener} setOpener={setOpener} handleOpener={handleOpener} handleCloseer={handleCloseer} /> */}
        </>
    )
}

export default Transportlist