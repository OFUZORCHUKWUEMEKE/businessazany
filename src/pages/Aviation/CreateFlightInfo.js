import { Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const CreateFighteInfo = () => {
    const [departure, setDeparture] = useState(10);
    const [destination, setDestination] = useState(20);

    const handleDepature = (event: SelectChangeEvent) => {
        setDeparture(event.target.value)
    };
    const handleDestination = (event: SelectChangeEvent) => {
        setDestination(event.target.value)
    };
    return (
        <>
            <Navbar />
            <div className=' py-5'>
                <div className='lg:w-[25%] md:[50%] w-[85%] mx-auto'>
                    <Stack spacing={3}>
                        <h1 className='text-2xl font-bold text-center pb-4'>Create Fight Information</h1>
                        <form className='w-full space-y-6'>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth >
                                    <InputLabel>Model</InputLabel>
                                    <Select
                                        value={departure}
                                        label="departure"
                                        onChange={handleDepature}
                                    >
                                        <MenuItem value={10}>Boeing 77</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>

                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel>Number of seat</InputLabel>
                                    <Select
                                        value={departure}
                                        label="departure"
                                        onChange={handleDepature}
                                    >
                                        <MenuItem value={10}>3</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>

                            <TextField label="Registration" variant="outlined" className='w-full mx-auto ' />
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel>Apllicable route</InputLabel>
                                    <Select
                                        value={departure}
                                        label="departure"
                                        onChange={handleDepature}
                                    >
                                        <MenuItem value={10}>Lagos - Enugu</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                            {/* <TextField label="Add a thumbnail" variant="outlined" className='w-full mx-auto  ' /> */}
                            <img src="/images/Plane.png" alt="" className="rounded-t-xl object-cover w-[250%] h-[30vh]" />
                            <div className="py-4">
                                <button className='py-4 bg-[#1B7CFC] text-center w-full text-white  px-4 rounded-md'>Create Vehicle Information</button>
                            </div>
                        </form>
                    </Stack>
                </div>
            </div>
        </>
    )
}

export default CreateFighteInfo