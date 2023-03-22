import React, { useState } from "react";
import axios from "axios";
import "../Components/Style/register.css";
import Footer from "../Components/footer";
import Header from "../Components/header";
import Hero from "../Components/hero";
import { Link, useNavigate } from "react-router-dom";

function Register(){
    const navigate = useNavigate();

    const[regformData, setRegformData] = useState({
      firstName:'',
      lastName:'',
      email:'',
      password:''
    });

    const handleSubmit = async(e) => {
      e.preventDefault();
      console.log('Successfully Registered', regformData);
      try{
        await axios.post('http://localhost:8000/registrations',regformData);
        navigate('/login');
      }catch(error){
        console.error(error);
      }
    };

    const handleInputChange = (e)=>{
      const{name , value} = e.target;
      setRegformData({ ...regformData, [name]: value });
    };


  return (
    <div>
      <Header />
      <Hero />

      <h1>Register Here</h1>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="reg-form-item">
          <label className="register-label">First Name: </label>
          <input className="register-input"
            onChange={handleInputChange}
            id="firstName"
            name="firstName"
            placeholder="Your First Name"
            required
          ></input>
        </div>

        <div className="reg-form-item">
          <label className="register-label" >Last Name: </label>
          <input className="register-input"
            onChange={handleInputChange}
            id="lastName"
            name="lastName"
            placeholder="Your Last Name"
            required
          ></input>
        </div>

        <div className="reg-form-item">
          <label  className="register-label">Email:</label>
          <input className="register-input"
            onChange={handleInputChange}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
            required
          ></input>
        </div>

        <div className="reg-form-item">
          <label className="register-label">Password:</label>
          <input className="register-input"
            onChange={handleInputChange}
            type="password"
            placeholder="************"
            id="password"
            name="password"
            required
          ></input>
        </div>
        
        <button type="submit" className="submit-button">
          <a href="#">
            <Link to="/dashboard">SUBMIT</Link>
          </a>
        </button>
      </form>
      <button className="register-link-button"><Link to='/login'>Already have an account? Login here</Link>
        
      </button>
      <Footer />
    </div>
  );
};

export default Register;