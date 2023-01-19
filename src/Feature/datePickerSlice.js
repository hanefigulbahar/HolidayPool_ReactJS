import { createSlice } from "@reduxjs/toolkit";


const datePickerSlice=createSlice({
    name: 'datePickerData',
    initialState:{
        checkIn:null,
        checkOut:null
    },
    reducers:{
        setCheckInData:(state,action)=>{
            state.checkIn =action.payload
        },
        setCheckOutData:(state,action)=>{
            state.checkOut=action.payload
        }
    }
})
export default datePickerSlice.reducer
export const {setCheckInData,setCheckOutData}=datePickerSlice.actions