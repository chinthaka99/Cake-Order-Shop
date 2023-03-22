import React from 'react';
import './Style/hero.css';
import HeroImage from '../Img/HeroImage.png'

class Hero extends React.Component {
  render() {
    return (
        <div className='HeroSection'>
            <h1 className='HeroText'>Delicious <br/>Home Made Cake</h1>
            <img className='heroImage' src={HeroImage}></img>
        </div>
        
    );
  }
}

export default Hero;