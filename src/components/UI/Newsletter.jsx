import React from 'react';
import "../../styles/newsletter.css";

const Newsletter = () => {
  return (
    <section className='newsletter'>
    <div className='container'>
        <div className='newsletter_wrapper'>
        <div className='newsletter_content'>
            <h6 className='subtitle'>Connect with us</h6>
            <h2>Let's <span className='highlight'>Work</span> Together!</h2>
        </div>


        <div className='newsletter_form'>
            <input type="email" placeholder='Email' />
            <button className='secondary_btn subscribe_btn'>Contact Now</button>
        </div>
        </div>
        </div>    
    </section>
  )
}

export default Newsletter