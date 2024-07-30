import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Dashboard from './components/Dashboard';
import Login from './components/Login';
import BeginnerDashboard from './components/beginner/BeginnerDashboard';
import IntermediateDashboard from './components/intermediate/IntermediateDashboard';
import AdvancedDashboard from './components/advanced/AdvancedDashboard';
import StocksInter from './components/intermediate/StocksInter';
import StockDashboard from './components/intermediate/StockDashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          {/* <Route path="/signup" element={<Signup/>}></Route> */}
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/beginner-dashboard" element={<BeginnerDashboard/>}></Route>
          <Route path="/intermediate-dashboard" element={<IntermediateDashboard/>}></Route>
          <Route path="/advanced-dashboard" element={<AdvancedDashboard/>}></Route>
          <Route path="/stocks-inter" element={<StocksInter/>}></Route>
          <Route path="/stock-dashboard" element={<StockDashboard/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
