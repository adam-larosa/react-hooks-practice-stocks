import React from "react";

function Stock() {

  const handleSelect = () => {
    console.log("add code to connect event listener")
  }

  const handleButton = () => {
    console.log("add code to connect event listener")
  }
  
  return (
    <div>
      <div onClick={ handleSelect } className="card">
        <div className="card-body">
          <h5 className="card-title">{"Company Name"}</h5>
          <p className="card-text">{"Stock Price"}</p>
        </div>
        <div className="button-container">
          <button 
            onClick={ handleButton } 
            className="card-button"
          >
            shut down!
          </button>
        </div>
      </div>
    </div>
  );
}
export default Stock;
