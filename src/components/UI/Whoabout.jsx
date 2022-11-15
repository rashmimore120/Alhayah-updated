import React from 'react'
import "../../styles/whoabout.css";
import offliceImg from '../../images/office2.png'
import TextImage from './TextImage';
import Services from './Services';

const Whoabout = () => {
  return (
     <section id="whoabout">
        <TextImage title='WHO WE ARE'/>
        
          <div className='container'>
              <div className='who_wrapper'>
                  <div className='who_content'>
                  <h6 className='subtitle'>Why choose us</h6>
                      
                  <h2>
                WHO<span className='highlight'> WE ARE</span>
                </h2>
                      <p className='description who_content-desc'>
                    <span className='highlight'>AL HAYAH </span>UAE based company, is a leading provider of food, international tender, cosmetic & Beauty Products, Real Estate Etc across the Middle East.
                      <br/><br/>Founded in 2014, we provide end-to-end solutions to our customers from food, international tender, cosmetic & Beauty Products, Real Estate Etc 
                      to branded products under the name "H S N", maintaining a focus on processing, distribution, and exports across MENA and key global markets.
                      <br/><br/>AL HAYAH maintains a fast-growing and well-established business, with an experienced leadership team, excellent distribution network,
                      and long-term relationships with suppliers and customers.
                      <br/><br/>Within a short span of time the company has emerged as one of the leading players in the trading business - backed by efficient 
                      planning, a dedicated team of sales & marketing professionals, strategically located warehousing facilities, a robust sales & distribution 
                      network and a fully computerized inventory management system. AL HAYAH, moving ahead with a vision to march over competitors, continuously adding
                      value to the brands of it's trading partners - aided by marketing research findings and recommendations to accurately identify the critical
                      determinants in competitive trade, has helped some of the leading brands to reach truly great sales heights.
                      </p>
      
                       
                  </div>
                  <div className='who_img'>
                      <img src={offliceImg} alt="" />
                  </div>
              </div>
          </div>
        <Services/>  
        </section>
          
        )
}

export default Whoabout








