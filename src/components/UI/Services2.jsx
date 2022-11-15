import React from 'react';
import "../../styles/services2.css";
import {motion} from 'framer-motion';

const serviceData = [
    {
        icon: 'ri-eye-2-line',
        title: 'Cosmetic',
        desc:  "AL HAYAH your number one source for all essential things. We're dedicated to providing you the very best of...",
        linkUrl: '/cosmetic'  
    },
    {
        icon: 'ri-shopping-cart-fill',
        title: 'Food Stuff',
        desc:  'As Caregivers, our sole purpose is enhancing the quality of life and contributing to a healthier future...',
        linkUrl: '/food_stuff'
    },
    {
        icon: 'ri-user-2-fill',
        title: 'Consultancy',
        desc:  'AL HAYAH Consultancy is a modern, Independent management consulting Boutique. We are Specialised...',
        linkUrl: '/consultancy'
    },
    
]

const Services2 = () => {
  return (
    <section id="service2">
        <div className='container'>
            

            <div className='service2_item-wrapper'>
                {
                    serviceData.map((item, index)=>(
                <motion.div whileHover={{scale: 1.1}} className='services2_item' key={index}>
                    <span className='service2_icon'>
                        <i class={item.icon}></i>
                    </span>
                    <h3 className='service2_title'>{item.title}</h3>
                    <p className='description'>
                        {item.desc}
                    </p>
                    <a href={item.linkUrl} className='learn_more'>
                    <i class="ri-arrow-right-line"></i>
                </a>
                </motion.div>
                
                    ))
                }
            </div>
        </div>
    </section>
  );
};

export default Services2;