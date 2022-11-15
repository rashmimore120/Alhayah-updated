import React from 'react';
import "../../styles/aboutUs.css";
import CEO from '../../images/ceo.png';
import AboutTeam from '../../images/aboutTeam.png';
import Aboutus3 from '../../images/aboutus3.png'
import Aboutus4 from '../../images/aboutus4.png'
import TextImage from './TextImage';
//import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <section id="aboutus">
    <TextImage title='CEO SPEECH'/>
    <div className='container'>
        <div className='aboutus_wrapper01'>
            <div className='aboutus_content01'>
            <h6 className='subtitle'>About US</h6>
                <h2>CEO Speech</h2>
                <h2 className='highlight'>Dear Well Wisher,</h2>
                <p className='description aboutus_content-desc'>
                  2014 was a remarkable year for AL HAYAH as we transformed our operations and reported one of our most profitable years to date. Our business 
                  is thriving in an increasingly competitive environment and remains resilient against market challenges.
                <br/><br/>
                Many of these challenges are shaped by the Fourth Industrial Revolution, a result of major and accelerated advancements in technologies that have 
                changed the way that consumers, producers and service providers think, act and react. Today's consumers hold increased influence because of 
                heightened levels of awareness, sensitization and connectivity. Producers are required to constantly reinvent themselves to meet the more
                customized demands of their consumers. And the survival of service providers hinges on their ability to become faster, more efficient, and more
                reliable - all while remaining profitable.
                <br/><br/>
                We have adapted to these changes by creating a more efficient, agile, and asset-light business model through our digitization and internal restructuring
                efforts. We continue to build customer trust in our brand as we endeavor to achieve service excellence - all while finishing the year off with record
                profitability and creating more value for our shareholders.
                </p>
            </div>
            
            <div className='aboutus_img01'>
                <img src={CEO} alt="" />
                <p className='name aboutus_img-name'>HASAN AL NAQI</p>
                <p id='img-name'>CEO</p>
            </div>
      </div>

    
    
      <hr className='Linebreak'></hr>




      <div className='aboutus_wrapper02'>
      <div className='aboutus_img02'>
                <img src={AboutTeam} alt="" />
            </div>
            <div className='aboutus_content02'>
            <h2 className='highlight'>An Ambitious Plan</h2>
                <p className='description aboutus_content-desc'>
                  The business strategy behind these results centers around our efforts to fully understand the shifts in our operating environment, identify
                  key areas of improvement to reap rising opportunities, mitigate areas of weakness, and ultimately focus on initiatives that will help us
                  achieve our three key strategic objectives:
                <br/><br/>
                <span className='hcolor'>1) Protect the strength and viability of our core business, </span>
                by defending and growing global market share, improving operational efficiency, and optimizing costs.
                <br/><br/>
                <span className='hcolor'>2) Develop leading digital solutions and service offerings, </span>
                through introducing new service offerings to win new clients in new industries, as well as offering value added services to our already existing
                offerings.
                <br/><br/>
                <span className='hcolor'>3) Expand geographical reach and vertical penetration. </span>
                Although the vast majority of our growth is owed to the exponential rise in e-commerce, where we will continue to seek new customers, we will be
                identifying and targeting new industries and improving our offerings to SMEs, growing our B2B customers, and further developing our Business 
                forwarding offerings and capabilities.
                <br/><br/>
                AL HAYAH Fleet leverages the shared-economy model, enabling us to flex with peak demand with minimal cost burden and at the same time have a positive
                economic knock-on effect through economic empowerment in the countries in which the service is operational. While both services are in 
                their nascent stages, their potential to scale is empowered solutions.
                </p>
            </div>
      </div>

      <hr className='Linebreak'></hr>


      <div className='aboutus_wrapper03'>
            <div className='aboutus_content03'>
            <h2 className='highlight'>Empowering Our People</h2>
                <p className='description aboutus_content-desc'>
                  As an AL HAYAH veteran, I have never been more impressed with the caliber of talent at the company and the quality of work our people deliver.
                  With over 100 employees working in over 3 offices across more than 3 countries, we are still very much a human-run organization -and I believe
                  that despite the rise in automation, the adoption of Al and the employment of other robotic-like technologies, people remain the backbone of 
                  our industry. We want to empower our people to be thinkers, innovators and problem solvers, and this is why we have started to adopt a coaching
                  framework and various training programs to help further develop their skillsets. I want to thank AL HAYAH employees for their commitment and
                  dedication, and for being the true creators of value for this company. 
                </p>
            </div>
            
            <div className='aboutus_img03'>
                <img src={Aboutus3} alt="" />
            </div>
      </div>



      <hr className='Linebreak'></hr>


      <div className='aboutus_wrapper04'>
      <div className='aboutus_img04'>
                <img src={Aboutus4} alt="" />
            </div>
            <div className='aboutus_content04'>
            <h2 className='highlight'>Focusing on the Future</h2>
                <p className='description aboutus_content-desc'>
                  There is no denying that the tremendous changes in technology that we are witnessing have changed whom we complete with and how we differentiate
                  ourselves. Traditional logistics providers are no longer the sole threat to our business model, which means it is no longer a game of volumes and
                  pricing - it goes beyond that. It is about speed, reliability and quality.
                <br/><br/>
                
                This is why we are determined to carry on investing in upgrading our technology capabilities, and leveraging new innovations to create more 
                personalized interaction channels with our customers that deliver the transparency, visibility and flexibility they demand.
                <br/><br/>

                All of our ambitions will be supported by leaner and more agile operations, to ensure we continue to manage costs as we invest in upgrading our 
                technology capabilities, ultimately to continue delivering long-term value for our Customers.
                <br/><br/>

                Finally, I want to thank you for your continued trust and support. Together, we will continue to grow AL HAYAH brand and stature in core 
                markets and beyond.
                <br/><br/><br/><br/>  

                <span className='thanks1'>Sincerely,</span><br/>
                <span className='thanks2'>HASAN SALEH ALI NAQI ALAHMED  <br/>
                Chief Executive Officer</span>

                </p>
            </div>
      </div>
            
    </div>
    
  </section>
  )
}

export default AboutUs;