import React, { useEffect } from 'react'
//Components
import DatePicker from '../DatePicker/DatePicker';
import SelectBox from '../SelectBox/SelectBox';
import { VillaService } from '../../Services';
//Pages
//Routers
import { useNavigate } from 'react-router-dom';
//Reduxs
import { useDispatch, useSelector } from 'react-redux';
import { setLocationData } from '../../Feature/locationSlice';
//Icons
import { BsCalendarCheck, BsCalendarX } from "react-icons/bs";
import { MdKeyboardArrowDown } from 'react-icons/md'
//Styles
import '../Banner/banner.css'



const Banner = () => {
    const dispacth = useDispatch()
    const selectedLocation = useSelector(state => state.selectLocationSlice)
    const checkInData = useSelector(state => state.datePickerSlice.checkIn)
    const checkOutData = useSelector(state => state.datePickerSlice.checkIn)

    const seacrhNav = useNavigate()
    const searchHandle = () => {
        seacrhNav(`villas`, {
            state: {
                checkin: checkInData,
                checkout: checkOutData,
                location: selectedLocation
            }
        })
    }
    useEffect(() => {
        VillaService.getLocation()
            .then(res => dispacth(setLocationData(res)))
            .catch(dispacth(setLocationData([])))
    }, [dispacth])
    return (
        <div className='banner'>
            <div className='input-group'>
                <div className='rez'>
                    <DatePicker min={new Date()} inputCheck={"Check-in"} />
                    <span><BsCalendarCheck className="icons" /></span>
                </div>
                <div className='rez'>
                    <DatePicker inputCheck={"Check-out"} />
                    <span><BsCalendarX className="icons" /></span>
                </div>
                <div className='rez'>
                    <SelectBox placeholder={"Select Location"} />
                    <span><MdKeyboardArrowDown className="icons" /></span>
                </div>
                {selectedLocation === null && checkInData === null
                    ? <button disabled onClick={searchHandle} className='search-button'>Search</button>
                    : <button onClick={searchHandle} className='search-button'>Search</button>
                }
            </div>
        </div >
    )
}

export default Banner