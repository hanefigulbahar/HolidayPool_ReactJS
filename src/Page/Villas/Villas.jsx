import React, { useEffect } from 'react'
//Components
import Card from '../../Component/Card/Card';
import banner from "../../banne.json"
import { VillaService } from "../../Services"
//Pages
//Routers
//Reduxs
import { useDispatch, useSelector } from 'react-redux';
import { setVillaData } from '../../Feature/villaDataSlice';
//Icons
//Styles
import "../Villas/villas.css"

const Villas = () => {
    const dispatch = useDispatch()
    const villaData = useSelector(state => state.villaDataSlice.villaList)
    const villaLocation = useSelector(state => state.selectLocationSlice.value)
    const villaCheckIn = useSelector(state => state.datePickerSlice.checkIn)
    const villaCheckOut = useSelector(state => state.datePickerSlice.checkOut)
    useEffect(() => {
        if (villaLocation !== "") {
            VillaService.getVillaByLocation(villaLocation)
                .then(
                    res => dispatch(setVillaData(res)),
                    err => console.log(err)
                )
            console.log("giriyor")
        }
    }, [dispatch, villaLocation])

    function filterDataWithDate(products) {
        let filteredData = products
        if (villaCheckIn !== null) {
            filteredData = products.filter(product => product.days.includes((villaCheckIn)))
        }
        if (villaCheckOut !== null) {
            filteredData = filteredData.filter(product => product.days.includes(villaCheckOut))
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
                    {filterDataWithDate(villaData).length === 0
                        ? <div>hello</div>
                        : filterDataWithDate(villaData)?.map(product =>
                            < Card banner={banner} key={product.id} id={product.id} villaPhoto={product.image} villaName={product.name} villaLocation={product.location} villaStatus={product.status} villaDescription={[product.description]} villaCost={product.costs} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Villas