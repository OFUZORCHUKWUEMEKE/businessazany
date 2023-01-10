import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 7,
    borderRadius:2
};

export default function CinemaModal({ open, setOpen, handleClose, handleOpen,trigger }) {
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <h2 className='py-3'>Are You Sure You want to Pay for this Ticket ?</h2>
                    <div className="py-2 flex items-center space-x-4">
                        <button className='bg-[#1B7CFC] w-4/5 rounded-lg text-white py-2 px-4' onClick={()=>trigger()}>Pay</button>
                        <button className='border w-4/5 rounded-lg border-[#1B7CFC] py-2 px-4'>Cancel</button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}