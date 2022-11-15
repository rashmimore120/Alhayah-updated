import React from 'react'
import "../../styles/consulting.css"
import TextImage from './TextImage'
import cImg01 from "../../images/consultancy.png"
import {motion} from "framer-motion"

const Consulting = () => {
  return (
    <section id="consultancy">
    <TextImage text='SERVICES ' title="CONSULTANCY"/>
      <div className='container'>
          <div className='consult_wrapper'>
              <div className='consult_content'>
                  
              <h2>
            CONSUL<span className='highlight'>TANCY</span>
            </h2>
                  <p className='description consult_content-desc'>
                  <span className='hcolor'>AL HAYAH </span>
                  CONSULTANCY IS A MODERN, INDEPENDENT MANAGEMENT CONSULTING BOUTIQUE. WE ARE SPECIALISED IN STRATAGY AND 
                  RISK ASSESSMENT WITH A FOCUS ON ECONOMIC, SOCIETAL AND ENVIRONMENTAL SUSTAINABILITY
                  </p>
       
              </div>

              <div className='consult_img'>
                <motion.img whileHover={{scale: 0.9}} src={cImg01} alt="" />
            </div>
              
          </div>
      </div>
      
    </section>
  )
}

export default Consulting