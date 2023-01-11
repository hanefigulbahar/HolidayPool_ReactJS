/* eslint-disable array-callback-return */
import React, { useState } from 'react'
import './villaDetail.css'
import { BiBed, BiBath, BiCheck, BiXCircle, BiPlusCircle, BiX } from "react-icons/bi"
import { BsPeople, BsCalendarCheck } from 'react-icons/bs'
import banner from "../../banne.json"
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md"
import DatePickerRange from '../../DatePickerRange/DatePickerRange'
import SelectBox from '../../Component/SelectBox/SelectBox'
import { useParams, useNavigate } from 'react-router-dom'
import products from '../../product.json'
import format from 'date-fns/format';



const VillaDetail = () => {
    const { villaID } = useParams()
    const [index, setIndex] = useState(1)
    const [count, setCount] = useState(0)
    const [payment, setPayment] = useState(null)
    const [rangeDate, setRangeDate] = useState({
        start: new Date(),
        end: new Date()
    })

    const navigate = useNavigate()
    console.log(rangeDate)

    const rezHandle = () => {

        navigate(`/reservation`, {
            state: {
                villaID: villaID,
                guest: count,
                start: rangeDate.start,
                end: rangeDate.end,
                payment: payment,
            }
        })
    }

    /*products.map(product => {
        if (product.id === villaID) {
            const villaName = product.name
            const villaLocation = product.location
            product.description.map(desc => {
                const villaBed = desc.bed
                const villaBathroom = desc.bathroom
                const villaGuest = desc.peoples
            }
            )
            const villaFeature = product.features.map(feature => feature)
            const firstPayment = product.payments.firstPay
            const startDayPayment = product.payments.dailyPayment.map(payment => (payment.day === format(rangeDate.start, "dd/MM/yyyy")))
            const endDayPayment = product.payments.dailyPayment.map(payment => {
                if (payment.day === format(rangeDate.end, "dd/MM/yyyy")) {
                    console.log(payment.amount)
                }
            })
        }
    })*/
    return (
        <>
            {products.map(product => {
                if (product.id === villaID) {
                    return (
                        <div key={product.id}>
                            <div className='villa'>
                                <img className='villa-image' src="https://wallpaperaccess.com/full/1899390.jpg" alt="" />
                                <div className='villa-content'>
                                    <div className='villa-title'>
                                        <div className='villa-name'>{product.name}</div>
                                        <div className='villa-description'>Villa desc</div>
                                    </div>
                                    {product.description.map((item) => (
                                        <div className='villa-detail'>
                                            <div className='villa-desc-detail'>
                                                <div className='villa-icon'><BiBed /></div>
                                                <div>
                                                    <p>Bedroom</p>
                                                    <p>{item.bed}</p>
                                                </div>
                                            </div>
                                            <div className='villa-desc-detail'>
                                                <div className='villa-icon'><BiBath /></div>
                                                <div>
                                                    <p>Bathroom</p>
                                                    <p>{item.badrooms}</p>
                                                </div>
                                            </div>
                                            <div className='villa-desc-detail'>
                                                <div className='villa-icon'><BsPeople /></div>
                                                <div>
                                                    <p>People</p>
                                                    <p>{item.peoples}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='villa-container-header'>
                                <div className='villa-container-reating'>rating</div>
                                <div className='villa-container-location'>location</div>
                            </div>
                            <div className='villa-container'>
                                <div className='villa-container-content'>
                                    {banner.map(image =>
                                        image.id === index &&
                                        <img key={image.id} className='villa-container-content-img' src={image.img} alt={image.id} />
                                    )}
                                    <button className='villa-container-content-foward' onClick={() => { setIndex(index === banner.length ? 1 : index + 1) }}><MdArrowForwardIos className='villa-slider-icon' /></button>

                                    <button className='villa-container-content-backward' onClick={() => { setIndex(index === 1 ? banner.length : index - 1) }}><MdArrowBackIosNew className='villa-slider-icon' /></button>
                                </div>
                                <div className='villa-reservation'>
                                    <div className='villa-reservation-title'>Reservation {"Villa Abosa"}</div>
                                    <div className='villa-reservation-date'>
                                        <DatePickerRange setRangeDate={setRangeDate} />
                                        <span><BsCalendarCheck className="icons" /></span>
                                    </div>
                                    <div className='villa-reservation-input-group'>
                                        <div>
                                            {count === 0
                                                ? <input readOnly type="text" placeholder='Choose the number of people' />
                                                : <input readOnly type="text" value={count} />}

                                            <button onClick={() => { setCount(count + 1) }} className='villa-reservarion-plus'><BiPlusCircle /></button>
                                            {count === 0
                                                ? <button disabled className='villa-reservarion-negative'><BiXCircle /></button>
                                                : <button onClick={() => { setCount(count - 1) }} className='villa-reservarion-negative'><BiXCircle /></button>
                                            }
                                        </div>
                                        <SelectBox selectValue={setPayment} element={[
                                            {
                                                id: 1,
                                                name: "Cash"
                                            }, {
                                                id: 2,
                                                name: "Credit Card"
                                            }
                                        ]} placeholder={"Select Payment"} />

                                    </div>
                                    <div className='villa-reservation-payment'>
                                        <div className='villa-reservation-payment-first'>
                                            <div>Ön Ödeme</div>
                                            <div>{product.payments.firstPay}</div>
                                        </div>
                                        <div className='villa-reservation-payment-cost'>
                                            <div>Villa Ücreti</div>
                                        </div>
                                        <div className='villa-reservation-payment-total'>
                                            <div>Toplam ({"10 gün"})</div>
                                            <div>200</div>
                                        </div>
                                    </div>
                                    <div className='villa-reservation-payment-submit' >
                                        <button onClick={rezHandle}>Reserved</button>
                                    </div>
                                </div>
                            </div>
                            <div className='villa-container-content-detail'>
                                <ul className='villa-container-content-feature'>
                                    {product.features.map(feature => (
                                        feature.status === true
                                            ? <li key={feature.id} className='villa-container-content-feature-detail'><BiCheck className='villa-container-content-feature-icon' /><p>{feature.name}</p></li>
                                            : <li key={feature.id} className='villa-container-content-feature-detail negative'><BiX className='villa-container-content-feature-icon icon-negative ' /><p>{feature.name}</p></li>

                                    )
                                    )}

                                </ul>
                            </div>
                            <div className='villa-container-content-description'>
                                <div className='villa-container-content-description-detail'>
                                    <div>
                                        <h1>Açıklama</h1>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias doloremque quo exercitationem corporis ipsum adipisci reprehenderit magni eligendi ab tempore, quisquam ratione tempora neque possimus dolorum necessitatibus, explicabo quis. Explicabo?</p>
                                    </div>
                                    <div>
                                        <h1>Açıklama</h1>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias doloremque quo exercitationem corporis ipsum adipisci reprehenderit magni eligendi ab tempore, quisquam ratione tempora neque possimus dolorum necessitatibus, explicabo quis. Explicabo?</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )
                }

            })}

        </>

    )
}

export default VillaDetail