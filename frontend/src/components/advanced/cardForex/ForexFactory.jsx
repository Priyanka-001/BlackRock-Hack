import React from 'react'
import forestfact from "./forexfactory.png";
import { Link } from 'react-router-dom';
export default function ForestFactory() {
  return (
    <div className='container-card'>
    <img src={forestfact} className='forestfact'></img>
    <div>Make Smart Decisions.</div>
    <Link to='https://www.forexfactory.com/' target="blank" className='view-company'>View</Link >

</div>
  )
}
