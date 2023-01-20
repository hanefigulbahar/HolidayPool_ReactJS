import React from 'react'
//Components
//Pages
//Routers
//Reduxs
//Icons
import logo from "../../../src/logos.png"
//Styles
import '.././Header/header.css'

const Header = () => {
    return (
        <>
            <div class="top-nav">
                <a href='/'>
                    <img className='navbar-logo' src={logo} alt="" />
                    <div className='navbar-name'>HolidayPool</div>
                </a>
                <input id="menu-toggle" type="checkbox" />
                <label class='menu-button-container' for="menu-toggle">
                    <div class='menu-button'></div>
                </label>
                <ul class="menu">
                    <li><a href='#'>About-Us</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
            </div>
        </>
    )
}

export default Header