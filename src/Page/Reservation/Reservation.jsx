import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import "../Reservation/reservation.css"
import logo from "../../../src/logos.png"
import Footer from '../../Component/Footer/Footer'
import { BiStar } from 'react-icons/bi'
import format from 'date-fns/format';
import products from "../../product.json"

const Reservation = () => {
    const location = useLocation();
    const datas = location.state
    const days = Math.floor((datas.end - datas.start) / (24 * 60 * 60 * 1000));
    console.log(days)
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
                            <div>{format(datas.start, "dd/MM/yyyy")}</div>
                        </div>
                        <div className='rez-detail-date-check out'>
                            <div>Check-out</div>
                            <div>{format(datas.end, "dd/MM/yyyy")}</div>
                        </div>
                        <div className='rez-detail-date-check'>
                            <div>Guest</div>
                            <div>{datas.guest}</div>
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
                            <div className='rez-villa-info-name'>{products.map(product => product.id === datas.villaID && product.name)}</div>
                            <div className='rez-villa-info-rating'>
                                <div className='rez-villa-info-rating-icon'><BiStar /></div>
                                <div>4.5</div>
                            </div>
                        </div>
                    </div>
                    {products.map(product => product.id === datas.villaID &&
                        <div className='rez-info-payment'>
                            <div className='rez-info-payment-title'>Price Detail</div>
                            <div className='rez-info-payment-detail'>
                                <div>First amound</div>
                                <div>{product.payments.firstPay} ₺</div>
                            </div>
                            <div className='rez-info-payment-detail'>
                                <div>Villa amount</div>
                                <div>{product.payments.payment} ₺</div>
                            </div>
                            <div className='rez-info-payment-detail'>
                                <div>Total</div>
                                <div>{Number(product.payments.firstPay) + Number(product.payments.payment)} ₺</div>
                            </div>
                        </div>
                    )}

                </div>

            </div>
            <Footer />
        </>
    )
}

export default Reservation