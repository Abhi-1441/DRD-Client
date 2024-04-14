import React, { useState } from 'react';
import axios from 'axios';

function Prediction() {
  const [image, setImage] = useState(null);
  const [maxPrediction, setMaxPrediction] = useState(null);
  const [predictions, setPredictions] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [originalImage, setOriginalImage] = useState(null);


  const handleFileChange = (event) => {
    setImage(event.target.files[0]);
    setOriginalImage(URL.createObjectURL(event.target.files[0]));
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
      // console.log(res.data);
      const predictions = res.data.predictions;
      setPredictions(predictions);
      console.log(predictions);
      const maxLabel = Object.keys(predictions).reduce((a, b) => predictions[a] > predictions[b] ? a : b);
      setMaxPrediction(maxLabel);
      setErrorMessage('');
    } catch (error) {
      console.error(error);
      setPredictions(null);
      setMaxPrediction(null);
      setErrorMessage('Error occurred while processing the image. Please try again.');
    }
    setIsLoading(false);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 border rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Diabetic Retinopathy Detection</h1>
      <input
        type="file"
        accept=".jpg,.jpeg,.png"
        onChange={handleFileChange}
        className="mb-4"
      />
      <button onClick={handleSubmit} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" disabled={isLoading}>
        {isLoading ? 'Processing...' : 'Submit'}
      </button>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      <div className="flex p-4">
        {originalImage && (
          <div >
            <h2 className="text-xl font-semibold mb-2">Uploaded Image</h2>
            <img src={originalImage} alt="Original" className="rounded-lg border-2 border-purple-600 h-48 max-w-full max-h-96" />
          </div>
        )}
        {/* Show predictions object */}
        {/* {predictions && (
          <div className="flex flex-col items-start ml-12 ">
            <h2 className="text-xl font-semibold mb-1">DR Predictions</h2>
            <ul className="list-disc pl-8">
              {Object.entries(predictions).map(([label, probability]) => (
                <li key={label} className="text-gray-700">
                  {`${label}: ${probability.toFixed(3)}`}
                </li>
              ))}
            </ul>
          </div>
        )} */}
      </div>

      {maxPrediction && !isLoading && (
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-2">Prediction</h2>
          <p className="text-green-500 font-semibold">{`The predicted label is : ${maxPrediction}`}</p>
        </div>
      )}
    </div>
  );
}

export default Prediction;
