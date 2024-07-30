import Stocklist from './Stocklist'
import '../../styles/stocksinter.scss'
import { fetchStockDetails, fetchQuote } from "./api/stockApi";
import { useEffect, useState } from 'react';
import Navbar from '../Navbar';

function StocksInter() {
  const [data, setData] = useState([
    { id: '1', name: 'Apple', symbol: 'AAPL', prize: '', dayhigh: '', change: '' },
    { id: '2', name: 'Microsoft', symbol: 'MSFT', prize: '', dayhigh: '', change: '' },
    { id: '3', name: 'Google', symbol: 'GOOGL', prize: '', dayhigh: '', change: '' },
    { id: '4', name: 'Amazon', symbol: 'AMZN', prize: '', dayhigh: '', change: '' },
    { id: '5', name: 'Tesla', symbol: 'TSLA', prize: '', dayhigh: '', change: '' }
  ]);


  useEffect(()=>{
    const updateStockOverview = async () => {
      try {
        const results = await Promise.all(data.map(stock => fetchQuote(stock.symbol)));
        console.log(results);
        const updatedData = data.map((stock, index) => ({
          ...stock,
          prize: results[index].c,
          dayhigh: results[index].h,
          change: results[index].d,
        }));
        setData(updatedData);
      } catch (error) {
        console.log(error);
      }
    };

    updateStockOverview();
    console.log(data);
    
  },[]

  )


  return (
  <div>
    <Navbar/>
    <div className='stocksinter'>
      <h1>Here are some stocks to look at</h1>
      <p>To look for more information, click on view.</p>
      <Stocklist stocks={data}/>
    </div>
  </div>
  );
}

export default StocksInter;