import React from 'react';
import '../../styles/blog.css';
import videoImg from '../../images/project03.jpg';
import articleImg from '../../images/project01.jpg';
import caseStudy from '../../images/project02.jpg';
import {motion} from 'framer-motion';


const blogData = [
    {
        imgUrl: videoImg,
        title : 'Supermarket',
        desc: 'AL HAYAH start new supermarket business....',
        linkUrl: '/projects'
    },
    {
        imgUrl: articleImg,
        title : 'International Tender',
        desc: 'We participate more international tender this year....',
        linkUrl: '/projects'
    },
    {
        imgUrl: caseStudy,
        title : 'Real Estate Project',
        desc: 'We have more real estate project under....',
        linkUrl: '/projects'
    }
]

const Blog = () => {
  return (
    <section id="blog" className='blog'>
        <div className='container'>
            <div className='blog_top-content'>
                <h6 className='subtitle'>Our projects</h6>
                <h2>
                    Let's have a look for our <span className='highlight'> Upcoming Projects </span>
                </h2>
            </div>

            <div className='blog_wrapper'>
                {blogData.map((item,index)=>(
                    <motion.div whileHover={{scale: 1.1}} className='blog_item' key={index}>
                    <h3>{item.title}</h3>
                    <div className='blog_img'>
                        <img src={item.imgUrl} alt='' />
                    </div>
                    <p className='description blog_desc'>
                        {item.desc}
                    </p>
                <div>
                <a href={item.linkUrl} className='learn_more'>
                    <i class="ri-arrow-right-line"></i>
                </a>
                </div>
                </motion.div>
                    ))
                }
            </div>
            </div>
            
              
    </section>
    
  );
};

export default Blog;