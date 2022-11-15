import React from 'react'
import "../../styles/team.css";
import {motion} from 'framer-motion'

import team01 from '../../images/ceo.png';
import team02 from '../../images/rahmanpic.png';



const teamMembers = [
    {
        imgUrl: team01,
        name: 'Hasan Al Naqi',
        position: 'Chief Executive Officer (CEO)'
    },
    {
        imgUrl: team02,
        name: 'Md Mustafizur Rahman',
        position: 'Operations Manager'
    }
]

const Team = () => {
  return ( 
  <section className='our_team'>
    <div className='container'>
        <div className='team_content'>
            <h6 className='subtitle'>Our Team</h6>
            <h2>
                Meet with <span className='highlight'>our team</span>
            </h2>
        </div>

    <div className='team_wrapper'>
        {
            teamMembers.map((item,index)=>(
         <motion.div whileHover={{scale: 1.1}} className='team_item' key={index}>
            <div className='team_img'>
                <img src={item.imgUrl} alt='' />
            </div>
            <div className='team_details'>
                <h4>{item.name}</h4>
                <p className='description'>{item.position}</p>

                <div className='team_member-social'>
                    <span><i class="ri-linkedin-line"></i></span>
                    <span><i class="ri-twitter-line"></i></span>
                </div>
            </div>
        </motion.div>
            ))
        }
    </div>

    </div>
  </section>
  );
};

export default Team;