import { Stack, TextField } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar'
const CreateTicketEvent = () => {
    const navigate = useNavigate()
    const handleSubmit = (e)=>{
        e.preventDefault()
         navigate("/event/moreEvents")
    }
    return (
        <div className = "bg-[#F5F5F5]">
            <Navbar />
            <div className='min-h-screen py-16'>
                <div className='w-[25%] mx-auto'>
                    <Stack spacing={3}>
                        <h1 className='text-2xl font-bold text-center'>Create Ticket</h1>
                        <form className='w-full space-y-4' onSubmit={handleSubmit}>
                            <TextField label="Ticket type" variant="outlined" className='w-full mx-auto bg-white' />
                            <TextField label="Number of tickets" variant="outlined" className='w-full mx-auto bg-white' />
                            <TextField label="Reward points" variant="outlined" className='w-full mx-auto bg-white' />
                            <TextField label="Ticket description" variant="outlined" className='w-full mx-auto bg-white' />
                            <div className="">
                            <button className='py-4 my-5 bg-[#1B7CFC] text-center w-full text-white  px-4 rounded-md'>Create Ticket</button>
                            </div>
                        </form>
                    </Stack>
                </div>

            </div>
        </div>
    )
}

export default CreateTicketEvent