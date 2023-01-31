import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar'
import Profile from '../../components/Profile';

const   Landing = () => {
    const {user} = useSelector((state)=>state.user)
    const [service,setService] = useState(user[0].busisness_details[0])
    console.log(user[0].busisness_details[0])
  return (
       <div className='bg-[#fafbfdd7]'>
            <Navbar />
            <div className="md:h-[75vh] md:flex items-center m-auto w-[85%]">
                <div className="md:w-[30%]">
                    <Profile service={service}/>
                </div>
                <div className="py-4 md:w-[25%] m-auto">
                    <h2 className='text-center'>You have not Listed a Event</h2>
                    <Link to="/event/create">
                        <button className='border-[#1B7CFC] bg-transparent border-2 text-[#1B7CFC] w-[100%] py-2 px-4 mx-2 mt-5 rounded-md'>Create Event Ticket</button>
                    </Link>
                </div>
            </div>
        </div> 
  )
}
export default  Landing;