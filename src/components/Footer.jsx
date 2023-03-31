import React from 'react'

export default function Footer() {
  return (
    <footer>
        <div className="background">
            <img src="./img/background.jpg" alt="" />
        </div>
        <ul>
            <li><a href="/"><img src="./logo/contact.png" alt="" width='50' height='50'/></a></li>
            <li><a href="/"><img src="./logo/facebook.png" alt="" width='50' height='50'/></a></li>
            <li><a href="/"><img src="./logo/twitter.png" alt="" width='50' height='50'/></a></li>
            <li><a href="/"><img src="./logo/pinterest.png" alt="" width='50' height='50'/></a></li>
            <li><a href="/"><img src="./logo/linkedin.png" alt="" width='50' height='50'/></a></li>
        </ul> 
    </footer>
  )
}
