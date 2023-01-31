import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import { SlLocationPin } from "react-icons/sl"
import { useState } from 'react';
import TransactionTable from '../../components/Transaction';
import { TbArrowsLeftRight, TbEdit } from "react-icons/tb"
import Profile from '../../components/Profile';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Protected from '../../components/utils';
import { Grid, IconButton, Stack } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
// import { TbEdit } from 'react-icons/tb';


const TransportHistory = () => {
    const [tab, setTab] = useState(false)
    const [loading1, setLoading1] = useState(false)
    const [loading2, setLoading2] = useState(false)
    const [loading3, setLoading3] = useState(false)
    const [action, setAction] = useState(true)
    const [center, setCenter] = useState(false)
    const [old, setOld] = useState(false)
    const [route, setRoute] = useState([])
    const [vehicle, setVehicle] = useState([])
    const [ticket, setTicket] = useState([])
    const [isSelected, setIsSelected] = useState(false)
    const [identifier, setIdentifier] = useState()

    const identity = (route) => {
        setIsSelected(true)
        setIdentifier(route.id)
    }

    const fetchRoutes = async () => {
        setLoading1(true)
        const token = JSON.parse(localStorage.getItem('token'))
        const headers = {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
        }
        try {
            const response = await axios.get(`https://azanypartners.urbantour.org/api/business/transport/fetch_routes`, { headers })
            console.log(response.data.data.values)
            setRoute(response?.data?.data?.values)
            setLoading1(false)
        } catch (error) {
            setLoading1(false)
            console.log(error?.response)
        }
    }
    const fetchVehicle = async () => {
        setLoading2(true)
        const token = JSON.parse(localStorage.getItem('token'))
        const headers = {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
        }
        try {
            const response = await axios.get(`https://azanypartners.urbantour.org/api/business/transport/list_vehicle_by_pagination/0/1`, { headers })
            console.log(response.data.data.values)
            setVehicle(response?.data?.data?.values)
            setLoading2(false)
        } catch (error) {
            console.log(error?.response)
            setLoading2(false)
        }
    }
    const fetchTicket = async () => {
        setLoading3(true)
        const token = JSON.parse(localStorage.getItem('token'))
        const headers = {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
        }
        try {
            const response = await axios.get(`https://azanypartners.urbantour.org/api/business/transport/list_ticket_by_pagination/0/4`, { headers })
            console.log(response.data.data.values)
            setTicket(response?.data?.data?.values)
            setLoading3(false)
        } catch (error) {
            console.log(error?.response)
            setLoading3(false)
        }
    }
    useEffect(() => {
        fetchRoutes()
        fetchVehicle()
        fetchTicket()
    }, [])

    const handleAction = () => {
        setAction(true)
        setOld(false)
        setCenter(false)
    }
    const handleOld = () => {
        setOld(true)
        setAction(false)
        setCenter(false)
    }
    const handleCenter = () => {
        setOld(false)
        setAction(false)
        setCenter(true)
    }

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
                            <p className={action ? `cursor-pointer text-blue-500` : 'cursor-pointer  text-black'} onClick={() => handleAction()}>Routes</p>
                            <p className={center ? `cursor-pointer text-blue-500` : 'cursor-pointer text-black'} onClick={() => handleCenter()}>Vehicle</p>
                            <p className={old ? `cursor-pointer text-blue-500` : 'cursor-pointer text-black'} onClick={() => handleOld()}>Tickets</p>
                        </div>

                        {action && <div className="md:grid grid-cols-3 items-center gap-3 ">
                            {route && (
                                <>
                                    {route?.map((route, index) => (
                                        <React.Fragment key={route.id}>
                                            {!isSelected && <div className="relative" >
                                                <div className='absolute right-1 top-4'>
                                                    <IconButton onClick={() => console.log(route)}>
                                                        <TbEdit className="text-white" />
                                                    </IconButton>
                                                </div>
                                                <img src="/images/Vehicle.png" alt="" className="rounded-t-xl object-cover w-[250%] h-[30vh]" />
                                                <div className="p-3 py-2 space-y-4 flex flex-col bg-white h-[10vh] text-center justify-center rounded-b-xl">
                                                    <h1 className="font-semibold">{`${route.departure} - ${route.destination}`}</h1>
                                                </div>
                                            </div>}

                                            {isSelected && route.id === identifier && <div className='py-4'>
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
                                        </React.Fragment>

                                    ))}
                                </>
                            )}

                        </div>}

                        {center && <div className="md:grid grid-cols-3 items-center gap-3 ">
                            {vehicle && (
                                <>
                                    {vehicle.map((vehicle, index) => (
                                        <div className="" key={index}>
                                            <img src="/images/Vehicle.png" alt="" className="rounded-t-xl object-cover w-[250%] h-[30vh]" />
                                            <div className="p-3 py-2 space-y-4 flex flex-col bg-white h-[10vh] text-center justify-center rounded-b-xl">
                                                <h1 className="font-semibold text-[#1B7CFC] ">{vehicle.model}</h1>
                                                <h1 className="font-semibold">{vehicle.route[0].departure} - {vehicle.route[0].destination}</h1>
                                            </div>
                                        </div>
                                    ))}
                                </>
                            )}
                        </div>}

                        {old && <div className=" space-y-5 md:space-y-0">
                            <Grid container spacing={3}>
                                {ticket && (
                                    <>
                                        {ticket.map((ticket, index) => (
                                            <Grid item sm={12} md={6} key={index}>
                                                <div className=" ">
                                                    <div className="bg-[#F2F8FF] flex items-center justify-between p-3 text-sm ">
                                                        <h1 className="text-[#1B7CFC] font-semibold">{ticket.vehicle[0].model}</h1>
                                                        <p className="text-[#A0A0A0]">{`${ticket.type} Trip`}</p>
                                                    </div>
                                                    <div className="p-3 py-2 space-y-4 bg-white h-[20vh]  rounded-b-xl">
                                                        <h1 className="font-semibold">{`${ticket.vehicle[0].model}`}</h1>
                                                        <div className="flex items-center gap-10">
                                                            <p className="font-semibold">Lagos</p>
                                                            <TbArrowsLeftRight className='text-gray-500' />
                                                            <p className="font-semibold">Kwara</p>
                                                        </div>
                                                        <div className="flex items-center justify-between">
                                                            <p className="font-semibold">{`${ticket.reward_point_amount} RP`}</p>
                                                            <TbEdit className='text-[#1B7CFC] text-xl' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Grid>

                                        ))}
                                    </>

                                )

                                }
                            </Grid>
                            {/* <div className="md:grid grid-cols-2 items-center gap-3">/ */}
                            {/* </div> */}

                        </div>}
                    </div>
                </div>
                <div className="flex justify-end pt-[20vh] pb-[5vh]">
                    {action && <Link to="/transport/createRoute">
                        <button className="bg-[#1B7CFC] py-4 px-6 text-sm rounded-md text-white">Create Route</button>
                    </Link>}
                    {center && <Link to="/transport/createVehicleInfo">
                        <button className="bg-[#1B7CFC] py-4 px-6 text-sm rounded-md text-white">Add Vehicle</button>
                    </Link>}
                    {old && <Link to="/transport/createTicketInfo">
                        <button className="bg-[#1B7CFC] py-4 px-6 text-sm rounded-md text-white">Add Ticket</button>
                    </Link>}
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

export default TransportHistory;