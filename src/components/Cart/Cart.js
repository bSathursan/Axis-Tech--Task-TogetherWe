import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "./Cart.css";
import frame1 from "../../images/Frame1.png";
import Bar from "../../images/Rectangle 5.png";
import frame2 from "../../images/Frame2.png";
import frame3 from "../../images/Frame3.png";
import Flipcart from "../Flipcart/Flipcart";

const Cart = () => {
  const [flip1, setFlip1] = useState(false);
  const [flip2, setFlip2] = useState(false);
  const [flip3, setFlip3] = useState(false);
  const [flip4, setFlip4] = useState(false);
  const [flip5, setFlip5] = useState(false);
  const [flip6, setFlip6] = useState(false);
  return (
    <div className="grid-container">
      <ReactCardFlip isFlipped={flip1} flipDirection="vertical">
      <div class="grid-item">
        <img src={frame1} alt="" className="img-container" />
        <h1 className="head-container">Build school Wellawaya Sri Lanka</h1>
        <img src={Bar} alt="Bar" className="bar-container" />
        <div className="cash-container">
          <p className="cash">$69000</p>
          <p className="cash-text">Raised</p>
        </div>
        <button className="button-container" onClick={() => setFlip1(!flip1)}>Donate Now</button>
      </div>
      <Flipcart />
      </ReactCardFlip>
      <ReactCardFlip isFlipped={flip2} flipDirection="vertical">
      <div class="grid-item">
        <img src={frame2} alt="" className="img-container" />
        <h1 className="head-container">Build school Wellawaya Sri Lanka</h1>
        <img src={Bar} alt="Bar" className="bar-container" />
        <div className="cash-container">
          <p className="cash">$69000</p>
          <p className="cash-text">Raised</p>
        </div>
        <button className="button-container" onClick={() => setFlip2(!flip2)}>Donate Now</button>
      </div>
      <Flipcart />
      </ReactCardFlip>
      <ReactCardFlip isFlipped={flip3} flipDirection="vertical">
      <div class="grid-item">
        <img src={frame3} alt="" className="img-container" />
        <h1 className="head-container">Build school Wellawaya Sri Lanka</h1>
        <img src={Bar} alt="Bar" className="bar-container" />
        <div className="cash-container">
          <p className="cash">$69000</p>
          <p className="cash-text">Raised</p>
        </div>
        <button className="button-container" onClick={() => setFlip3(!flip3)}>Donate Now</button>
      </div>
      <Flipcart />
      </ReactCardFlip>
      <ReactCardFlip isFlipped={flip4} flipDirection="vertical">
      <div class="grid-item">
        <img src={frame1} alt="" className="img-container" />
        <h1 className="head-container">Build school Wellawaya Sri Lanka</h1>
        <img src={Bar} alt="Bar" className="bar-container" />
        <div className="cash-container">
          <p className="cash">$69000</p>
          <p className="cash-text">Raised</p>
        </div>
        <button className="button-container" onClick={() => setFlip4(!flip4)}>Donate Now</button>
      </div>
      <Flipcart />
      </ReactCardFlip>
      <ReactCardFlip isFlipped={flip5} flipDirection="vertical">
      <div class="grid-item">
        <img src={frame2} alt="" className="img-container" />
        <h1 className="head-container">Build school Wellawaya Sri Lanka</h1>
        <img src={Bar} alt="Bar" className="bar-container" />
        <div className="cash-container">
          <p className="cash">$69000</p>
          <p className="cash-text">Raised</p>
        </div>
        <button className="button-container" onClick={() => setFlip5(!flip5)}>Donate Now</button>
      </div>
      <Flipcart />
      </ReactCardFlip>
      <ReactCardFlip isFlipped={flip6} flipDirection="vertical">
      <div class="grid-item">
        <img src={frame3} alt="" className="img-container" />
        <h1 className="head-container">Build school Wellawaya Sri Lanka</h1>
        <img src={Bar} alt="Bar" className="bar-container" />
        <div className="cash-container">
          <p className="cash">$69000</p>
          <p className="cash-text">Raised</p>
        </div>
        <button className="button-container" onClick={() => setFlip6(!flip6)}>Donate Now</button>
      </div>
      <Flipcart />
      </ReactCardFlip>
    </div>
  );
};

export default Cart;
