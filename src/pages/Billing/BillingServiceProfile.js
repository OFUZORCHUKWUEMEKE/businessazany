import React from 'react';
import Navbar from '../../components/Navbar';
import TransactionTable from '../../components/Transaction';
import Profile from '../../components/Profile';

const BillingServicesProfile = () => {
    return (
        <div className='bg-[#F5F5F5]'>
            <Navbar />
            <div className="m-auto w-[85%] py-20">
                <div className="gap-10 flex justify-center">
                    <div className=" col-span-3 md:w-[30%]">
                        <Profile />
                    </div>
                </div>
              
                {/* Sales History */}
                <div className="pt-8">
                    <h1 className="font-bold text-2xl">Sales History</h1>
                    <div className='py-4'>
                        <TransactionTable />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BillingServicesProfile;