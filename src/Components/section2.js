import React from 'react';
import './Style/section2.css';
import Image1 from '../Img/Icons/cake  icon.png'
import Image2 from '../Img/Icons/Box Icon.png'
import Image3 from '../Img/Icons/Trucj Icon.png'


class Section2 extends React.Component {
  render() {
    return (
        <div className='section_2'>
           <div className='s2_flex'>
           <div className='s2-flex-item'>
                <img className="sec2_image" src={Image1}></img>
                <h3 className='sec_2_text'>Select your favorite flavour<br /></h3>
                <p><br />We are a big collection choose your favorite</p>
            </div>

            <div className='s2-flex-item'>
                <img className="sec2_image" src={Image2}></img>
                <h3 className='sec_2_text' >Select Your Favorite collection</h3>
                <p>We are a big collection choose your favorite </p>
            </div>

            <div className='s2-flex-item'>
                <img className="sec2_image" src={Image3}></img>
                <h3 className='sec_2_text'>Super fast delivery in all around the country</h3>
                <p>We are a big collection choose your favorite </p>
            </div>
           </div>
        </div>
        
    );
  }
}

export default Section2;