import React from 'react'
import './Sidebar.css'
import logo from '../assets/logo.png'
import loc from '../assets/location.png'
import phone from '../assets/phone.png'
import clock from '../assets/clock.png' 
import insta from '../assets/insta.png'
const Sidebar = () => {
    return (
        <div>
            <div className="side">
                <div className="side_header">
                    <img src={logo} alt="" />
                </div>
                <a href="">Home</a>
                <a href="">Our Services</a>
                <a href="">About Us</a>
                <a href="">Gallery</a>
                <a href="">Menu</a>
                <a href="">Contact</a>
                <a href="">Pages</a>
                <div className="sidebar_bottom">
                    <p><img className='same' src={loc} alt="" />Street name 123 - New York</p>
                    <p><img className='same' src={phone} alt="" />(90) 1234 -5678</p>
                    <p><img className='same' src={clock} alt="" />Mon-Sat: 9am-5pm</p>
                    <img className='insta1' src={insta} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Sidebar