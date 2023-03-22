import React from "react";
import "./Style/ordernow.css";
import AboutUS from "../Img/aboutus.png";
import { FaArrowRight } from "react-icons/fa";
import Image1 from "../Img/Birthday-Cakes/bd-cake-2.jpg";

class Ordernow extends React.Component {
  render() {
    return (
      <div className="order-now">
        
        <h1>Order Now</h1>
        <div className="order-item">
          <img className="order-image" src={Image1}></img>
          <h3>
            Two Layer <br />
            brithday cakes
          </h3>
          <ul className="order-ul">
            <li>Weight : 5kg</li>
            <li>Price : Rs: 5000</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Ordernow;
