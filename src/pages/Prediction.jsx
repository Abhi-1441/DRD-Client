import React, { useState } from 'react';
import axios from 'axios';

function Prediction() {
  const [image, setImage] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append('file', image);
      const res = await axios.post('https://drd-prediction-api.onrender.com/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(res.data);
      const predictions = res.data.predictions;
      const maxLabel = Object.keys(predictions).reduce((a, b) => predictions[a] > predictions[b] ? a : b);
      setPrediction(maxLabel);
      setErrorMessage('');
    } catch (error) {
      console.error(error);
      setPrediction(null);
      setErrorMessage('Error occurred while processing the image. Please try again.');
    }
    setIsLoading(false);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 border rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Diabetic Retinopathy Detection</h1>
      <input type="file" onChange={handleChange} className="mb-4" />
      <button onClick={handleSubmit} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" disabled={isLoading}>
        {isLoading ? 'Processing...' : 'Submit'}
      </button>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      {prediction && !isLoading && (
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-2">Prediction</h2>
          <p className="text-green-500 font-semibold">{`The predicted label is : ${prediction}`}</p>
        </div>
      )}
    </div>
  );
}

export default Prediction;
