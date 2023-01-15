import React, { useEffect, useState } from 'react'
//import { BiSearchAlt } from "react-icons/bi";
import { BsCalendarCheck, BsCalendarX } from "react-icons/bs";
import { MdKeyboardArrowDown } from 'react-icons/md'

import DatePicker from '../DatePicker/DatePicker';
import '../Banner/banner.css'
import SelectBox from '../SelectBox/SelectBox';
import { useNavigate } from 'react-router-dom';


const Banner = () => {

    const [checkin, setCheckin] = useState(null);
    const [checkout, setCheckout] = useState(null);
    const [location, setLocation] = useState(null)

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
                    <SelectBox selectValue={setLocation} element={[
                        {
                            id: 1,
                            name: "Kaş"
                        }, {
                            id: 2,
                            name: "Kalkan"
                        },
                        {
                            id: 3,
                            name: "Tırmısın"
                        }
                    ]} placeholder={"Select Location"} />
                    <span><MdKeyboardArrowDown className="icons" /></span>
                </div>
                <button onClick={searchHandle} className='search-button'>Search</button>
            </div>
        </div >
    )
}

export default Banner