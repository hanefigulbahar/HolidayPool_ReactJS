import {get} from "./request"

export const getAllVillas=()=>get("villas")
export const getVillaById=(id)=>get(`villas/${id} `)
export const getVillaByLocation=(location)=>get(`villas?location=${location}`)
export const getLocation=()=>get('availableLocations')