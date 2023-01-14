import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {},
  transport:{
  
  }
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    USER: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.user = action.payload
    },
    LOGOUT:(state)=>{
      state.user = null
    },
    SET_TRANSPORT:(state,action)=>{
       state.transport=action.payload
    },
    // SET_VEHICLE:(state,action)=>{
    //   state.transport.vehicle_id = action.payload
    // },
    // SET_TICKET:(state,action)=>{
    //   state.transport.ticket_id=action.payload
    // },
    // SET_ROUTE:(state,action)=>{
    //     state.transport.routes = action.payload
    // }

    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { USER ,LOGOUT,SET_TRANSPORT} = userSlice.actions

export default userSlice.reducer