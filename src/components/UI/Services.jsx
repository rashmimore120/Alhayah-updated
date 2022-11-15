import React from 'react';
import "../../styles/services.css";
import Services2 from './Services2';
import {motion} from 'framer-motion';

const serviceData = [
    {
        icon: 'ri-global-line',
        title: 'International Tender',
        desc:  'AL HAYAH is one of the largest sources for Tenders and Business Intelligence. Aimed at making...',
        linkUrl: '/tender'
    },
    {
        icon: 'ri-hand-coin-fill',
        title: 'Investment',
        desc:  'Reliably Providing Hundreds of Food Products, International Tender, Real Estate to Millions of Consumers...',
        linkUrl: '/investment'
    },
    {
        icon: 'ri-arrow-up-circle-line',
        title: 'Export',
        desc:  'AL HAYAH is a company that has been providing food, international tender, cosmetic & Beauty Products a wide... ',
        linkUrl: '/export'
    },
    
    
]

const Services = () => {
  return (
    <section id="service">

        <div className='container'>
            <div className='services_top-content'>
                {/* <h6 className='subtitle'>Our Services</h6> */}
                <h2>Save time managing your business with</h2>
                <h2 className='highlight'> our best services</h2>
            </div>

            <div className='service_item-wrapper'>
                {
                    serviceData.map((item, index)=>(
                <motion.div whileHover={{scale: 1.1}} className='services_item' key={index}>
                    <span className='service_icon'>
                        <i class={item.icon}></i>
                    </span>
                    <h3 className='service_title'>{item.title}</h3>
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
        <Services2/>
    </section>
  );
};

export default Services;