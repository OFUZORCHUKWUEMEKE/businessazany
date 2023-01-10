// import React from 'react'
import Navbar from '../components/Navbar'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { CircularProgress, IconButton, TextField } from '@mui/material';
import axios from 'axios';
const Reset = () => {
    const [password, setPassword] = useState()
    const [confirm_password, setConfirmPassword] = useState()
    const [loading, setLoading] = useState()
    const { state: { user_id, email, signup } } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()
        try {
            setLoading(true)
            const response = await axios.post(`https://azanypartners.urbantour.org/api/business/auth/new_password_entry?user_id=${user_id}&password=${password}&password_confirmation=${confirm_password}`)

            console.log(response.data)
            setLoading(false)
            toast('Successful', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setTimeout(() => {
                navigate('/login')
            }, 1500)
            // console.log({user_id,password,confirm_password})

        setLoading(false)

        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }
    return (
        <>
            <Navbar />
            <div className="m-auto w-[85%]">
                <div className="w-full flex justify-center">
                    <div className=" text-sm py-14 md:w-[30%]">
                        <div className=" text-center space-y-3">
                            <h1 className="font-bold text-3xl main">Reset Password</h1>
                            <p className="text-gray-400">please create a password and start using your accpunt</p>
                            {/* <p className="text-md">Provide the OTP sent to Joel@gmail.com</p> */}
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className='py-3'>
                                <div className='py-3'>
                                    <TextField
                                        id="outlined-password-input"
                                        label="Password"
                                      
                                        type='password'
                                        autoComplete="current-password"
                                        className='w-full'
                                        name='email py-3'
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className='py-3'>
                                    <TextField
                                        id="outlined-password-input"
                                        label="Confirm Passsword"
                                        type='password'
                                        autoComplete="current-password"
                                        className='w-full py-3'
                                        name='email'
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        required
                                    />
                                </div>


                            </div>

                            <div className="space-y-5">
                                {/* <p className="text-center py-2">Didn’t receive an OTP?  <span className='text-red-500 bg-red-50 rounded-xl p-1'><a href="emailVerification"> Resend in 60s</a></span></p> */}
                                <button className='text-white c-primary-color w-full rounded-md  py-4 px-4'>
                                    {loading ? (
                                        'Loading....'
                                    ) : (
                                        <p>Confirm</p>
                                    )}
                                </button>
                                <p className="text-center py-2">Don't have an account?<span className='text-[#1B7CFC]'><a href="emailVerification">Sign up</a></span></p>
                            </div>
                        </form>
                        {/* <div className="flex gap-5 py-14 justify-center">
                            <input type="text" className='bg-[#DBE1E7] w-[18%] h-[8vh]' />
                            <input type="text" className='bg-[#DBE1E7] w-[18%] h-[8vh]' />
                            <input type="text" className='bg-[#DBE1E7] w-[18%] h-[8vh]' />
                            <input type="text" className='bg-[#DBE1E7] w-[18%] h-[8vh]' />
                        </div> */}

                    </div>
                </div>
            </div>
        </>
    )
}

export default Reset