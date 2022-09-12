import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import success from "../../images/Success.png";
import "./Flipcart.css";

const Flipcart = () => {
  const [flip, setFlip] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="grid-container">
      <ReactCardFlip isFlipped={flip} flipDirection="vertical">
        <div className="grid-item">
          <div className="cross-container">
            <button className="crossBtn-container">
              <div className="arrow-container">
                <p className="left-arrow">/</p>
                <p className="right-arrow">\</p>
              </div>
            </button>
          </div>
          <h1 className="para-container">
            Select the amount that you want to donate
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="radio">
              <label className="label-container">
                <input
                  className="input-container"
                  type="radio"
                  value="option1"
                />
                $10
              </label>
            </div>
            <div className="radio">
              <label className="label-container">
                <input
                  className="input-container"
                  type="radio"
                  value="option1"
                />
                $50
              </label>
            </div>
            <div className="radio">
              <label className="label-container">
                <input
                  className="input-container"
                  type="radio"
                  value="option1"
                />
                $100
              </label>
            </div>
            <div className="radio">
              <label className="label-container">
                <input
                  className="input-container"
                  type="radio"
                  value="option1"
                />
                $500
              </label>
            </div>
            <div className="radio">
              <label className="label-container">
                <input
                  className="input-container"
                  type="radio"
                  value="option1"
                />
                $1000
              </label>
            </div>
            <button
              type="submit"
              className="Paybutton-container"
              onClick={() => setFlip(!flip)}
            >
              Pay Now
            </button>
          </form>
        </div>
        <div className="grid-item">
          <div className="successImage-container">
            <img src={success} alt="success" className="successImage" />
          </div>
          <h1 className="successHead">
            You have successfully made the donation!
          </h1>
          <button className="successButton" onClick={() => setFlip(!flip)}>
            Done
          </button>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default Flipcart;
