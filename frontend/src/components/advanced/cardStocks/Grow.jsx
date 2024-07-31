import React from 'react';
import { Link } from 'react-router-dom';
import grow from './grow.png';
import './list.css';

export default function Grow() {
  return (
    <div className='container-card'>
      <img src={grow} className='groww' alt='Groww' />
      <div>Built for a growwing India</div>
      <Link to='https://groww.in/' target="blank" className='view-company'>View</Link >
    </div>
  );
}
