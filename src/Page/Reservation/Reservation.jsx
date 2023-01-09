import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import "../Reservation/reservation.css"
import logo from "../../../src/logos.png"
import Footer from '../../Component/Footer/Footer'
import { BiStar } from 'react-icons/bi'
import format from 'date-fns/format';

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
                    <div className='rez-detail-title'>Confirm Reservation</div>
                    <div className='rez-detail-date'>
                        <div className='rez-detail-date-check in'>
                            <div>Check-in</div>
                            <div>11/01/2023</div>
                        </div>
                        <div className='rez-detail-date-check out'>
                            <div>Check-out</div>
                            <div>11/01/2023</div>
                        </div>
                        <div className='rez-detail-date-check'>
                            <div>Guest</div>
                            <div>1</div>
                        </div>
                    </div>
                    <div className='rez-confirm-detail'>
                        <div className='rez-confirm'>
                            <label htmlFor="">Name</label>
                            <input type="text" name="" id="" />
                        </div>
                        <div className='rez-confirm'>
                            <label htmlFor="">Surname</label>
                            <input type="text" name="" id="" />
                        </div>
                        <div className='rez-confirm'>
                            <label htmlFor="">E-mail</label>
                            <input type="text" name="" id="" />
                        </div>
                        <div className='rez-confirm'>
                            <label htmlFor="">Phone</label>
                            <input type="text" name="" id="" />
                        </div>
                        <div className='rez-confirm'>
                            <button>Reservation</button>
                        </div>
                    </div>
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
                    <div className='rez-info-payment'>
                        <div className='rez-info-payment-title'>Price Detail</div>
                        <div className='rez-info-payment-detail'>
                            <div>First amound</div>
                            <div>100 ₺</div>
                        </div>
                        <div className='rez-info-payment-detail'>
                            <div>Villa amount</div>
                            <div>3000 ₺</div>
                        </div>
                        <div className='rez-info-payment-detail'>
                            <div>Extra service</div>
                            <div>30 ₺</div>
                        </div>
                        <div className='rez-info-payment-detail discound'>
                            <div>Discound</div>
                            <div>-300 ₺</div>
                        </div>
                        <div className='rez-info-payment-detail'>
                            <div>Total</div>
                            <div>31000 ₺</div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default Reservation