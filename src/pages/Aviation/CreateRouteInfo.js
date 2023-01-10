import { Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';
const CreateRouteInfo = () => {

    const [departure, setDeparture] = useState(10);
    const [destination, setDestination] = useState(20);

    const handleDepature = (event) => {
        setDeparture(event.target.value)
    };
    const handleDestination = (event) => {
        setDestination(event.target.value)
    };
    const navigate = useNavigate()

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     navigate("/aviation/createFlightInfo")
    // }
    return (
        <div className="bg-[#fafbfdd7]">
            <Navbar />
            <div className=' py-16'>
                <div className='lg:w-[25%] md:w-[50%] mx-auto w-[85%]'>
                    <Stack spacing={3}>
                        <h1 className='text-2xl font-bold text-center pb-4'>Create Route Information</h1>
                        <form className='w-full space-y-6'><Box sx={{ minWidth: 120 }} >
                            <FormControl fullWidth>
                                <InputLabel>Departure</InputLabel>
                                <Select
                                    value={departure}
                                    label="departure"
                                    onChange={handleDepature}
                                >
                                    <MenuItem value={10}>Lagos</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>

                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Destination</InputLabel>
                                    <Select
                                        value={destination}
                                        label="Age"
                                        onChange={handleDestination}
                                    >
                                        <MenuItem value={20}>Enugu</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                            <div className="">
                                <button className='py-4 my-3 bg-[#1B7CFC] text-center w-full text-white  px-4 rounded-md' onClick={()=>navigate("/aviation/createFlightInfo")}>Continue</button>
                            </div>
                        </form>
                    </Stack>
                </div>

            </div>
        </div>
    )
}

export default CreateRouteInfo