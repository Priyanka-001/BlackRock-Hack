import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../AuthContext";

function Signup() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error);
        return;
      }

      // Successful signup, store JWT token if needed
      login(data?.token);
      // Redirect to dashboard
      navigate("/login");
    } catch (err) {
      console.error("Signup failed:", err);
      setError("Signup failed. Please try again.");
    }
  };

  return (
    <section className="container">
      <div className="login-container">
        <div className="circle circle-1"></div>
        <div className="form-container">
          <img src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png" alt="illustration" className="illustration" />
          <h1 className="opacity">Signup</h1>
          <form onSubmit={handleSignup}>
            <input
              type="text" 
              placeholder="USERNAME"
              value={username}
              onChange={(e) => setUsername(e.target.value)} />

            <input
              type="email" 
              placeholder="EMAIL ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)} />

            <input
              type="password"
              placeholder="PASSWORD" 
              value={password}
              onChange={(e) => setPassword(e.target.value)} />

            {error && <div className='error'>{error}</div>}
            <button type="submit" className="opacity">SUBMIT</button>
          </form>
        </div>
        <div className="circle circle-2"></div>
      </div>
      <div className="theme-btn-container"></div>
    </section>
  );
}

export default Signup;
