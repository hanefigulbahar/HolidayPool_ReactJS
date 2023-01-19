import { createSlice } from "@reduxjs/toolkit";

const villaDataSlice=createSlice({
    name: 'villaData',
    initialState:{
        villaList:[]
    },
    reducers:{
        setVillaData:(state,action) =>{
            state.villaList=action.payload
        },
    }
})
export default villaDataSlice.reducer
export const {setVillaData,}=villaDataSlice.actions