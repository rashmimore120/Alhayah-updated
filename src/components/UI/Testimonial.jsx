import React from 'react';
import '../../styles/testimonial.css';

import Slider from "react-slick";
import ava01 from "../../images/ceo2.jpg";
import ava02 from '../../images/rahmanpic.jpg';


const Testimonial = () => {

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
    <section>
        <div className='container'>
            <div className='slider_content_top'>
                <h6 className='subtitle'>Testimonial</h6>
                <h2>
                    Trusted by more than {" "}
                    <span className='highlight'>5,000 customers</span>
                </h2>
            </div>
            <div className='slider_wrapper'>
            <Slider {...settings}>
        <div className='slider_item'>
            <p className='description'>In a world that creates new tools for Communication every day, opportunities and challenges multiply.
            The "International Tenders, Foodstuff, Real estate and Beauty Products" industry is emerging to open horizons for us to achieve our position in that world. </p>

        <div className='customer_details'>
            <div className='customer_img'>
                <img src={ava01} alt="" />
            </div>

            <div>
                <h5 className='customer_name'>Hasan Al Naqi</h5>
                <p className='description'>CEO</p>
               
               
            </div>
        </div>
     </div>


        <div className='slider_item'>
            <p className='description'>All are factors that qualify the United Arab Emirates to be a leading global destination by developing the "International Tenders,
            Foodstuff, Real estate and Beauty Products" sector, organizing it, enhancing its economic role, and overcoming obstacles to its growth with the best 
            International practices.</p>

        <div className='customer_details'>
            <div className='customer_img'>
                <img src={ava02} alt="" />
            </div>

            <div>
                <h5 className='customer_name'>Md Mustafizur Rahman</h5>
                <p className='description'>Operations Manager</p>
               
            </div>
        </div>
        </div>


        
        </Slider>
            </div>
        </div>
    </section>
    
  )
};

export default Testimonial;