import React, { useEffect, useRef, useState } from 'react'
import '../SelectBox/selectbox.css'

const SelectBox = ({ selectValue, placeholder, element }) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const selectRef = useRef(null)
    console.log(value)
    useEffect(() => {
        document.addEventListener("click", hideOnClickOutside, true)
    })
    useEffect(() => {
        selectValue(value)
    }, [selectValue, value])
    const hideOnClickOutside = (e) => {
        if (selectRef.current && !selectRef.current.contains(e.target)) {
            document.addEventListener("click", hideOnClickOutside, true)
            setOpen(false)
        }
    }
    return (
        <div className='selectWrap'>
            <input
                readOnly
                placeholder={value ? value : placeholder}
                onClick={() => setOpen(open => !open)}
            />
            <div ref={selectRef}>
                {open &&
                    <div className="selectElement">
                        {element.map(el => <option onClick={() => (setValue(el))} className='optionElement'>{el}</option>)}
                    </div>
                }

            </div>
        </div >
    )
}

export default SelectBox