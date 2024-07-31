import React from 'react'
import Zerodha from './Zerodha'
import Upstocks from './Upstocks';
import Grow from './Grow';
import Navbar from '../../Navbar'
import AngelBank from './AngelBank';
function ListStock() {
  return (
   <div>
    <Navbar/>
   <div className='list-items-advanced'>
      
      <Grow/>
      <Upstocks/>
      <Zerodha/>
      <AngelBank/>
      
    </div>
    </div>
  )
}
export default ListStock;
