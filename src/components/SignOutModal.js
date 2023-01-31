import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../redux/AuthSlice';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 6,
    borderRadius: 2
};

const SignOutModal = ({ open, setOpen, handleClose, handleOpen }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const LogOut = async () => {
        const token = JSON.parse(localStorage.getItem('token'))
        console.log(token)
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
        }
        try {
            // const response = await axios.post(`https://azany-affiliate.urbantour.org/public/api/auth/logout`, { headers: headers })
            // console.log(response.data)
            localStorage.removeItem('token')
            dispatch(LOGOUT())
            navigate('/')
        } catch (error) {
            console.log(error.response)
        }


        console.log('processing....')
    }
    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='py-8 space-y-4'>
                        <h2 className=' text-lg font-bold'>Are you sure you want to log out?</h2>
                        <div className='py-3 flex space-x-4'>
                            <button className="py-2 px-8 text-white rounded-md bg-[#1B7CFC]" onClick={() => handleClose()}>Cancel</button>
                            <button className="border py-2 text-[#1B7CFC] rounded-md px-8  border-[#1B7CFC]" onClick={()=>LogOut()}>Logout</button>
                        </div>
                    </div>
                </Box>
            </Modal>
        </>
    )
}

export default SignOutModal