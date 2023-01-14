import {get} from "./request"

export const getAllVillas=()=>get("villas")
export const getVillaById=(id)=>get(`villas/${id} `)