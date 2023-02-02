import { Grid, IconButton } from '@mui/material'
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CinemaModal from '../../components/list/cinema/CinemaModal';
import QuestionModal from '../../components/list/cinema/Question';
import StatusModal from '../../components/list/cinema/Status';
import { BiSearch } from 'react-icons/bi';
const SingleCinema = () => {
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
        <>
            <div className='bg-gray-50 min-h-screen'>
                <div className='bg-white py-6'>
                    <div className='flex justify-between items-center w-[85%] m-auto'>
                        <div className='flex items-center space-x-4'>
                            <IconButton>
                                <ArrowBackIcon />
                            </IconButton>
                            <h2 className='font-bold text-xl'>Genesis Cinema</h2>
                        </div>
                        <div>
                            <input className='md:flex hidden py-2 px-6 bg-gray-100 rounded-md border border-gray-100 outline-none ' placeholder='Search' />
                            <BiSearch className="text-2xl md:hidden" />
                        </div>
                    </div>
                </div>
                <div className='mt-3 py-2'>
                    <div className="w-[85%] md:w-[85%] m-auto space-y-10 md:space-y-5 mb-[15vh]">
                    <div className='flex items-center md:space-x-4 gap-3'>
                            <div className=''>
                                <img src="/images/bkackpanther.png" className="md:rounded rounded-l-xl md:h-[250px] md:w-[350px] w-[135px] h-[148px] object-cover md:mx-auto" />
                            </div>
                            <div className='md:px-3 '>
                                <h2 className="font-bold">Black Panther: Wakanda Forever</h2>
                                <div className='md:py-3 md:space-y-2'>
                                    <p className='md:flex hidden'>Queen Ramonda, Shuri, M'Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers</p>
                                    <p className='md:hidden'>Queen Ramonda, Shuri, M'Baku, Okoye</p>
                                    <div className="space-y-2">
                                        <div className="">
                                            <h2 className='md:font-bold'>Sunday 25th Dec...,2022</h2>
                                        </div>
                                        <div className='flex items-center md:space-x-4 md:py-3 gap-2'>
                                            <div>
                                                <button className='md:bg-[#F84141] text-red-500 font-semibold md:text-white md:py-2 md:px-3 rounded-md' onClick={() => handleOpen()}>15:00</button>
                                            </div>
                                            <div>
                                                <button className='md:bg-[#F84141] text-red-500 font-semibold md:text-white md:py-2 md:px-3 rounded-md' onClick={() => handleOpen()}>16:00</button>
                                            </div>
                                            <div>
                                                <button className='md:bg-[#F84141] text-red-500 font-semibold md:text-white md:py-2 md:px-3 rounded-md' onClick={() => handleOpen()}>17:00</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    <div className='flex items-center md:space-x-4 gap-3'>
                            <div className=''>
                                <img src="/images/bkackpanther.png" className="md:rounded rounded-l-xl md:h-[250px] md:w-[350px] w-[135px] h-[148px] object-cover md:mx-auto" />
                            </div>
                            <div className='md:px-3 '>
                                <h2 className="font-bold">Black Panther: Wakanda Forever</h2>
                                <div className='md:py-3 md:space-y-2'>
                                    <p className='md:flex hidden'>Queen Ramonda, Shuri, M'Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers</p>
                                    <p className='md:hidden'>Queen Ramonda, Shuri, M'Baku, Okoye</p>
                                    <div className="space-y-2">
                                        <div className="">
                                            <h2 className='md:font-bold'>Sunday 25th Dec...,2022</h2>
                                        </div>
                                        <div className='flex items-center md:space-x-4 md:py-3 gap-2'>
                                            <div>
                                                <button className='md:bg-[#F84141] text-red-500 font-semibold md:text-white md:py-2 md:px-3 rounded-md' onClick={() => handleOpen()}>15:00</button>
                                            </div>
                                            <div>
                                                <button className='md:bg-[#F84141] text-red-500 font-semibold md:text-white md:py-2 md:px-3 rounded-md' onClick={() => handleOpen()}>16:00</button>
                                            </div>
                                            <div>
                                                <button className='md:bg-[#F84141] text-red-500 font-semibold md:text-white md:py-2 md:px-3 rounded-md' onClick={() => handleOpen()}>17:00</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    <div className='flex items-center md:space-x-4 gap-3'>
                            <div className=''>
                                <img src="/images/bkackpanther.png" className="md:rounded rounded-l-xl md:h-[250px] md:w-[350px] w-[135px] h-[148px] object-cover md:mx-auto" />
                            </div>
                            <div className='md:px-3 '>
                                <h2 className="font-bold">Black Panther: Wakanda Forever</h2>
                                <div className='md:py-3 md:space-y-2'>
                                    <p className='md:flex hidden'>Queen Ramonda, Shuri, M'Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers</p>
                                    <p className='md:hidden'>Queen Ramonda, Shuri, M'Baku, Okoye</p>
                                    <div className="space-y-2">
                                        <div className="">
                                            <h2 className='md:font-bold'>Sunday 25th Dec...,2022</h2>
                                        </div>
                                        <div className='flex items-center md:space-x-4 md:py-3 gap-2'>
                                            <div>
                                                <button className='md:bg-[#F84141] text-red-500 font-semibold md:text-white md:py-2 md:px-3 rounded-md' onClick={() => handleOpen()}>15:00</button>
                                            </div>
                                            <div>
                                                <button className='md:bg-[#F84141] text-red-500 font-semibold md:text-white md:py-2 md:px-3 rounded-md' onClick={() => handleOpen()}>16:00</button>
                                            </div>
                                            <div>
                                                <button className='md:bg-[#F84141] text-red-500 font-semibold md:text-white md:py-2 md:px-3 rounded-md' onClick={() => handleOpen()}>17:00</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    <div className='flex items-center md:space-x-4 gap-3'>
                            <div className=''>
                                <img src="/images/bkackpanther.png" className="md:rounded rounded-l-xl md:h-[250px] md:w-[350px] w-[135px] h-[148px] object-cover md:mx-auto" />
                            </div>
                            <div className='md:px-3 '>
                                <h2 className="font-bold">Black Panther: Wakanda Forever</h2>
                                <div className='md:py-3 md:space-y-2'>
                                    <p className='md:flex hidden'>Queen Ramonda, Shuri, M'Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers</p>
                                    <p className='md:hidden'>Queen Ramonda, Shuri, M'Baku, Okoye</p>
                                    <div className="space-y-2">
                                        <div className="">
                                            <h2 className='md:font-bold'>Sunday 25th Dec...,2022</h2>
                                        </div>
                                        <div className='flex items-center md:space-x-4 md:py-3 gap-2'>
                                            <div>
                                                <button className='md:bg-[#F84141] text-red-500 font-semibold md:text-white md:py-2 md:px-3 rounded-md' onClick={() => handleOpen()}>15:00</button>
                                            </div>
                                            <div>
                                                <button className='md:bg-[#F84141] text-red-500 font-semibold md:text-white md:py-2 md:px-3 rounded-md' onClick={() => handleOpen()}>16:00</button>
                                            </div>
                                            <div>
                                                <button className='md:bg-[#F84141] text-red-500 font-semibold md:text-white md:py-2 md:px-3 rounded-md' onClick={() => handleOpen()}>17:00</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <CinemaModal open={open} setOpen={setOpen} handleOpen={handleOpen} handleClose={handleClose} trigger={trigger} />
            <QuestionModal opened={opened} setOpened={setOpened} handleOpened={handleOpened} handleCloseed={handleCloseed} success={success} />
            <StatusModal opener={opener} setOpener={setOpener} handleOpener={handleOpener} handleCloseer={handleCloseer} />
        </>
    )
}

export default SingleCinema