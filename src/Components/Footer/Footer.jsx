import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'

import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import FB from '@iconscout/react-unicons/icons/uil-facebook'
import GitHub from '@iconscout/react-unicons/icons/uil-github'

const Footer = () => {
  return (
    <div className="footer">
        <img src={Wave} style={{width:'100%'}} alt="" />
        <div className="f-content">
            <span>dulanjalisenarathna93@gmail.com</span>
            <div className="f-icons">
                <Insta color='white' size='3rem'/>
                <FB color='white' size='3rem'/>
                <GitHub color='white' size='3rem'/>
            </div>
        </div>
    </div>
  )
}

export default Footer