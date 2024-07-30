import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { AuthProvider } from "./AuthContext";

import Dashboard from './components/Dashboard';
import LandingPage from './components/landing_page/Landing_navbar';
import Login from './components/landing_page/Login';
import Signup from './components/landing_page/Signup'


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
        </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
