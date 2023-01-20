import { createSlice } from "@reduxjs/toolkit";

const villaDataSlice=createSlice({
    name: 'villaData',
    initialState:{
        villaList:[],
        villaDataByID:[]
        
    },
    reducers:{
        setVillaData:(state,action) =>{
            action.payload.map(value=>state.villaList.push(value))
        },
        setVillaDataByID:(state,action)=>{
            state.villaDataByID=action.payload
        }
    }
})
export default villaDataSlice.reducer
export const {setVillaData,setVillaDataByID}=villaDataSlice.actions