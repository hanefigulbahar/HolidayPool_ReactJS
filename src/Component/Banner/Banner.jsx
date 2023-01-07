import React, { useState } from 'react'
import { BiSearchAlt } from "react-icons/bi";
import { BsCalendarCheck, BsCalendarX } from "react-icons/bs";
import { MdKeyboardArrowDown } from 'react-icons/md'

import DatePicker from '../DatePicker/DatePicker';
import '../Banner/banner.css'
import SelectBox from '../SelectBox/SelectBox';


const Banner = () => {

    const [checkin, setCheckin] = useState(new Date());
    const [checkout, setCheckout] = useState(new Date());

    console.log("checkin", checkin)
    console.log("checkout", checkout)


    return (
        <div className='banner'>
            <div className='input-group'>
                <div className='rez'>
                    <input className="banner-search" placeholder='Search Villa Name' type="text" />
                    <span><BiSearchAlt className='icons' /></span>
                </div>
                <div className='rez'>
                    <DatePicker check={checkin} min={new Date()} inputCheck={"Check-in"} setCheck={setCheckin} />
                    <span><BsCalendarCheck className="icons" /></span>
                </div>
                <div className='rez'>
                    <DatePicker check={checkout} min={checkin} inputCheck={"Check-out"} setCheck={setCheckout} />
                    <span><BsCalendarX className="icons" /></span>
                </div>
                <div className='rez'>
                    <SelectBox element={["Honeymoon", "Conservative", "Luxury"]} placeholder={"Select Category"} />
                    <span><MdKeyboardArrowDown className="icons" /></span>
                </div>
                <div className='rez'>
                    <SelectBox element={["Kaş", "Kalkan"]} placeholder={"Select Location"} />
                    <span><MdKeyboardArrowDown className="icons" /></span>
                </div>
                <button className='search-button'>Search</button>
            </div>
        </div >
    )
}

export default Banner