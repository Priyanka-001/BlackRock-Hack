import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar'
import "../../styles/intermediateDashboard.scss";
const AdvancedDashboard = () => {
  const navigate = useNavigate();
  return (
    <div>
    <Navbar/>
    <main className='intermediate-dashboard'>
      <h1>Level-Up your game: Use your skills to make smart investments!</h1>
      <div className='cards'>
        <div onClick={()=>navigate('/stock-advanced')}>
          <h2>Stocks</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        </div>
        <div>
          <h2>Bonds</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        </div>
        <div onClick={()=>navigate('/forex-advanced')}>
          <h2>Foreign Exchange</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        </div>
        <div>
          <h2>Mutual Funds</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        </div>
      </div>
    </main>
  </div>
  )
}

export default AdvancedDashboard