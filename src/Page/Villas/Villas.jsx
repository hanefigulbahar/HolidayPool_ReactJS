import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Card from '../../Component/Card/Card';
import banner from "../../banne.json"
import format from 'date-fns/format';
import { VillaService } from "../../Services"
import "../Villas/villas.css"

const Villas = () => {
    const location = useLocation();
    const [data, setData] = useState([])
    const villaFilterValues = location.state
    console.log(villaFilterValues)
    useEffect(() => {
        if (villaFilterValues.location === null) {
            VillaService.getAllVillas()
                .then(
                    res => setData(res),
                    err => console.log(err)
                )
        } else {
            VillaService.getVillaByLocation(villaFilterValues.location)
                .then(
                    res => setData(res),
                    err => console.log(err)
                )
        }

    }, [villaFilterValues.location])

    function filterDataWithDate(products) {
        let filteredData = products
        if (villaFilterValues.checkin !== null) {
            filteredData = products.filter(product => product.days.includes(format(villaFilterValues.checkin, "dd/MM/yyyy")))
        }
        if (villaFilterValues.checkout !== null) {
            filteredData = filteredData.filter(product => product.days.includes(format(villaFilterValues.checkout, "dd/MM/yyyy")))
        }
        return filteredData
    }

    return (
        <div className='villas-container'>
            <div className="villas-banner" >
                <img src="https://cdn10.agoda.net/images/accommodation/backdrop/private-villas.jpg" alt="" />
                <div className="villas-title">For the best holiday</div>
            </div>
            <div className="villas-content">
                <div className="villas-content-detail">
                    {filterDataWithDate(data).length === 0
                        ? <div>hello</div>
                        : filterDataWithDate(data)?.map(product =>
                            < Card banner={banner} key={product.id} id={product.id} villaPhoto={product.image} villaName={product.name} villaLocation={product.location} villaStatus={product.status} villaDescription={[product.description]} villaCost={product.costs} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Villas