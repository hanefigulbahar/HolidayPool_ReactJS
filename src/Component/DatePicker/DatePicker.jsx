import React, { useEffect, useRef, useState } from 'react'
import { Calendar } from 'react-date-range';
import * as locales from 'react-date-range/dist/locale';
import format from 'date-fns/format';
import '../DatePicker/datepicker.css'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';


const DatePicker = ({ setCheck, inputCheck, min }) => {
    const nameMapper = {
        de: 'German',
        enGB: 'English (United Kingdom)',
        enUS: 'English (United States)',
        ru: 'Russian',
        tr: 'Turkish',
    };

    const rez = [
        new Date("11/10/2022"),
    ]

    const [date, setDate] = useState(null);
    const [open, setOpen] = useState(false);
    const [locale, setLocale] = React.useState('tr');
    const inputRef = useRef(null)


    useEffect(() => {
        document.addEventListener("click", hideOnClickOutside, true)
    })

    useEffect(() => {
        setCheck(date)
    }, [date, setCheck])


    const localeOptions = Object.keys(locales).map(key => ({
        value: key,
        label: `${key} - ${nameMapper[key] || ''}`
    })).filter(item => nameMapper[item.value]);

    const hideOnClickOutside = (e) => {
        if (inputRef.current && !inputRef.current.contains(e.target)) {
            document.addEventListener("click", hideOnClickOutside, true)
            setOpen(false)
        }
    }

    return (
        <div className='calendarWrap'>
            {date !== null
                ? <input
                    value={format(date, "dd/MM/yyyy")}
                    placeholder={inputCheck}
                    readOnly
                    className="inputBox"
                    onClick={() => setOpen(open => !open)}
                />
                : <input
                    value={null}
                    placeholder={inputCheck}
                    readOnly
                    className="inputBox"
                    onClick={() => setOpen(open => !open)}
                />
            }
            <div ref={inputRef}>
                {open &&
                    <Calendar
                        onChange={item => setDate(item)}
                        locale={locales[locale]}
                        minDate={min}
                        disabledDates={rez}
                        date={date}
                        color={"#9aa7bc"}
                        className={"calendarElement"}
                    />
                }

            </div>
        </div>
    )

}

export default DatePicker