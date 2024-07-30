// import './stocklist.scss'
import { useNavigate } from 'react-router-dom';

function Stocklist(props){
    const navigate = useNavigate();
    const handleButtonClick = async (symbol) => {
      navigate('/stock-dashboard', { state: { symbol } });
    };
    return(
    <div className='mainashmeet'>
      <table>
        <thead>
          <th>Sr. No.</th>
          <th>COMPANY</th>
          <th>SYMBOL</th>
          <th>PRICE <span>Rs.</span></th>
          <th>DAY HIGH <span>Rs.</span></th>
          <th>CHANGE<span>%</span></th>
          <th></th>
        </thead>
        <tbody>
        {props.stocks.map(
          (stock)=>
            <tr>
                <td>{stock.id}</td>
                <td className='cname'>{stock.name}</td>
                <td>{stock.symbol}</td>
                <td>{stock.prize}</td>
                <td>{stock.dayhigh}</td>
                <td><button className='butt2'>{stock.change}% </button></td>
                <td><button onClick={() => handleButtonClick(stock.symbol)}>VIEW</button></td>
            </tr>
           )}
        </tbody>
      </table>
    </div>
    )
}
export default Stocklist