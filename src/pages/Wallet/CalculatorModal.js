import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { HiOutlineCalculator } from "react-icons/hi"
import { TextField } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

function ChildModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

}

export default function CalculatorModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <button onClick={handleOpen} className=" text-center  h-[100px] flex flex-col items-center justify-center rounded-md space-y-2 cursor-pointer">
                <HiOutlineCalculator className='text-2xl' />
                <p className="">Calculator</p>
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...style, width: 500, height: 400, borderRadius: "5px", border: 0 }}>
                    <div className="w-[80%] m-auto space-y-5 py-5">
                        <div className="">
                            <div className="flex justify-end cursor-pointer">
                                <p onClick={handleClose}>x</p>
                            </div>
                            <h1 className="font-semibold text-xl">Reward point calculator</h1>
                            <p className="">Please enter the token amount </p>
                        </div>
                        <div className='space-y-5'>
                            <TextField label="Reward point amount" variant="outlined" className='w-full mx-auto' />
                            <TextField label="Reward point value" variant="outlined" className='w-full mx-auto' />
                        </div>
                        <div className="py-5">
                            <button className='py-4  bg-[#1B7CFC] text-center w-full text-white  px-4 rounded-md'>Create Proceed</button>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}