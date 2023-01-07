import React from 'react'
import Banner from '../../Component/Banner/Banner'
import Card from '../../Component/Card/Card'
import Service from '../../Component/Service/Service'
import '../../Page/HomePage/homepage.css'
import product from "../../product.json"
import banner from "../../banne.json"



const HomePage = () => {


    return (
        <div>
            <Banner />
            <Service />
            <div className="homepage">
                {product.map(item => (<Card banner={banner} key={item.id} id={item.id} villaPhoto={item.image} villaName={item.name} villaLocation={item.location} villaStatus={item.status} villaDescription={[item.description]} villaCost={item.costs} />)
                )}
            </div>

        </div>
    )
}

export default HomePage