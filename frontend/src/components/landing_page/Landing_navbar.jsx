import React from 'react'
import './landing_navbar.css'
import { Link } from "react-router-dom";
function navbar() {
  return (
    <div className='login-navbar'>
      <div>LOGO</div>
      <div className='right-login-navbar'>
        <div>Home</div>
        <div>About</div>
        <div>Contact Us</div>
        <Link to='./login'> Login</Link>
      </div>
    </div>
  )
}

export default navbar
