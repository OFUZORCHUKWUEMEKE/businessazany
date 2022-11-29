import { Stack, TextField } from '@mui/material'
import React from 'react'
import Navbar from '../../components/Navbar'
const EditMovie = () => {
    return (
        <div className = "bg-[#F5F5F5]">
            <Navbar />
            <div className='min-h-screen py-16'>
                <div className='w-[25%] mx-auto'>
                    <Stack spacing={3}>
                        <h1 className='text-2xl font-bold text-center'>Edit Movie</h1>
                        <form className='w-full space-y-4'>
                            <TextField label="Showing time" variant="outlined" className='w-full mx-auto bg-white' />
                            <TextField label="Number of tickets" variant="outlined" className='w-full mx-auto bg-white' />
                            <TextField label="Reward points" variant="outlined" className='w-full mx-auto bg-white' />
                            <div className="">
                            <button className='py-4 my-5 bg-[#1B7CFC] text-center w-full text-white  px-4 rounded-md'>Save</button>
                            </div>
                        </form>
                    </Stack>
                </div>

            </div>
        </div>
    )
}

export default EditMovie