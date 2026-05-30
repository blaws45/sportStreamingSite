import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Home";
import Navbar from './Navbar'
import SubscriptionCard from "./SubscriptionCard";
import horsesImg from "./horses.jpg"
import Subscriptions from "./Subscriptions";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/Subscriptions" element={<Subscriptions />}></Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
