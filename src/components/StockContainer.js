import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks }) {
  return (
    <div>
      <h2>Stocks</h2>
      {
        stocks.map( s => <Stock key={s.id} { ...s }/>)
      }
    </div>
  );
}

export default StockContainer;
