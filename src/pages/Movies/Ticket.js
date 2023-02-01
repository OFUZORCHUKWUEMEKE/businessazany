import React, { useState } from 'react'
import { Stack, TextField } from '@mui/material'
import Navbar from '../../components/Navbar'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'
const Ticket = () => {
    const { movies } = useSelector((state) => state.user)
    const [loading,setLoading] = useState(false)
    console.log(movies)
    const [state, setState] = useState({
        time: "",
        reward_point_amount: "",
        date:''
    })

    const handleChange = (e) => {
        setState((prev) => ({ ...prev, [e.target.name]: e.target.value }))

    }
    const navigate = useNavigate()
    const token = JSON.parse(localStorage.getItem('token'))

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()
        const headers = {
            "Content-Type": "multipart/form-data",
            'Authorization': `Bearer ${token}`
        }

        try {
            const response = await axios.post(`https://azanypartners.urbantour.org/api/business/movie/create_ticket`, { time: `${state.date} ${state.time}`, reward_point_amount:state.reward_point_amount, movie_id: movies.movie_id, refundable: 0 },{headers})
            console.log(response.data)
            setLoading(false)
            toast.success('Ticket Created Successfully')
            setTimeout(()=>{
                navigate('/movie/salesHistory')
            },2000)
            
        } catch (error) {
            setLoading(false)
            console.log(error.response)
            let i = 0
            for (i; i <= error.response.data.data.errors.length; i++) {
                toast.error(error.response.data.data.errors[i])
            }
            setLoading(false)
            console.log(error.response.data.data)
        }

    }
    return (
        <>
            <Navbar />
            <div className='max-h-screen py-5'>
                <div className='md:w-[25%] w-[85%] mx-auto'>
                    <Stack spacing={3}>
                        <h1 className='text-2xl font-bold text-center'>Create Movie Ticket</h1>
                        <form className='w-full space-y-4' onSubmit={handleSubmit}>
                            {/* <TextField label="Time" name='time' onChange={handleChange} variant="outlined" className='w-full mx-auto' /> */}
                            <div className='py-4'>
                                <label className='font-bold py-4 mt-2'>Date</label>
                                <input type="date" required name='date' onChange={handleChange} className='w-full mx-auto py-4 bg-white px-3 border border-gray-200' />
                            </div>

                            <div className='py-4'>
                                <label className='font-bold py-4 mt-2'>Time</label>
                                <input type="time" required name='time' onChange={handleChange} className='w-full mx-auto py-4 bg-white px-3 border border-gray-200' />
                            </div>
                            
                            <TextField onChange={handleChange} required name='reward_point_amount' label="Reward Point" variant="outlined" className='w-full mx-auto' />
                            <button className='py-4 bg-[#1B7CFC] text-center w-full text-white  px-4 rounded-md'>{loading?'Loading....':'Create Ticket'}</button>
                        </form>
                    </Stack>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    )
}
export default Ticket