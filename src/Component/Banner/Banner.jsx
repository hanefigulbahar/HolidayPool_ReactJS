import React, { useEffect, useState } from 'react'
import { BsCalendarCheck, BsCalendarX } from "react-icons/bs";
import { MdKeyboardArrowDown } from 'react-icons/md'
import DatePicker from '../DatePicker/DatePicker';
import '../Banner/banner.css'
import SelectBox from '../SelectBox/SelectBox';
import { useNavigate } from 'react-router-dom';
import { VillaService } from '../../Services';


const Banner = () => {

    const [checkin, setCheckin] = useState(null);
    const [checkout, setCheckout] = useState(null);
    const [location, setLocation] = useState(null)
    const [locationData, setLocationData] = useState()

    console.log("checkin", checkin)
    console.log("checkout", checkout)

    const seacrhNav = useNavigate()

    const searchHandle = () => {
        seacrhNav(`villas`, {
            state: {
                checkin: checkin,
                checkout: checkout,
                location
            }
        })
    }

    useEffect(() => {
        VillaService.getLocation()
            .then(res => setLocationData(res))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='banner'>
            <div className='input-group'>
                <div className='rez'>
                    <DatePicker check={checkin} min={new Date()} inputCheck={"Check-in"} setCheck={setCheckin} />
                    <span><BsCalendarCheck className="icons" /></span>
                </div>
                <div className='rez'>
                    <DatePicker check={checkout} min={checkin} inputCheck={"Check-out"} setCheck={setCheckout} />
                    <span><BsCalendarX className="icons" /></span>
                </div>
                <div className='rez'>
                    <SelectBox selectValue={setLocation} element={locationData} placeholder={"Select Location"} />
                    <span><MdKeyboardArrowDown className="icons" /></span>
                </div>
                {location === null && checkin === null
                    ? <button disabled onClick={searchHandle} className='search-button'>Search</button>
                    : <button onClick={searchHandle} className='search-button'>Search</button>
                }
            </div>
        </div >
    )
}

export default Banner