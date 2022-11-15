import React from 'react'
import '../../styles/cosmetic.css'
import TextImage from './TextImage'
import cImg01 from "../../images/cosmetic.png"
import {motion} from "framer-motion"

const Cosmetic = () => {
  return (
    <section id="cosmetic">
    <TextImage text='SERVICES ' title="COSMETIC"/>
      <div className='container'>
          <div className='cosmetic_wrapper'>
              <div className='cosmetic_content'>
                  
              <h2>
            COSMAICS<span className='highlight'> BEAUTY PRODUCTS</span>
            </h2>
                  <p className='description cosmetic_content-desc'>
                  <span className='hcolor'>AL HAYAH </span>
                  your number one source for all essential things. We're dedicated to providing 
                  you the very best of products, with an emphasis on the best quality of our 
                  products to make our customers happy.<br/>
                  Founded in 2014, AL HAYAH has come a long way from its beginnings. When we first
                  started out, our passion for high quality, innovative and comfortable products 
                  drove us to start our own business. AL HAYAH can offer you the world's most 
                  advanced quality products. We now serve customers all over the world, and are
                  thrilled that we're able to turn our passion into our own website. <br/>
                  Our success factor is excellent customer care and product quality. We give our 
                  complete attention and focus to all customers and investors keeping their 
                  aspirations ahead of all to form long-term relationships. We hope enjoy our 
                  products as much as we enjoy offering them to you. If you have any questions or 
                  comments, please don't hesitate to contact us. Email info@alhayahuae.com
                  </p>
   
              </div>

              <div className='cosmetic_img'>
              <motion.img whileHover={{scale: 0.9}} src={cImg01} alt="" />
            </div>

          </div>
      </div>
      
    </section>
  )
}

export default Cosmetic