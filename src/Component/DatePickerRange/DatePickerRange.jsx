import React, { useEffect, useRef, useState } from 'react'
//Components
import { DateRange } from 'react-date-range';
import * as locales from 'react-date-range/dist/locale';
import format from 'date-fns/format';
import addDays from 'date-fns/addDays';
//Pages
//Routers
//Reduxs
//Icons
//Styles
import "../DatePickerRange/datePickerRange.css"
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const DatePickerRange = ({ setRangeDate }) => {
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

    const [open, setOpen] = useState(false);
    const [locale, setLocale] = React.useState('tr');
    const [dateRange, setDateRange] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 0),
            key: 'selection'
        }
    ]);
    const inputRef = useRef(null)

    useEffect(() => {
        setRangeDate({
            start: dateRange[0].startDate,
            end: dateRange[0].endDate
        })
    }, [dateRange, setRangeDate])


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

    //const first = format(dateRange[0].startDate, "dd/MM/yyyy")
    //const second = format(dateRange[0].endDate, "dd/MM/yyyy")
    return (
        <div className='calendarwrap'>
            <input
                value={`${format(dateRange[0].startDate, "dd/MM/yyyy")} ~ ${format(dateRange[0].endDate, "dd/MM/yyyy")} `}
                readOnly
                className="inputBox"
                onClick={() => setOpen(open => !open)}
            />
            <div ref={inputRef}>
                {open &&
                    <DateRange
                        editableDateInputs={true}
                        onChange={item => setDateRange([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={dateRange}
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