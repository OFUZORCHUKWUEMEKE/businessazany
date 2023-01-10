import { Stack, TextField } from '@mui/material'
import React from 'react'
import Navbar from '../../components/Navbar'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useNavigate } from 'react-router-dom';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
const CreateEvent = () => {
    const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));
    const navigate = useNavigate()

    const handleChange = (newValue) => {
        setValue(newValue);
    };
    const handleSubmit = (e)=>{
        e.preventDefault()
        navigate('/event/createEventTicket')
    }
    return (
        <>
            <Navbar />
            <div className='min-h-screen py-5'>
                <div className='w-[25%] mx-auto'>
                    <Stack spacing={3}>
                        <h1 className='text-2xl font-bold text-center'>Create Event</h1>
                        <form className='w-full space-y-4' onSubmit={handleSubmit}>
                            <TextField label="Event Title" variant="outlined" className='w-full mx-auto' />
                            {/* <TextField label="Date" variant="outlined" className='w-full mx-auto' /> */}
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

                            {/* <TextField label="Time" variant="outlined" className='w-full mx-auto' /> */}
                            <TextField label="Add Thumbnail" variant="outlined" className='w-full mx-auto' />
                            <button className='py-4 bg-[#1B7CFC] text-center w-full text-white  px-4 rounded-md'>Create Event</button>
                        </form>
                    </Stack>
                </div>

            </div>
        </>
    )
}

export default CreateEvent