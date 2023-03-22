import React from 'react';
import './Style/header.css';
import logo from '../Img/Logo.png'
import { Link } from 'react-router-dom';


class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <nav>
          <Link to="/"><img className="logo" src={logo}></img></Link>
          <ul>
            <li><a href='#Home'><Link to="/">Home</Link></a></li>
            <li><a href='#AboutUS'><Link to="/about">About Us</Link></a></li>
            <li><a href='#Cakes'><Link to="/login">Cake</Link></a></li>
            <li><button className='button'><Link to="/register">Register</Link></button></li>
          </ul> 
        </nav>
      </header>
    );
  }
}

export default Header;
