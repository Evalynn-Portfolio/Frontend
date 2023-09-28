import React from 'react';
import logo from './logo.svg';
import './App.css'
import Sidebar from './Sidebar/Sidebar';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
      <div className="App">
          <Sidebar />
          <Routes>
              <Route path="/" element={ <div> Home </div>} />
              <Route path="dashboard" element={<div> Dashboard </div>} />
              <Route path="transactions" element={<div> Transactions </div>} />
          </Routes>
    </div>
  );
}

export default App;
