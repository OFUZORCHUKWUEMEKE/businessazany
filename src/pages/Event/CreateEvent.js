import { IconButton, Stack, TextField } from '@mui/material'
import React, { useRef, useState } from 'react'
import Navbar from '../../components/Navbar'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useNavigate } from 'react-router-dom';
import moment from 'moment/moment';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import CancelIcon from '@mui/icons-material/Cancel';
import axios from 'axios';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
const CreateEvent = () => {
    const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));
    const navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [thumbNail, setThumbnail] = useState()
    const handleChange = (newValue) => {
        setValue(newValue.$d);
        // const date = moment(newValue.$d)
        // console.log(date)
        console.log(newValue.$d)
    };
    const [loading, setLoading] = useState(false)

    const token = JSON.parse(localStorage.getItem('token'))

    const handleImage = () => {
        inputRef.current.click()
    }


    const inputRef = useRef(null)
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/event/createEventTicket')
    }

    const createEvent = async (e) => {
        e.preventDefault()
        const formdata = new FormData()
        formdata.append('title', title)
        formdata.append('date', value)
        formdata.append('cover_image', thumbNail)

        // console.log({title,value,thumbNail})
        setLoading(true)
        const headers = {
            "Content-Type": "multipart/form-data",
            // "Access-Control-Allow-Origin": "*",
            // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            'Authorization': `Bearer ${token}`
        }
        fetch('https://azanypartners.urbantour.org/apibusiness/event/create_event', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: formdata
        })
            .then((response) => response.json())
            .then((result) => {
                console.log('Success:', result);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        // try {
        //     const response = await axios.post(`https://azanypartners.urbantour.org/apibusiness/event/create_event`, formdata, { headers })
        //     console.log(response.data)
        //     setLoading(false)
        // } catch (error) {
        //     console.log(error.response)
        //     setLoading(false)
        // }

    }
    return (
        <>
            <Navbar />
            <div className='max-h-screen py-5'>
                <div className='w-[25%] mx-auto'>
                    <Stack spacing={3}>
                        <h1 className='text-2xl font-bold text-center'>Create Event</h1>
                        <form className='w-full space-y-4' onSubmit={createEvent}>
                            <TextField label="Event Title" variant="outlined" className='w-full mx-auto' onChange={(e) => setTitle(e.target.value)} />
                            {/* <TextField label="Date" variant="outlined" className='w-full mx-auto' /> */}
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                {/* <MobileDatePicker
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
                                /> */}
                                <DateTimePicker
                                    label="Date&Time picker"
                                    value={value}
                                    onChange={handleChange}
                                    className="w-full"
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>

                            {/* <TextField label="Time" variant="outlined" className='w-full mx-auto' /> */}
                            {/* <TextField label="Add Thumbnail" variant="outlined" className='w-full mx-auto' /> */}
                            {/* <div className='py-2 px-3 w-full border border-gray-300'></div> */}
                            {thumbNail ? (
                                <>
                                    <div className='relative'>
                                        <div className='p-2 border-2 border-blue-500 border-dotted w-3/5'>
                                            <img onChange={(e) => console.log(e.target.files[0])} src={URL.createObjectURL(thumbNail)} className="h-44 w-full" />
                                        </div>
                                        <div className='py-1 absolute right-1 top-0' onClick={() => setThumbnail(null)}>
                                            <IconButton>
                                                <CancelIcon className='text-red-500' />
                                            </IconButton>
                                            {/* <button className='text-blue-400'>Remove</button> */}
                                        </div>
                                    </div>

                                </>

                            ) : (
                                <div className='h-40 md:w-full w-full flex justify-center items-center border-2 border-blue-500 border-dotted cursor-pointer' onClick={handleImage}>
                                    <div className='space-y-3 flex justify-center items-center flex-col'>
                                        <h2 className='text-gray-500'>Thumbnail</h2>
                                        <input type="file" ref={inputRef} className="hidden" onChange={(e) => {
                                            // handleChange()
                                            // setImages(e.target.files[0])
                                            setThumbnail(e.target.files[0])
                                            // handleClickOpen()
                                        }} />
                                        <IconButton>
                                            <FileUploadIcon />
                                        </IconButton>
                                        <p className='text-gray-400'>Click to Upload</p>
                                    </div>
                                </div>
                            )}
                            <button className='py-4 bg-[#1B7CFC] text-center w-full text-white  px-4 rounded-md'>{loading ? 'Loading....' : 'Create Event'}</button>
                        </form>
                    </Stack>
                </div>

            </div>
        </>
    )
}

export default CreateEvent