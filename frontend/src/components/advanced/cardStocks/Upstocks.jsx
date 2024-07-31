import React from 'react'
import upstocks from "./upstock.png";
import './list.css'
import { Link } from 'react-router-dom';
export default function Upstocks() {
  return (
    <div className='container-card'>
    <img src={upstocks} className='upstocks'></img>
    <div>Invest Now, Invest Right</div>
    <Link to='https://www.google.com/aclk?sa=l&ai=DChcSEwjbgou619CHAxVxq2YCHc3sN-EYABAAGgJzbQ&co=1&ase=2&gclid=CjwKCAjwnqK1BhBvEiwAi7o0X4WJG4blN0symZL7eFAk0RGYxq5eB-mhjRA6vri3merqoaMz4-lADxoCcRoQAvD_BwE&sig=AOD64_3_QhFvZ-X55DHLyqRq1VjsY1_kjA&q&nis=4&adurl&ved=2ahUKEwi5i4W619CHAxXIUGwGHSTEABcQ0Qx6BAgIEAE' target="blank" className='view-company'>View</Link >
</div>
  )
}
