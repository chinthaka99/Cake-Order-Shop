import React from "react";
import "./Style/dashsection.css";
import { FaArrowRight } from "react-icons/fa";
import Image1 from "../Img/Birthday-Cakes/bd-cake-1.jpg";
import Image2 from "../Img/Birthday-Cakes/bd-cake-2.jpg";
import Image3 from "../Img/Birthday-Cakes/bd-cake-3.jpg";
import Image4 from "../Img/Wedding-Cakes/wedding-cake-1.jpg";
import Image5 from "../Img/Wedding-Cakes/wedding-cake-2.jpg";
import Image6 from "../Img/Wedding-Cakes/wedding-cake-3.jpg";
import { Link } from "react-router-dom";

class DashboardSection extends React.Component {
  render() {
    return (
      <div>
        <div className="Dashboard-section">
          <h1 className="heading-dash">Birthday Cakes</h1>
          <div className="dash-sec">
            <div className="sec-item">
              <img className="dash-image" src={Image1}></img>
              <h3>
                Two Layer <br />
                brithday cakes
              </h3>
              <ul className="dash-ul">
                <li>Weight : 5kg</li>
                <li>Price : Rs: 5000</li>
              </ul>
              <button className="order-now-button">
                {" "}
                <Link to="/ordernow">
                  Order Now
                  <FaArrowRight />
                </Link>
              </button>
            </div>

            <div className="sec-item">
              <img className="dash-image" src={Image2}></img>
              <h3>
                Single layer
                <br /> Birthday Cakes
              </h3>
              <ul className="dash-ul">
                <li>Weight : 3kg</li>
                <li>Price : Rs: 3000</li>
              </ul>
              <button className="order-now-button">
                <Link to="/ordernow">
                  Order Now
                  <FaArrowRight />
                </Link>
              </button>
            </div>

            <div className="sec-item">
              <img className="dash-image" src={Image3}></img>
              <h3>
                Special <br />
                Birthday Cakes
              </h3>
              <ul className="dash-ul">
                <li>Weight : 1 - 5kg</li>
                <li>Price : Rs: 1000 - 5000</li>
              </ul>
              <button className="order-now-button">
                <Link to="/ordernow">
                  Order Now
                  <FaArrowRight />
                </Link>
              </button>
            </div>
          </div>
        </div>

        <div className="Dashboard-section">
          <h1 className="heading-dash">Wedding Cakes</h1>
          <div className="dash-sec">
            <div className="sec-item">
              <img className="dash-image" src={Image4}></img>
              <h3>
                Traditional white <br />
                wedding cakes
              </h3>
              <ul className="dash-ul">
                <li>Weight : 5kg</li>
                <li>Price : Rs: 5000</li>
              </ul>
              <button className="order-now-button">
                <Link to="/ordernow">
                  Order Now
                  <FaArrowRight />
                </Link>
              </button>
            </div>

            <div className="sec-item">
              <img className="dash-image" src={Image5}></img>
              <h3>
                Maximalist
                <br /> Wedding Cakes
              </h3>
              <ul className="dash-ul">
                <li>Weight : 3kg</li>
                <li>Price : Rs: 3000</li>
              </ul>
              <button className="order-now-button">
                <Link to="/ordernow">
                  Order Now
                  <FaArrowRight />
                </Link>
              </button>
            </div>

            <div className="sec-item">
              <img className="dash-image" src={Image6}></img>
              <h3>
                Monochrome <br />
                Wedding Cakes
              </h3>
              <ul className="dash-ul">
                <li>Weight : 1 - 5kg</li>
                <li>Price : Rs: 1000 - 5000</li>
              </ul>
              <button className="order-now-button">
                <Link to="/ordernow">
                  Order Now
                  <FaArrowRight />
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardSection;
