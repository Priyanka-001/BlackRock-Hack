import React from "react";

const StckHeader = ({ name, price, change }) => {
  return (
    <div>
        <h1>{name}</h1>
        <div>
          {/* <button className="buy" onClick={()=>HandleClickBuy(price)}>BUY</button>
          <button className="sell" onClick={()=>HandleClickSell(change)}>SELL</button> */}
        </div>
    </div>
  );
};

export default StckHeader;