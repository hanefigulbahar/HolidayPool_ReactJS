import React, { useEffect, useRef, useState } from 'react'
import '../SelectBox/selectbox.css'

const SelectBox = ({ placeholder, element }) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(placeholder);
    const selectRef = useRef(null)

    useEffect(() => {
        document.addEventListener("click", hideOnClickOutside, true)
    })
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
                placeholder={value}
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