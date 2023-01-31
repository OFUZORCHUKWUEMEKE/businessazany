import axios from 'axios';
import { MuiOtpInput } from 'mui-one-time-password-input';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { AuthContext } from '../context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CircularProgress } from '@mui/material';
import '../styles/main.css'
const Otpp = () => {
    const [value, setValue] = useState()
    const [loading, setLoading] = useState(false)
    const { state: { user_id, email, signup } } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleChange = (value) => {
        console.log(value)
        setValue(value)
    }

    const handleSubmit = async (e) => {
        // console.log({ user_id, value })
        setLoading(true)
        e.preventDefault()
        console.log('processing.......')
        console.log(value)
        try {
            const response = await axios.post(`https://azanypartners.urbantour.org/api/business/auth/password_reset_code_entry?user_id=${user_id}&code=${parseInt(value)}`, { user_id, code: parseInt(value) })
            console.log(response.data.data)
            toast('Successful', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            navigate('/reset')
            setLoading(false)

        } catch (error) {
            setLoading(false)
            console.log(error.response.data.message)
            toast.error(error.response.data.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

        }
    }
    return (
        <div>
            <Navbar />
            <div className="m-auto w-[85%]">
                <div className="w-full flex justify-center">
                    <div className=" text-sm py-14 md:w-[30%] w-[95%]">
                        <div className=" text-center space-y-3">
                            <h1 className="font-bold text-3xl main">Resent Otp</h1>
                            {/* <p className="text-md">Provide the OTP sent to Joel@gmail.com</p> */}
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className='py-4'>
                                <MuiOtpInput length={6} onChange={handleChange} value={value} />
                            </div>

                            <div className="space-y-5">
                                <p className="text-center py-2">Didn’t receive an OTP?  <span className='text-red-500 bg-red-50 rounded-xl p-1'><a href="emailVerification"> Resend in 60s</a></span></p>
                                <button className='text-white c-primary-color w-full rounded-md  py-2 px-4'>
                                    {loading ? (
                                        'Loading....'
                                    ) : (
                                        <p>Verify</p>
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
        </div>
    );
}

export default Otpp