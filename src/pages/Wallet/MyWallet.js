import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import TransactionTable from '../../components/Transaction';
import {AiOutlineSend} from "react-icons/ai"
import {HiOutlineCalculator} from "react-icons/hi"
import WalletTable from './WalletTable';
import NestedModal from './CalculatorModal';
import CalculatorModal from './CalculatorModal';
import WalletDetailsModal from './WalletDetails';
import WithdrawalModal from './WithdrawAmount';

const MyWallet = () => {
    const [calculatorModal, setCalculatorModal] = useState(false)
    return (
        <div className='bg-[#FFFFFF]'>
            <Navbar />
            <div className="m-auto w-[85%] py-5">
                <div className="py-10">
                    <h1 className="font-bold text-xl">My Wallet</h1>
                </div>
                <div className="space-y-5">
                    <div className="flex w-[50%] gap-5">
                        <img src="/images/Vehicle.png" alt="" className="rounded-xl object-cover w-[250%] h-[30vh]" />
                        <img src="/images/Vehicle.png" alt="" className="rounded-xl object-cover w-[250%] h-[30vh]" />
                    </div>
                    <div className="flex items-center gap-5 text-white w-[100%]">
                        <div className="bg-[#1B7CFC] text-center md:w-[15%] w-[50%] h-[100px] flex flex-col items-center justify-center rounded-md space-y-2 cursor-pointer">
                            {/* <WalletDetailsModal/> */}
                            <WithdrawalModal/>
                        </div>
                        <div onClick={()=> setCalculatorModal(true)} className="bg-[#24B18D] text-center md:w-[15%] w-[50%] h-[100px] flex flex-col items-center justify-center rounded-md space-y-2 cursor-pointer">
                        <CalculatorModal/>
                        </div>
                    </div>
                </div>
                <div className="py-20">
                    <div className="flex justify-between items-center">
                    <h1 className="font-bold text-2xl">Recent Transactions</h1>
                    <h1 className="font-semibold text-md cursor-pointer">View all</h1>
                    </div>
                    <div className='p-4 bg-white'>
                        <WalletTable/>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default MyWallet;