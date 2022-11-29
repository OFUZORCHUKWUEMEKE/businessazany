import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import SearchIcon from '@mui/icons-material/Search'
import Footer from '../components/Footer';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { BsCircleFill } from "react-icons/bs"
import { Link } from "react-router-dom"

const Faq = () => {
    return (
        <div>
            <Navbar />
            <div className="bg-[#000D1F] h-[100vh]">
                <div className="m-auto w-[85%] flex flex-col text-center justify-center items-center h-[100vh] space-y-8 text-white">
                    <h1 className="text-6xl font-semibold">Ask us anything</h1>
                    <p className="text-sm">Have any questions? We're here to assist you.</p>
                    <div className="search contain flex items-center md:w-[32%]">
                        <SearchIcon className='absolute mx-2 text-gray-500' />
                        <input type="search" className="text-black rounded w-full flex justify-center p-2 outline-none px-10"
                            placeholder="Search here"
                        />
                    </div>
                </div>
            </div>

            <div className="m-auto w-[85%] my-10">
                <div className="">
                    <h1 className="font-bold text-2xl py-8">Frequently Asked Questions</h1>
                    <div className="card md:flex gap-10 ">
                        <div className="relative z-10 md:w-[80%] border border-gray-100 2xl:h-[40vh] my-10">
                            <div className="flex justify-between items-center px-2 border border-gray-50 hover:bg-[#FFF9FD]  bg-white">
                                <div className="flex gap-3 items-center py-3 ">
                                    <div className="">
                                        <BsCircleFill className='text-[#C2DCFF] hover:text-[#5D5FEF]' />
                                    </div>
                                    <div className="">
                                        <Link to="/" className="py-3">Lorem ipsum dolor sit amet. Aut placeat doloremque id autem?</Link>
                                    </div>
                                </div>
                                <div className="">
                                    <NavigateNextIcon className='text-[#C2DCFF] hover:text-[#5D5FEF]' />
                                </div>
                            </div>
                            <div className="flex justify-between items-center px-2 border border-gray-50 hover:bg-[#FFF9FD]  bg-white">
                                <div className="flex gap-3 items-center py-3 ">
                                    <div className="">
                                        <BsCircleFill className='text-[#C2DCFF] hover:text-[#5D5FEF]' />
                                    </div>
                                    <div className="">
                                        <Link to="/" className="py-3">Lorem ipsum dolor sit amet. Aut placeat doloremque id autem?</Link>
                                    </div>
                                </div>
                                <div className="">
                                    <NavigateNextIcon className='text-[#C2DCFF] hover:text-[#5D5FEF]' />
                                </div>
                            </div>
                            <div className="flex justify-between items-center px-2 border border-gray-50 hover:bg-[#FFF9FD]  bg-white">
                                <div className="flex gap-3 items-center py-3 ">
                                    <div className="">
                                        <BsCircleFill className='text-[#C2DCFF] hover:text-[#5D5FEF]' />
                                    </div>
                                    <div className="">
                                        <Link to="/" className="py-3">Lorem ipsum dolor sit amet. Aut placeat doloremque id autem?</Link>
                                    </div>
                                </div>
                                <div className="">
                                    <NavigateNextIcon className='text-[#C2DCFF] hover:text-[#5D5FEF]' />
                                </div>
                            </div>
                            <div className="flex justify-between items-center px-2 border border-gray-50 hover:bg-[#FFF9FD]  bg-white">
                                <div className="flex gap-3 items-center py-3 ">
                                    <div className="">
                                        <BsCircleFill className='text-[#C2DCFF] hover:text-[#5D5FEF]' />
                                    </div>
                                    <div className="">
                                        <Link to="/" className="py-3">Lorem ipsum dolor sit amet. Aut placeat doloremque id autem?</Link>
                                    </div>
                                </div>
                                <div className="">
                                    <NavigateNextIcon className='text-[#C2DCFF] hover:text-[#5D5FEF]' />
                                </div>
                            </div>
                            <div className="flex justify-between items-center px-2 border border-gray-50 hover:bg-[#FFF9FD]  bg-white">
                                <div className="flex gap-3 items-center py-3 ">
                                    <div className="">
                                        <BsCircleFill className='text-[#C2DCFF] hover:text-[#5D5FEF]' />
                                    </div>
                                    <div className="">
                                        <Link to="/" className="py-3">Lorem ipsum dolor sit amet. Aut placeat doloremque id autem?</Link>
                                    </div>
                                </div>
                                <div className="">
                                    <NavigateNextIcon className='text-[#C2DCFF] hover:text-[#5D5FEF]' />
                                </div>
                            </div>

                        </div>
                        <div className="bg-[#FFF9FD] p-5 md:relative right-[10%] 2xl:h-[60vh] z-0 rounded-xl border border-gray-200">
                            <div className="md:ml-[30%] space-y-8">
                                <h1 className="font-bold mt-3">Lorem ipsum dolor sit amet?</h1>
                                <p className="">Lorem ipsum dolor sit amet. Eos suscipit modi non exercitationem doloribus ea sint corrupti qui facere consequuntur est nobis
                                </p>
                                <p className="">Lorem ipsum dolor sit amet. Eos suscipit modi non exercitationem doloribus ea sint corrupti qui facere consequuntur est nobis
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Faq;