import React from 'react'
import './Services.css'
import HeartImoji from "../../img/heartemoji.png"
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import Resume from './resume.pdf'

const Services = () => {
  return (
    <div className="services">
        {/*left side*/}
        <div className="awesome">
            <span>My Awesome</span>
            <span>Services</span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit <br /> Voluptatum, sed expedita? Nihil nemo.</span>
            <a href={Resume} download><button className='button s-button'>Download CV</button></a>
            
            <div className='blur s-blur1' style={{background: "#ABF1FF94"}}></div>
        </div>
        {/*right side*/}
        <div className="cards">
              <div style={{left:'14rem'}}>
                <Card
                emoji = {HeartImoji}
                heading = {'Design'}
                detail = {"Figma, Sketch, Photoshop, Adobe, Adobe XD"}
                />
              </div>

              {/*second card */}
              <div style={{top: "12rem",left:'-4rem'}}>
                <Card
                emoji = {Glasses}
                heading = {'Developer'}
                detail = {"HTML,CSS, JavaScript, React"}
                />
              </div>

               {/*3rd card */}
               <div style={{top: "19rem",left:'12rem'}}>
                <Card
                emoji = {Humble}
                heading = {'UI/UX'}
                detail = {"cached modules 1.41 MiB (javascript) 250 KiB (asset) [cached] 126 modules"}
                />
              </div>
              <div className='blur s-blur2' style={{background:"var(--purple)"}}></div>
        </div>
    </div>
  )
}

export default Services