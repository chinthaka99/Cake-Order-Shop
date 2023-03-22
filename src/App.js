import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home";
import Aboutus from "./Pages/Aboutus";
import Dashboard from "./Pages/Dashboard";
import OrderNow from "./Pages/OrderNow";
import Register  from "./Pages/Register";
import Login from "./Pages/Login";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/ordernow" element={<OrderNow />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
