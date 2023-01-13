import React, { useState } from 'react'
import '../Card/card.css'
import { BiBed, BiBath, BiMapPin, BiStar } from 'react-icons/bi'
import { BsPeople } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'

const Card = ({ id, banner, villaName, villaLocation, villaCost, villaDescription }) => {
    const [index, setIndex] = useState(1)
    return (
        <div className='card'  >
            <NavLink className="card-link" to={"/villa-detail/" + id} >
                {banner.map(image =>
                    image.id === index &&
                    <img key={image.id} className='card-img' alt={image.id} src={image.img} />
                )}
                <div className='card-content'>
                    <div className='card-nav'>
                        <div className='card-title'>
                            <div className='card-villa-name'>{villaName}</div>
                            <div className='card-local'>
                                <div><BiMapPin /></div>
                                <p>{villaLocation}</p>
                            </div>
                        </div>
                        <div className='card-raiting'>
                            <div className='card-raiting-star'><BiStar /></div>
                            <div className='card-raiting-data'>4.5</div>
                        </div>
                    </div>
                    {villaDescription.map((item) => (
                        <div key={item[0].index} className='card-desc'>
                            <div className='card-desc-detail'>
                                <div className='card-icon'><BiBed /></div>
                                <p>Bed</p>
                                <p>{item[0].bed}</p>
                            </div>
                            <div className='card-desc-detail'>
                                <div className='card-icon'><BiBath /></div>
                                <p>Bathroom</p>
                                <p>{item[0].badrooms}</p>

                            </div>
                            <div className='card-desc-detail'>
                                <div className='card-icon'><BsPeople /></div>
                                <p>People</p>
                                <p>{item[0].badrooms}</p>
                            </div>
                        </div>
                    ))}
                    <div className='card-cost'><p>{villaCost}</p>₺ / weekley</div>
                </div>
            </NavLink >
            <button onClick={() => { setIndex(index === 1 ? banner.length : index - 1) }} className='card-button left'><MdArrowBackIosNew className='card-button-icon' /></button>
            <button onClick={() => { setIndex(index === banner.length ? 1 : index + 1) }} className='card-button right'><MdArrowForwardIos className='card-button-icon' /></button>
            <div className='dot-container'>
                {banner.map(item => item.id === index
                    ? <span onClick={() => setIndex(item.id)} id={item.id} class="dot active"></span>
                    : <span onClick={() => setIndex(item.id)} id={item.id} class="dot"></span>
                )}
            </div>
        </div>
    )
}

export default Card