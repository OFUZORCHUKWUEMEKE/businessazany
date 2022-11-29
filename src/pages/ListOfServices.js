import React from 'react';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import './scroll.css'
const ListOfServices = () => {
    const [tab, setTab] = useState(false)
    return (
        <div className='bg-[#FAFCFF]'>
            <Navbar />
            <div className="m-auto w-[85%] pb-[5%]">
                <div className="pt-8 ">
                    <div className="my-8">
                        <h1 className="font-bold text-3xl">List of Services</h1>
                    </div>
                    <div className="flex gap-[15%] py-6">
                        <h1 className="cursor-pointer text-[#1B7CFC]" onClick={() => setTab(false)}>Ticketing</h1>
                        <h1 className="cursor-pointer" onClick={() => setTab(true)}>Billing</h1>
                    </div>
                    <div className="md:flex items-cente gap-10 justify-between my-3">
                        <div className="w-[100%] example">
                            {!tab && <div className="space-y-16 overflow-y-scroll h-[100vh] example">
                                <div className="flex items-center bg-white w-[100%] rounded-xl ">
                                    <div className="">
                                        <img src="/images/Ticketting1.png" alt="" className="rounded-l-xl" />
                                    </div>
                                    <div className="w-[250px] text-center">
                                        <h1 className="font-bold text-[#1B7CFC] text-xl">Aviation</h1>
                                    </div>
                                </div>
                                <div className="flex items-center bg-white w-[100%] rounded-xl ">
                                    <div className="">
                                        <img src="/images/Ticketting2.png" alt="" className="rounded-l-xl" />
                                    </div>
                                    <div className="w-[250px] text-center">
                                        <h1 className="font-bold text-[#1B7CFC] text-xl">Events</h1>
                                    </div>
                                </div>
                                <div className="flex items-center bg-white w-[100%] rounded-xl ">
                                    <div className="">
                                        <img src="/images/Ticketting3.png" alt="" className="rounded-l-xl" />
                                    </div>
                                    <div className="w-[250px] text-center">
                                        <h1 className="font-bold text-[#1B7CFC] text-xl">Transportation</h1>
                                    </div>
                                </div>
                            </div>
                            }
                            {tab && <div className="space-y-16 overflow-y-scroll h-[100vh] example">
                                <div className="flex items-center bg-white w-[100%] rounded-xl ">
                                    <div className="">
                                        <img src="" alt="" className="aviation rounded-l-xl electricity" />
                                    </div>
                                    <div className="w-[250px] text-center">
                                        <h1 className="font-bold text-[#1B7CFC] text-xl">Electricity</h1>
                                    </div>
                                </div>
                                <div className="flex items-center bg-white w-[100%] rounded-xl  ">
                                    <div className="">
                                        <img src="" alt="" className="aviation rounded-l-xl hospital" />
                                    </div>
                                    <div className="w-[250px] text-center">
                                        <h1 className="font-bold text-[#1B7CFC] text-xl">Hospital</h1>
                                    </div>
                                </div>
                                <div className="flex items-center bg-white w-[100%] rounded-xl ">
                                    <div className="">
                                        <img src="" alt="" className="aviation rounded-l-xl internet" />
                                    </div>
                                    <div className="w-[250px] text-center">
                                        <h1 className="font-bold text-[#1B7CFC] text-xl">Internet</h1>
                                    </div>
                                </div>
                                <div className="flex items-center bg-white w-[100%] rounded-xl">
                                    <div className="">
                                        <img src="" alt="" className="aviation rounded-l-xl pharmacy" />
                                    </div>
                                    <div className="w-[250px] text-center">
                                        <h1 className="font-bold text-[#1B7CFC] text-xl">Pharmacy</h1>
                                    </div>
                                </div>
                                <div className="flex items-center bg-white w-[100%] rounded-xl ">
                                    <div className="">
                                        <img src="" alt="" className="aviation rounded-l-xl resturants" />
                                    </div>
                                    <div className="w-[250px] text-center">
                                        <h1 className="font-bold text-[#1B7CFC] text-xl">Restaurants</h1>
                                    </div>
                                </div>
                                <div className="flex items-center bg-white w-[100%] rounded-xl ">
                                    <div className="">
                                        <img src="" alt="" className="aviation rounded-l-xl school" />
                                    </div>
                                    <div className="w-[250px] text-center">
                                        <h1 className="font-bold text-[#1B7CFC] text-xl">School</h1>
                                    </div>
                                </div>
                                <div className="flex items-center bg-white w-[100%] rounded-xl ">
                                    <div className="">
                                        <img src="" alt="" className="aviation rounded-l-xl shopping" />
                                    </div>
                                    <div className="w-[250px] text-center">
                                        <h1 className="font-bold text-[#1B7CFC] text-xl">Shopping</h1>
                                    </div>
                                </div>
                                <div className="flex items-center bg-white w-[100%] rounded-xl">
                                    <div className="">
                                        <img src="" alt="" className="aviation rounded-l-xl tv" />
                                    </div>
                                    <div className="w-[250px] text-center">
                                        <h1 className="font-bold text-[#1B7CFC] text-xl">Tv</h1>
                                    </div>
                                </div>

                            </div>}
                        </div>

                        {/* <div className="w-[100%]">
                            <div className=" text-center">hello</div>
                        </div> */}
                        {!tab && <div className="space-y-3 w-[100%] bg-white">
                            <div className='p-4'>
                                <img src="/images/Ticketting1.png" alt="" className="w-4/5 h-[250px] object-cover" />
                            </div>
                            <div className="p-5 space-y-3">
                                <h1 className="font-bold text-xl">Aviation Services</h1>
                                <p className="">Lorem ipsum dolor sit amet. Id tempora possimus in illo voluptas quo ipsam soluta sed enim excepturi. Et quia neque ea asperiores minus ut nesciunt odit qui repudiandae harum est reiciendis omnis id tenetur itaque.</p>
                                <button className="px-4 py-3 bg-[#E51B48] rounded-md text-white">View services</button>
                            </div>
                        </div>}
                        {tab &&
                            <div className="space-y-3 w-[100%] bg-white">
                                <div className='p-4'>
                                    <img src="/images/Electricity.png" alt="" className="w-4/5 h-[250px] object-cover" />
                                </div>
                                <div className="p-5 space-y-3">
                                    <h1 className="font-bold text-xl">Electricity Services</h1>
                                    <p className="">Lorem ipsum dolor sit amet. Id tempora possimus in illo voluptas quo ipsam soluta sed enim excepturi. Et quia neque ea asperiores minus ut nesciunt odit qui repudiandae harum est reiciendis omnis id tenetur itaque.</p>
                                    <button className="px-4 py-3 bg-[#E51B48] rounded-md text-white">View services</button>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ListOfServices;