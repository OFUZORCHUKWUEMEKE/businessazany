import { Grid, IconButton } from '@mui/material'
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CinemaModal from '../../components/list/cinema/CinemaModal';
// import EventModal from '../../components/list/EventModal';
// import QuestionModal from '../../components/list/Question';
// import StatusModal from '../../components/list/Status';
import { useNavigate } from 'react-router-dom';
const CinemaList = () => {
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

    const navigate = useNavigate()
    return (
        <>
            <div className='bg-gray-50 min-h-screen'>
                <div className='bg-white py-6'>
                    <div className='flex justify-between items-center w-4/5 mx-auto'>
                        <div className='flex items-center space-x-4'>
                            <IconButton>
                                <ArrowBackIcon />
                            </IconButton>
                            <h2>Transport</h2>
                        </div>
                        <div>
                            <input className='py-2 px-6 bg-gray-100 rounded-md border border-gray-100 outline-none ' placeholder='Search Transport' />
                        </div>
                    </div>
                </div>
                <div className='mt-3 py-2'>
                    <div className="w-3/5 mx-auto space-y-3">

                        <div className='flex items-center space-x-4 cursor-pointer' onClick={()=>navigate("/list/single/cinema")}>
                            <div>
                                <img src="/images/cinema.png" className="w-4/5 mx-auto" />
                            </div>
                            <div className='px-3'>
                                <h2 className='font-bold'>Genesis Cinema</h2>
                                <div className='py-3 space-y-4'>

                                    <div className='flex items-center space-x-1'>
                                        <IconButton>
                                            <LocationOnIcon />
                                        </IconButton>

                                        <h2 className='text-gray-400'>13 Tejusho, Yaba</h2>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='flex items-center space-x-4 cursor-pointer' onClick={()=>navigate("/list/single/cinema")}>
                            <div>
                                <img src="/images/cinema.png" className="w-4/5 mx-auto" />
                            </div>
                            <div className='px-3'>
                                <h2 className='font-bold'>Genesis Cinema</h2>
                                <div className='py-3 space-y-4'>

                                    <div className='flex items-center space-x-1'>
                                        <IconButton>
                                            <LocationOnIcon />
                                        </IconButton>

                                        <h2 className='text-gray-400'>13 Tejusho, Yaba</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center space-x-4 cursor-pointer' onClick={()=>navigate("/list/single/cinema")}>
                            <div>
                                <img src="/images/cinema.png" className="w-4/5 mx-auto" />
                            </div>
                            <div className='px-3'>
                                <h2 className='font-bold'>Genesis Cinema</h2>
                                <div className='py-3 space-y-4'>

                                    <div className='flex items-center space-x-1'>
                                        <IconButton>
                                            <LocationOnIcon />
                                        </IconButton>
                                        <h2 className='text-gray-400'>13 Tejusho, Yaba</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center space-x-4 cursor-pointer' onClick={()=>navigate("/list/single/cinema")}>
                            <div>
                                <img src="/images/cinema.png" className="w-4/5 mx-auto" />
                            </div>
                            <div className='px-3'>
                                <h2 className='font-bold'>Genesis Cinema</h2>
                                <div className='py-3 space-y-4'>

                                    <div className='flex items-center space-x-1'>
                                        <IconButton>
                                            <LocationOnIcon />
                                        </IconButton>

                                        <h2 className='text-gray-400'>13 Tejusho, Yaba</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <CinemaModal open={open} setOpen={setOpen} handleOpen={handleOpen} handleClose={handleClose} trigger={trigger} /> */}
            {/* <QuestionModal opened={opened} setOpened={setOpened} handleOpened={handleOpened} handleCloseed={handleCloseed} success={success} />
            <StatusModal opener={opener} setOpener={setOpener} handleOpener={handleOpener} handleCloseer={handleCloseer} /> */}
        </>
    )
}

export default CinemaList;