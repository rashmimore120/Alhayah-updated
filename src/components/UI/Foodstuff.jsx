import React from 'react'
import "../../styles/foodstuff.css"
import TextImage from './TextImage'
import fImg01 from '../../images/foodstuff.png'
import {motion} from "framer-motion"

const FoodStuff = () => {
  return (
    <section id="food_stuff">
    <TextImage text='SERVICES ' title="FOOD STUFF"/>
      <div className='container'>
          <div className='foodstuff_wrapper'>
              <div className='foodstuff_content'>
                  
              <h2>
            FOOD<span className='highlight'> STUFF</span>
            </h2>
                  <p className='description foodstuff_content-desc'>
                  As caregivers, our sole purpose is enhancing the quality of life and contributing to a healthier future. Driven
                  by our purpose, we want to help shape a better world for you and your families. We have a distinctive capacity
                  for nurturing. With our homegrown brands, we have been supporting families since 2014.<br/>
                  <span className='hcolor'> We are on our path to phasing out materials that are hard to recycle. We are constantly investing in technology
                  that helps us improve the environmental performance of our packaging. <br/>
                  AL HAYAH is no stranger at being a role model in the industry for its eco-friendly endeavors. Our planet matters
                  and we act in ways to create a more sustainable and a better future. To make a difference not only in our 
                  business but to people's lives in our communities.</span>
                  </p>
       
              </div>
              
              <div className='foodstuff_img'>
              <motion.img whileHover={{scale: 0.9}} src={fImg01} alt="" />
            </div>


          </div>
      </div>
      
    </section>
  )
}

export default FoodStuff