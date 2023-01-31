import { createSlice } from "@reduxjs/toolkit"

const selectLocationSlice = createSlice({
    name: 'selectedLocationData',
    initialState:{
        location:""
    },
    reducers:{
        selectLocation:(state,action) =>{
            state.location=action.payload
        }
    }
    })

export default selectLocationSlice.reducer
export const {selectLocation}=selectLocationSlice.actions