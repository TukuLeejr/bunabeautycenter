import React, { useState, useEffect } from 'react';
import logo from '../images/logo.jpg';
import { Link } from 'react-scroll';




  const Navbar =() =>{


  const [nav, setNav] = useState(false);
 

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
    window.addEventListener('scroll', changeBackground);
  

  return (
    <nav className={nav ? 'nav active' : 'nav'} >
      <Link to='main' className='logo' smooth={true} duration={2000}>
        <img src={logo} alt='' />
      </Link>
      <input className='menu-btn' type='checkbox' id='menu-btn' />
      <label className='menu-icon' For='menu-btn'>
        <span className='nav-icon'></span>
      </label>
      <ul className='menu'>
        <li><Link to='main' smooth={true} duration={1000} >HOME</Link></li>
        <li><Link to='features' smooth={true} duration={1000} >Services</Link></li>
        <li><Link to='prices' smooth={true} duration={1000} >Prices</Link></li>
        <li><Link to='about' smooth={true} duration={1000} >About</Link></li>
        <li><Link to='contact' smooth={true} duration={1000} >Contact</Link></li>
        <li><Link to='location' smooth={true} duration={1000} >Location</Link></li>
      </ul>
    </nav>
  );

  };

  

export default Navbar;