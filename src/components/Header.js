import React from 'react'
import './Header.css'
import TeslaLogo from '../assests/teslaLogoSmall.svg'

// get our React icon imports
import { FaAlignJustify } from "react-icons/fa";

const Header = () => {
    return (
        <div className='header'>
            <div className="header__logo">
                <img src={TeslaLogo} alt="TeslaLogo"/>
            </div>

            <div className="header__center">
                <p>Model S</p>
                <p>Model 3</p>
                <p>Model X</p>
                <p>Model Y</p>
                <p>Solar Roof</p>
                <p>Solar Panels</p>
            </div>

            <div className="header__right">
                <p>Shop</p>
                <p>Tesla Account</p>
                <a href="#"><FaAlignJustify /></a>
                

            </div>




        </div>

    )
}

export default Header
