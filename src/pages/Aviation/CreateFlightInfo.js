import { IconButton, Stack, TextField } from '@mui/material'
import React, { useRef, useState } from 'react'
import Navbar from '../../components/Navbar'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import CancelIcon from '@mui/icons-material/Cancel';
import { SET_FLIGHT } from '../../redux/AuthSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
const CreateFighteInfo = () => {
    const [departure, setDeparture] = useState(10);
    const [destination, setDestination] = useState(20);

    const handleDepature = (event) => {
        setDeparture(event.target.value)
    };
    const handleDestination = (event) => {
        setDestination(event.target.value)
    };
    const [state, setState] = useState({
        model: "",
        number_of_seats: "",
        registration: ""
    })

    const [flight_image, setFlightImage] = useState();
    const inputRef = useRef()

    const handleImage = () => {
        inputRef.current.click()
    }
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()


    const handleChange = (e) => {
        setState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const { aviation } = useSelector((state) => state.user)
    console.log(aviation)

    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const token = JSON.parse(localStorage.getItem('token'))
        setLoading(true)
        let formdata = new FormData()
        const headers = {
            "Content-Type": "multipart/form-data",
            'Authorization': `Bearer ${token}`
        }
        formdata.append(`model`, state.model)
        formdata.append(`number_of_seats`, state.number_of_seats)
        formdata.append('registration', state.registration)
        formdata.append('route_id', aviation.route_id)
        formdata.append('flight_image', flight_image)
        try {
            setLoading(true)
            const response = await axios.post(`https://azanypartners.urbantour.org/api/business/aviation/create_flight_info`, formdata, { headers })
            setLoading(false)
            console.log(response.data.data)
            toast.success('Flight Info Created', {
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
                navigate('/aviation/aviationTicketInfo')
            }, 1000)
            dispatch(SET_FLIGHT(response?.data?.data?.values[0].id))

        } catch (error) {
            setLoading(false)
            let i=0
            for (i; i <= error.response.data.data.errors.length; i++) {
                toast.error(error.response.data.data.errors[i])
            }
          
            console.log(error.response.data.data)
        }
    }
    return (
        <>
            <Navbar />
            <div className=' py-5'>
                <div className='lg:w-[25%] md:[50%] w-[85%] mx-auto'>
                    <Stack spacing={3}>
                        <h1 className='text-2xl font-bold text-center pb-4'>Create Fight Information</h1>
                        <form className='w-full space-y-6' onSubmit={handleSubmit}>
                            <div className='py-1'>
                                <TextField label="Model" onChange={handleChange} name='model' variant="outlined" className='w-full mx-auto' />
                            </div>
                            <div className='py-1'>
                                <TextField label="Number of seats" onChange={handleChange} name='number_of_seats' variant="outlined" className='w-full mx-auto' />
                            </div>
                            <div className='py-1'>
                                <TextField label="Registration" onChange={handleChange} name='registration' type='number' variant="outlined" className='w-full mx-auto' />
                            </div>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel>Aplicable route</InputLabel>
                                    <Select
                                        value={departure}
                                        label="departure"
                                        onChange={handleDepature}
                                    >
                                        <MenuItem value={10}>{`${aviation.departure} - ${aviation.destination}`}</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                            {/* <TextField label="Add a thumbnail" variant="outlined" className='w-full mx-auto  ' /> */}
                            {/* <img src="/images/Plane.png" alt="" className="rounded-t-xl object-cover w-[250%] h-[30vh]" /> */}
                            {flight_image ? <div className='p-2 border-2 border-blue-500 border-dotted w-3/5'>
                                <div className='relative'>
                                    <div className='absolute'>
                                        <IconButton onClick={() => setFlightImage(null)}>
                                            <CancelIcon className='text-red-500' />
                                        </IconButton>
                                    </div>
                                    <img onChange={(e) => console.log(e.target.files[0])} src={URL.createObjectURL(flight_image)} className="h-44 w-full" />
                                </div>
                            </div> : (
                                <div className='h-40 md:w-full w-full flex justify-center items-center border-2 border-blue-500 border-dotted cursor-pointer' onClick={handleImage}>
                                    <div className='space-y-3 flex justify-center items-center flex-col'>
                                        <h2 className='text-gray-500'>Flight Image</h2>
                                        <input type="file" ref={inputRef} className="hidden" onChange={(e) => {
                                            // handleChange()
                                            // setImages(e.target.files[0])
                                            setFlightImage(e.target.files[0])
                                            // handleClickOpen()
                                        }} />
                                        <IconButton>
                                            <FileUploadIcon className='text-blue-500' />
                                        </IconButton>
                                        <p className='text-gray-400'>Click to Upload</p>
                                    </div>
                                </div>
                            )
                            }
                            <div className="py-4">
                                <button disabled={loading?true:false} className='py-4 bg-[#1B7CFC] text-center w-full text-white  px-4 rounded-md'>{loading?'Loading':"Continue"}</button>
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
        </>
    )
}

export default CreateFighteInfo