// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import { HomePage } from './components/intro/HomePage';


function App() {
  return (
    <Routes>
      <Route path="/sandrayun" element={<HomePage />} />
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
    </Routes>
  );
}


export default App;
