import React, { useState } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import PredictionChart from "../Components/PredictionChart";
import MonthlyComparisonChart from "../Components/MonthlyComparisonChart"; // Import the new component
import PriceInsights from "../Components/PriceInsights";
import ComparisonChart from "../Components/ComparisonChart";

const Prediction = () => {
  const [city, setCity] = useState("");
  const [commodity, setCommodity] = useState("");
  const [predictions, setPredictions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [comparisonData, setComparisonData] = useState([]);

  const handlePredict = async () => {
    if (!city || !commodity) {
      setError("Please select both city and commodity.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const query = `${city}${commodity}`;
      const response = await axios.get(
        `http://127.0.0.1:5000/predict?query=${query}`
      );
      setPredictions(response.data);

      // 🔥 Fetch comparison data
      const comparisonResponse = await axios.get(
        `http://127.0.0.1:5000/comparison?query=${city}`
      );
      setComparisonData(comparisonResponse.data);

    } catch (err) {
      setError("Error fetching prediction.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="p-6 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">
          📈 Agricultural Price Prediction
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select City</option>
            <option value="Pune">Pune</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Ahilyanagar">Ahilyanagar</option>
            <option value="Sambhajinagar">Sambhajinagar</option>
            <option value="Nagpur">Nagpur</option>
            <option value="Mumbai">Mumbai</option>
          </select>

          <select
            value={commodity}
            onChange={(e) => setCommodity(e.target.value)}
            className="p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Commodity</option>
            <option value="Rice">Rice</option>
            <option value="Wheat">Wheat</option>
            <option value="Potato">Potato</option>
            <option value="Onion">Onion</option>
            <option value="Jowar">Jowar</option>
            <option value="Maize">Maize</option>
          </select>

          <button
            onClick={handlePredict}
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
          >
            Predict
          </button>
        </div>

        {error && <p className="text-red-600 text-center mb-4">{error}</p>}
        {loading && <p className="text-center">Loading predictions...</p>}

        {!loading && predictions.length === 0 && (
          <p className="text-center text-gray-500 italic">
            Select a commodity and city to get predictions.
          </p>
        )}

        {!loading && predictions.length > 0 && (
          <>
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-center">
                Price Trend for {commodity} in {city}
              </h2>
              <PredictionChart predictions={predictions} />
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-center">
                Year-over-Year Monthly Comparison
              </h2>
              <MonthlyComparisonChart predictions={predictions} />
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-center">
                Comparison of Predicted Prices for Commodities
              </h2>
              <ComparisonChart comparisondata={comparisonData} />
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2 text-center">
                Insights for {commodity}
              </h2>
              <PriceInsights predictions={predictions} />
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Prediction;
