import React from 'react'
import './Navbar.css'
import image from '../assets/envato.png'

const Navbar = () => {
  return (
    <div>
        <div className="preview_header">
           <div className="preview_left">
            <img src={image} alt="" />
           </div>
           <div className="preview_right">
              <button>Buy now</button>
           </div>
        </div>
    </div>
  )
}

export default Navbar