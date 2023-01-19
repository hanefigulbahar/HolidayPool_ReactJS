import React, { useEffect, useRef, useState } from 'react'
import { Calendar } from 'react-date-range';
import * as locales from 'react-date-range/dist/locale';
import format from 'date-fns/format';
import '../DatePicker/datepicker.css'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { useDispatch, useSelector } from 'react-redux';
import { setCheckInData, setCheckOutData } from '../../Feature/datePickerSlice';


const DatePicker = ({ inputCheck }) => {
    const dispatch = useDispatch()
    const checkInData = useSelector(state => state.datePickerSlice.checkIn)
    const checkOutData = useSelector(state => state.datePickerSlice.checkOut)

    const nameMapper = {
        de: 'German',
        enGB: 'English (United Kingdom)',
        enUS: 'English (United States)',
        ru: 'Russian',
        tr: 'Turkish',
    };

    const rez = []

    const [open, setOpen] = useState(false);
    const [locale, setLocale] = React.useState('tr');
    const inputRef = useRef(null)

    useEffect(() => {
        document.addEventListener("click", hideOnClickOutside, true)
    })

    const localeOptions = Object.keys(locales).map(key => ({
        value: key,
        label: `${key} - ${nameMapper[key] || ''}`
    })).filter(item => nameMapper[item.value]);

    const hideOnClickOutside = (e) => {
        if (inputRef.current && inputRef.current.contains(e.target)) {
            document.addEventListener("click", hideOnClickOutside, true)
            setOpen(false)
        }
    }

    function setSelectedDate(date) {
        inputCheck === "Check-in" ? dispatch(setCheckInData(date)) : dispatch(setCheckOutData(date));
    }

    function setMinDate(inputCheck) {
        return inputCheck === "Check-in" ? new Date() : checkInData;
    }

    const showSelectedDate = (check) => {
        if (check === "Check-in") return checkInData
        if (check === "Check-out") return checkOutData
    }
    return (
        <div className='calendarWrap'>
            {checkInData !== null && checkOutData !== null
                ? <input
                    value={showSelectedDate(inputCheck)}
                    readOnly
                    className="inputBox"
                    onClick={() => setOpen(open => !open)}
                />
                : <input
                    value={showSelectedDate(inputCheck)}
                    placeholder={inputCheck}
                    readOnly
                    className="inputBox"
                    onClick={() => setOpen(open => !open)}
                />
            }
            <div ref={inputRef}>
                {open &&
                    <Calendar
                        onChange={item => setSelectedDate(format(item, "dd/MM/yyyy"))}
                        locale={locales[locale]}

                        disabledDates={rez}
                        color={"#9aa7bc"}
                        className={"calendarElement"}
                    />
                }

            </div>
        </div>
    )

}

export default DatePicker