import React from 'react'
import angel from "./angel.png";
import { Link } from 'react-router-dom';
import './list.css'
export default function AngelBank() {
  return (
  <div className='container-card'>
    <img src={angel} className='angel'></img>
    <div>Make Smart Decisions.</div>
    <Link to='https://www.google.com/aclk?sa=l&ai=DChcSEwjF74fU19CHAxWgLIMDHb0UG8IYABAAGgJzZg&co=1&ase=2&gclid=CjwKCAjwnqK1BhBvEiwAi7o0Xzo6SC-xu0h-CVi_Ig9ZTD7JqKrMsmjkJwJWjQXVoKQ86POhKaLX2hoCB4gQAvD_BwE&sig=AOD64_1zMNQvGBST8hda6E8BsbQxCRTtGg&q&nis=4&adurl&ved=2ahUKEwiR4oDU19CHAxUZS2cHHYljDpgQ0Qx6BAgIEAE' target="blank" className='view-company'>View</Link >
</div>
  )
}
