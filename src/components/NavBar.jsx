import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {

    function openMenu() {
        const menuList = document.querySelector('#menuList')

        menuList.className.includes('show') ?
            menuList.classList.remove('show')
            : menuList.classList.add('show')
    }

    return (
        <div className='navBar'>
            <div className="logo">
                <img src="./logo/logo-SuperCars.png" alt="SuperCars" width='170' height='60' />
            </div>
            <div className="menu-btn" onClick={openMenu}>
                <span className='s1'></span>
                <span className='s2'></span>
                <span className='s3'></span>
            </div>
            <nav id='menuList' onClick={openMenu}>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/gallery"}>Gallery</Link></li>
                    <li><Link to={"/services"}>Services</Link></li>
                    <li><Link to={"/contact"}>Contact</Link></li>
                    <li><Link to={"/about"}>About</Link></li>
                </ul>
            </nav>
        </div>
    )
}
