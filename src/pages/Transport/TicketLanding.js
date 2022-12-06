import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Profile from '../../components/Profile'

const TicketLanding = () => {
    return (
        <div className='bg-[#fafbfdd7]'>
            <Navbar />
            <div className="md:h-[75vh] md:flex items-center m-auto w-[85%]">
                <div className="md:w-[30%]">
                    <Profile />
                </div>
                <div className="py-4 md:w-[25%] m-auto">
                    <h2 className='text-center'>You have not listed a transport route</h2>
                    <Link to="/transport/createTicketInfo">
                        <button className='border-[#1B7CFC] bg-transparent border-2 text-[#1B7CFC] w-[100%] py-2 px-4 mx-2 mt-5 rounded-md'>Create Route</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default TicketLanding