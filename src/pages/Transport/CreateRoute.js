import { Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SET_ROUTE, SET_ROUTE_ID, SET_TRANSPORT } from '../../redux/AuthSlice';


const CreateRoute = () => {
    // const [departure, setDeparture] = useState(10);
    // const [destination, setDestination] = useState(20);
    const dispatch = useDispatch()
    const [state, setState] = useState({
        departure: '',
        destination: ""
    })
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    // const handleDepature = (event) => {
    //     setDeparture(event.target.value)
    // };
    // const handleDestination = (event) => {
    //     setDestination(event.target.value)
    // };
    const handleChange = (e) => {
        setState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const token = JSON.parse(localStorage.getItem('token'))

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        const headers = {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
        }
        try {
            const response = await axios.post(`https://azanypartners.urbantour.org/api/business/transport/create_routes?departure=${state.departure}&destination=${state.destination}`, {}, { headers })
            console.log({ departure: state.departure, destination: state.destination })

            setLoading(false)
            console.log(response?.data?.data?.values.id)
            // dispatch(SET_ROUTE_ID(response?.data?.data?.values.id))
            dispatch(SET_TRANSPORT({ departure: state.departure, destination: state.destination, route_id: response?.data?.data?.values.id }))
            setTimeout(() => {
                navigate('/transport/createVehicleInfo')
            }, 1000)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }

    }
    return (
        <div className="bg-[#fafbfdd7]">
            <Navbar />
            <div className=' py-16'>
                <div className='lg:w-[25%] md:w-[50%] mx-auto w-[85%]'>
                    <form className='w-full space-y-6' onSubmit={handleSubmit}>
                        <h1 className='text-2xl font-bold text-center pb-4'>Create Route Information</h1>
                        {/* <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                            <InputLabel>Departure</InputLabel>
                                <Select
                                    value={departure}
                                    label="departure"
                                    onChange={handleDepature}
                                >
                                    <MenuItem value={10}>Lagos</MenuItem>
                                    <MenuItem value={20}>Kwara</MenuItem>
                                    <MenuItem value={30}>Edo</MenuItem>
                                </Select>
                            </FormControl>
                        </Box> */}
                        <div className='py-1'>
                            <TextField label="Departure" name='departure' onChange={handleChange} id="outlined-size-normal" className='w-[100%] bg-gray-100 text-sm' />
                        </div>
                        <div className='py-1'>
                            <TextField label="Destination" name='destination' onChange={handleChange} id="outlined-size-normal" className='w-[100%] bg-gray-100 text-sm' />
                        </div>
                        {/* <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Destination</InputLabel>
                                <Select
                                    value={destination}
                                    label="Age"
                                    onChange={handleDestination}
                                >
                                    <MenuItem value={10}>Enugu</MenuItem>
                                    <MenuItem value={20}>Kwara</MenuItem>
                                    <MenuItem value={30}>Edo</MenuItem>
                                </Select>
                            </FormControl>
                        </Box> */}
                        <div className="">
                            <button className='py-4 my-3 bg-[#1B7CFC] text-center w-full text-white  px-4 rounded-md'>{loading ? 'loading...' : 'Continue'}</button>
                        </div>
                    </form>

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

export default CreateRoute