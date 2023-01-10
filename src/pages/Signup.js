import React, { useContext, useState } from 'react';
import Navbar from '../components/Navbar';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import { Link } from "react-router-dom";
import { Input } from "@material-tailwind/react";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from '@mui/material/IconButton';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import '../styles/main.css'
const SignUp = () => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [state, setState] = useState({
        email: '',
        first_name: "",
        last_name: "",
        password: '',
        password_confirmation: ""
    })
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    // const { setCode, setUserId,setEmail } = useContext(AuthContext)
    const { dispatch } = useContext(AuthContext)

    const handleChange = (e) => {
        setState((prev) => ({ ...prev, [e.target.name]: e.target.value }))

    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('processing')
        setLoading(true)
        try {
            const res = await axios.post(`https://azanypartners.urbantour.org/api/business/auth/register`, state)
            // setUserId(res.data.data.user.id)
            // setEmail(state.email)
            console.log(res.data.data.user.id)
            dispatch({ type: "REGISTER", payload: { user_id: res.data.data.user.id, email: state.email, signup: true } })
            setLoading(false)
            console.log('successfull')
            navigate('/emailVerification')
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
        } catch (error) {
            console.log(error.response)
            setLoading(false)
            toast.error('An Error Occured', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    return (
        <div className='overflow-x-hidden'>
            <Navbar />
            <div className='w-full flex justify-center'>
                <div className="mx-auto  text-sm py-12">
                    <div className="space-y-2 pb-8">
                        <h1 className="text-3xl font-bold main">Create Account</h1>
                        <p className="main">Create an account to partner with Azany Business</p>
                    </div>
                    <form className="" onSubmit={handleSubmit}>
                        <div className="space-y-5">
                            <div>
                                <TextField label="First Name" name='first_name' onChange={handleChange} id="outlined-size-normal" className='w-[100%] bg-gray-100 text-sm' />
                            </div>
                            <div>
                                <TextField label="Last Name" name='last_name' onChange={handleChange} id="outlined-size-normal" className='w-[100%] bg-gray-100' />
                            </div>
                            <div>
                                <TextField label="Email address" name='email' onChange={handleChange} id="outlined-size-normal" className='w-[100%] bg-gray-100' />
                            </div>
                            <div className=''>
                                <TextField label="Enter Password" name='password' type="password" onChange={handleChange} id="outlined-size-normal" className='w-[100%] bg-gray-100' />
                            </div>
                            <div>
                                <TextField label="Confirm Password" name='password_confirmation' type="password" onChange={handleChange} id="outlined-size-normal" className='w-[100%] bg-gray-100' />
                            </div>
                            <div className="flex items-center text-sm ">
                                <Checkbox {...label} />
                                <p className="">By clicking ‘sign up’ I agree to <span className='font-semibold text-[#1B7CFC]'>Terms & Conditions</span></p>
                            </div>
                        </div>
                        <div className="py-5">
                            <button disabled={loading ? true : false} className='secondary-button my-3 py- bg-blue-500 w-[100%]'>
                                {loading ? 'Loading...' : 'Submit'}
                            </button>
                            <p className="text-center py-2">Already have an account?<span className='font-semibold text-[#1B7CFC]'><Link to="emailVerification"> Log In</Link></span></p>
                        </div>
                    </form>
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
        </div>
    );

}
export default SignUp;