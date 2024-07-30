import React from 'react'
import Navbar from './Navbar'

import "../styles/dashboard.scss"
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar/>
      <main className='dashboard'>
        <h1>Welcome.</h1>
        <div className='cards'>
          <article>
            <h2>Beginner</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            <button onClick={()=>navigate("/beginner-dashboard")}>Open</button>
          </article>
          <article>
            <h2>Intermediate</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            <button onClick={()=>navigate("/intermediate-dashboard")}>Open</button>
          </article>
          <article>
            <h2>Advanced</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            <button onClick={()=>navigate("/advanced-dashboard")}>Open</button>
          </article>
        </div>
      </main>
    </div>
  )
}

export default Dashboard