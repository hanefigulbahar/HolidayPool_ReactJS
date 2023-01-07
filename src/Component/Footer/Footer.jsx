import React from 'react'
import logo from "../../../src/logos.png"
import '../Footer/footer.css'
import { BsInstagram } from 'react-icons/bs'

const Footer = () => {
    const date = new Date()
    return (
        <div className='footer-container'>
            <div className='footer-logo'>
                <img src={logo} alt="" />
                <div className='footer-name'>© {date.getFullYear()} HolidayPool</div>
            </div>
            <div className='footer-col'>
                <div>kurumsal</div>
                <div>Rezervasyon Rehberi</div>
                <div>kiralama koşulları</div>
                <div>Politika</div>
            </div>
            <div className='footer-social'>
                <div>Social media</div>
                <div className='icon'><BsInstagram className="instagram" /></div>
            </div>
        </div>
    )
}

export default Footer