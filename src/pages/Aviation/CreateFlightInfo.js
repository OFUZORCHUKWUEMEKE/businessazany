import { Stack, TextField } from '@mui/material'
import React from 'react'
import Navbar from '../../components/Navbar'

const CreateFlightInfo = () => {
    return (
        <>
            <Navbar />
            <div className=' py-5'>
                <div className='lg:w-[25%] md:[50%] w-[85%] mx-auto'>
                    <Stack spacing={3}>
                        <h1 className='text-2xl font-bold text-center pb-4'>Create Flight Information</h1>
                        <form className='w-full space-y-4'>
                            <TextField label="Model" variant="outlined" className='w-full mx-auto bg-gray-50' />
                            <TextField label="Number of seats" variant="outlined" className='w-full mx-auto bg-gray-50' />
                            <TextField label="Registration" variant="outlined" className='w-full mx-auto bg-gray-50' />
                            <TextField label="Applicable routes" variant="outlined" className='w-full mx-auto bg-gray-50' />
                            <TextField label="Add a thumbnail" variant="outlined" className='w-full mx-auto bg-gray-50 ' />
                            <div className="py-4">
                                <button className='py-4 bg-[#1B7CFC] text-center w-full text-white  px-4 rounded-md'>Create Flight Information</button>
                            </div>
                        </form>
                    </Stack>
                </div>
            </div>
        </>
    )
}

export default CreateFlightInfo