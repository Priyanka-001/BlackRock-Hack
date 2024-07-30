import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Dashboard from './components/Dashboard';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          {/* <Route path="/signup" element={<Signup/>}></Route> */}
          <Route path="/dashboard" element={<Dashboard/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
