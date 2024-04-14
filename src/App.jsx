import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Prediction from './pages/Prediction';
import Navbar from './components/Navbar';

function Copyright() {
  return (
    <div className="copyright text-center  text-gray-500 text-sm mt-4">
      © {new Date().getFullYear()} Abhi-1441. All rights reserved.
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/predict" element={<Prediction />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Copyright />
      </Router>
    </div>
  );
}

export default App;
