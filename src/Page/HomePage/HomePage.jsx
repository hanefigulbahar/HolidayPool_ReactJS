import React, { useEffect, useState } from 'react'
import Banner from '../../Component/Banner/Banner'
import Card from '../../Component/Card/Card'
import Service from '../../Component/Service/Service'
import '../../Page/HomePage/homepage.css'
import banner from "../../banne.json"
import { VillaService } from "../../Services"

const HomePage = () => {
    const [villaAllData, setVillaAllData] = useState()

    useEffect(() => {
        VillaService.getAllVillas()
            .then(res => setVillaAllData(res))
            .catch(setVillaAllData(null))
    }, [])

    return (
        <div>
            <Banner />
            <Service />
            <div className="homepage">
                {villaAllData === null
                    ? <div>hata</div>
                    : villaAllData?.map(item => (<Card banner={banner} key={item.id} id={item.id} villaPhoto={item.image} villaName={item.name} villaLocation={item.location} villaStatus={item.status} villaDescription={[item.description]} villaCost={item.costs} />)
                    )}
            </div>
        </div>
    )
}

export default HomePage