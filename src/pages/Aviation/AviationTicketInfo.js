import { Stack, TextField } from '@mui/material'
import React from 'react'
import Navbar from '../../components/Navbar'
const AviationTicketInfo = () => {
    return (
        <div className="">
            <Navbar />
            <div className='py-16'>
                <div className='lg:w-[25%] md:w-[50%] w-[85%] mx-auto'>
                    <Stack spacing={3}>
                        <h1 className='text-2xl font-bold text-center'>Create Ticket Information</h1>
                        <form className='w-full space-y-4'>
                            <TextField label="Ticket type" variant="outlined" className='w-full mx-auto bg-gray-50' />
                            <TextField label="Route" variant="outlined" className='w-full mx-auto bg-gray-50' />
                            <div className="">
                                <button className='py-4 my-5 bg-[#1B7CFC] text-center w-full text-white  px-4 rounded-md'>Continue</button>
                            </div>
                        </form>
                    </Stack>
                </div>
            </div>
        </div>
    )
}

export default AviationTicketInfo