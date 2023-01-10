import { Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Navbar from '../../components/Navbar';

const CreateTicketInfo = () => {
    const [departure, setDeparture] = useState(10);
    const [destination, setDestination] = useState(20);

    const handleDepature = (event) => {
        setDeparture(event.target.value)
    };
    const handleDestination = (event) => {
        setDestination(event.target.value)
    };
    return (
        <div className="">
            <Navbar />
            <div className='py-16'>
                <div className='lg:w-[25%] md:w-[50%] w-[85%] mx-auto'>
                    <Stack spacing={3}>
                        <h1 className='text-2xl font-bold text-center pb-4'>Create Ticket Information</h1>
                        <form className='w-full space-y-8'>
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
                                    <InputLabel id="demo-simple-select-label">Vehicle Model</InputLabel>
                                    <Select
                                        value={destination}
                                        label="Age"
                                        onChange={handleDestination}
                                    >
                                        <MenuItem value={20}>Sienna</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Reward Points</InputLabel>
                                    <Select
                                        value={destination}
                                        label="Age"
                                        onChange={handleDestination}
                                    >
                                        <MenuItem value={20}>800</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Policy</InputLabel>
                                    <Select
                                        value={destination}
                                        label="Age"
                                        onChange={handleDestination}
                                    >
                                        <MenuItem value={20}>Refundable</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Route</InputLabel>
                                    <Select
                                        value={destination}
                                        label="Age"
                                        onChange={handleDestination}
                                    >
                                        <MenuItem value={20}>Lagos - Enugu</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                            <div className="">
                                <button className='py-4 my-3 bg-[#1B7CFC] text-center w-full text-white  px-4 rounded-md'>Continue</button>
                            </div>
                        </form>
                    </Stack>
                </div>
            </div>
        </div>
    )
}

export default CreateTicketInfo