import { CircularProgress, TextField } from '@mui/material'
import React, { useContext, useState } from 'react'
import Navbar from '../components/Navbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import '../styles/main.css'

import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';
const ForgotPassword = () => {
    const [state, setState] = useState({
        email: "",

    })
    const {dispatch} = useContext(AuthContext)
    const handleChange = (e) => {
        setState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const response = await axios.post(`https://azanypartners.urbantour.org/api/business/auth/reset_password_email_entry?email=${state.email}`)
            // setEmail(email)
            console.log(response.data)
            dispatch({type:"REGISTER",payload:{user_id:response.data.data.user[0].id,email:state.email,signup:true}})
            setLoading(false)
            toast.success('Registration Successful', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            navigate('/confirmEmail')
        } catch (error) {
            console.log(error.response)
            setLoading(false)
        }
    }
    return (
        <>
            <div className=''>
                <Navbar />
                <div className='flex flex-col justify-center items-center h-[80vh]'>
                    <div className='space-y-4 flex flex-col justify-center items-center'>
                        <h2 className='text-xl text-[#1B7CfC] font-bold main'>Forgot Passsword</h2>
                    </div>
                    <div className='space-y-3 py-6 h-[40vh] w-[25%]'>
                        <form
                            className='space-y-3 flex justify-center flex-col w-full' onSubmit={handleSubmit}>
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


                            {/* <div className='flex justify-between items-center'>
                                <p className='text-[10px] text-gray-300 cursor-pointer'>Remember me</p>
                                <p className='text-[10px] text-gray-300 cursor-pointer'>Forgot Password?</p>
                            </div> */}
                            <button type='submit' className={loading ? `text-white w-full rounded-md bg-[#74454f] py-2 px-4` : `text-white bg-[#1B7CfC] w-full rounded-md  py-2 px-4`}>
                                {loading ? (
                                    <div className='flex items-center justify-center'>
                                        <CircularProgress className='text-green-500' />
                                    </div>
                                ) : (
                                    <p>Login</p>
                                )}
                            </button>
                            <p className='text-[9px] text-center'>Don’t have an account? <span className='text-blue-400 cursor-pointer'>Sign Up</span> </p>
                        </form>
                    </div>
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

export default ForgotPassword;