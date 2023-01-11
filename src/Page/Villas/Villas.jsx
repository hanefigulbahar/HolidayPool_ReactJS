import React from 'react'
import { useLocation } from 'react-router-dom';
import Card from '../../Component/Card/Card';
import products from "../../product.json"
import banner from "../../banne.json"
import format from 'date-fns/format';
import "../Villas/villas.css"


const Villas = () => {
    const location = useLocation();
    const datas = location.state
    console.log(datas)
    const villaLocation = products.filter(product => product.location === datas.location)
    const villaCheckInData = products.filter(product => product.days.includes(format(datas.checkin, "dd/MM/yyyy")))
    const villaCheckOutData = villaCheckInData.filter(product => product.days.includes(format(datas.checkout, "dd/MM/yyyy")))

    console.log(villaCheckOutData)

    return (
        <div className='villas-container'>
            {datas.location === null
                ? villaCheckOutData.map(item =>
                    <Card banner={banner} key={item.id} id={item.id} villaPhoto={item.image} villaName={item.name} villaLocation={item.location} villaStatus={item.status} villaDescription={[item.description]} villaCost={item.costs} />
                )
                : villaLocation.map(item =>
                    <Card banner={banner} key={item.id} id={item.id} villaPhoto={item.image} villaName={item.name} villaLocation={item.location} villaStatus={item.status} villaDescription={[item.description]} villaCost={item.costs} />
                )
            }
        </div>
    )
}

export default Villas