import { IconButton } from '@mui/material'
import React from 'react'
import Navbar from '../../components/Navbar'
import Electricity from '../../components/services/Electricity'
import ServiceTabs from '../../components/services/ServiceTabs'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom'
const ServicesList = () => {
    return (
        <>
            <div className='bg-gray-50 min-h-screen'>
                <div className="bg-white h-[12vh] flex items-center ">
                    <div className="w-4/5 mx-auto">
                        <div className='flex items-center justify-between'>
                            <Link to="/listofservices">
                                <div className='flex items-center space-x-4'>
                                    <IconButton>
                                        <ArrowBackIcon />
                                    </IconButton>
                                    <h2 className='text-xl font-bold'>Electricity</h2>
                                </div>
                            </Link>
                            <div className=''>
                                <input placeholder='Search Billing Services' className='py-2 px-3 outline-none border border-gray-100 rounded-md' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-4/5 mx-auto'>
                    <div>
                    </div>
                    {/* <ServiceTabs/> */}
                    <Electricity />
                </div>
            </div>
        </>
    )
}

export default ServicesList;