import '../../styles/stocklist.scss'
import { useNavigate } from 'react-router-dom';

function Stocklist(props){
    const navigate = useNavigate();
    const handleButtonClick = async (symbol) => {
      navigate('/stock-dashboard', { state: { symbol } });
    };
    return(
    <div className='stocklist'>
      <table>
        <thead>
          <th>SR. NO.</th>
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
                <td><button className={`${stock.change > 0 ? "pchange" : "nchange"}`}>{stock.change}% </button></td>
                <td><button className='view' onClick={() => handleButtonClick(stock.symbol)}>VIEW</button></td>
            </tr>
           )}
        </tbody>
      </table>
    </div>
    )
}
export default Stocklist