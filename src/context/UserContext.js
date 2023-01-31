import axios from 'axios';
import React, { createContext, useEffect, useReducer } from 'react';
import axiosJwt from '../components/utils';


export const UserContext = createContext()

const token = JSON.parse(localStorage.getItem('token'))

const INITIAL_STATE = {
    user: {}
}




const UserProvider = ({ children }) => {
    // const [state,dispatch] = useReducer(AuthReducer,INITIAL_STATE)
    const fetchUser = async () => {
        if (!token) {
            return;
        }
        try {
            const response = await axiosJwt.get(`https://azany-affiliate.urbantour.org/public/api/auth/fetch_profile_info`)
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <UserContext.Provider>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;