import React from 'react'
import TextImage from './TextImage'
import "../../styles/investment.css";
import Inv_img01 from "../../images/investment02.jpg"
import {motion} from "framer-motion"

const Investment = () => {
  return (
    <section id="investment">
    <TextImage text='SERVICES /' title="INVESTMENT"/>
      <div className='container'>
          <div className='investment_wrapper'>
              <div className='investment_content'>
                  
              <h2>
            INVEST<span className='highlight'>MENT</span>
            </h2>
                  <p className='description investment_content-desc'>
                  <span className='hcolor'>Reliably Providing Hundreds of Food Products, International Tender, Real Estate to Millions of
                  Consumers</span><br/>
                  AL HAYAH is among the largest companies. It imports, markets, distributes and produces a wide variety
                  of foodstuff items ( including names such as H S N. ) Founded in 2014, it provides a wide variety of 
                  high-quality, nutritious food to millions of kitchens in United Arab Emirates by operating the 
                  largest stores of food in UAE.<br/>
                  The Company operates 3 branches and a Packeging facility and imports over 250,000 MT of product 
                  annually serving more than 18,000 customer outlets including retailers, wholesale distributors and 
                  food services companies.
                  </p>
  
                   
              </div>

              <div className='investment_img'>
              <motion.img whileHover={{scale: 0.9}} src={Inv_img01} alt="" />
              </div>
              
          </div>
      </div>
      
    </section>
  )
}

export default Investment