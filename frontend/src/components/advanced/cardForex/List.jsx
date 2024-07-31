import React from 'react'

import Navbar from '../../Navbar'
import Oanda from './Oanda';
import Tastyfx from './Tastyfx';
import ForexExchange from './ForexExchange';
import ForestFactory from './ForexFactory';
function ListStock() {
  return (
   <div>
    <Navbar/>
   <div className='list-items-advanced'>
      <Oanda/>
      <Tastyfx/>
      <ForexExchange/>
      <ForestFactory/>
    </div>
    </div>
  )
}
export default ListStock;
