import React from 'react'
import { useNavigate } from 'react-router-dom'

import Navbar from '../Navbar'
import "../../styles/intermediateDashboard.scss";

const BeginnerDashboard = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar/>
      <main className='intermediate-dashboard'>
        <h1>Watch Video Lectures to Gain Knowledge About Capital Market</h1>
        <div className='cards'>
          <div onClick={()=>navigate("/stocks-beg")}>
            <h2>Stocks</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          </div>
          <div onClick={()=>navigate("/mutualfunds-beg")}>
            <h2>Mutual Funds</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          </div>
          <div onClick={()=>navigate("/forex-beg")}>
            <h2>Foreign Exchange</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          </div>
          <div>
            <h2>Bonds</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default BeginnerDashboard