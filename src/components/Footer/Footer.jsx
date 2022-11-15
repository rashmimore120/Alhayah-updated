import React from 'react';
import './footer.css';
import Logo from '../../images/logo1.png'

const quickLinks01 = [
    {
        path: '/tender',
        display: 'International Tender'
    },
    {
        path: '/investment',
        display: 'Investment'
    },
    {
        path: '/export',
        display: 'Export / Import'
    },
    {
        path: '/cosmetic',
        display: 'Cosmetic'
    },
    {
        path: '/food_stuff',
        display: 'Food Stuff'
    },
    {
        path: '/consultancy',
        display: 'Consultancy'
    },
]

const quickLinks02 = [
    {
        path: '/projects',
        display: 'Supermarket Ras Al Khaima'
    },
    {
        path: '/projects',
        display: 'Real Estate Project'
    },
    {
        path: '/projects',
        display: 'International Tender'
    },
]

const quickLinks03 = [
    {
        icon: 'ri-building-2-fill',
        title: 'Address :',
        des: "Alqasidat, Behind Khuzam Street, Ras Al Khaima"
    },
    {
        icon: 'ri-phone-fill',
        title: 'Mobile No :',
        des: "+971 50 570 8777"
    },
    {
        icon: 'ri-mail-fill',
        title: 'Contact at :',
        des:"info@alhayahuae.com, h.naqi72@gmail.com"
    },
    
]

const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <footer className='footer'>
    <div className='container'>
        <div className='footer_wrapper'>
            <div className='footer_logo'>
                {/* <h2>Digency</h2> */}
                <img src={Logo} alt='' />
                <p className='description'>Grow with us</p>

                <p className='small_text description'>
                    AL HAYAH UAE based Company, is a leading provider of food, International tender, Cosmetic & Beauty Products, Real Estate Etc across the 
                    Middle East.
                    Founded in 2014, we provide end-to-end Solutions to our customers from food, International tender, Cosmetic & Beauty Products, Real Estate Etc.
                </p>
            </div>


            <div className='footer_quick-links'>
                <h3 className='quick_links-title'>SERVICES</h3>
                <ul className='quick_links'>
                {
                    quickLinks01.map((item,index)=>(
                        <li className='quick_link-item' key={index}>
                            <a href={item.path}>{item.display}</a>
                        </li>
                    ))
                }
                </ul>
            </div>



            <div className='footer_quick-links'>
                <h3 className='quick_links-title'>PROJECTS</h3>
                <ul className='quick_links'>
                {
                    quickLinks02.map((item,index)=>(
                        <li className='quick_link-item' key={index}>
                            <a href={item.path}>{item.display}</a>
                        </li>
                    ))
                }
                </ul>
            </div>

            
            <div className='footer_quick-links'>
                <h3 className='quick_links-title'>CONTACT DETAILS</h3>
                <ul className='quick_links'>
                {
                    quickLinks03.map((item,index)=>(
                        <li className='quick_link-item' key={index}>
                           <span className='f03_icon'><i class={item.icon}></i></span> 
                            <h4 className='f03_title'>{item.title}</h4>
                            <p className='f03_desc'>{item.des}</p>
                        </li>
                    ))
                }
                </ul>
            </div> 
        </div>

        <p className='copyright'>&copy; {year} Al Hayah , All Rights Reserved. </p>
    </div>

    </footer>
  );
};

export default Footer;