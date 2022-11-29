import { Stack, TextField } from '@mui/material'
import React from 'react'
import Navbar from '../../components/Navbar'

const CreateTicket = () => {
    return (
        <>
            <Navbar />
            <div className='min-h-screen py-5'>
                <div className='w-[25%] mx-auto'>
                    <Stack spacing={3}>
                        <h1 className='text-2xl font-bold text-center'>Create Movie Content</h1>
                        <form className='w-full space-y-4'>
                            <TextField label="Movie Title" variant="outlined" className='w-full mx-auto' />
                            <TextField label="Story" variant="outlined" className='w-full mx-auto' />
                            <TextField label="Released Date" variant="outlined" className='w-full mx-auto' />
                            <TextField label="Genre" variant="outlined" className='w-full mx-auto' />
                            <TextField label="Language" variant="outlined" className='w-full mx-auto' />
                            <TextField label="Duration" variant="outlined" className='w-full mx-auto' />
                            <TextField label="Status" variant="outlined" className='w-full mx-auto' />
                            <button className='py-4 bg-[#1B7CFC] text-center w-full text-white  px-4 rounded-md'>Create Movie content</button>
                        </form>
                    </Stack>
                </div>

            </div>
        </>
    )
}

export default CreateTicket