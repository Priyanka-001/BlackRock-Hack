import React from 'react'
import tastyfx from "./tastyfx.png";
import { Link } from 'react-router-dom';
export default function Tastyfx() {
  return (
    <div className='container-card'>
    <img src={tastyfx} className='tastyfx'></img>
    <div>ALL FOREX.
    ALL THE TIME.</div>
    <Link to='https://zerodha.com/' target="blank" className='view-company'>View</Link >

</div>
  )
}
