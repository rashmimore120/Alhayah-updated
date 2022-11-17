import React from 'react'
import "../../styles/contact.css";
import Form from "../UI/Form.jsx";
import Gmap from "../UI/Gmap.jsx";
import {motion} from 'framer-motion'
import TextImage3 from './TextImage3';

const Contact = () => {
  return (
    <section className='contact'>
    <TextImage3 title="CONTACT US"/>
    <div className='contact_wrapper'>
        <div className='contact_content'>
            <h6 className='subtitle'>Get In Touch</h6>
            {/* <h2>Explore the <span className='highlight'>hidden</span>ideas and subscribe!</h2> */}
        </div>
      <div className='contact_container'>
        
      
      <div className='main'>
        <div className='detail_item_wrapper01'>
      

      <div className='contact_info-container d-flex align-items-center gap-5'>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='single_info-box w-50'>
            <h6>Address</h6>
            <p>Khuzam Street</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='single_info-box w-50'>
            <h6>Phone</h6>
            <p>+971 00 000 0000</p>
          </motion.div>
      </div>
        </div>

          
        <div className='detail_item_wrapper02'>
        <div className='contact_info-container d-flex align-items-center gap-5'>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='single_info-box w-50'>
            <h6>Email</h6>
            <p>info@.com
               h@gmail.com
            </p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='single_info-box w-50'>
            <h6>Location</h6>
            <p>United Arab Emirates</p>
          </motion.div>
          
      </div>
      {/* <div className='contact_img01'>
                <img src={CEO} alt="" />
                
            </div> */}
      </div>
      </div>
        
        <div className='contact_form'>
        <Form />
        </div>
       
        
       
    </div>
      </div>


    <Gmap/>        
    </section>
    
  )
}

export default Contact
