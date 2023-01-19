import React, { useEffect, useState } from 'react'
//Components
import DatePickerRange from '../../Component/DatePickerRange/DatePickerRange'
import { VillaService } from "../../Services"
import banner from "../../banne.json"
//Routers
import { useParams, useNavigate } from 'react-router-dom'
//Reduxs
import { useDispatch, useSelector } from 'react-redux'
import { setVillaDataByID } from '../../Feature/villaDataSlice'
// Icons
import { BiBed, BiBath, BiCheck, BiXCircle, BiPlusCircle, BiX } from "react-icons/bi"
import { BsPeople, BsCalendarCheck } from 'react-icons/bs'
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md"
//Styles
import './villaDetail.css'

const VillaDetail = () => {
    const dispatch = useDispatch()
    const villaData = useSelector(state => state.villaDataSlice.villaDataByID)
    const { villaID } = useParams()
    const [index, setIndex] = useState(1)
    const [guest, setGuest] = useState(0)

    const [rangeDate, setRangeDate] = useState({
        start: new Date(),
        end: new Date()
    })
    const navigate = useNavigate()
    const rezHandle = () => {
        navigate(`/reservation`, {
            state: {
                guest,
                start: rangeDate.start,
                end: rangeDate.end,
            }
        })
    }

    useEffect(() => {
        VillaService.getVillaById(villaID)
            .then(res => (dispatch(setVillaDataByID(res))))
            .catch(err => console.error(err))
    }, [])

    return (
        <>
            <div key={villaID}>
                <div className='villa'>
                    <img className='villa-image' src="https://wallpaperaccess.com/full/1899390.jpg" alt="" />
                    <div className='villa-content'>
                        <div className='villa-title'>
                            <div className='villa-name'>{villaData?.name}</div>
                            <div className='villa-description'>Villa Explanation</div>
                        </div>
                        {villaData?.description?.map((item) => (
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
                <div className='villa-container'>
                    <div className='villa-container-content'>
                        {banner.map((image, index) =>
                            image.id === index &&
                            <img key={index} className='villa-container-content-img' src={image.img} alt={image.id} />
                        )}
                        <button className='villa-container-content-foward' onClick={() => { setIndex(index === banner.length ? 1 : index + 1) }}><MdArrowForwardIos className='villa-slider-icon' /></button>

                        <button className='villa-container-content-backward' onClick={() => { setIndex(index === 1 ? banner.length : index - 1) }}><MdArrowBackIosNew className='villa-slider-icon' /></button>
                    </div>
                    <div className='villa-reservation'>
                        <div className='villa-reservation-title'>Reservation {villaData?.name}</div>
                        <div className='villa-reservation-date'>
                            <DatePickerRange setRangeDate={setRangeDate} />
                            <span><BsCalendarCheck className="icons" /></span>
                        </div>
                        <div className='villa-reservation-input-group'>
                            <div className='villa-reservation-guest'>
                                {guest === 0
                                    ? <button disabled className='villa-reservarion-negative'><BiXCircle /></button>
                                    : <button onClick={() => { setGuest(guest - 1) }} className='villa-reservarion-negative'><BiXCircle className='guest-icon' /></button>
                                }
                                {guest === 0
                                    ? <input readOnly type="text" placeholder='Guest' />
                                    : <input readOnly type="text" value={guest} />}

                                <button onClick={() => { setGuest(guest + 1) }} className='villa-reservarion-plus'><BiPlusCircle className='guest-icon' /></button>

                            </div>
                        </div>
                        <div className='villa-reservation-payment'>
                            <div className='villa-reservation-payment-first'>
                                <div>Advance payment</div>
                                <div>{villaData?.payments?.firstPay} ₺</div>
                            </div>
                            <div className='villa-reservation-payment-cost'>
                                <div>Villa fee</div>
                                <div>{villaData?.payments?.payment} ₺</div>
                            </div>
                            <div className='villa-reservation-payment-total'>
                                <div>Total</div>
                                <div>{villaData?.payments?.payment + villaData?.payments?.firstPay} ₺</div>
                            </div>
                        </div>
                        <div className='villa-reservation-payment-submit' >
                            <button onClick={rezHandle}>Reserved</button>
                        </div>
                    </div>
                </div>
                <div className='villa-container-content-detail'>
                    <ul className='villa-container-content-feature'>
                        {villaData?.features?.map((feature, index) => (
                            feature.status === true
                                ? <li key={index} className='villa-container-content-feature-detail'><BiCheck className='villa-container-content-feature-icon' /><p>{feature.name}</p></li>
                                : <li key={index} className='villa-container-content-feature-detail negative'><BiX className='villa-container-content-feature-icon icon-negative ' /><p>{feature.name}</p></li>
                        )
                        )}
                    </ul>
                </div>
                <div className='villa-container-content-description'>
                    <div className='villa-container-content-description-detail'>
                        <div>
                            <h1>Explanation</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias doloremque quo exercitationem corporis ipsum adipisci reprehenderit magni eligendi ab tempore, quisquam ratione tempora neque possimus dolorum necessitatibus, explicabo quis. Explicabo?</p>
                        </div>
                        <div>
                            <h1>Explanation</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias doloremque quo exercitationem corporis ipsum adipisci reprehenderit magni eligendi ab tempore, quisquam ratione tempora neque possimus dolorum necessitatibus, explicabo quis. Explicabo?</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default VillaDetail