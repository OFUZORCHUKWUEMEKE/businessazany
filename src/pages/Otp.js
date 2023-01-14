import axios from 'axios';
import { MuiOtpInput } from 'mui-one-time-password-input';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { AuthContext } from '../context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CircularProgress } from '@mui/material';
const EmailVerification = () => {
    const [value, setValue] = useState()
    const [loading, setLoading] = useState(false)
    const { state: { user_id, email, signup } }  = useContext(AuthContext)
    const navigate = useNavigate()
    const handleChange = (value) => {
        console.log(value)
        setValue(value)
    }
    console.log(user_id)

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault();
        console.log(value)
        try {
            const response = await axios.post(`https://azanypartners.urbantour.org/api/business/auth/verify_email_code`, { user_id, code: parseInt(value) })
            console.log(response.data)
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
                navigate('/businessVerification')
            }, 1500)

            // setLoading(false)
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
      
        console.log({ user_id, value })
    }
    console.log(user_id)
    return (
        <div>
            <Navbar />
            <div className="m-auto w-[85%]">
                <div className="w-full flex justify-center">
                    <div className=" text-sm py-14 md:w-[30%]">
                        <div className=" text-center space-y-3">
                            <h1 className="font-bold text-3xl">Email Verification</h1>
                            <p className="text-md">Provide the OTP sent to {email}</p>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className='py-4'>
                                <MuiOtpInput length={6} onChange={handleChange} value={value} />
                            </div>

                            <div className="space-y-5">
                                <p className="text-center py-2">Didn’t receive an OTP?  <span className='text-red-500 bg-red-50 rounded-xl p-1'><a href="emailVerification"> Resend in 60s</a></span></p>
                                <button className={loading ? `text-white w-full rounded-md bg-[#74454f] py-2 px-4` : `text-white bg-[#E51B48] w-full rounded-md  py-2 px-4`}>
                                    {loading ? (
                                        <div className='flex items-center justify-center'>
                                            <CircularProgress className='text-green-500' />
                                        </div>
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
};

export default EmailVerification;