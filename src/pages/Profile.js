import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Grid, IconButton, TextField } from '@mui/material';
import Layout from '../components/Layout';
const Profile = () => {
    return (
        <Layout>
            <div className='w-4/5 mx-auto'>
                <div className='py-3'>
                    <h2 className='text-gray-500 text-xl text-center font-bold'>Reset Password</h2>
                </div>
                <div>
                    <form>
                        <div className='space-y-3 py-3'>
                            <TextField className='w-full' variant='outlined' label='Current Password' />
                            <TextField className='w-full' variant='outlined' label='New Password' />
                            <TextField className='w-full' variant='outlined' label='Confirm Password' />
                            <div className="py-3">
                                <button className='bg-gray-500 py-2 px-6 text-white w-full rounded-lg'>Save</button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default Profile