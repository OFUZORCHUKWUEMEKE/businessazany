import { CircularProgress, TextField } from '@mui/material'
import React, { useState } from 'react'
import AvcModal from '../components/AvcModal'
import AzanyModal from '../components/AzanyModal'
import Navbar from '../components/Navbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { USER } from '../redux/AuthSlice'
const Login = () => {
    const [business, setBusiness] = useState(false)
    const [customer, setCustomer] = useState(true)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [opened, setOpened] = React.useState(false);
    const [state, setState] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const handleOpened = () => setOpened(true);
    const handleClosed = () => setOpened(false);
    const handleCustomer = () => {
        setCustomer(true)
        setBusiness(false)
    }
    const handleBusiness = () => {
        setBusiness(true)
        setCustomer(false)
    }
    const dispatch = useDispatch()
    const {user} = useSelector((state)=>state.user)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        e.preventDefault()
        const headers={

        }
        try {
            const res = await axios.post(`https://azanypartners.urbantour.org/api/business/auth/login`, state)
            const response = await axios.get(`https://azanypartners.urbantour.org/api/business/auth/fetch_profile_info`,{headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${res?.data?.token}`
            }})
            console.log(response.data.data.values)
            dispatch(USER(response?.data?.data?.values))
            console.log(res.data.data.message)
            setLoading(false)
            navigate("/transport/ticketLanding")
            window.localStorage.setItem("token", JSON.stringify(res.data.token))
        } catch (error) {
            setLoading(false)
            toast.error(error.response.data.message)
            console.log(error.response)


        }
        // console.log(state)
    }
    console.log(user)
    return (
        <>
            <Navbar />
            {/* {customer && ( */}
            <div className='flex flex-col justify-center items-center h-[80vh]'>
                <div className='space-y-4 flex flex-col justify-center items-center'>
                    <h2 className='text-xl'>Login</h2>
                    <h3>Please enter your details to continue</h3>
                </div>
                <div className='w-3/5 mx-auto p-4 flex justify-between space-x-3'>
                    <button onClick={handleCustomer} className={customer ? `bg-[#1B7CFC] py-2 px-3 w-3/5 rounded-md text-white` : `bg-[#F7F8F9] text-black py-2 px-3 w-3/5 rounded-md`}>As a Customer</button>
                    <button onClick={handleBusiness} className={business ? `bg-[#1B7CFC] text-white py-2 px-3 w-3/5 rounded-md` : `bg-[#F7F8F9] text-black py-2 px-3 w-3/5 rounded-md`}>As a Business Owner</button>
                </div>
                {customer ? (
                    <div className='py-6 flex flex-col space-y-4 h-[40vh]'>
                        <button className='p-3 px-4 bg-[#DBE1E7] w-full border-gray-300 rounded-md' onClick={() => handleOpen()}>Login with Shop Azany</button>
                        <button className='p-3 px-4 bg-[#DBE1E7] w-full rounded-md' onClick={() => handleOpened()}>Login with AVC</button>
                    </div>
                ) : (
                    <div className='space-y-3 py-6 h-[40vh] w-[25%]'>
                        <form onSubmit={handleSubmit} className='space-y-3 flex justify-center flex-col w-full'>
                            <TextField
                                id="outlined-password-input"
                                label="Email"
                                type="azany@gmail.com"
                                autoComplete="current-password"
                                className='w-full'
                                name='email'
                                onChange={handleChange}
                                required
                            />
                            <TextField
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                name='password'
                                onChange={handleChange}
                                required
                            />

                            <div className='flex justify-between items-center'>
                                <p className='text-[10px] text-gray-300 cursor-pointer'>Remember me</p>
                                <Link to="/forgotpassword">
                                    <p className='text-[10px] text-gray-300 cursor-pointer'>Forgot Password?</p>
                                </Link>

                            </div>
                            <button type='submit' disabled={loading ? true : false} className='text-white bg-[#1B7CfC] w-full rounded-md  py-2 px-4'>
                                {loading ? (
                                    'Loading.....'
                                ) : (
                                    <p>Login</p>
                                )}
                            </button>
                            <p className='text-[9px] text-center'>Don’t have an account? <span className='text-blue-400 cursor-pointer'>Sign Up</span> </p>
                        </form>
                    </div>
                )}
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
            <AzanyModal open={open} handleOpen={handleOpen} handleClose={handleClose} setOpen={setOpen} />
            <AvcModal opened={opened} handleOpened={handleOpened} handleClosed={handleClosed} setOpened={setOpened} />
        </>
    )
}
export default Login 