import React, {useRef, useEffect} from "react"
import "./header.css"
import Logo from '../../images/logored1.png'
import {motion} from 'framer-motion'
import { NavLink } from "react-router-dom";


const nav_links = [
    {
        path:'/home',
        display:'Home',
        submenu: [
                    {
            
                    }
                 ]
    },
    {
        path:'/about',
        display:'About',
        icon:'ri-arrow-down-s-line',
        submenu: [
                    {
                        url: "who_about",
                        name: "WHO WE ARE"
                    },
                    {
                        url: "aboutus",
                        name: "CEO SPEECH"
                    }
                ]
    },
    {   path:'/services',
        display:'Services',
        icon:'ri-arrow-down-s-line',
        submenu: [
                    {
                        url: "tender",
                        name: "INTERNATIONAL TENDER"
                    },
                    {
                        url: "investment",
                        name: "INVESTMENT"
                    },
                    {
                        url: "export",
                        name: "EXPORT / IMPORT"
                    },
                    {
                        url: "cosmetic",
                        name: "COSMETIC"
                    },
                    {
                        url: "food_stuff",
                        name: "FOOD STUFF"
                    },
                    {
                        url: "consultancy",
                        name: "CONSULTANCY"
                    }
                ]
     },
     
    {
        path:'/projects',
        display:'Projects',
        submenu: [
                    {
    
                    }
                ]
    },
    // {
    //     path:'/blog',
    //     display:'Blog',
    //     submenu: [
    //                 {
            
    //                 }
    //             ]
    // },
    {
        path: '/contact',
        display: 'Contact',
        submenu: [ 
                    {
    
                    }
                ]
    },

];
    


const Header = ({theme, toggleTheme}) => {

    const headerRef = useRef(null);
    const menuRef = useRef(null);

    const headerFunc = ()=>{
        if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
            headerRef.current.classList.add('header_shrink')
        } else {
            headerRef.current.classList.remove('header_shrink')
        }
    };

    useEffect(()=>{
        window.addEventListener('scroll', headerFunc);
        return ()=> window.removeEventListener('scroll', headerFunc);
    }, []);

    // eslint-disable-next-line 
    const handleClick = (e) =>{
        e.preventDefault();
        const targetAttr = e.target.getAttribute('href');
        const location = document.querySelector(targetAttr).offsetTop;

        window.scrollTo({
            left: 0,
            top: location - 80,
        });
    };

    const toggleMenu = ()=> menuRef.current.classList.toggle('menu_active');

  return (
    <header className="header" ref={headerRef}>
        <div className="container">
            <div className="nav_wrapper">
                <div className="logo">
                <motion.img whileHover={{scale: 1.2}} src={Logo} alt='' />    
                </div>

                {/*======= navigation ================== */}
                
                
                <div className="navigation" ref={menuRef} onClick={toggleMenu} >
                    <nav id="mainnav" className="mainnav">
                        <ul className="menu"> 
                        {
                            nav_links.map((item,index)=>(
                            <li className="home">
                            
                                <NavLink to={item.path}
                                key={index}
                                className={navClass => navClass.isActive ? 'active_menu' : ''}>
                                {item.display}
                      <span className="Menuicon"><i class={item.icon}></i></span>
                                
                                </NavLink>
                                
                                <ul className="submenu">
                                   
                                {item.submenu.map((items,index)=>(
                                   <li><NavLink to={items.url}
                                   key={index}
                                   className={navClass => navClass.isActive ? 'active_menu' : ''}>
                                    {items.name}</NavLink></li>

                                ))}  
                                </ul>
                            </li>
                            ))}
                        </ul>
                    </nav>
                    
                </div>



                {/* =========== light mode ================ */}
                {/* <div className="light-mode">
                    <span onClick={toggleTheme}>
                    {theme === 'light-theme' ? (
                            <span>
                                <i class="ri-moon-line"></i>Dark
                            </span>
                         ) : (
                            <span>
                                <i class="ri-sun-line"></i> Light
                            </span>
                         ) }
                    </span>
                </div> */}

                     <span className="mobile_menu" onClick={toggleMenu}>
                        <i class="ri-menu-line"></i>
                     </span>       

            </div>
        </div>
    </header>
  );
};

export default Header;