import React, { useContext, useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { IconButton } from '@mui/material';
import { AuthContext } from '../context/AuthContext';
import { useSelector } from 'react-redux';
const BusinessVerification = () => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [loading, setLoading] = useState(false)
    const [business_name, setBusinessName] = useState("")
    const [phone_1, setPhone1] = useState("")
    const [phone_2, setPhone2] = useState("")
    const [address, setAddress] = useState("")
    const [country, setCountry] = useState("")
    const [service, setService] = useState("")
    const [city, setCity] = useState("")
    const [zip_code, setZipCode] = useState("")
    const [registration_number, setRegNo] = useState("")
    const [document, setDocument] = useState('')
    const [logo, setLogo] = useState('')
    // const [city,setCity] = useState("")

    const navigate = useNavigate()


    const [listedService, setListedService] = useState()

    const token = JSON.parse(localStorage.getItem('token'))

    const {dispatch,state} = useContext(AuthContext)
    const inputRef = useRef()

    console.log(token)

    const handleImage = () => {
        inputRef.current.click()
    }


    const fetchServices = async () => {
        const response = await axios.get(`https://azanypartners.urbantour.org/api/others/services/fetch_service_list`)

        console.log(response.data.data.values)
        setListedService(response.data.data.values)
    }

    useEffect(() => {
        fetchServices()

    }, [])
    console.log(state)  


    const {user} = useSelector((state)=>state.user)
    console.log(user[0].profile[0].first_name)
    const handleSubmit = async (e) => {
        e.preventDefault()

        const headers = {
            "Content-Type": "multipart/form-data",
            'Authorization': `Bearer ${token}`
        }
        try {
            let formData = new FormData()
            setLoading(true)
            formData.append('business_name', business_name)
            formData.append('phone_1', phone_1)
            formData.append('phone_2', phone_2)
            formData.append('address', address)
            formData.append('country', country)
            formData.append('zip_code', zip_code)
            formData.append('city', city)
            formData.append('service', service)
            formData.append('registration_number', registration_number)
            formData.append('document', document)
            formData.append('logo', logo)
            const response = await axios.post(`https://azanypartners.urbantour.org/api/business/auth/create_business_details`, formData, { headers })
            console.log(response.data.data.values)
            dispatch({type:'VERIFY',payload:response.data.data.values})
            window.localStorage.setItem('user',response.data.data.value)

            toast.success('Successful', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

            setLoading(false)
            console.log(formData)
            navigate('/transport/ticketLanding')
        } catch (error) {
            toast.error(error.response.data.data.errors[0])
            setLoading(false)
            console.log(error.response)
            // console.log(formData)
        }

    }
  
    return (
        <div className='overflow-x-hidden'>
            <Navbar />
            <div className='w-full flex justify-center'>
                <div className="mx-auto  text-sm py-12">
                    <div className="space-y-2 pb-8">
                        <h1 className="text-3xl font-bold main">Business Account Verification</h1>
                        <p className="main">Kindly fill your business details on this form</p>
                    </div>
                    <form onSubmit={handleSubmit} className="">
                        <div className="space-y-5">
                            <div>
                                <TextField label="Business Name" required onChange={(e) => setBusinessName(e.target.value)} id="outlined-size-normal" className='w-[100%] bg-gray-100 text-sm' />
                            </div>
                            <div>
                                <TextField label="Business Phone Number 1" required onChange={(e) => setPhone1(e.target.value)} id="outlined-size-normal" className='w-[100%] bg-gray-100' />
                            </div>
                            <div>
                                <TextField label="Business Phone Number 2" required onChange={(e) => setPhone2(e.target.value)} id="outlined-size-normal" className='w-[100%] bg-gray-100' />
                            </div>
                            <div className=''>
                                <TextField label="Business Address" required onChange={(e) => setAddress(e.target.value)} id="outlined-size-normal" className='w-[100%] bg-gray-100' />
                            </div>
                            <div>
                                <TextField label="Country" required onChange={(e) => setCountry(e.target.value)} id="outlined-size-normal" className='w-[100%] bg-gray-100' />
                            </div>
                            <div>
                                <TextField label="City" required onChange={(e) => setCity(e.target.value)} id="outlined-size-normal" className='w-[100%] bg-gray-100' />
                            </div>
                            <div>
                                <TextField label="Zipcode" required onChange={(e) => setZipCode(e.target.value)} id="outlined-size-normal" className='w-[100%] bg-gray-100' />
                            </div>
                            {/* <div>
                                <TextField label="Services" required onChange={(e) => setService(e.target.value)} id="outlined-size-normal" className='w-[100%] bg-gray-100' />
                            </div> */}
                            {listedService && (
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Services</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={service}
                                        label="Age"
                                        onChange={(e) => setService(e.target.value)}
                                    >
                                        {listedService.map((list, index) => (
                                            <MenuItem value={index}>{list.name}</MenuItem>
                                        ))}


                                    </Select>
                                </FormControl>
                            )}
                            <div>
                                <TextField label="Registration number" type='number' required onChange={(e) => setRegNo(e.target.value)} id="outlined-size-normal" className='w-[100%] bg-gray-100' />
                            </div>
                            <div className="">
                                <label className='py-2 text-gray-500 mt-2'>Business Document</label>
                                <input placeholder="Business  Document" required type="file" onChange={(e) => setDocument(e.target.files[0])} id="outlined-size-normal" className='w-[100%] bg-gray-100' />
                            </div>
                            <div className="">
                                {logo ? (
                                    <div className='p-2 border-2 border-blue-500 border-dotted w-3/5'>
                                        <img onChange={(e) => console.log(e.target.files[0])} src={URL.createObjectURL(logo)} className="h-44 w-full" />
                                    </div>
                                ) : (
                                    <div className='h-40 md:w-full w-full flex justify-center items-center border-2 border-blue-500 border-dotted cursor-pointer' onClick={handleImage}>
                                        <div className='space-y-3 flex justify-center items-center flex-col'>
                                            <h2 className='text-gray-500'> Company Logo</h2>
                                            <input type="file" ref={inputRef} className="hidden" onChange={(e) => {
                                                // handleChange()
                                                // setImages(e.target.files[0])
                                                setLogo(e.target.files[0])
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
                        </div>
                        <div className="py-5">
                            <button className='secondary-button py-5 my-3 bg-blue-500 w-[100%]'>{loading ? 'Loading....' : 'Proceed'}</button>
                        </div>
                    </form>
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

export default BusinessVerification;