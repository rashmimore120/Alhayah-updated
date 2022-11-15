import React from 'react'
import TextImage from './TextImage'
import "../../styles/tender.css";
import tImg01 from "../../images/Tender.png";
import {motion} from "framer-motion"

const Tender = () => {
  return (
    <section id="tender">
    <TextImage text='SERVICES /' title="INTERNATIONAL TENDER"/>
      <div className='container'>
          <div className='tender_wrapper'>
              <div className='tender_content'>
                  
              <h2>
            INTERNATIONAL<span className='highlight'> TENDER</span>
            </h2>
                  <p className='description tender_content-desc'>
                  AL HAYAH is one of the largest sources for Tenders and Business Intelligence. Aimed at making information easier
                  to access and assisting businesses of all sizes, AL HAYAH was established in 2014. More than 25000 notices are
                  uploaded daily by researching through thousands of websites and newspapers. The information gathered is cateloged
                  by a team of researchers who classify it by date, country, CPV, sectors and keywords, presenting businesses 
                  with refined actionable data. With an elaborate list of services evolved during a long period of time and prolonged
                  experience, AL HAYAH provides solutions to the obstacles a company might face in finding new business opportunities.
                  </p>
  
              </div>


            <div className='tender_img'>
            <motion.img whileHover={{scale: 0.9}} src={tImg01} alt="" />
            </div>
              
          </div>
      </div>
      
    </section>
  )
}

export default Tender