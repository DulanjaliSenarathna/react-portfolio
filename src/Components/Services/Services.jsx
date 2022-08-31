import React from 'react'
import './Services.css'
import HeartImoji from "../../img/heartemoji.png"
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import Resume from './resume.pdf'
import {themeContext} from '../../Context'
import {useContext} from "react"
import {motion} from 'framer-motion'

const Services = () => {

  const transition = {duration : 1, type: 'spring'}

  const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className="services" id='Services'>
        {/*left side*/}
        <div className="awesome">
            <span style={{color: darkMode? 'white':''}}>My Awesome</span>
            <span>Services</span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit <br /> Voluptatum, sed expedita? Nihil nemo.</span>
            <a href={Resume} download><button className='button s-button'>Download CV</button></a>
            
            <div className='blur s-blur1' style={{background: "#ABF1FF94"}}></div>
        </div>
        {/*right side*/}
        <div className="cards">
              <motion.div
               whileInView={{left: '14rem'}}
              initial={{left: '25rem'}}
              transition={{transition}}

              style={{left:'14rem'}}>
                <Card
                emoji = {HeartImoji}
                heading = {'Design'}
                detail = {"Figma, Sketch, Photoshop, Adobe, Adobe XD"}
                />
              </motion.div>

              {/*second card */}
              <motion.div 
              initial={{left: '-11rem', top: '12rem'}}
              whileInView={{left: '-4rem'}} 
              transition={{transition}}

              style={{top: "12rem",left:'-4rem'}}>
                <Card
                emoji = {Glasses}
                heading = {'Developer'}
                detail = {"HTML,CSS, JavaScript, React"}
                />
              </motion.div>

               {/*3rd card */}
               <motion.div 
               
               initial={{top: '19rem', left: '25rem' }}
              whileInView={{left: '12rem'}} 
              transition={{transition}}
               
               style={{top: "19rem",left:'12rem'}}>
                <Card
                emoji = {Humble}
                heading = {'UI/UX'}
                detail = {"cached modules 1.41 MiB (javascript) 250 KiB (asset) [cached] 126 modules"}
                />
              </motion.div>
              <div className='blur s-blur2' style={{background:"var(--purple)"}}></div>
        </div>
    </div>
  )
}

export default Services