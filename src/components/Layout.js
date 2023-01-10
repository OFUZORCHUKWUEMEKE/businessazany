import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Grid, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import SignOutModal from './SignOutModal';
const Layout = ({ children }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <div className='min-h-screen bg-gray-50'>
                <div className='h-[10vh] flex items-center bg-white'>
                    <div className='w-4/5 mx-auto '>
                        <div className='flex items-center space-x-4'>
                            <Link to="/">
                                <IconButton>
                                    <ArrowBackIcon />
                                </IconButton>
                            </Link>

                            <h2 className='text-xl font-bold'>Profile</h2>
                        </div>

                    </div>
                </div>
                <div className='flex justify-center items-center min-h-[75vh] py-4'>
                    <div className='w-[65%] mx-auto'>
                        <Grid container justifyContent="space-between" alignItems="center" spacing={4}>
                            <Grid item xs={12} md={6}>
                                <div className='bg-white py-3'>
                                    <div className='py-6 px-6 border-b-2 border-b-gray-100 cursor-pointer'>
                                        <Link to="/profile/kyc">
                                            <h2 className='text-gray-500 text-base'>Business Profile</h2>
                                        </Link>
                                    </div>
                                    <Link to="/profile">
                                        <div className='py-6 px-6 border-b-2 border-b-gray-100 cursor-pointer'>
                                            <h2 className='text-gray-500 text-base'>Password</h2>
                                        </div>
                                    </Link>
                                    <Link to="/profile/2fa">
                                        <div className='py-6 px-6 border-b-2 border-b-gray-100 cursor-pointer'>
                                            <h2 className='text-gray-500 text-base'>2FA</h2>
                                        </div>
                                    </Link>
                                     
                                    <div className='py-6 px-6 cursor-pointer'>
                                        <h2 className='text-gray-500 text-base' onClick={() => handleOpen()}>Sign Out</h2>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                {children}
                            </Grid>
                        </Grid>
                    </div>
                </div>

            </div>
            <SignOutModal open={open} handleOpen={handleOpen} handleClose={handleClose} setOpen={setOpen} />
        </>
    )
}

export default Layout