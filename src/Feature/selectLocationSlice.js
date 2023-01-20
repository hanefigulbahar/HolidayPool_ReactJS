import { createSlice } from "@reduxjs/toolkit"

const selectLocationSlice = createSlice({
    name: 'selectedLocationData',
    initialState:{
        value:""
    },
    reducers:{
        selectLocation:(state,action) =>{
            state.value=action.payload
        }
    }
    })

export default selectLocationSlice.reducer
export const {selectLocation}=selectLocationSlice.actions