import React, { useEffect, useRef, useState } from 'react'
//Components
import Banner from '../../Component/Banner/Banner'
import Card from '../../Component/Card/Card'
import Service from '../../Component/Service/Service'
import banner from "../../banne.json"
import { VillaService } from "../../Services"
//Pages
//Routers
//Reduxs
import { useDispatch, useSelector } from 'react-redux'
import { addVillaData } from '../../Feature/villaDataSlice'
//Icons
//Styles
import '../../Page/HomePage/homepage.css'
import Error from '../../Component/Error/Error'

const HomePage = () => {
    const [page, setPage] = useState(1)
    const [isPage, setIsPage] = useState(true)
    const ref = useRef(null)
    const dispacth = useDispatch()
    const getVillas = useSelector(state => state.villaDataSlice.villaList)

    const data = () => {
        if (isPage === true) {
            setIsPage(false)
            VillaService.getDataForPage(page)
                .then(res => dispacth(addVillaData(res)))
                .catch(dispacth(addVillaData([])))
            setPage(page + 1)
        }
    }
    window.onscroll = function () {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            setIsPage(true)
        }
    };
    useEffect(() => {
        data()
    }, [isPage])

    return (
        <div>
            <Banner />
            <Service />
            {getVillas.length === 0
                ? <Error message={"We can not reach to villa list"} />
                : <div ref={ref} className="homepage">{getVillas?.map((item, index) => (<Card banner={banner} key={index} id={item.id} villaPhoto={item.image} villaName={item.name} villaLocation={item.location} villaStatus={item.status} villaDescription={[item.description]} villaCost={item.costs} />))}</div>}
        </div>
    )
}

export default HomePage