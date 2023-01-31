import { Stack, TextareaAutosize, TextField } from '@mui/material'
import React, { useRef, useState } from 'react'
import Navbar from '../../components/Navbar'
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { IconButton } from '@mui/material';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { SET_MOVIES } from '../../redux/AuthSlice';
import { useNavigate } from 'react-router-dom';
const CreateMovieTicket = () => {
    const [loading, setLoading] = useState(false)
    const [state, setState] = useState({
        title: "",
        about: '',
        genre: "",
        duration: "",
        released_date: "",
        language: "",

    })
    const navigate = useNavigate()
    const [cover_image, setCoverImage] = useState("")
    const inputRef = useRef()
    const token = JSON.parse(localStorage.getItem('token'))
    const dispatch = useDispatch()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const headers = {
            "Content-Type": "multipart/form-data",
            'Authorization': `Bearer ${token}`
        }
        let formdata = new FormData()
        formdata.append('title', state.title)
        formdata.append('about', state.about)
        formdata.append('genre', state.genre)
        formdata.append('duration', state.duration)
        formdata.append('released_date', state.released_date)
        formdata.append('language', state.language)
        formdata.append('cover_image', cover_image)
        setLoading(true)
        try {
            const response = await axios.post(`https://azanypartners.urbantour.org/api/business/movie/create_movie`, formdata, { headers })
            console.log(response.data)
            setLoading(false)
            console.log({ title: state.title, cover_image, genre: state.genre, language: state.language, released_date: state.released_date, duratiom: state.duration })
            navigate('/movie/ticket')
             dispatch(SET_MOVIES({movie_id:response?.data?.data?.values.id}))
             console.log(response?.data?.data?.values.id)
        } catch (error) {
            console.log(error.response)
            let i = 0
            for (i; i <= error.response.data.data.errors.length; i++) {
                toast.error(error.response.data.data.errors[i])
            }
            setLoading(false)
            console.log(error.response.data.data)
        }
    }

    // console.log(token)


    const handleChange = (e) => {
        setState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleImage = () => {
        inputRef.current.click()
    }
    return (
        <>
            <Navbar />
            <div className='min-h-screen py-5'>
                <div className='w-[25%] mx-auto'>
                    <Stack spacing={3}>
                        <h1 className='text-2xl font-bold text-center'>Create Movie Content</h1>
                        <form className='w-full space-y-4' onSubmit={handleSubmit}>
                            <TextField label="Movie Title" name="title" onChange={handleChange} variant="outlined" className='w-full mx-auto' />
                            {/* <TextField label="About" name="about" variant="outlined" onChange={handleChange} className='w-full mx-auto' /> */}
                            <TextareaAutosize
                                aria-label="minimum height"
                                minRows={3}
                                placeholder="About"
                                name="about" variant="outlined" onChange={handleChange}
                                // style={{ width: 200 }}
                                className='w-full mx-auto border-2 px-2 border-gray-200'
                            />
                            {/* <TextField label="Released Date" variant="outlined" onChange={handleChange} className='w-full mx-auto' /> */}
                            <div className='space-y-2'>
                                <label className='text-sm'>Released Date</label>
                                <input placeholder='Released Date' name='released_date' onChange={handleChange} type="date" className=" px-4 w-full border-2 py-4 border-gray-200  c-text-input" />
                            </div>

                            <TextField label="Genre" name="genre" variant="outlined" onChange={handleChange} className='w-full mx-auto' />
                            <TextField label="Language" name="language" variant="outlined" onChange={handleChange} className='w-full mx-auto' />
                            <TextField label="Duration" name="duration" variant="outlined" onChange={handleChange} className='w-full mx-auto' />

                            <div className="">
                                {cover_image ? (
                                    <div className='p-2 border-2 border-blue-500 border-dotted w-3/5'>
                                        <img onChange={(e) => console.log(e.target.files[0])} src={URL.createObjectURL(cover_image)} className="h-44 w-full" />
                                    </div>
                                ) : (
                                    <div className='h-40 md:w-full w-full flex justify-center items-center border-2 border-blue-500 border-dotted cursor-pointer' onClick={handleImage}>
                                        <div className='space-y-3 flex justify-center items-center flex-col'>
                                            <h2 className='text-gray-500'> Cover Image</h2>
                                            <input type="file" ref={inputRef} className="hidden" onChange={(e) => {
                                                // handleChange()
                                                // setImages(e.target.files[0])
                                                setCoverImage(e.target.files[0])
                                                // handleClickOpen()
                                            }} />
                                            <IconButton>
                                                <FileUploadIcon className='text-[#E51B48]' />
                                            </IconButton>
                                            <p className='text-gray-400'>Click to Upload</p>
                                        </div>
                                    </div>
                                )}
                                {/* <input placeholder="Logo" type="file" required id="outlined-size-normal" onChange={(e) => setLogo(e.target.files[0])} className='w-[100%] bg-gray-100' /> */}
                            </div>
                            <button className='py-4 bg-[#1B7CFC] text-center w-full text-white  px-4 rounded-md'>{loading ? 'Loading...' : 'Create Movie Content'}</button>
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

export default CreateMovieTicket