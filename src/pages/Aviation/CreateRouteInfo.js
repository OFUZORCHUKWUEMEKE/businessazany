import { Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SET_AVIATION } from '../../redux/AuthSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
const CreateRouteInfo = () => {

    const [departure, setDeparture] = useState(10);
    const [destination, setDestination] = useState(20);

    const dispatch = useDispatch()
    const [state, setState] = useState({
        departure: '',
        destination: ""
    })
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    // const handleDepature = (event) => {
    //     setDeparture(event.target.value)
    // };
    // const handleDestination = (event) => {
    //     setDestination(event.target.value)
    // }
    const token = JSON.parse(localStorage.getItem('token'))

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        const headers = {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
        }
        try {
            const response = await axios.post(`https://azanypartners.urbantour.org/api/business/aviation/create_route?departure=${state.departure}&destination=${state.destination}`, {}, { headers })
            console.log({ departure: state.departure, destination: state.destination })

            setLoading(false)
            console.log(response?.data?.data?.values.id)
            // dispatch(SET_ROUTE_ID(response?.data?.data?.values.id))
            dispatch(SET_AVIATION({ departure: state.departure, destination: state.destination, route_id: response?.data?.data?.values.id }))
            toast.success('Route Created', {
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
                navigate('/aviation/createFlightInfo')
            }, 1000)
        } catch (error) {
            let i=0
            for (i; i <= error.response.data.data.errors.length; i++) {
                toast.error(error.response.data.data.errors[i])
            }
            setLoading(false)
            console.log(error.response.data.data)
        }
        // navigate("/aviation/createFlightInfo")
    }
    return (
        <div className="bg-[#fafbfdd7]">
            <Navbar />
            <div className='py-16'>
                <div className='lg:w-[25%] md:w-[50%] mx-auto w-[85%]'>
                    <Stack spacing={3}>
                        <h1 className='text-2xl font-bold text-center pb-4'>Create Route Information</h1>
                        <form className='w-full space-y-6' onSubmit={handleSubmit}>
                            <div className='py-1'>
                                <TextField label="Departure" name='departure' onChange={handleChange} id="outlined-size-normal" className='w-[100%] bg-gray-100 text-sm' />
                            </div>
                            <div className='py-1'>
                                <TextField label="Destination" name='destination' onChange={handleChange} id="outlined-size-normal" className='w-[100%] bg-gray-100 text-sm' />
                            </div>
                            <div className="">
                                <button className='py-4 my-3 bg-[#1B7CFC] text-center w-full text-white  px-4 rounded-md'>{loading ? 'Loading....' : 'Continue'}</button>
                            </div>
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
        </div>
    )
}

export default CreateRouteInfo;