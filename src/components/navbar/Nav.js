import React from 'react'
import './Nav.css'
import logo from './img/logo.png'
const Nav = () => {
  return (
    <div>
      <div className='Nav'>
        <div className='logo'>
          <img src={logo} alt='' className='logo' />
        </div>
        <div className='title'>Animalia Encyclopedia</div>
      </div>
      <div className='nav_content'>
        <div>Species</div>
        <div>About Us</div>
        <div>Our Work</div>
        <div>Get Involved</div>
      </div>
    </div>
  )
}

export default Nav