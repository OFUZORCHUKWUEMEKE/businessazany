import { Stack, TextField } from '@mui/material'
import React from 'react'
import Navbar from '../../components/Navbar'
const Edit2 = () => {
    return (
        <>
            <Navbar />
            <div className='min-h-screen py-5'>
                <div className='w-[25%] mx-auto'>
                    <Stack spacing={3}>
                        <h1 className='text-2xl font-bold text-center'>Edit Event</h1>
                        <form className='w-full space-y-4'>
                            <TextField label="Edit Title" variant="outlined" className='w-full mx-auto' />
                            <TextField label="Date" variant="outlined" className='w-full mx-auto' />
                            <TextField label="Time" variant="outlined" className='w-full mx-auto' />
                            <div className="">
                            <img src="/images/Movie.png" alt="" className="w-[100%] object-cover rounded-xl h-[23vh] my-5" />
                            </div>
                            <button className='py-4 bg-[#1B7CFC] text-center w-full text-white  px-4 rounded-md'>Save</button>
                        </form>
                    </Stack>
                </div>

            </div>
        </>
    )
}

export default Edit2