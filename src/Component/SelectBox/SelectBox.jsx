import React, { useEffect, useRef, useState } from 'react'
//Components
//Pages
//Routers
//Reduxs
import { selectLocation } from '../../Feature/selectLocationSlice';
import { useDispatch, useSelector } from 'react-redux';
//Icons
//Styles
import '../SelectBox/selectbox.css'

const SelectBox = ({ placeholder }) => {
    const dispacth = useDispatch()
    const selectedLocation = useSelector(state => state.selectLocationSlice.location)
    const locationDatas = useSelector(state => state.locationSlice)
    const [open, setOpen] = useState(false);
    const selectRef = useRef(null)
    console.log(locationDatas)
    console.log(selectedLocation)

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
                placeholder={selectedLocation ? selectedLocation : placeholder}
                onClick={() => setOpen(open => !open)}
            />
            <div ref={selectRef}>
                {open &&
                    <div className="selectElement">
                        {locationDatas?.length === 0
                            ? <div className='optionElement not'>Bulunamadi</div>
                            : locationDatas.map(el => <div key={el} onClick={() => (dispacth(selectLocation(el)))} className='optionElement'>{el}</div>)
                        }
                    </div>
                }

            </div>
        </div >
    )
}

export default SelectBox