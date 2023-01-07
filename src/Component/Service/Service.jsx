import React from 'react'
import '../Service/service.css'
import { RiHandHeartLine } from 'react-icons/ri'
import { TbFence } from 'react-icons/tb'
import { MdOutlineVilla } from 'react-icons/md'



const Service = () => {
    return (
        <div className='service'>
            <h1>Our Service</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <div className='service-content'>
                <div className='service-detail'>
                    <div className='icons honeymoon'><RiHandHeartLine /></div>
                    <div>Honeymoon</div>
                    <p>desc</p>
                </div>
                <div className='service-detail'>
                    <div className='icons conservative'>< TbFence /></div>
                    <div>Conservative</div>
                    <p>desc</p>
                </div>
                <div className='service-detail'>
                    <div className='icons luxury'><MdOutlineVilla /></div>
                    <div>Luxury</div>
                    <p>desc</p>

                </div>
            </div>
        </div>
    )
}

export default Service