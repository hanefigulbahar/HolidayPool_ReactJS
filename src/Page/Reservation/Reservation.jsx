import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import "../Reservation/reservation.css"
import logo from "../../../src/logos.png"
import Footer from '../../Component/Footer/Footer'
import { BiStar } from 'react-icons/bi'


const Reservation = () => {
    const location = useLocation();
    const datas = location.state
    console.log(datas)
    return (
        <>
            <div className="rez-header">
                <NavLink className="rez-link" to='/'>
                    <img className='rez-header-logo' src={logo} alt="" />
                    <div className='rez-header-name'>HolidayPool</div>
                </NavLink>
            </div>
            <div className='rez-container' >
                <div className='rez-detail'>
                    {datas.villaID}
                </div>
                <div className='rez-info'>
                    <div className='rez-card-header'>
                        <div className='rez-info-img'></div>
                        <div className='rez-villa-info'>
                            <div className='rez-villa-info-name'>villa name/villa decs</div>
                            <div className='rez-villa-info-rating'>
                                <div className='rez-villa-info-rating-icon'><BiStar /></div>
                                <div>4.5</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default Reservation