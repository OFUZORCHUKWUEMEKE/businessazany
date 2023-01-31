import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Grid, IconButton } from '@mui/material'
import ElectricityModal from './ElectricityModal/ElectricityModal';
import QuestionModal from './ElectricityModal/Question';
import StatusModal from './ElectricityModal/Success';
const Electricity = () => {
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
            <div className='mt-3 py-2'>
                <div className="w-4/5 mx-auto space-y-3">

                    <div className='flex items-center space-x-4 cursor-pointer'>
                        <div>
                            <img src="/images/eked.png" className="w-4/5 mx-auto" />
                        </div>
                        <div className='px-3'>
                            <h2 className='font-bold'>Eko Electric</h2>
                            <div className='py-3 space-y-4'>
                                <button className='bg-[#1B7CFC] py-2 px-8 rounded-md text-white' onClick={() => handleOpen()}>Pay Bill</button>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center space-x-4 cursor-pointer'>
                        <div>
                            <img src="/images/iw.png" className="w-4/5 mx-auto" />
                        </div>
                        <div className='px-3'>
                            <h2 className='font-bold'>Ikeja Electric</h2>
                            <div className='py-3 space-y-4'>
                                <button className='bg-[#1B7CFC] py-2 px-8 rounded-md text-white' onClick={() => handleOpen()}>Pay Bill</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <ElectricityModal open={open} setOpen={setOpen} handleOpen={handleOpen} handleClose={handleClose} trigger={trigger} />
            <QuestionModal opened={opened} setOpened={setOpened} handleOpened={handleOpened} handleCloseed={handleCloseed} success={success} />
            <StatusModal opener={opener} setOpener={setOpener} handleOpener={handleOpener} handleCloseer={handleCloseer} /> 
        </>
    )
}

export default Electricity