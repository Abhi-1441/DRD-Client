import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '/eye.png';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation(); // Use the useLocation hook to get the current location

  const handleHomeClick = () => {
    navigate('/');
  };

  const handlePredictionClick = () => {
    navigate('/predict');
  };

  return (
    <nav className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center space-x-2"> 
          <img onClick={handleHomeClick} src={logo} alt="Logo" className="h-8 w-8 hover:cursor-pointer" /> 
          <h1 onClick={handleHomeClick} className="text-xl font-bold text-white hover:cursor-pointer">DRD Tester</h1>
        </div>
        <div className="space-x-4">
          <button
            onClick={handleHomeClick}
            className={`text-white hover:text-gray-300 focus:outline-none px-3 py-2 rounded-lg ${
              location.pathname === '/' ? 'bg-gray-700 ' : 'bg-gray-400'
            }`}
          >
            Home
          </button>
          <button
            onClick={handlePredictionClick}
            className={`text-white hover:text-gray-300 focus:outline-none px-3 py-2 rounded-lg ${
              location.pathname === '/predict' ? 'bg-gray-700' : 'bg-gray-400'
            }`}
          >
            Predict
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
