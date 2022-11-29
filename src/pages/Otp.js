import React from 'react';
import Navbar from '../components/Navbar';

const EmailVerification = () => {
    return (
        <div>
            <Navbar />
            <div className="m-auto w-[85%]">
                <div className="w-full flex justify-center">
                    <div className=" text-sm py-14 md:w-[30%]">
                        <div className=" text-center space-y-3">
                            <h1 className="font-bold text-3xl">Email Verification</h1>
                            <p className="text-md">Provide the OTP sent to Joel@gmail.com</p>
                        </div>
                        <div className="flex gap-5 py-14 justify-center">
                            <input type="text" className='bg-[#DBE1E7] w-[18%] h-[8vh]' />
                            <input type="text" className='bg-[#DBE1E7] w-[18%] h-[8vh]' />
                            <input type="text" className='bg-[#DBE1E7] w-[18%] h-[8vh]' />
                            <input type="text" className='bg-[#DBE1E7] w-[18%] h-[8vh]' />
                        </div>
                        <div className="space-y-5">
                            <p className="text-center py-2">Didn’t receive an OTP?  <span className='text-red-500 bg-red-50 rounded-xl p-1'><a href="emailVerification"> Resend in 60s</a></span></p>
                            <button type="submit" className='px-4 py-4 rounded-xl text-white my-3 bg-blue-500 w-[100%]'>Verify</button>
                            <p className="text-center py-2">Don't have an account?<span className='text-[#1B7CFC]'><a href="emailVerification">Sign up</a></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmailVerification;