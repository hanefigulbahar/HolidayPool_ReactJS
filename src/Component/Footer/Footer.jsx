import React, { useState } from 'react'
//Components
//Pages
//Routers
import { Link } from 'react-router-dom'
//Reduxs
//Icons
import { SlSocialInstagram, SlSocialFacebook, SlSocialTwitter } from 'react-icons/sl'
//Styles
import '../Footer/footer.css'

const Footer = () => {
    const date = new Date()
    const [languange, setLanguange] = useState(true)
    return (
        <div className='footer-container'>
            <div className='footer-col'>
                <div className='footer-name'>© {date.getFullYear()} HolidayPool</div>
            </div>
            {
                languange === true ? <div onClick={e => setLanguange(false)}>TR</div> : <div onClick={e => setLanguange(true)}>EN</div>
            }
            <div className='footer-social'>
                <Link><SlSocialInstagram className='footer-icons' /></Link>
                <Link><SlSocialFacebook className='footer-icons' /></Link>
                <Link><SlSocialTwitter className='footer-icons' /></Link>
            </div>
        </div >
    )
}

export default Footer