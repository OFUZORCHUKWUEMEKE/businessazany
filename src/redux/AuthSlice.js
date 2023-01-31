import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {},
  transport: {

  },
  aviation: {

  },
  movies:{}
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    USER: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.user = action.payload
    },
    LOGOUT: (state) => {
      state.user = null
    },
    SET_TRANSPORT: (state, action) => {
      state.transport = action.payload
    },
    SET_TRAVEL: (state, action) => {
      state.transport = { ...state.transport, travel_id: action.payload }
    },
    SET_AVIATION: (state, action) => {
      state.aviation = action.payload;
    },
    SET_FLIGHT:(state,action)=>{
      state.aviation ={...state.aviation,flight_id:action.payload}
    },
    SET_MOVIES:(state,action)=>{
      state.movies=action.payload
    }
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
export const { USER, LOGOUT, SET_TRANSPORT, SET_TRAVEL, SET_AVIATION,SET_FLIGHT,SET_MOVIES } = userSlice.actions

export default userSlice.reducer