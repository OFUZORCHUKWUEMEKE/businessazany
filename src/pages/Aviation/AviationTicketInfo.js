import { Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Navbar from '../../components/Navbar';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const AviationTicketInfo = () => {
    const [departure, setDeparture] = useState(10);
    const [destination, setDestination] = useState(20);
    const navigate = useNavigate()
    const [ticket_type, setTicketType] = useState("")
    const [flight_class, setFlightClass] = useState("")
    const handleDepature = (event) => {
        setDeparture(event.target.value)
    };
    const handleDestination = (event) => {
        setDestination(event.target.value)
    };

    const { user, transport, aviation } = useSelector((state) => state.user)
    const [loading, setLoading] = useState(false)
    const [state, setState] = useState({
        flight_class: "",
        ticket_type: "",
        reward_point_amount: ""
    })

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
        formdata.append('flight_class', flight_class)
        formdata.append('reward_point_amount', state.reward_point_amount)
        formdata.append('route_id', aviation.route_id)
        formdata.append('flight_id', aviation.flight_id)
        formdata.append('refundable', 1)


        try {
            const response = await axios.post(`https://azanypartners.urbantour.org/api/business/aviation/create_ticket`, formdata, { headers })
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
            setTimeout(() => {
                navigate("/aviation/aviationtHistory")
            }, 1000)
            console.log({ flight_id: aviation.flight_id, route_id: aviation.route_id, ticket_type: state.ticket_type, reward_point_amount: state.reward_point_amount, flight_class: state.flight_class })
            setLoading(false)
        } catch (error) {
            let i=0
            for (i; i <= error.response.data.data.errors.length; i++) {
                toast.error(error.response.data.data.errors[i])
            }
            setLoading(false)
            console.log(error.response.data.data)
        }
    }

    // console.log(aviation)
    return (
        <div className="">
            <Navbar />
            <div className='py-16'>
                <div className='md:w-[25%] w-[85%] mx-auto'>
                    <Stack spacing={3}>
                        <h1 className='text-2xl font-bold text-center pb-4'>Create Ticket Information</h1>
                        <form className='w-full space-y-8' onSubmit={handleSubmit}>
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
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Flight Class</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={flight_class}
                                        label="Age"
                                        onChange={(e) => setFlightClass(e.target.value)}
                                    >
                                        <MenuItem value={'First Class'}>First Class</MenuItem>
                                        <MenuItem value={'Business Class'}>Business Class</MenuItem>
                                        <MenuItem value={'Economy Class'}>Economy Class</MenuItem>
                                        <MenuItem value={'Premium Economy Class'}>Premium Economy Class</MenuItem>
                                        <MenuItem value={'Basic Economy'}>Basic Economy</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className='py-1'>
                                <TextField label="Reward Point" onChange={handleChange} name='reward_point_amount' type='number' variant="outlined" className='w-full mx-auto' />
                            </div>
                            <div className="">
                                <button className='py-4 my-3 bg-[#1B7CFC] text-center w-full text-white  px-4 rounded-md'>{loading ? 'Loading..' : 'Continue'}</button>
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

export default AviationTicketInfo;