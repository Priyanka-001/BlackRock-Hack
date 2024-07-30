import React from 'react'
import { FaSackDollar } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import "../styles/navbar.scss"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo'>MarketMentor</div>
        <div className='navmain2'>
            <div className='coins'>
                <div className='icon'><FaSackDollar size={30}/></div>
                <div className='value'>1000</div>
            </div>
            <div className='profile'><CgProfile size={30}/></div>
        </div>
    </div>
  )
}

export default Navbar