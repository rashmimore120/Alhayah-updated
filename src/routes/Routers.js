
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Hero from '../components/UI/Hero'
import AboutUs from '../components/UI/AboutUs'
import Services from "../components/UI/Services"
import Projects from '../components/UI/Projects'
import Blog from "../components/UI/Blog"
import Contact from "../components/UI/Contact"
import Whoabout from '../components/UI/Whoabout';
import Tender from '../components/UI/Tender';
import Investment from '../components/UI/Investment';
import Export_Import from '../components/UI/Export_Import';
import Cosmetic from '../components/UI/Cosmetic';
import Foodstuff from '../components/UI/Foodstuff';
import Consulting from '../components/UI/Consulting';


const Routers = () => {
  
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Hero/>} />
        <Route path='/aboutus' element={<AboutUs/>} />
        <Route path='/who_about' element={<Whoabout/>} />
        <Route path='/service' element={<Services/>} />
        <Route path='/investment' element={<Investment/>} />
        <Route path='/tender' element={<Tender/>} />
        <Route path='/export' element={<Export_Import/>} />
        <Route path='/food_stuff' element={<Foodstuff/>} />
        <Route path='/cosmetic' element={<Cosmetic/>} />
        <Route path='/consultancy' element={<Consulting/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/contact' element={<Contact/>} />
        
    </Routes>
   
  )
}

export default Routers