import React from 'react';
import './Style/section3.css';
import { FaArrowRight } from 'react-icons/fa';


class Section3 extends React.Component {
  render() {
    return (
        <div className='section_3'>
          <h1>About US</h1>
          <section >
           <div className='flex'>
           <div className='s3_flex_1'>
                <h3 className='sec_3_text'>Delivary</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam,
	               quis nostrud exercitation ullamco </p>
                 <button className="more-button">More<FaArrowRight /></button>
            </div>

            <div className='s3_flex_2'>
                <h3 className='sec_3_text' >Custermor Service</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam,
	               quis nostrud exercitation ullamco </p>
                 <button className="more-button">More<FaArrowRight /></button>
            </div>

            <div className='s3_flex_3'>
                <h3 className='sec_3_text'>Wedding Cakes</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam,
	               quis nostrud exercitation ullamco </p>
                 <button className="more-button">More<FaArrowRight /></button>
            </div>
           </div>
          </section>
        </div>
        
    );
  }
}

export default Section3;