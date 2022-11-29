import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius:2
};

export default function AvcModal({ opened, handleOpened, setOpened, handleClosed }) {
    return (
        <div>
            <Modal
                open={opened}
                onClose={handleClosed}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" className='text-center font-bold'>
                        Login With AVC
                    </Typography>
                    <div className='py-10'>
                        <form className='space-y-4 flex flex-col justify-center w-4/5 mx-auto'>
                            <TextField variant='outlined' label="Email" className='w-full' />
                            <TextField variant='outlined' label="Password" className='w-full' type="password" />
                            <button className='bg-[#1B7CFC] rounded-md text-white py-3'>Login</button>
                            <p className='text-[9px] text-center'>Don’t have an account? <span className='text-blue-400 cursor-pointer'>Sign Up</span> </p>
                        </form>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
