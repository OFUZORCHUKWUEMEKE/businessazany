import { IconButton } from '@mui/material'
import React from 'react'
import Navbar from '../components/Navbar'
import { FaLocationArrow } from "react-icons/fa";
import { BsCalculatorFill } from "react-icons/bs";
import { BsArrowUpRight } from "react-icons/bs";
import { BsArrowUpLeft } from "react-icons/bs";
import WithdrawalModal from '../components/WithdrawalModal';
import CalculatorModal from './Wallet/CalculatorModal';


const Withdraw = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [opened, setOpened] = React.useState(false);
    const handleOpened = () => setOpened(true);
    const handleCloseed = () => setOpened(false);

    return (
        <>
            <div className='bg-gray-100'>
                <Navbar />
                <div className="min-h-[80vh] py-6 flex items-center">
                    <div className="w-[70%] mx-auto">
                        <div className='py-4'>
                            <h2 className='font-bold'>My Wallet</h2>
                        </div>


                        <div className='flex items-center space-x-4'>
                            <div className='bg-[#1d1d1d] rounded-md h-[160px] w-[310px]'>
                                <div className='w-4/5 mx-auto px-4 py-6'>
                                    <h2 className='text-white text-sm'>Pending Balance</h2>
                                    <div className='py-12'>
                                        <h2 className='text-white font-bold text-xl'>6,000 RP = $400</h2>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-[#1d1d1d] rounded-md h-[160px] w-[310px]'>
                                <div className='w-4/5 mx-auto px-4 py-6'>
                                    <h2 className='text-white text-sm'>Current Balance</h2>
                                    <div className='py-12'>
                                        <h2 className='text-white font-bold text-xl'>8,000 RP = $500</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='py-4'>
                            <div className='flex space-x-4 items-center'>
                                <div onClick={()=>handleOpen()} className='py-2 cursor-pointer bg-[#1B7CFC] px-3 h-[90px] flex-col w-[150px] rounded-md flex justify-center items-center'>
                                    <IconButton>
                                        <FaLocationArrow className='text-white' />
                                    </IconButton>
                                    <h2 className='text-white'>Withdraw</h2>
                                </div>
                                <div onClick={()=>handleOpened()} className='py-2 cursor-pointer px-3 bg-[#24B18D] h-[90px] flex-col w-[150px] rounded-md flex justify-center items-center'>
                                    <IconButton>
                                        <BsCalculatorFill />
                                    </IconButton>
                                    <h2 className='text-white'>Calculator</h2>
                                </div>
                            </div>
                        </div>
                        <div className="py-4 px-4 mt-3 bg-white">
                            <div className='flex justify-between items-center px-4 py-8'>
                                <h2 className="text-xl text-gray-400  font-bold">Recent Transactions</h2>
                                <h2>View All</h2>
                            </div>
                            <div className='p-2 space-y-3'>
                                <div className='flex justify-between items-center'>
                                    <div className='flex flex-1 items-center space-x-3'>
                                        <div>
                                            <IconButton>
                                                <BsArrowUpRight />
                                            </IconButton>
                                        </div>

                                        <div lassName="flex items-center dlex-col space-y-2">
                                            <h2 className='text-gray-400'>Paystack 00234</h2>
                                            <p className="text-gray-400">Salary</p>
                                        </div>


                                    </div>
                                    <h2 className='flex-1 text-gray-400 text-center'>12,July 2021</h2>
                                    <h2 className='flex-1 text-gray-400 text-right'>2000</h2>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <div className='flex flex-1 items-center space-x-3'>
                                        <IconButton>
                                            <BsArrowUpRight />
                                        </IconButton>
                                        <div lassName="flex items-center flex-col space-y-2">
                                            <h2 className='text-gray-400'>Paystack 00234</h2>
                                            <p className="text-gray-400">Salary</p>
                                        </div>


                                    </div>
                                    <h2 className='flex-1 text-gray-400 text-center'>12,July 2021</h2>
                                    <h2 className='flex-1 text-gray-400 text-right'>2000</h2>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <div className='flex flex-1 items-center space-x-3'>
                                        <IconButton>
                                            <BsArrowUpRight />
                                        </IconButton>
                                        <div lassName="flex items-center flex-col space-y-2">
                                            <h2 className='text-gray-400'>Paystack 00234</h2>
                                            <p className="text-gray-400">Salary</p>
                                        </div>


                                    </div>
                                    <h2 className='flex-1 text-gray-400 text-center'>12,July 2021</h2>
                                    <h2 className='flex-1 text-gray-400 text-right'>2000</h2>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <div className='flex flex-1 items-center space-x-3'>
                                        <IconButton>
                                            <BsArrowUpRight />
                                        </IconButton>
                                        <div lassName="flex items-center flex-col space-y-2">
                                            <h2 className='text-gray-400'>Paystack 00234</h2>
                                            <p className="text-gray-400">Salary</p>
                                        </div>


                                    </div>
                                    <h2 className='flex-1 text-gray-400 text-center'>12,July 2021</h2>
                                    <h2 className='flex-1 text-gray-400 text-right'>2000</h2>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <div className='flex flex-1 items-center space-x-3'>
                                        <IconButton>
                                            <BsArrowUpRight />
                                        </IconButton>
                                        <div lassName="flex items-center flex-col space-y-2">
                                            <h2 className='text-gray-400'>Paystack 00234</h2>
                                            <p className="text-gray-400">Salary</p>
                                        </div>


                                    </div>
                                    <h2 className='flex-1 text-gray-400 text-center'>12,July 2021</h2>
                                    <h2 className='flex-1 text-gray-400 text-right'>2000</h2>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <div className='flex flex-1 items-center space-x-3'>
                                        <IconButton>
                                            <BsArrowUpRight />
                                        </IconButton>
                                        <div lassName="flex items-center flex-col space-y-2">
                                            <h2 className='text-gray-400'>Paystack 00234</h2>
                                            <p className="text-gray-400">Salary</p>
                                        </div>


                                    </div>
                                    <h2 className='flex-1 text-gray-400 text-center'>12,July 2021</h2>
                                    <h2 className='flex-1 text-gray-400 text-right'>2000</h2>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <div className='flex flex-1 items-center space-x-3'>
                                        <IconButton>
                                            <BsArrowUpRight />
                                        </IconButton>
                                        <div lassName="flex items-center flex-col space-y-2">
                                            <h2 className='text-gray-400'>Paystack 00234</h2>
                                            <p className="text-gray-400">Salary</p>
                                        </div>


                                    </div>
                                    <h2 className='flex-1 text-gray-400 text-center'>12,July 2021</h2>
                                    <h2 className='flex-1 text-gray-400 text-right'>2000</h2>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <div className='flex flex-1 items-center space-x-3'>
                                        <IconButton>
                                            <BsArrowUpRight />
                                        </IconButton>
                                        <div lassName="flex items-center flex-col space-y-2">
                                            <h2 className='text-gray-400'>Paystack 00234</h2>
                                            <p className="text-gray-400">Salary</p>
                                        </div>


                                    </div>
                                    <h2 className='flex-1 text-gray-400 text-center'>12,July 2021</h2>
                                    <h2 className='flex-1  text-gray-400 text-right'>2000</h2>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <div className='flex flex-1 items-center space-x-3'>
                                        <IconButton>
                                            <BsArrowUpRight />
                                        </IconButton>
                                        <div lassName="flex items-center flex-col space-y-2">
                                            <h2 className='text-gray-400'>Paystack 00234</h2>
                                            <p className="text-gray-400">Salary</p>
                                        </div>


                                    </div>
                                    <h2 className='flex-1 text-gray-400 text-center'>12,July 2021</h2>
                                    <h2 className='flex-1 text-gray-400 text-right'>2000</h2>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <div className='flex flex-1 items-center space-x-3'>
                                        <IconButton>
                                            <BsArrowUpRight />
                                        </IconButton>
                                        <div lassName="flex items-center flex-col space-y-2">
                                            <h2 className='text-gray-400'>Paystack 00234</h2>
                                            <p className="text-gray-400">Salary</p>
                                        </div>


                                    </div>
                                    <h2 className='flex-1 text-gray-400 text-center'>12,July 2021</h2>
                                    <h2 className='flex-1 text-gray-400 text-right'>2000</h2>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <WithdrawalModal open={open} setOpen={setOpen} handleOpen={handleOpen} handleClose={handleClose}/>
            <CalculatorModal opened={opened} setOpened={setOpened} handleOpened={handleOpened} handleCloseed={handleCloseed}/>
        </>
    )
}

export default Withdraw