import React from 'react';
import { SlLocationPin } from "react-icons/sl"

const Profile = () => {
    return (
        <div>
            <div className="bg-white p-5 flex flex-col justify-center h-[52vh] ">
                <img src="/images/Profile.png" alt="" className="rounded-full m-auto md:w-[150px object-cover " />
                <div className="space-y-3">
                    <h1 className="font-bold text-center">Silver George</h1>
                    <button className='bg-[#1B7CFC] py-3 rounded-md text-white w-[100%]'>Wallet</button>
                    <hr className="font-bold" />
                    <div className="flex items-center justify-between ">
                        <div className="flex items-center gap-2">
                            <SlLocationPin className='text-xl' />
                            <p className="">From</p>
                        </div>
                        <div className="">
                            <p className="">Nigeria</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;