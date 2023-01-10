import React, { useState } from 'react';
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
    borderRadius: 2
};

export default function StatusModal({ opener, setOpener, handleCloseer, handleOpener }) {
    const [success, setSuccess] = useState(true)
    return (
        <div>
            <Modal
                open={opener}
                onClose={handleCloseer}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {success && (
                        <>
                            <h2 className='py-3 font-bold text-center'>Reward point successfully sent</h2>
                            <div className="py-2 flex items-center space-x-4">
                                <button className='bg-[#1B7CFC]  w-full rounded-lg text-white py-2 px-4' onClick={() => handleCloseer()}>Go Back</button>
                            </div>
                        </>
                    )}
                    {!success && (
                        <>
                            <h2 className='py-3 font-bold text-center'>Insuffient Funds</h2>
                            <div className="py-2 flex items-center space-x-4">
                                <button className='bg-red-800  w-full rounded-lg text-white py-2 px-4' onClick={() => handleCloseer()}>Go Back</button>
                            </div>
                        </>
                    )}

                </Box>
            </Modal>
        </div>
    );
}