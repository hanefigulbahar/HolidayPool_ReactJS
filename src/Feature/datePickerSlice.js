import { createSlice } from "@reduxjs/toolkit";
import addDays from 'date-fns/addDays';



const datePickerSlice=createSlice({
    name: 'datePickerData',
    initialState:{
        checkIn:null,
        checkOut:null,
        rangeDate:[{
            startDate:new Date(),
            endDate: addDays(new Date(), 0),
            key: 'selection'
        }]
    },
    reducers:{
        setCheckInData:(state,action)=>{
            state.checkIn =action.payload
        },
        setCheckOutData:(state,action)=>{
            state.checkOut=action.payload
        },
        setRangeDateData:(state,action)=>{
            state.rangeDate=action.payload
        }
    }
})
export default datePickerSlice.reducer
export const {setCheckInData,setCheckOutData,setRangeDateData}=datePickerSlice.actions