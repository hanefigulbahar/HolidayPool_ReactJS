import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import logo from "../../../src/logos.png"
import Footer from '../../Component/Footer/Footer'
import { BiStar } from 'react-icons/bi'
import format from 'date-fns/format';
import "../Reservation/reservation.css"
import { VillaService } from '../../Services'


const Reservation = () => {
    const [data, setData] = useState()
    const location = useLocation();
    const days = Math.floor((location.state.end - location.state.start) / (24 * 60 * 60 * 1000));

    useEffect(() => {
        VillaService.getVillaById(location.state.villaID)
            .then(res => setData(res))
            .catch(err => console.log(err))
    }, [location.state.villaID])

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
                            <div>{format(location.state.start, "dd/MM/yyyy")}</div>
                        </div>
                        <div className='rez-detail-date-check out'>
                            <div>Check-out</div>
                            <div>{format(location.state.end, "dd/MM/yyyy")}</div>
                        </div>
                        <div className='rez-detail-date-check'>
                            <div>Guest</div>
                            <div>{location.state.guest}</div>
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
                        <div className='rez-info-img'><img src='https://lh3.googleusercontent.com/p/AF1QipOWr7de7974PD3eGtI14-2KCuKaYEtpteNfJSc0=s1360-w1360-h1020' alt=''></img></div>
                        <div className='rez-villa-info'>
                            <div className='rez-villa-info-name'>{data?.name}</div>
                            <div className='rez-villa-info-rating'>
                                <div className='rez-villa-info-rating-icon'><BiStar /></div>
                                <div>4.5</div>
                            </div>
                        </div>
                    </div>
                    <div className='rez-info-payment'>
                        <div className='rez-info-payment-title'>Price Detail</div>
                        <div className='rez-info-payment-detail'>
                            <div>Advance payment</div>
                            <div>{data?.payments.firstPay} ₺</div>
                        </div>
                        <div className='rez-info-payment-detail'>
                            <div>Villa fee</div>
                            <div>{(data?.payments.payment) * days} ₺</div>
                        </div>
                        <div className='rez-info-payment-detail'>
                            <div>Total</div>
                            <div>{((data?.payments.payment) * days) + data?.payments.firstPay} ₺</div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Reservation