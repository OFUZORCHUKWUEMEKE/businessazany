import { Grid, IconButton } from '@mui/material'
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CinemaModal from '../../components/list/cinema/CinemaModal';
import QuestionModal from '../../components/list/cinema/Question';
import StatusModal from '../../components/list/cinema/Status';
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
                    <div className='flex justify-between items-center w-4/5 mx-auto'>
                        <div className='flex items-center space-x-4'>
                            <IconButton>
                                <ArrowBackIcon />
                            </IconButton>
                            <h2 className='font-bold text-xl'>Genesis Cinema</h2>
                        </div>
                        <div>
                            <input className='py-2 px-6 bg-gray-100 rounded-md border border-gray-100 outline-none ' placeholder='Search' />
                        </div>
                    </div>
                </div>
                <div className='mt-3 py-2'>
                    <div className="w-3/5 mx-auto space-y-3">

                        <div className='flex items-center space-x-4'>
                            <div>
                                <img src="/images/bkackpanther.png" className="w-4/5 mx-auto" />
                            </div>
                            <div className='px-3'>
                                <h2 className="font-bold">Black Panther: Wakanda Forever</h2>
                                <div className='py-3 space-y-4'>
                                    <p>Queen Ramonda, Shuri, M'Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers</p>
                                    <h2 className='font-bold'>Sunday 25th December,2022</h2>
                                    <div className='flex items-center space-x-4 py-3'>
                                        <div>
                                            <button className='bg-[#F84141] text-white py-2 px-3 rounded-md' onClick={()=>handleOpen()}>15:00</button>
                                        </div>
                                        <div>
                                            <button className='bg-[#F84141] text-white py-2 px-3 rounded-md' onClick={()=>handleOpen()}>16:00</button>
                                        </div>
                                        <div>
                                            <button className='bg-[#F84141] text-white py-2 px-3 rounded-md' onClick={()=>handleOpen()}>17:00</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='flex items-center space-x-4'>
                            <div>
                                <img src="/images/bkackpanther.png" className="w-4/5 mx-auto" />
                            </div>
                            <div className='px-3'>
                                <h2 className="font-bold">Black Panther: Wakanda Forever</h2>
                                <div className='py-3 space-y-4'>
                                    <p>Queen Ramonda, Shuri, M'Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers</p>
                                    <h2 className='font-bold'>Sunday 25th December,2022</h2>
                                    <div className='flex items-center space-x-4 py-3'>
                                        <div>
                                            <button className='bg-[#F84141] text-white py-2 px-3 rounded-md' onClick={()=>handleOpen()}>15:00</button>
                                        </div>
                                        <div>
                                            <button className='bg-[#F84141] text-white py-2 px-3 rounded-md' onClick={()=>handleOpen()}>16:00</button>
                                        </div>
                                        <div>
                                            <button className='bg-[#F84141] text-white py-2 px-3 rounded-md' onClick={()=>handleOpen()}>17:00</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex items-center space-x-4'>
                            <div>
                                <img src="/images/bkackpanther.png" className="w-4/5 mx-auto" />
                            </div>
                            <div className='px-3'>
                                <h2 className="font-bold">Black Panther: Wakanda Forever</h2>
                                <div className='py-3 space-y-4'>
                                    <p>Queen Ramonda, Shuri, M'Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers</p>
                                    <h2 className='font-bold'>Sunday 25th December,2022</h2>
                                    <div className='flex items-center space-x-4 py-3'>
                                        <div>
                                            <button className='bg-[#F84141] text-white py-2 px-3 rounded-md' onClick={()=>handleOpen()}>15:00</button>
                                        </div>
                                        <div>
                                            <button className='bg-[#F84141] text-white py-2 px-3 rounded-md' onClick={()=>handleOpen()}>16:00</button>
                                        </div>
                                        <div>
                                            <button className='bg-[#F84141] text-white py-2 px-3 rounded-md' onClick={()=>handleOpen()}>17:00</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center space-x-4'>
                            <div>
                                <img src="/images/bkackpanther.png" className="w-4/5 mx-auto" />
                            </div>
                            <div className='px-3'>
                                <h2 className="font-bold">Black Panther: Wakanda Forever</h2>
                                <div className='py-3 space-y-4'>
                                    <p>Queen Ramonda, Shuri, M'Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers</p>
                                    <h2 className='font-bold'>Sunday 25th December,2022</h2>
                                    <div className='flex items-center space-x-4 py-3'>
                                        <div>
                                            <button className='bg-[#F84141] text-white py-2 px-3 rounded-md' onClick={()=>handleOpen()}>15:00</button>
                                        </div>
                                        <div>
                                            <button className='bg-[#F84141] text-white py-2 px-3 rounded-md' onClick={()=>handleOpen()}>16:00</button>
                                        </div>
                                        <div>
                                            <button className='bg-[#F84141] text-white py-2 px-3 rounded-md' onClick={()=>handleOpen()}>17:00</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CinemaModal open={open} setOpen={setOpen} handleOpen={handleOpen} handleClose={handleClose} trigger={trigger}/>
            <QuestionModal opened={opened} setOpened={setOpened} handleOpened={handleOpened} handleCloseed={handleCloseed} success={success}/>
            <StatusModal opener={opener} setOpener={setOpener} handleOpener={handleOpener} handleCloseer={handleCloseer} />
        </>
    )
}

export default SingleCinema