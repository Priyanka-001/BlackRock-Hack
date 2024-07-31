import React from 'react'
import oanda from "./oanda.png";
import { Link } from 'react-router-dom';
export default function Oanda() {
  return (
    <div className='container-card'>
    <img src={oanda} className='oanda'></img>
    <div>Everything you need to trade smarter</div>
    <Link to='https://www.oanda.com/currency-converter/en/' target="blank" className='view-company'>View</Link >

</div>
  )
}
