import React from 'react'

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
                    <li><a href="/super-car">Home</a></li>
                    <li><a href="/super-car/gallery">Gallery</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </nav>
        </div>
    )
}
