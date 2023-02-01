import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Profile from '../../components/Profile'

const Event = () => {
    const state = useSelector((state)=>state.user)
    console.log(state)
    return (
         <div className='bg-[#fafbfdd7]'>
            <Navbar />
            <div className=" md:flex items-center m-auto w-[85%] my-10 md:my-0 space-y-16 md:space-y-0">
                <div className="md:w-[30%]">
                    <Profile />
                </div>
                <div className="py-4 md:w-[25%] m-auto">
                    <h2 className='text-center'>You have not Listed a Movie</h2>
                    <Link to="/movie/create">
                        <button className='border-[#1B7CFC] bg-transparent border-2 text-[#1B7CFC] w-[100%] py-2 px-4 mx-2 mt-5 rounded-md'>Create Movie Ticket</button>
                    </Link>
                </div>
            </div>
        </div> 
    )
}
export default Event;