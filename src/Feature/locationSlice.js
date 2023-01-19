import { createSlice } from "@reduxjs/toolkit";

const locationSlice=createSlice({
    name: 'locationSliceData',
    initialState:[],
    reducers:{
        setLocationData:(state,action) =>{
            action.payload.map(value=>state.push(value))
        },
    }
})
export default locationSlice.reducer
export const {setLocationData,}=locationSlice.actions