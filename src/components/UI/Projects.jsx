import React from 'react'
import "../../styles/projects.css"
import TextImage1 from './TextImage1'
import Pro01 from '../../images/project01.jpg'
import Pro02 from '../../images/project02.jpg'
import Pro03 from '../../images/project03.jpg'
import Team from '../UI/Team'


const Projects = () => {
  return (
    <section id="projects">
    <TextImage1 title='PROJECTS'/>
    
    <div className='container'>
    <div id='projects_title'>
    <h6 className='subtitle'>Our Projects</h6>
                <h2>Upcoming Projects</h2>
        <div className='projects_wrapper01'>
        
            <div className='projects_content01'>
            
                <h2 className='highlight'>SUPERMARKET RAS AL KHAIMA</h2>
                <p className='description projects_content-desc'>
                  AL HAYAH START NEW SUPERMARKET BUSINESS IN UAE. RECENTLY UNDER CONSTRACTION OUR NEW SUPERMARKET IN RAS AL KHAIMA, UAE.
                </p>
            </div>
            
            <div className='projects_img01'>
                <img src={Pro03} alt="" />
            </div>
      </div>

    
    
      <hr className='Linebreak'></hr>




      <div className='projects_wrapper02'>
      <div className='projects_img02'>
                <img src={Pro02} alt="" />
            </div>
            <div className='projects_content02'>
            <h2 className='highlight'>REAL ESTATE PROJECT</h2>
                <p className='description projects_content-desc'>
                 WE HAVE MORE REAL ESTATE PROJECT UNDER CONSTRACTION IN UAE.
                 </p>
            </div>
      </div>

      <hr className='Linebreak'></hr>

      <div className='projects_wrapper03'>
            <div className='projects_content03'>
                <h2 className='highlight'>INTERNATIONAL TENDER</h2>
                <p className='description projects_content-desc'>
                  WE PARTICIPATE MORE INTERNATIONAL TENDER THIS YEAR.
                </p>
            </div>
            
            <div className='projects_img03'>
                <img src={Pro01} alt="" />
            </div>
      </div>

      
 </div>
     </div>
 <Team/>
  </section>
  )
}

export default Projects