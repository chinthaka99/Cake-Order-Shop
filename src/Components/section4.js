import React from "react";
import "./Style/section4.css";
import AboutUS from "../Img/aboutus.png";
import { FaArrowRight } from "react-icons/fa";

class Section4 extends React.Component {
  render() {
    return (
      <div className="section_4">
        <div className="s4_flex">
          <div className="s4_flex_1">
            <img className="aboutus-image" src={AboutUS}></img>
          </div>
          <div className="s4_flex_2">
            <p className="about-us-para">
              Welcome to our online cake ordering website, where we bring the
              joy of freshly baked cakes right to your doorstep! Our team of
              expert bakers creates delicious cakes in a variety of flavors and
              designs, perfect for any occasion.
              <br /> <br />
              Whether you're celebrating a birthday, anniversary, or just want
              to indulge in a sweet treat, we have something for everyone. Our
              easy-to-use website allows you to browse our extensive collection
              of cakes, customize your order, and have it delivered to your
              preferred location in no time.
              <br />
              <br />
              At our online cake shop, we use only the highest quality
              ingredients and pay attention to every detail to ensure that every
              cake is perfect. We understand the importance of your special
              moments, and we are committed to making them even more memorable
              with our mouth-watering cakes. So why wait? Order now and
              experience the goodness of our cakes!
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Section4;
