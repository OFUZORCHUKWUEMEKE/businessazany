import { Stack, TextField } from '@mui/material'
import React from 'react'
import Navbar from '../../components/Navbar'

const CreateVehicleTicket = () => {
    return (
        <>
            <Navbar />
            <div className='min-h-screen py-5'>
                <div className='w-[25%] mx-auto'>
                    <Stack spacing={3}>
                        <h1 className='text-2xl font-bold text-center'>Create Vehicle Ticket</h1>
                        <form className='w-full space-y-4'>
                            <TextField label="Ticket type" variant="outlined" className='w-full mx-auto bg-[#F5F5F5]' />
                            <TextField label="Route" variant="outlined" className='w-full mx-auto bg-[#F5F5F5]' />
                            <TextField label="Vehicle models" variant="outlined" className='w-full mx-auto bg-[#F5F5F5]' />
                            <TextField label="Reward points" variant="outlined" className='w-full mx-auto bg-[#F5F5F5]' />
                            <TextField label="Refundable" variant="outlined" className='w-full mx-auto bg-[#F5F5F5]' />
                            <button className='py-4 bg-[#1B7CFC] text-center w-full text-white  px-4 rounded-md'>Create ticket</button>
                        </form>
                    </Stack>
                </div>

            </div>
        </>
    )
}

export default CreateVehicleTicket