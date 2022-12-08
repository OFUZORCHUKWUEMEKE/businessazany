import { Stack, TextField } from '@mui/material'
import React from 'react'
import Navbar from '../../components/Navbar'
const CreateRouteInfo= () => {
    return (
        <div className = "bg-[#fafbfdd7]">
            <Navbar />
            <div className=' py-16'>
                <div className='lg:w-[25%] md:w-[50%] mx-auto w-[85%]'>
                    <Stack spacing={3}>
                        <h1 className='text-2xl font-bold text-center pb-4'>Create Route Information</h1>
                        <form className='w-full space-y-6'>
                            <TextField label="Departure" variant="outlined" className='w-full mx-auto bg-gray-50' />
                            <TextField label="Destination" variant="outlined" className='w-full mx-auto bg-gray-50' />
                            <div className="">
                            <button className='py-4 my-3 bg-[#1B7CFC] text-center w-full text-white  px-4 rounded-md'>Continue</button>
                            </div>
                        </form>
                    </Stack>
                </div>

            </div>
        </div>
    )
}

export default CreateRouteInfo