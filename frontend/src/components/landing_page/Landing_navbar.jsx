import React from 'react'
import './landing_navbar.css'
import { Link } from "react-router-dom";
import logo from '../logo.png'

function Landnavbar() {
  return (
    <div className='login-navbar'>
      <div className='logo'>MarketMentor</div>
      <div className='right-login-navbar'>
        <div>Home</div>
        <div>About</div>
        <div>Contact Us</div>
        <Link to='./login'> Login</Link>
      </div>
    </div>
  )
}

export default Landnavbar
