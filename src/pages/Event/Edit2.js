import { Stack, TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Navbar from '../../components/Navbar'
const Edit2 = () => {
    const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));

    const handleChange = (newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <Navbar />
            <div className='min-h-screen py-5'>
                <div className='w-[25%] mx-auto'>
                    <Stack spacing={3}>
                        <h1 className='text-2xl font-bold text-center'>Edit Event</h1>
                        <form className='w-full space-y-4'>
                            <TextField label="Edit Title" variant="outlined" className='w-full mx-auto' />
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <MobileDatePicker
                                    label="Date mobile"
                                    inputFormat="MM/DD/YYYY"
                                    value={value}
                                    onChange={handleChange}
                                    renderInput={(params) => <TextField {...params} />}
                                    className="w-full"
                                />
                                <TimePicker
                                    label="Time"
                                    value={value}
                                    onChange={handleChange}
                                    renderInput={(params) => <TextField {...params} />}
                                    className="w-full"
                                />
                            </LocalizationProvider>
                            <div className="">
                                <img src="/images/Movie.png" alt="" className="w-[100%] object-cover rounded-xl h-[23vh] my-5" />
                            </div>
                            <Link to="/event/salesHistory">
                                <button className='py-4 bg-[#1B7CFC] text-center w-full text-white  px-4 rounded-md'>Save</button>
                            </Link>

                        </form>
                    </Stack>
                </div>

            </div>
        </>
    )
}

export default Edit2