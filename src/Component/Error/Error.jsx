import React from 'react'
import { BiErrorAlt } from 'react-icons/bi'
import "../Error/error.css"

const Error = ({ message }) => {
    return (
        <div className='error'>
            <div ><BiErrorAlt className='error-icon' /></div>
            <div className='error-message'>{message}</div>
        </div>
    )
}

export default Error