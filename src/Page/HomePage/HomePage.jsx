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
import { setVillaData } from '../../Feature/villaDataSlice'
//Icons
//Styles
import '../../Page/HomePage/homepage.css'

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
                .then(res => dispacth(setVillaData(res)))
                .catch(dispacth(setVillaData([])))
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
        <>
            <div>
                <Banner />
                <Service />
                <div ref={ref} className="homepage">
                    {getVillas.length === 0
                        ? <div>hata</div>
                        : getVillas?.map((item, index) => (<Card banner={banner} key={index} id={item.id} villaPhoto={item.image} villaName={item.name} villaLocation={item.location} villaStatus={item.status} villaDescription={[item.description]} villaCost={item.costs} />)
                        )}
                </div>
            </div>
            <div />
        </>
    )
}

export default HomePage