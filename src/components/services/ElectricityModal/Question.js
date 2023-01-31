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
    width: 450,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 7,
    borderRadius: 2
};

export default function QuestionModal({ opened, setOpened, handleCloseed, handleOpened, success }) {

    const handleSubmit= ()=>{
        success()
    }
    return (
        <div>
            <Modal
                open={opened}
                onClose={handleCloseed}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <h2 className='py-3 font-bold text-center'>Bill Payment</h2>
                    <div className="py-2 flex items-center space-x-4">
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <TextField id="outlined-basic" label="Meter" placeholder='meter number' variant="outlined"  className="w-full"/>
                            <TextField id="outlined-basic" label="Type" placeholder='type' variant="outlined" className="w-full" />
                            <TextField id="outlined-basic" label="Phone Number" placeholder='Phone number' variant="outlined" className="w-full"/>
                            <TextField id="outlined-basic" label="Reward Point" placeholder='Reward Point' variant="outlined" className="w-full"/>
                            <div className='py-3 flex items-center space-x-3'>
                                <button className='bg-[#1B7CFC]   rounded-lg w-full text-white py-2 px-4' >Send</button>
                               
                            </div>
                        </form>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}