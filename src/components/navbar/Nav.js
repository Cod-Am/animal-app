import React from 'react'
import './Nav.css'
import logo from './img/logo.png'
const Nav = () => {
  return (
    <div className='Nav'>
      <div className='logo'>
        <img src={logo} alt='' className='logo'/>
      </div>
      <div className='title'>Animalia Encyclopedia</div>
      <span />
    </div>
  )
}

export default Nav