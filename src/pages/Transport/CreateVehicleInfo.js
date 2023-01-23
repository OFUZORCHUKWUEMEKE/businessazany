import { IconButton, Stack, TextField } from '@mui/material'
import React, { useRef, useState } from 'react'
import Navbar from '../../components/Navbar'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CancelIcon from '@mui/icons-material/Cancel';
import { SET_TRAVEL } from '../../redux/AuthSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const CreateVehicleInfo = () => {
    const [departure, setDeparture] = useState(10);
    const [destination, setDestination] = useState(20);
    const [vehicle_image, setVehicleImage] = useState();
    const inputRef = useRef()
    const navigate = useNavigate()

    const handleImage = () => {
        inputRef.current.click()
    }
    const handleDepature = (event) => {
        setDeparture(event.target.value)
    };
    const handleDestination = (event) => {
        setDestination(event.target.value)
    };
    const [loading, setLoading] = useState(false)

    const { user, transport } = useSelector((state) => state.user)

    console.log(transport)

    const [state, setState] = useState({
        model: "",
        number_of_seats: "",
        registration: ""
    })


    const handleChange = (e) => {
        setState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const dispatch = useDispatch()



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
        formdata.append('route_id', transport.route_id)
        formdata.append('vehicle_image', vehicle_image)
        try {
            setLoading(true)
            const response = await axios.post(`https://azanypartners.urbantour.org/api/business/transport/create_vehicle_info?model=${state.model}&number_of_seats=${state.number_of_seats}&registration=${state.registration}&route_id=${transport?.route_id}&vehicle_image=`, formdata, { headers })
            setLoading(false)
            console.log(response.data)
            console.log(response.data.data.values[0].id)
            toast.success('Vehicle Created', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
             setTimeout(()=>{
                navigate('/transport/createTicketInfo')
             },1000)
            dispatch(SET_TRAVEL(response.data.data.values[0].id))
           
        } catch (error) {
            let i=0
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
            <div className=' py-5'>
                <div className='lg:w-[25%] md:[50%] w-[85%] mx-auto'>
                    <Stack spacing={3}>
                        <h1 className='text-2xl font-bold text-center pb-4'>Create Vehicle Information</h1>
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
                                    <InputLabel>Apllicable route</InputLabel>
                                    <Select
                                        value={departure}
                                        label="departure"
                                        onChange={handleDepature}
                                    >
                                        <MenuItem value={10}>{`${transport.departure} - ${transport.destination}`}</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                            {/* <TextField label="Add a thumbnail" variant="outlined" className='w-full mx-auto  ' /> */}
                            {/* <img src="/images/Vehicle.png" alt="" className="rounded-t-xl object-cover w-[250%] h-[30vh]" /> */}
                            {vehicle_image ? <div className='p-2 border-2 border-blue-500 border-dotted w-3/5'>
                                <div className='relative'>
                                    <div className='absolute'>
                                        <IconButton onClick={() => setVehicleImage(null)}>
                                            <CancelIcon className='text-red-500' />
                                        </IconButton>
                                    </div>
                                    <img onChange={(e) => console.log(e.target.files[0])} src={URL.createObjectURL(vehicle_image)} className="h-44 w-full" />
                                </div>
                            </div> : (
                                <div className='h-40 md:w-full w-full flex justify-center items-center border-2 border-blue-500 border-dotted cursor-pointer' onClick={handleImage}>
                                    <div className='space-y-3 flex justify-center items-center flex-col'>
                                        <h2 className='text-gray-500'>Vehicle Image</h2>
                                        <input type="file" ref={inputRef} className="hidden" onChange={(e) => {
                                            // handleChange()
                                            // setImages(e.target.files[0])
                                            setVehicleImage(e.target.files[0])
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
                                <button className='py-4 bg-[#1B7CFC] text-center w-full text-white  px-4 rounded-md'>{loading ? 'Loading..' : 'Create Vehicle Information'}</button>
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
        </>
    )
}


export default CreateVehicleInfo;