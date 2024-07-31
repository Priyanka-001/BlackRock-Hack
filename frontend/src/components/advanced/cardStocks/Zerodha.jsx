import React from 'react'
import zerodha from "./zerodha.png";
import './list.css'
import { Link } from 'react-router-dom';
function Zerodha() {
  return (
    <div className='container-card'>
        <img src={zerodha} className='zerodha'></img>
        <div>Trust with confidence</div>
        <Link to='https://zerodha.com/' target="blank" className='view-company'>View</Link >
    </div>
  )
}

export default Zerodha;
