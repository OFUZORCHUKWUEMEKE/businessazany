import React from 'react'
import Layout from '../components/Layout'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Grid, IconButton, TextField } from '@mui/material';
const TwoFa = () => {
    return (
        <>
            <Layout>
                <div className='w-4/5 mx-auto'>
                    <div className='py-3'>
                        <h2 className='text-gray-500 text-xl text-center font-bold'>2FA Authentification</h2>
                    </div>
                    <div>
                        <form>
                            <div className='space-y-3 py-3'>
                                <TextField className='w-full' variant='outlined' label='Set a personal security questions' placeholder='e.g: Where did you grow up? '/>
                                <TextField className='w-full' variant='outlined' label='Enter Answer' placeholder='e.g: somewhere' />
                              
                                <div className="py-3">
                                    <button className='bg-[#1B7CFC] py-2 px-6 text-white w-full rounded-lg'>Save</button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default TwoFa