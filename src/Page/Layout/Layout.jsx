import React from 'react'
//Components
import Header from "../../Component/Header/Header"
import Footer from "../../Component/Footer/Footer"
//Pages
//Routers
import { Outlet } from 'react-router-dom'
//Reduxs
//Icons
//Styles

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout