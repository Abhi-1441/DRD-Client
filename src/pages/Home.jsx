import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate(); // Use the useNavigate hook to navigate
  
  const handlePredictionButtonClick = () => {
    navigate('/predict'); // Navigate to the PredictionPage component
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 border rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Welcome to VisionVault</h1>
      
      {/* Educational Resources Section */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Educational Resources</h2>
        <h4 className=" font-bold">Learn more about diabetic retinopathy</h4>
        <p className="mb-4">
          Diabetic retinopathy is a diabetes complication that affects eyes. It's caused by damage to the blood vessels of the light-sensitive tissue at the back of the eye (retina). Click 
          <a href="https://www.mayoclinic.org/diseases-conditions/diabetic-retinopathy/symptoms-causes/syc-20371611" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer"> here </a> 
          to learn more about its causes and symptoms.
        </p>
        <h4 className=" font-bold">Preventive measures</h4>
        <p>
          There are several preventive measures you can take to reduce the risk of diabetic retinopathy. Regular eye exams, managing your blood sugar levels, and controlling blood pressure are some of the key steps. Visit 
          <a href="https://www.nhs.uk/conditions/diabetic-retinopathy/prevention/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer"> here </a> 
          to know more about preventions.
        </p>
      </div>
      
      {/* DRD Prediction Section */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Test Your DRD Prediction</h2>
        <p className="mb-4">Would you like to test your diabetic retinopathy detection? Click the button below to get started.</p>
        <button onClick={handlePredictionButtonClick} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Test Prediction
        </button>
      </div>
    </div>
  );
}

export default HomePage;
