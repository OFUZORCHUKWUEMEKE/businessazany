import { Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar'
const CreateTicketEvent = () => {
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate("/event/moreEvents")
    }
    const [state,setState] = useState({
        ticket_type:"",
        reward_point_amount:'',
        number_limit:'',
        refundable:''
    })

    const handleChange=(e)=>{
          setState((prev)=>({...prev,[e.target.name]:e.target.value}))
    } 
    return (
        <div className="bg-[#F5F5F5]">
            <Navbar />
            <div className='min-h-screen py-16'>
                <div className='w-[25%] mx-auto'>
                    <Stack spacing={3}>
                        <h1 className='text-2xl font-bold text-center'>Create Ticket</h1>
                        <form className='w-full space-y-4' onSubmit={handleSubmit}>
                            <TextField label="Ticket type" name=' ticket_type' variant="outlined" className='w-full mx-auto bg-white' />
                            <TextField label="Number of tickets" name=" number_limit" variant="outlined" className='w-full mx-auto bg-white' />
                            <TextField label="Reward points" name=" reward_point_amount" variant="outlined" className='w-full mx-auto bg-white' />
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