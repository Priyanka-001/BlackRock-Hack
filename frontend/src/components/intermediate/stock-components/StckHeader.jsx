import React from "react";

const StckHeader = ({ name, price, change }) => {
  const HandleClickBuy = async (price) => {
    const buyPoints = price;
    try {
      const token = sessionStorage.getItem("token");
      const response = await fetch('http://localhost:8000/user/buystock', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ buyPoints }),
      });

      const result = await response.json();
      if (response.ok) {
        console.log('Investment successful:', result);
        // Update UI accordingly
      } else {
        console.error('Investment failed:', result.message);
      }
    } catch (error) {
      console.error('Error during investment:', error);
    }
  };
  const HandleClickSell = async (price,change) => {
    const sellPoints = price*change;
    try {
      const token = sessionStorage.getItem("token");
      const response = await fetch('http://localhost:8000/user/buystock', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ sellPoints }),
      });

      const result = await response.json();
      if (response.ok) {
        console.log('Investment successful:', result);
        // Update UI accordingly
      } else {
        console.error('Investment failed:', result.message);
      }
    } catch (error) {
      console.error('Error during investment:', error);
    }
  };
  return (
    <div>
        <h1>{name}</h1>
        <div>
          <button className="buy" onClick={()=>HandleClickBuy(price)}>BUY</button>
          <button className="sell" onClick={()=>HandleClickSell(price,change)}>SELL</button>
        </div>
    </div>
  );
};

export default StckHeader;