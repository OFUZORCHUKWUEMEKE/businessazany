import { Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { SET_TRAVEL } from '../../redux/AuthSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const CreateVehicleTicket = () => {
    const [departure, setDeparture] = useState(10);
    const [destination, setDestination] = useState(20);

    const handleDepature = (event) => {
        setDeparture(event.target.value)
    };
    const handleDestination = (event) => {
        setDestination(event.target.value)
    };
    return (
        <>
            <Navbar />
            <div className=' py-5'>
                <div className='md:w-[25%] w-[85%] mx-auto'>
                    <Stack spacing={3}>
                        <h1 className='text-2xl font-bold text-center pb-4'>Create Vehicle Ticket</h1>
                        <form className='w-full space-y-6'>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel>Ticket type</InputLabel>
                                    <Select
                                        value={departure}
                                        label="departure"
                                        onChange={handleDepature}
                                    >
                                        <MenuItem value={10}>Departure</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel>Route</InputLabel>
                                    <Select
                                        value={departure}
                                        label="departure"
                                        onChange={handleDepature}
                                    >
                                        <MenuItem value={10}>Lagos - Enugu</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel>Vehicle Model</InputLabel>
                                    <Select
                                        value={departure}
                                        label="departure"
                                        onChange={handleDepature}
                                    >
                                        <MenuItem value={10}>Sienna</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                            <TextField label="Reward points" variant="outlined" className='w-full mx-auto' />
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel>Policy</InputLabel>
                                    <Select
                                        value={departure}
                                        label="departure"
                                        onChange={handleDepature}
                                    >
                                        <MenuItem value={10}>Refundable</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                            <div className="py-5">
                                <button className='py-4  bg-[#1B7CFC] text-center w-full text-white  px-4 rounded-md'>Create ticket</button>
                            </div>
                        </form>
                    </Stack>
                </div>

            </div>
        </>
    )
}

export default CreateVehicleTicket