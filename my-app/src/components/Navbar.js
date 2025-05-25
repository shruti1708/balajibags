// import React from 'react'
// import './Navbar.css'
// import { useNavigate } from 'react-router-dom'

// function Navbar() {

//   const navigate = useNavigate()

//   const handleContact = () => {
//     navigate('/contact')
//     console.log('yes')
//   }

//   return (
//     <div className='navbar-section'>
// <div style={{fontSize: "30px"}}>
//     BALAJI BAGS
// </div>

// <div className='navbar-home-section'>
//     <button onClick={()=>navigate('/')}>Home</button>
//     <button onClick={()=>navigate('./about')}>About Us</button>
//     <button>Partnership</button>
// </div>

// <div>
//     <button onClick={handleContact}>Contact Us</button>
// </div>

//     </div>
//   )
// }

// export default Navbar

import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar-section">
      <div className="navbar-logo">BALAJI BAGS</div>

      <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <NavLink to="/" className="nav-btn" onClick={toggleMenu}>Home</NavLink>
        <NavLink to="/about" className="nav-btn" onClick={toggleMenu}>About Us</NavLink>
        <button className="nav-btn">Partnership</button>
        <NavLink to="/contact" className="nav-btn" onClick={toggleMenu}>Contact Us</NavLink>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? 'rotate1' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'fade' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'rotate2' : ''}`}></div>
      </div>
    </nav>
  );
}

export default Navbar;
