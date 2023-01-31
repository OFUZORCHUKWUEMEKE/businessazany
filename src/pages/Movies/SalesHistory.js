import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import { SlLocationPin } from "react-icons/sl"
import { useState } from 'react';
import TransactionTable from '../../components/Transaction';
import Profile from '../../components/Profile';
import { IconButton, Stack } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { TbEdit } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import axios from 'axios';
const SalesHistory = () => {
    const [tab, setTab] = useState(false)

    const [action, setAction] = useState(true)
    const [old, setOld] = useState(false)
    const [isSelected, setIsSelected] = useState(false)
    const [isSelectedTwo, setIsSelectedTwo] = useState(false)
    const [isSelectedThree, setIsSelectedThree] = useState(false)

    const handleAction = () => {
        setAction(true)
        setOld(false)
    }
    const handleOld = () => {
        setOld(true)
        setAction(false)
    }
    const fetchMovies = async () => {
        // setLoading1(true)
        const token = JSON.parse(localStorage.getItem('token'))
        const headers = {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
        }
        try {
            const response = await axios.get(`https://azanypartners.urbantour.org/api/business/movie/fetch_old_movies/0/6`, { headers })
            console.log(response.data.data.values)
            // setRoute(response?.data?.data?.values)
            // setLoading1(false)
        } catch (error) {
            // setLoading1(false)
            console.log(error?.response)
        }
    }
    // const fetchVehicle = async () => {
    //     setLoading2(true)
    //     const token = JSON.parse(localStorage.getItem('token'))
    //     const headers = {
    //         "Content-Type": "application/json",
    //         'Authorization': `Bearer ${token}`
    //     }
    //     try {
    //         const response = await axios.get(`https://azanypartners.urbantour.org/api/business/transport/list_vehicle_by_pagination/0/1`, { headers })
    //         console.log(response.data.data.values)
    //         setVehicle(response?.data?.data?.values)
    //         setLoading2(false)
    //     } catch (error) {
    //         console.log(error?.response)
    //         setLoading2(false)
    //     }
    // }
    useEffect(()=>{
        fetchMovies()
    })
    return (
        <div className='bg-[#F5F5F5]'>
            <Navbar />
            <div className="m-auto w-[85%] py-20">
                <div className="md:grid grid-cols-10 gap-10">
                    <div className=" col-span-3">
                        <Profile />
                    </div>

                    <div className="space-y-5 col-span-7">
                        <div className="shadow-md flex justify-around bg-white p-3 gap-20 px-20 mb-10 ">
                            <p className={action ? `cursor-pointer text-blue-500` : 'cursor-pointer text-black'} onClick={() => handleAction()}>Movies</p>
                            <p className={old ? `cursor-pointer text-blue-500` : 'cursor-pointer text-black'} onClick={() => handleOld()}>Ticket</p>
                        </div>

                        {action && <div className="md:grid grid-cols-3 items-center gap-3 ">
                            {!isSelected && <div className="relative">
                                <img src="/images/Movie.png" alt="" className="rounded-t-xl object-cover w-[250%] h-[30vh]" />
                                <div className='absolute right-1 top-4'>
                                    <IconButton onClick={() => setIsSelected(true)}>
                                        <TbEdit className="text-white" />
                                    </IconButton>
                                </div>
                                <div className="p-3 py-2 space-y-4 flex flex-col bg-white">
                                    <h1 className="font-semibold">Movie 2</h1>
                                    <button className='bg-transparent border border-[#1B7CFC] py-4 px-12 rounded-md text-[#1B7CFC]'>Add tickets</button>
                                </div>
                            </div>}
                            {isSelected && <div className='py-4'>
                                <Stack spacing={3}>

                                    <Link to="/movie/edit">
                                        <button className=' bg-transparent border  w-4/5 mx-auto border-[#1B7CFC] text-[#1B7CFC] py-4 px-12 rounded-md '>Edit Movie</button>
                                    </Link>
                                    <Link to="/movie/ticket">
                                        <button className=' bg-transparent  w-4/5 mx-auto border border-[#1B7CFC] text-[#1B7CFC] py-4 px-12 rounded-md '>Edit Ticket</button>
                                    </Link>

                                    <button className=' bg-transparent border  w-4/5 mx-auto border-[#1B7CFC] text-[#1B7CFC] py-4 px-12 rounded-md '>Delete</button>
                                </Stack>
                            </div>}
                            {!isSelectedTwo && <div className="relative">
                                <img src="/images/Movie.png" alt="" className="rounded-t-xl object-cover w-[250%] h-[30vh]" />
                                <div className='absolute right-1 top-4'>
                                    <IconButton onClick={() => setIsSelectedTwo(true)}>
                                        <TbEdit className="text-white" />
                                    </IconButton>
                                </div>
                                <div className="p-3 py-2 space-y-4 flex flex-col bg-white">
                                    <h1 className="font-semibold">Movie 1</h1>
                                    <button className='bg-transparent border border-[#1B7CFC] py-4 px-12 rounded-md text-[#1B7CFC]'>Add tickets</button>
                                </div>
                            </div>}
                            {isSelectedTwo && <div className='py-4'>
                                <Stack spacing={3}>

                                    <Link to="/movie/edit">
                                        <button className=' bg-transparent border  w-4/5 mx-auto border-[#1B7CFC] text-[#1B7CFC] py-4 px-12 rounded-md '>Edit Movie</button>
                                    </Link>
                                    <Link to="/movie/ticket">
                                        <button className=' bg-transparent  w-4/5 mx-auto border border-[#1B7CFC] text-[#1B7CFC] py-4 px-12 rounded-md '>Edit Ticket</button>
                                    </Link>

                                    <button className=' bg-transparent border  w-4/5 mx-auto border-[#1B7CFC] text-[#1B7CFC] py-4 px-12 rounded-md '>Delete</button>
                                </Stack>
                            </div>}

                            {!isSelectedThree && <div className="relative">
                                <img src="/images/Movie.png" alt="" className="rounded-t-xl object-cover w-[250%] h-[30vh]" />
                                <div className='absolute right-1 top-4'>
                                    <IconButton onClick={()=>setIsSelectedThree(true)}>
                                        <TbEdit className="text-white" />
                                    </IconButton>
                                </div>
                                <div className="p-3 py-2 space-y-4 flex flex-col bg-white">
                                    <h1 className="font-semibold">Movie 3</h1>
                                    <button className=' bg-transparent border border-[#1B7CFC] text-[#1B7CFC] py-4 px-12 rounded-md '>Add tickets</button>
                                </div>
                            </div>}
                            {isSelectedThree && <div className='py-4'>
                                <Stack spacing={3}>

                                    <Link to="/movie/edit">
                                        <button className=' bg-transparent border  w-4/5 mx-auto border-[#1B7CFC] text-[#1B7CFC] py-4 px-12 rounded-md '>Edit Movie</button>
                                    </Link>
                                    <Link to="/movie/ticket">
                                        <button className=' bg-transparent  w-4/5 mx-auto border border-[#1B7CFC] text-[#1B7CFC] py-4 px-12 rounded-md '>Edit Ticket</button>
                                    </Link>

                                    <button className=' bg-transparent border  w-4/5 mx-auto border-[#1B7CFC] text-[#1B7CFC] py-4 px-12 rounded-md '>Delete</button>
                                </Stack>
                            </div>}

                        </div>}

                        {old && <div className="md:grid grid-cols-3 items-center gap-3 ">
                            <div className="">
                                <img src="/images/Old.png" alt="" className="rounded-t-xl object-cover w-[250%] h-[30vh]" />

                                <div className="p-3 py-2 space-y-4 flex flex-col bg-white">
                                    <h1 className="font-semibold">Movie 2</h1>
                                    <div className=" text-white w-[30%]">
                                        <p className="bg-[#1B7CFC] text-white rounded-xl py-1 px-4">30RP</p>
                                    </div>
                                    <button className=' bg-transparent border border-[#1B7CFC] text-[#1B7CFC] py-4 px-12 rounded-md '>Add tickets</button>
                                </div>
                            </div>
                            <div className="">
                                <img src="/images/Old.png" alt="" className="rounded-t-xl object-cover w-[250%] h-[30vh]" />
                                <div className="p-3 py-2 space-y-4 flex flex-col bg-white">
                                    <h1 className="font-semibold">Movie 1</h1>
                                    <div className=" text-white w-[30%]">
                                        <p className="bg-[#1B7CFC] text-white rounded-xl py-1 px-4">30RP</p>
                                    </div>
                                    <button className=' bg-transparent border border-[#1B7CFC] text-[#1B7CFC] py-4 px-12 rounded-md '>Add tickets</button>
                                </div>
                            </div>
                            <div className="">
                                <img src="/images/Old.png" alt="" className="rounded-t-xl object-cover w-[250%] h-[30vh]" />
                                <div className="p-3 py-2 space-y-4 flex flex-col bg-white">
                                    <h1 className="font-semibold">Movie 3</h1>
                                    <div className=" text-white w-[30%]">
                                        <p className="bg-[#1B7CFC] text-white rounded-xl py-1 px-4">30RP</p>
                                    </div>
                                    <button className=' bg-transparent border border-[#1B7CFC] text-[#1B7CFC] py-4 px-12 rounded-md '>Add tickets</button>
                                </div>
                            </div>
                        </div>}
                    </div>
                </div>
                <div className="flex justify-end pt-[20vh] pb-[5vh]">
                    <button className="bg-[#1B7CFC] py-4 px-6 text-sm rounded-md text-white">Create more movies</button>
                </div>
                {/* Sales History */}
                <div className="">
                    <h1 className="font-bold text-2xl">Sales History</h1>
                    <div className='py-4'>
                        <TransactionTable />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SalesHistory;