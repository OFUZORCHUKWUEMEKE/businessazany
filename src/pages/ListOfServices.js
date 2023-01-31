import React from 'react';
import { useState } from 'react';
import { bill, ticket } from '../components/data';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './scroll.css';

const ListOfServices = () => {
    const [tab, setTab] = useState(false)

    const [ticketing, setTicketing] = useState(true)
    const [billing, setBilling] = useState(false)

    const [image, setImage] = useState(ticket[0].image)
    const [name,setName] = useState(ticket[0].name)
    const [content, setContent] = useState(ticket[0].content)
    const [link,setLink] = useState(ticket[0].link)
    const navigate = useNavigate()

    const handleTicket = () => {
        setTicketing(true)
        setBilling(false)
    }
    const handleBilling = () => {
        setBilling(true)
        setTicketing(false)
    }

    const maintain = (data)=>{
        setImage(data.image)
        setName(data.name)
        setContent(data.content)
        setLink(data.link)
        // console.log(data)
    }
    const redirect = ()=>{
       navigate(`${link}`)
    }
    return (
        <div className='bg-[#FAFCFF]'>
            <Navbar />
            <div className="m-auto w-[85%] pb-[5%]">
                <div className="pt-8 ">
                    <div className="my-8">
                        <h1 className="font-bold text-3xl text-center md:text-left main">List of Services</h1>
                    </div>
                    <div className="flex gap-[15%] justify-center md:justify-start py-6">
                        <h1 className={ticketing ? `cursor-pointer font-bold text-[#1B7CFC]` : `cursor-pointer`} onClick={() => handleTicket()}>Ticketing</h1>
                        <h1 className={billing ? `cursor-pointer text-[#1B7CFC] font-bold` : `cursor-pointer`} onClick={() => handleBilling()}>Billing</h1>
                    </div>
                    <div className="flex flex-col-reverse md:flex-row  items-center gap-10 justify-between my-3">
                        <div className="w-[100%] example">
                            {ticketing && <div className="space-y-16 overflow-y-scroll h-[100vh] example">
                                {ticket.map((ticketing, index) => (
                                    <div className="flex items-center cursor-pointer bg-white w-[100%] rounded-xl " key={index} onClick={()=>maintain(ticketing)}>
                                        <div className="">
                                            <img src={ticketing.image} alt="" className="rounded-l-xl" />
                                        </div>
                                        <div className="w-[250px] text-center">
                                            <h1 className="font-bold text-[#1B7CFC] text-xl main">{ticketing.name}</h1>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            }
                            {billing && <div className="space-y-16 overflow-y-scroll h-[100vh] example">

                                {bill.map((billing, index) => (
                                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 items-center bg-white w-[100%] rounded-xl cursor-pointer" key={index} onClick={()=>maintain(billing)}>
                                        <div className="">
                                            <img src={billing.image} alt="" className="rounded-l-xl" />
                                        </div>
                                        <div className="w-[250px] text-center">
                                            <h1 className="font-bold text-[#1B7CFC] text-xl">{billing.name}</h1>
                                        </div>
                                    </div>
                                ))}
                            </div>}
                        </div>
                        <div className="space-y-3 w-[100%] bg-white">
                            <div className='py-4'>
                                <img src={image} alt="" className="w-full rounded-lg h-[250px] object-cover" />
                            </div>
                            <div className="py-5 space-y-3">
                                <h1 className="font-bold text-xl">{name}</h1>
                                <p className="">{content}</p>
                                
                                <button className="px-4 py-3 bg-[#E51B48] rounded-md text-white" onClick={()=>redirect()}>View services</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ListOfServices;