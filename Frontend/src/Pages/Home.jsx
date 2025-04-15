import React from 'react';
import { Link } from 'react-router-dom';

import Button from "../Components/ui/button";

import heroImage from '../assets/hero_agri.png'; // Add an appropriate image to your assets folder
import { FaChartLine, FaCloud, FaSeedling, FaGlobeAsia } from 'react-icons/fa';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const features = [
  {
    icon: <FaChartLine size={32} className="text-green-600" />,
    title: 'Accurate Forecasts',
    desc: 'Predict prices using advanced Deep Learning models like LSTM and ARIMA.'
  },
  {
    icon: <FaCloud size={32} className="text-green-600" />,
    title: 'Weather Integration',
    desc: 'Weather-aware forecasting for real-time precision and smarter insights.'
  },
  {
    icon: <FaSeedling size={32} className="text-green-600" />,
    title: 'Farmer-Centric',
    desc: 'Intuitive interface designed for farmers with easy access to vital data.'
  },
  {
    icon: <FaGlobeAsia size={32} className="text-green-600" />,
    title: 'Regional Expansion',
    desc: 'Built to scale across cities and support localized language and crops.'
  }
];

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-green-800">Empowering Farmers with Intelligence</h1>
          <p className="text-gray-700 text-lg mb-6">
            Ayushman presents a smart solution to forecast agricultural commodity prices using cutting-edge deep learning. Our system helps farmers plan better, reduce losses, and maximize profits.
          </p>
          <Link to="/predict">
            <Button className="bg-green-600 text-white hover:bg-green-700 px-6 py-3 text-lg rounded-xl">
              See Predictions
            </Button>
          </Link>
        </div>
        <div className="md:w-1/2">
          <img src={heroImage} alt="Hero Agriculture" className="rounded-3xl shadow-lg" />
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-semibold text-center text-green-800 mb-10">Why Choose Our System?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-lg text-center border border-green-100"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-green-700">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-20 bg-green-100 p-10 rounded-xl text-center">
        <h2 className="text-2xl font-bold text-green-800 mb-4">Ready to Transform Agriculture?</h2>
        <p className="text-gray-700 mb-6">Start predicting the future of crop prices today and make informed decisions for a prosperous tomorrow.</p>
        <Link to="/predict">
          <Button className="bg-green-600 text-white hover:bg-green-700 px-6 py-3 text-lg rounded-xl">
            Try Prediction Now
          </Button>
        </Link>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Home;
