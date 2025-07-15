import React from 'react'

import './Footer.css'

import log from '../assets/logo.png'

import location from '../assets/location.png'

import phone from '../assets/phone.png'

import clock from '../assets/clock.png'

import mail from '../assets/insta.png'

const Footer = () => {

  return (

    <div className='footer'>

      <div className="footerfull">



        <div className="footerimg">

          <img className='foot' src={log} alt="" />







        </div>

        <div className="footermail">

          <p><img className='img3' src={location} alt="" />Street name 123 - New York</p>

          <p><img className='img3' src={phone} alt="" />(90) 1234 -5678</p>

          <p><img className='img3' src={clock} alt="" /> Mon-Sat: 9am-5pm</p>

          <img className='img4' src={mail} alt="" />



        </div>



      </div>

      <div className="copy">

        <p>Copyright 2020 / Designed by   <span>Ingrid Kuhn</span></p>

      </div>



    </div>

  )

}



export default Footer