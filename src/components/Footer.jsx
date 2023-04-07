import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
        <div className="background">
            <img src="./img/background.jpg" alt="" />
        </div>
        <ul>
            <li><Link to={"/"}><img src="./logo/contact.png" alt="" width='50' height='50'/></Link></li>
            <li><Link to={"/"}><img src="./logo/facebook.png" alt="" width='50' height='50'/></Link></li>
            <li><Link to={"/"}><img src="./logo/twitter.png" alt="" width='50' height='50'/></Link></li>
            <li><Link to={"/"}><img src="./logo/pinterest.png" alt="" width='50' height='50'/></Link></li>
            <li><Link to={"/"}><img src="./logo/linkedin.png" alt="" width='50' height='50'/></Link></li>
        </ul> 
    </footer>
  )
}
