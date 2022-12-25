import React from 'react'
import './style.css'
import logoImg from './logoImg.png'
const Logo = () => {
  return (
    <div className='logo'>
      <div>
        <img src={logoImg} alt='logo'/>
        <span><b>HungerBuddy</b></span>
      </div>
      <p><b>Restaurent & BBQ</b></p>
    </div>
  )
}

export default Logo

