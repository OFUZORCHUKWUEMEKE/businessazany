import { Stack, TextField } from '@mui/material'
import React from 'react'
import Navbar from '../../components/Navbar'

const CreateFlightTicket = () => {
    return (
        <>
            <Navbar />
            <div className=' py-5'>
                <div className='lg:w-[25%] m:[50%] w-[85%] mx-auto'>
                    <Stack spacing={3}>
                        <h1 className='text-2xl font-bold text-center pb-4'>Create Flight Ticket</h1>
                        <form className='w-full space-y-4'>
                            <TextField label="Flight class" variant="outlined" className='w-full mx-auto bg-gray-50' />
                            <TextField label="Ticket type" variant="outlined" className='w-full mx-auto bg-gray-50' />
                            <TextField label="Route" variant="outlined" className='w-full mx-auto bg-gray-50' />
                            <TextField label="Flight models" variant="outlined" className='w-full mx-auto bg-gray-50' />
                            <TextField label="Reward points" variant="outlined" className='w-full mx-auto bg-gray-50' />
                            <TextField label="Refundable" variant="outlined" className='w-full mx-auto bg-gray-50' />
                            <div className="py-4">
                                <button className='py-4  bg-[#1B7CFC] text-center w-full text-white  px-4 rounded-md'>Create ticket</button>
                            </div>
                        </form>
                    </Stack>
                </div>

            </div>
        </>
    )
}

export default CreateFlightTicket