import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'

const Event = () => {
    return (
        <>
            <Navbar />
            <div className="h-[75vh] flex justify-center items-center">
                <div className="py-4 space-y-3 w-3/5 mx-auto">
                    <div className='flex justify-between items-center'>
                        <div className='bg-white rounded-sm p-3 flex w-2/5 justify-center items-center flex-col'>
                            <img src="/images/silvia.png" className='w-3/5 object-cover' />
                            <div className='space-y-4'>
                                <h2 className='font-bold text-xl'>Silver Georgr</h2>
                                <button className='bg-blue-500 rounded-md py-2 px-6 w-full text-white'>Wallet</button>
                            </div>
                            <div className='flex py-4 justify-between items-center'>
                                <p>From</p>
                                <p>Nigeria</p>
                            </div>
                        </div>
                        <div className="py-4 space-y-3">
                            <h2 className='text-center'>You have not Listed a Event</h2>
                            <button className='border-[#1B7CFC] border-2 rounded-md  py-2 px-4 mx-2 black rounded-md'>Create Event Ticket</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Event