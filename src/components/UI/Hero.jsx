import React from 'react';
import '../../styles/hero.css';
import heroDarkImg from '../../images/hero-img.png';
import lightImg from '../../images/light-hero-bg.png';
import Home01 from '../../images/home1.png';
import Home02 from '../../images/home5.png';
import Home03 from '../../images/home3.png';
import Blog from './Blog';
//import Newsletter from './Newsletter';
import Testimonial from './Testimonial'
//import About from '../UI/About'
import Services from './Services';
import {Link} from "react-router-dom"
import TextImage1 from './TextImage1';
import Counter from './Counter';
import Slider from 'react-slick';
import Checkout from '../Payment/Checkout';


const Hero = ({theme}) => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay:true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
}


  return (
    <section className="hero_section" id="home">
        <Slider {...settings}>
        <div className='container'>
          <div className='hero_wrapper'>
                <div className='hero_content'>
                <div>
                    <h2>AL HAYAH</h2>
                    <h2>PROCUREMENT</h2>
                    {/* <h2 className='highlight'>CONSULTING</h2> */}
                    <h2 className='heading_color'>CONSULTING</h2>
                </div>
                 <p className='description'>AL HAYAH UAE based Company, is a leading provider of food, International tender, Cosmetic & Beauty Products,
                 Real Estate Etc across the Middle East.</p>

                 <div className='hero_btns'>
                    <button className='primary_btn'>Get Started Now</button>
                    <button className='secondary_btn'><Link to="/who_about"> Discovery More</Link></button>
                 </div>
                 </div>

                
                <div className='hero_img'>
                {/* <img src={ theme==='light-theme' ? heroDarkImg : lightImg} alt="hero-img"/> */}
                <img src={Home01} alt="hero-img"/>
                </div>
              </div>
        </div>



        <div className='container'>
          <div className='hero_wrapper'>
                <div className='hero_content'>
                <div>
                    <h2>AL HAYAH</h2>
                    <h2>PROCUREMENT</h2>
                    <h2 className='heading_color'>CONSULTING</h2>
                </div>
                 <p className='description'>AL HAYAH UAE based Company, is a leading provider of food, International tender, Cosmetic & Beauty Products,
                 Real Estate Etc across the Middle East.</p>

                 <div className='hero_btns'>
                    <button className='primary_btn'>Get Started Now</button>
                    <button className='secondary_btn'><Link to="/who_about"> Discovery More</Link></button>
                 </div>
                 </div>

                
                <div className='hero_img'>
                <img src={Home02} alt="hero-img"/>
                </div>
              </div>
        </div>



        <div className='container'>
          <div className='hero_wrapper'>
                <div className='hero_content'>
                <div>
                    <h2>AL HAYAH</h2>
                    <h2>PROCUREMENT</h2>
                    <h2 className='heading_color'>CONSULTING</h2>
                </div>
                 <p className='description'>AL HAYAH UAE based Company, is a leading provider of food, International tender, Cosmetic & Beauty Products,
                 Real Estate Etc across the Middle East.</p>

                 <div className='hero_btns'>
                    <button className='primary_btn'>Get Started Now</button>
                    <button className='secondary_btn'><Link to="/who_about"> Discovery More</Link></button>
                 </div>
                 </div>

                
                <div className='hero_img'>
                <img src={Home03} alt="hero-img"/>
                </div>
              </div>
        </div>
        </Slider>       
        
        <div id="line">
        {/* <About/> */}
        </div>
        <TextImage1/>
        <Services/>
        {/* <hr className='hbreak'></hr> */}
        <Blog/>
        {/* <hr className='hbreak'></hr> */}
        <Counter/>
        <Testimonial/>
        
        <Checkout/>
        
         
    </section>
    
  );
};

export default Hero;