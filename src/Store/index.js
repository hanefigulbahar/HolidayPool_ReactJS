import { configureStore } from "@reduxjs/toolkit";
import locationSlice from "../Feature/locationSlice";
import datePickerSlice from "../Feature/datePickerSlice";
import selectLocationSlice from "../Feature/selectLocationSlice";
import villaDataSlice from "../Feature/villaDataSlice";

const store= configureStore({
    reducer:{
        locationSlice,
        datePickerSlice,
        selectLocationSlice,
        villaDataSlice
    },
    middleware:(getDefaultMiddlewar)=>getDefaultMiddlewar({})
})


export default store