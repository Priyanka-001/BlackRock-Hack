import React from 'react'
import forexexchange from "./forexex.png";
import { Link } from 'react-router-dom';
export default function ForexExchange() {
  return (
    <div className='container-card'>
    <img src={forexexchange} className='forexexchange'></img>
    <div>Trade without compromise</div>
    <Link to='https://www.oanda.com/currency-converter/en/' target="blank" className='view-company'>View</Link >

</div>
  )
}
