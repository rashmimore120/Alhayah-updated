import React from 'react'
import TextImage from '../UI/TextImage'
import '../../styles/export_import.css'
import eImg01 from "../../images/export.png"
import {motion} from 'framer-motion'

const Export_Import = () => {
  return (
    <section id="export">
    <TextImage text='SERVICES ' title="EXPORT / IMPORT"/>
      <div className='container'>
          <div className='export_wrapper'>
              <div className='export_content'>
                  
              <h2>
            EXP<span className='highlight'>ORT</span>
            </h2>
                  <p className='description export_content-desc'>
                  <span className='hcolor'>AL HAYAH </span>
                  is a Company that has been providing food, international tender, cosmetic & Beauty Products, Real Estate, Cyber Security and Digital
                  Forensic based Services to Security Forces of Globally and so on. We have been providing the necessary services and products that are key to 
                  perform data extraction from mobile, computers, vehicles, SIM cards, Mass Storage devices and so on.
                  </p>
             </div>

             <div className='export_img'>
             <motion.img whileHover={{scale: 0.9}} src={eImg01} alt="" ></motion.img>
            </div>
              
          </div>
      </div>
      
    </section>
  )
}

export default Export_Import