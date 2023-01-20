import React, { useEffect, useRef, useState } from 'react'
//Components
import { DateRange } from 'react-date-range';
import * as locales from 'react-date-range/dist/locale';
import format from 'date-fns/format';
//Pages
//Routers
//Reduxs
import { useDispatch, useSelector } from 'react-redux';
import { setRangeDateData } from '../../Feature/datePickerSlice';
//Icons
//Styles
import "../DatePickerRange/datePickerRange.css"
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const DatePickerRange = () => {
    const [open, setOpen] = useState(false);
    const [locale, setLocale] = React.useState('tr');
    const inputRef = useRef(null)
    const dispatch = useDispatch()
    const checkDate = useSelector(state => state.datePickerSlice.rangeDate)

    const nameMapper = {
        de: 'German',
        enGB: 'English (United Kingdom)',
        enUS: 'English (United States)',
        ru: 'Russian',
        tr: 'Turkish',
    };
    const rangeRez = [
        new Date("01/04/2023")
    ];

    useEffect(() => {
        document.addEventListener("click", hideOnClickOutside, true)
    })
    const localeOptions = Object.keys(locales)
        .map(key => ({
            value: key,
            label: `${key} - ${nameMapper[key] || ''}`
        }))
        .filter(item => nameMapper[item.value]);

    const hideOnClickOutside = (e) => {
        if (inputRef.current && !inputRef.current.contains(e.target)) {
            document.addEventListener("click", hideOnClickOutside, true)
            setOpen(false)
        }
    }
    return (
        <div className='calendarwrap'>
            {format(checkDate[0].endDate, "dd/MM/yyyy") === format(new Date(), "dd/MM/yyyy")
                ? <input
                    readOnly
                    className="inputBox"
                    onClick={() => setOpen(open => !open)}
                    placeholder={"Check-in ~ Check-out"}
                />
                :
                <input
                    value={`${format(checkDate[0].startDate, "dd/MM/yyyy")} ~ ${format(checkDate[0].endDate, "dd/MM/yyyy")} `}
                    readOnly
                    className="inputBox"
                    onClick={() => setOpen(open => !open)}
                />}
            <div ref={inputRef}>
                {open &&
                    <DateRange
                        editableDateInputs={true}
                        onChange={item => dispatch(setRangeDateData([item.selection]))}
                        moveRangeOnFirstSelection={false}
                        ranges={checkDate}
                        disabledDates={rangeRez}
                        rangeColors={["#9aa7bc"]}
                        locale={locales[locale]}
                        minDate={new Date()}
                        className={"calendarelement"}

                    />
                }
            </div>


        </div>
    )

}

export default DatePickerRange