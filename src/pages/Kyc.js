import React, { useState } from 'react'
import Layout from '../components/Layout'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Grid, IconButton, TextField } from '@mui/material';
import { unstable_createStaticHandler } from '@remix-run/router';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axiosJwt from '../components/utils';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Kyc = () => {
    const [name, setName] = useState("")
    const [nationality, setNationality] = useState("")
    const [city, setCity] = useState("")
    const [phone, setPhone] = useState("")
    const [country_of_resident, setResident] = useState("")
    const [id_type, setIdType] = useState("")
    const [id_number, setIdNumber] = useState("")
    const [id_document, setIdDocument] = useState("")
    const [date_of_birth, setDob] = useState("")
    const [startDate, setStartDate] = useState(new Date());


    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()
        // const headers = {
        //     'Content-Type': 'application/json',
        //     'Authorization': `Bearer ${token}`
        // }
        try {
            console.log('Processing......')
            // console.log({ ...state, id_document })
            console.log(id_document)
            const formdata = new FormData()
            formdata.append('name', name)
            formdata.append('date_of_birth', startDate)
            formdata.append('nationality', nationality)
            formdata.append('country_of_resident', country_of_resident)
            formdata.append('city', city)
            formdata.append('phone', phone)
            formdata.append('id_type', id_type)
            formdata.append('id_number', id_number)
            formdata.append('id_document', id_document)
            const response = await axiosJwt.post(`https://azanypartners.urbantour.org/api/business/auth/kyc_update`, formdata)
            console.log(response.data)
            toast.success('Account Successfully Updated', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error.response)
        }
        // console.log({ id_document, ...state, id_type })
    }



    return (
        <>
            <Layout>
                <div className='w-4/5 mx-auto'>
                    <div className='py-3'>
                        <h2 className='text-gray-500 text-xl text-center font-bold'>KYC</h2>
                    </div>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className='space-y-3 py-3'>
                                <TextField className='w-full' name='name' required onChange={(e) => setName(e.target.value)} variant='outlined' label='Name' />
                                {/* <TextField className='w-full' variant='outlined' label='Last Name' /> */}
                                <TextField className='w-full' name='nationality' required onChange={(e) => setName(e.target.value)} variant='outlined' label='Nationality' />
                                <div className='space-y-1'>
                                    <p className='text-gray-300'>Date of Birth</p>
                                    {/* <TextField variant='outlined' className='md:w-4/5 w-full outline-none bg-gray-100' placeholder='Enter Date of Birth' /> */}
                                    <DatePicker selected={startDate} required className=' w-full outline-none p-3 border border-gray-300 bg-white ' onChange={(date) => setStartDate(date)} />
                                </div>
                                <TextField className='w-full' required onChange={(e) => setResident(e.target.value)} name='country_of_resident' variant='outlined' label='Country Of Residence' />
                                <TextField className='w-full' required onChange={(e) => setCity(e.target.value)} name='city' variant='outlined' label='City' />
                                <TextField className='w-full' required onChange={(e) => setPhone(e.target.value)} name='phone' variant='outlined' label='Phone number' />
                                <div className='space-y-3'>
                                    <FormControl className='w-full mx-auto'>
                                        <InputLabel id="demo-simple-select-label">Document Type</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={id_type}
                                            label="Document Type"
                                            onChange={(e) => {
                                                setIdType(e.target.value)
                                                console.log(e.target.value)
                                            }
                                            }
                                            required
                                        >
                                            <MenuItem value="PVC">PVC</MenuItem>
                                            <MenuItem value="NIN">NIN</MenuItem>
                                            <MenuItem value="Drivers Licence">Drivers Licence</MenuItem>
                                            <MenuItem value="National Id">National Id</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                                <TextField className='w-full' required name='id_numebr' onChange={(e) => setIdNumber(e.target.value)} variant='outlined' label='Document Number' />
                                {/* <input type='file'/> */}
                                {/* <TextField className='w-full' name='id_document' variant='outlined' label='Document ' /> */}
                                <div>
                                    <h2 className="mt-2 text-gray-400">Document</h2>
                                    <input type='file' required onChange={(e) => setIdDocument(e.target.files[0])} name='id_document' />
                                </div>

                                {/* <TextField className='w-full' name='id_document' variant='outlined' label='Document Number' /> */}
                                <div className="py-3">
                                    <button className='secondary-button py-5 my-3 bg-blue-500 w-[100%]'>{loading ? 'Loading....' : 'Proceed'}</button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </Layout>
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

export default Kyc