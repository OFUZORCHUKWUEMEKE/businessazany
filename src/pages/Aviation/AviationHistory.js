import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import { SlLocationPin } from "react-icons/sl"
import { useState } from 'react';
import TransactionTable from '../../components/Transaction';
import { TbArrowsLeftRight, TbEdit } from "react-icons/tb"
import Profile from '../../components/Profile';
import axios from 'axios';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';


const AviationHistory = () => {
    const [tab, setTab] = useState(false)
    const [loading1, setLoading1] = useState(false)
    const [loading2, setLoading2] = useState(false)
    const [loading3, setLoading3] = useState(false)
    const [action, setAction] = useState(true)
    const [center, setCenter] = useState(false)
    const [old, setOld] = useState(false)

    const [route, setRoute] = useState([])
    const [flight, setFlight] = useState([])
    const [ticket, setTicket] = useState([])
    const [isSelected, setIsSelected] = useState(false)
    const [identifier, setIdentifier] = useState()

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

    const fetchRoutes = async () => {
        setLoading1(true)
        const token = JSON.parse(localStorage.getItem('token'))
        const headers = {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
        }
        try {
            const response = await axios.get(`https://azanypartners.urbantour.org/api/business/aviation/fetch_routes`, { headers })
            console.log(response.data.data.values)
            setRoute(response?.data?.data?.values)
            setLoading1(false)
        } catch (error) {
            setLoading1(false)
            console.log(error?.response)
        }
    }

    const fetchFlight = async () => {
        setLoading2(true)
        const token = JSON.parse(localStorage.getItem('token'))
        const headers = {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
        }
        try {
            const response = await axios.get(`https://azanypartners.urbantour.org/api/business/aviation/fetch_flight`, { headers })
            console.log("Flights ==>" + response.data.data.values)
            setFlight(response?.data?.data?.values)
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
            const response = await axios.get(`https://azanypartners.urbantour.org/api/business/aviation/list_ticket_by_pagination/0/1`, { headers })
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
        fetchFlight()
        fetchTicket()
    }, [])

    return (
        <div className='md:bg-[#F5F5F5] bg-white'>
            <Navbar />
            <div className="m-auto w-[85%] md:py-20 ">
                <div className="md:grid grid-cols-10 gap-10">
                    <div className=" col-span-3">
                        <Profile />
                    </div>

                    <div className="space-y-5 col-span-7">
                        <div className="md:shadow-md flex justify-around md:bg-white mt-3 md:mt-0 p-3 gap-20 mb-10 ">
                            <p className={action ? `cursor-pointer text-blue-500 underline decoration-2` : 'cursor-pointer  text-black'} onClick={() => handleAction()}>Routes</p>
                            <p className={center ? `cursor-pointer text-blue-500 underline decoration-2` : 'cursor-pointer text-black'} onClick={() => handleCenter()}>Flight</p>
                            <p className={old ? `cursor-pointer text-blue-500 underline decoration-2` : 'cursor-pointer text-black'} onClick={() => handleOld()}>Tickets</p>
                        </div>

                        {action && <div className="md:grid grid-cols-3 items-center gap-3 space-y-6 md:space-y-0">
                            {/* {route && ( */}
                            <>
                                {/* {route.map((route, index) => ( */}
                                <div className="flex items-center md:block">
                                    <img src="/images/event (1).png" alt="" className="md:rounded-t-xl rounded-l-xl object-cover md:w-[250%] h-[156px] w-[132px] md:h-[30vh]" />
                                    <div className="p-3 py-2 space-y-4 flex flex-col bg-white md:h-[15vh] text-center justify-center rounded-b-xl">
                                        {/* <h1 className="font-semibold">{route?.departure} - {route?.destination}</h1> */}
                                        <p className="text-blue-500">CRJ 7</p>
                                        <h1 className="font-semibold">Okota, Lagos-Enugu</h1>
                                    </div>
                                </div>
                                <div className="flex items-center md:block">
                                    <img src="/images/event (1).png" alt="" className="md:rounded-t-xl rounded-l-xl object-cover md:w-[250%] h-[156px] w-[132px] md:h-[30vh]" />
                                    <div className="p-3 py-2 space-y-4 flex flex-col bg-white md:h-[15vh] text-center justify-center rounded-b-xl">
                                        {/* <h1 className="font-semibold">{route?.departure} - {route?.destination}</h1> */}
                                        <p className="text-blue-500">CRJ 7</p>
                                        <h1 className="font-semibold">Okota, Lagos-Enugu</h1>
                                    </div>
                                </div>
                                <div className="flex items-center md:block">
                                    <img src="/images/event (1).png" alt="" className="md:rounded-t-xl rounded-l-xl object-cover md:w-[250%] h-[156px] w-[132px] md:h-[30vh]" />
                                    <div className="p-3 py-2 space-y-4 flex flex-col bg-white md:h-[15vh] text-center justify-center rounded-b-xl">
                                        {/* <h1 className="font-semibold">{route?.departure} - {route?.destination}</h1> */}
                                        <p className="text-blue-500">CRJ 7</p>
                                        <h1 className="font-semibold">Okota, Lagos-Enugu</h1>
                                    </div>
                                </div>
                                {/* ))} */}
                            </>
                            {/* )} */}
                        </div>}

                        {center && <div className="md:grid grid-cols-3 items-center gap-3 ">
                            <div className="flex items-center md:block">
                                <img src="/images/Plane.png" alt="" className="md:rounded-t-xl rounded-l-xl object-cover md:w-[250%] h-[156px] w-[132px] md:h-[30vh]" />
                                <div className="p-3 py-2 space-y-4 flex flex-col bg-white md:h-[15vh] text-center justify-center rounded-b-xl">
                                    {/* <h1 className="font-semibold">{route?.departure} - {route?.destination}</h1> */}
                                    <p className="text-blue-500">CRJ 7</p>
                                    <h1 className="font-semibold">Okota, Lagos-Enugu</h1>
                                </div>
                            </div>
                        </div>}

                        {old && <div className=" space-y-5 md:space-y-0">
                            <Grid container spacing={2}>
                                {/* {ticket && ( */}
                                <>
                                    {/* {ticket.map((ticket, index) => ( */}
                                    <Grid item xs={12} md={6} >
                                        <div className="py-3">
                                            <div className="bg-[#F2F8FF] flex items-center justify-between p-3 text-sm ">
                                                <h1 className="text-[#1B7CFC] font-semibold">{ticket?.flight[0]?.model}</h1>
                                                <p className="text-[#A0A0A0]">{ticket?.type} trip</p>
                                            </div>
                                            <div className="p-3 py-2 space-y-4 bg-white h-[20vh]  rounded-b-xl">
                                                <h1 className="font-semibold">{ticket?.flight[0]?.model}</h1>
                                                <div className="flex items-center gap-10">
                                                    <p className="font-semibold">{ticket?.flight[0]?.route[0]?.departure}</p>
                                                    <TbArrowsLeftRight className='text-gray-500' />
                                                    <p className="font-semibold">{ticket?.flight[0]?.route[0]?.destination}</p>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <p className="font-semibold">{ticket?.reward_point_amount}</p>
                                                    <TbEdit className='text-[#1B7CFC] text-xl' />
                                                </div>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} md={6} >
                                        <div className="py-3">
                                            <div className="bg-[#F2F8FF] flex items-center justify-between p-3 text-sm ">
                                                <h1 className="text-[#1B7CFC] font-semibold">{ticket?.flight[0]?.model}</h1>
                                                <p className="text-[#A0A0A0]">{ticket?.type} trip</p>
                                            </div>
                                            <div className="p-3 py-2 space-y-4 bg-white h-[20vh]  rounded-b-xl">
                                                <h1 className="font-semibold">{ticket?.flight[0]?.model}</h1>
                                                <div className="flex items-center gap-10">
                                                    <p className="font-semibold">{ticket?.flight[0]?.route[0]?.departure}</p>
                                                    <TbArrowsLeftRight className='text-gray-500' />
                                                    <p className="font-semibold">{ticket?.flight[0]?.route[0]?.destination}</p>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <p className="font-semibold">{ticket?.reward_point_amount}</p>
                                                    <TbEdit className='text-[#1B7CFC] text-xl' />
                                                </div>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} md={6} >
                                        <div className="py-3">
                                            <div className="bg-[#F2F8FF] flex items-center justify-between p-3 text-sm ">
                                                <h1 className="text-[#1B7CFC] font-semibold">{ticket?.flight[0]?.model}</h1>
                                                <p className="text-[#A0A0A0]">{ticket?.type} trip</p>
                                            </div>
                                            <div className="p-3 py-2 space-y-4 bg-white h-[20vh]  rounded-b-xl">
                                                <h1 className="font-semibold">{ticket?.flight[0]?.model}</h1>
                                                <div className="flex items-center gap-10">
                                                    <p className="font-semibold">{ticket?.flight[0]?.route[0]?.departure}</p>
                                                    <TbArrowsLeftRight className='text-gray-500' />
                                                    <p className="font-semibold">{ticket?.flight[0]?.route[0]?.destination}</p>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <p className="font-semibold">{ticket?.reward_point_amount}</p>
                                                    <TbEdit className='text-[#1B7CFC] text-xl' />
                                                </div>
                                            </div>
                                        </div>
                                    </Grid>

                                    {/* ))} */}
                                </>
                                {/* )} */}
                            </Grid>
                        </div>}
                    </div>
                </div>
                <div className="md:flex md:justify-end md:pt-[12vh] pt-[30px] pb-[10vh]">
                    <Link to="#">
                        {action && <button className="bg-[#1B7CFC]  bg-[#1B7CFC] w-[100%] py-4 px-6 text-sm rounded-md text-white py-4 px-6 text-sm rounded-md text-white">Create Route</button>}
                        {center && <button className="bg-[#1B7CFC] bg-[#1B7CFC] w-[100%] py-4 px-6 text-sm rounded-md text-white  py-4 px-6 text-sm rounded-md text-white">Add Flight</button>}
                        {old && <button className="bg-[#1B7CFC] bg-[#1B7CFC] w-[100%] py-4 px-6 text-sm rounded-md text-white  py-4 px-6 text-sm rounded-md text-white">Add Ticket</button>}
                    </Link>
                </div>

                {/* Sales History */}
                <div className="">
                    <h1 className="font-bold md:text-2xl">Sales History</h1>
                    <div className='py-4'>
                        <TransactionTable />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AviationHistory;