import { Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Navbar from '../../components/Navbar';
import { useSelector } from 'react-redux';
import { SET_TRAVEL } from '../../redux/AuthSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateTicketInfo = () => {
    const [departure, setDeparture] = useState(10);
    const [destination, setDestination] = useState(20);
    const [loading, setLoading] = useState(false)
    const { transport } = useSelector((state) => state.user)
    const [ticket_type, setTicketType] = useState("")
    console.log(transport)
    const navigate = useNavigate()

    const [state, setState] = useState({
        ticket_type: '',
        reward_point_amount: ""
    })

    const handleDepature = (event) => {
        setDeparture(event.target.value)
    };
    const handleDestination = (event) => {
        setDestination(event.target.value)
    };
    const handleChange = (e) => {
        setState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        const token = JSON.parse(localStorage.getItem('token'))
        const headers = {
            "Content-Type": "multipart/form-data",
            'Authorization': `Bearer ${token}`
        }

        const formdata = new FormData()

        formdata.append('ticket_type', ticket_type)
        formdata.append('reward_point_amount', state.reward_point_amount)
        formdata.append('route_id', transport.route_id)
        formdata.append('vehicle_id', transport.travel_id)
        formdata.append('refundable', 1)


        try {
            const response = await axios.post(`https://azanypartners.urbantour.org/api/business/transport/create_ticket`, formdata, { headers })
            console.log(response.data)
            setLoading(false)
            toast.success('Ticket Created', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            toast.success('Successful', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setTimeout(() => {
                navigate("/transport/transportHistory")
            }, 1000)
        } catch (error) {
            let i = 0
            for (i; i <= error.response.data.data.errors.length; i++) {
                toast.error(error.response.data.data.errors[i])
            }
            setLoading(false)
            console.log(error.response.data.data)
        }
    }
    return (
        <div className="">
            <Navbar />
            <div className='py-16'>
                <div className='md:w-[25%] w-[85%] mx-auto'>
                    <Stack spacing={3}>
                        <h1 className='text-2xl font-bold text-center pb-4'>Create Ticket Information</h1>
                        <form className='w-full space-y-8' onSubmit={handleSubmit}>
                            <Stack>
                                {/* <div className='py-1'>
                                    <TextField label="Ticket Type" name='ticket_type' onChange={handleChange} id="outlined-size-normal" className='w-[100%] bg-gray-100 text-sm' />
                                </div> */}
                                <div className="space-y-3">
                                    <div className='py-1'>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Ticket Type</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={ticket_type}
                                                label="Age"
                                                onChange={(e) => setTicketType(e.target.value)}
                                            >
                                                <MenuItem value={'Departure'}>Departure</MenuItem>
                                                <MenuItem value={'Return'}>Return</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                    <div className='py-1'>
                                        <TextField label="Reward Point" name='reward_point_amount' onChange={handleChange} id="outlined-size-normal" className='w-[100%] bg-gray-100 text-sm' />
                                    </div>
                                    <div className='py-1'>
                                        <TextField label="Route" name='route' value={`${transport?.departure} - ${transport?.destination}`} id="outlined-size-normal" className='w-[100%] bg-gray-100 text-sm' />
                                    </div>
                                </div>

                                {/* <div className='py-1'>
                                    <TextField label="Applicable Route" name='model' value={} id="outlined-size-normal" className='w-[100%] bg-gray-100 text-sm' />
                                </div> */}
                                {/* <div className='py-1'>
                                    <TextField label="Registration" name='r' onChange={handleChange} id="outlined-size-normal" className='w-[100%] bg-gray-100 text-sm' />
                                </div> */}
                                {/* <div className='py-1'>
                                    <TextField label="Registration" name='registration' onChange={handleChange} id="outlined-size-normal" className='w-[100%] bg-gray-100 text-sm' />
                                </div> */}
                            </Stack>
                            <div className="">
                                <button disabled={loading ? true : false} className='py-4 my-3 bg-[#1B7CFC] text-center w-full text-white  px-4 rounded-md'>{loading ? 'Loading' : 'Continue'}</button>
                            </div>
                        </form>
                    </Stack>
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
            </div>
        </div>
    )
}

export default CreateTicketInfo