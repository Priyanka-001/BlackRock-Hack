import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { AuthProvider } from "./AuthContext";

import Dashboard from './components/Dashboard';
import LandingPage from './components/landing_page/Landing_navbar';
import Login from './components/landing_page/Login';
import Signup from './components/landing_page/Signup'


import BeginnerDashboard from './components/beginner/BeginnerDashboard';
import IntermediateDashboard from './components/intermediate/IntermediateDashboard';
import AdvancedDashboard from './components/advanced/AdvancedDashboard';
import StocksInter from './components/intermediate/StocksInter';
import StockDashboard from './components/intermediate/StockDashboard';

function App() {
  return (
    <div className="App">
      <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingPage/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          {/* <Route path="/signup" element={<Signup/>}></Route> */}
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/beginner-dashboard" element={<BeginnerDashboard/>}></Route>
          <Route path="/intermediate-dashboard" element={<IntermediateDashboard/>}></Route>
          <Route path="/advanced-dashboard" element={<AdvancedDashboard/>}></Route>
          <Route path="/stocks-inter" element={<StocksInter/>}></Route>
          <Route path="/stock-dashboard" element={<StockDashboard/>}></Route>
        </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
