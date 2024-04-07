import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '/eye.png'

function Navbar() {
  const navigate = useNavigate(); // Use the useNavigate hook to navigate

  const handleHomeClick = () => {
    navigate('/'); // Navigate to the home page
  };

  const handlePredictionClick = () => {
    navigate('/predict'); // Navigate to the prediction page
  };

  return (
    <nav className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center space-x-2"> 
          <img onClick={handleHomeClick} src={logo} alt="Logo" className="h-8 w-8 hover:cursor-pointer" /> 
          <h1 onClick={handleHomeClick} className="text-xl font-bold text-white hover:cursor-pointer">DRD Tester</h1> {/* Text */}
        </div>
        <div className="space-x-4">
          <button onClick={handleHomeClick} className="text-white hover:text-gray-300 focus:outline-none px-3 py-2 rounded-lg bg-gray-700">
            Home
          </button>
          <button onClick={handlePredictionClick} className="text-white hover:text-gray-300 focus:outline-none px-3 py-2 rounded-lg bg-gray-700">
            Predict
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
