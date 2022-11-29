import React from 'react'
import Navbar from '../../components/Navbar'

const   Landing = () => {
  return (
   <>
       <Navbar/> 
       <div className="h-[75vh] flex justify-center items-center">
           <div className="py-4 space-y-3">
               <h2 className='text-center'>You have not Listed a Event</h2>
               <button className='bg-[#1B7CFC] py-2 px-4 mx-2 text-white rounded-md'>Create Event Ticket</button>
           </div>
       </div>
   </>
  )
}
export default  Landing;