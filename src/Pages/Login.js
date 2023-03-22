import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Components/Style/login.css";
import Footer from "../Components/footer";
import Header from "../Components/header";
import Hero from "../Components/hero";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [errorMessage, setError] = useState('');
  
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8000/authentication", {
        email: Email,
        password: Password,
      });

      console.log(response.data.msg);
      navigate('/dashboard');

    } catch (error) {
      console.log(error.response.data.msg);
      setError('Invalid Email or Password! Double check and enter again!');
    }
  };

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setError('');
    },2000);
    return()=>{
      clearTimeout(timer);
    };
  },[errorMessage]);

  return (
    <div>
      <Header />
      <Hero />
      <h1>Login Here</h1>
      <form onClick={handleLogin} className="login-form">
        <div className="login-form-item">
          <label className="login-label">
            Email:
          </label>
          <input
            className="login-input"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
          ></input>
        </div>

        <div className="login-form-item">
          <label className="login-label" htmlFor="password">
            Password:
          </label>
          <input
            className="login-input"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="************"
          ></input>
        </div>

        {errorMessage && <div className="error_message">{errorMessage}</div>}

        <button className="log-in-button" type="submit">
          <a href="#">LOGIN</a>
        </button>
      </form>
      <button className="login-link-button"><Link to='/register'>Don't have an account? Register here</Link></button>
      <Footer />
    </div>
  );
};
