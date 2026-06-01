import React from 'react';
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import './App.css';
import Home from "./Home";
import Navbar from './Navbar'
import SubscriptionCard from "./SubscriptionCard";
import horsesImg from "./horses.jpg"
import Subscriptions from "./Subscriptions";

function App() {
  return (
      <HashRouter>
          <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/Subscriptions" element={<Subscriptions />}></Route>
          </Routes>
      </HashRouter>
  );
}

export default App;
