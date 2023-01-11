import React from 'react'
import logo from "../../../src/logos.png"
import '../Footer/footer.css'
import { SlSocialInstagram, SlSocialFacebook, SlSocialTwitter } from 'react-icons/sl'
import { Link } from 'react-router-dom'

const Footer = () => {
    const date = new Date()
    return (
        <div className='footer-container'>
            <div className='footer-col'>
                <div className='footer-name'>© {date.getFullYear()} HolidayPool</div>
                <div>/</div>
                <div>Kurumsal</div>
                <div>/</div>
                <div>Rezervasyon Rehberi</div>
                <div>/</div>
                <div>Kiralama koşulları</div>
                <div>/</div>
                <div>Politika</div>
            </div>
            <div>TR</div>
            <div className='footer-social'>
                <Link><SlSocialInstagram className='footer-icons' /></Link>
                <Link><SlSocialFacebook className='footer-icons' /></Link>
                <Link><SlSocialTwitter className='footer-icons' /></Link>
            </div>
        </div >
    )
}

export default Footer