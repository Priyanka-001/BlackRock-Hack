import React, { useEffect, useState } from 'react';
import { FaSackDollar } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import "../styles/navbar.scss";

const Navbar = () => {
  const [points, setPoints] = useState(0); // Initialize with 0 or another default value
  
  const fetchUserData = async () => {
    try {
      const token = sessionStorage.getItem("token");
      const response = await fetch("http://localhost:8000/user/getcoin", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Ensure the token is prefixed with 'Bearer'
        },
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          const newPoints = parseFloat(data.points.toFixed(2));
          setPoints(newPoints); // Set user's points
          sessionStorage.setItem('points', newPoints);
        }
      } else {
        console.error("Failed to fetch user data");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  // Function to handle point updates after buy/sell actions
  const updatePoints = () => {
    const coins = sessionStorage.getItem('points');
    setPoints(parseFloat(coins));
  };

  // Call updatePoints whenever a transaction occurs
  useEffect(() => {
    const interval = setInterval(() => {
      updatePoints();
    }, 1000); // Check for updates every second

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div className='navbar'>
      <div className='logo'>MarketMentor</div>
      <div className='navmain2'>
        <div className='coins'>
          <div className='icon'><FaSackDollar size={30} /></div>
          <div className="value">${points}</div>
        </div>
        <div className='profile'><CgProfile size={30} /></div>
      </div>
    </div>
  );
}

export default Navbar;
