import React from 'react'

export default function NavBar() {
  return (
    <div className='navBar'>
        <div className="logo">
            <img src="./logo/logo-SuperCars.png" alt="SuperCars" width='170' height='60'/>
        </div>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/gallery">Gallery</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </nav>
    </div>
  )
}
