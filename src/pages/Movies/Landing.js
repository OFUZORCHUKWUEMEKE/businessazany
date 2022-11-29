import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'

const Event = () => {
    return (
        <>
            <Navbar />   
            <div className="h-[75vh] flex justify-center items-center">
                <div className="py-4 space-y-3">
                    <h2 className='text-center'>You have not Listed a Movie</h2>
                    <Link to="/movie/create">
                        <button className='bg-[#1B7CFC] py-2 px-4 mx-2 text-white rounded-md'>Create Movie Ticket</button>
                    </Link>
    
                </div>
            </div>
        </>
    )
}
export default Event