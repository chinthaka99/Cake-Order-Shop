import React from 'react';
import './Style/section1.css';
import Image1 from '../Img/BdayCake Image.png'
import Image2 from '../Img/Wedding cake.png'
import Image3 from '../Img/CupCake.png'
import { FaArrowRight } from 'react-icons/fa';
import {Link} from 'react-router-dom'


class Section1 extends React.Component {
  render() {
    return (
        <div className='section_1'>
          <h1>Our Cake</h1>
          <section >
           <div className='flex'>
           <div className='flex-item'>
                <img className="sec1_image" src={Image1}></img>
                <h3 className='sec_1_text'>Birthday Cakes</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam,
	               quis nostrud exercitation ullamco </p>
                 <button className="select-cake-button"><Link to='/login'>Select Cake</Link><FaArrowRight/></button>
            </div>

            <div className='flex-item'>
                <img className="sec1_image" src={Image2}></img>
                <h3 className='sec_1_text' >Wedding Cakes</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam,
	               quis nostrud exercitation ullamco </p>
                 <button className="select-cake-button"><Link to='/login'>Select Cake</Link><FaArrowRight/></button>
            </div>

            <div className='flex-item'>
                <img className="sec1_image" src={Image3}></img>
                <h3 className='sec_1_text'>Wedding Cakes</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam,
	               quis nostrud exercitation ullamco </p>
                 <button className="select-cake-button"><Link to='/login'>Select Cake</Link><FaArrowRight/></button>
            </div>
           </div>
          </section>
        </div>
        
    );
  }
}

export default Section1;