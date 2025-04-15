import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-green-600 p-4 shadow-md text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Ayushman Prediction</h1>
        <div className="space-x-8">
          <Link to="/" className="hover:text-yellow-300 transition-colors duration-300">Home</Link>
          <Link to="/predict" className="hover:text-yellow-300 transition-colors duration-300">Predict</Link>
          <Link to="/schemes" className="hover:text-yellow-300 transition-colors duration-300">Govt Schemes</Link>
          <Link to="/about" className="hover:text-yellow-300 transition-colors duration-300">About</Link>
          <Link to="/FAQ" className="hover:text-yellow-300 transition-colors duration-300">FAQs</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
