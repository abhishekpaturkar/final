import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import React from 'react';
import Prediction from './Pages/Prediction';
import Scheme from './Pages/Scheme';
import About from './Pages/About';
import FAQ from './Pages/FAQ';
import News from './Pages/News';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/predict" element={<Prediction />} />
      <Route path="/schemes" element={<Scheme />} />
      <Route path="/about" element={<About />} />
      <Route path="/FAQ" element={<FAQ />} />
      <Route path="/news" element={<News />} />
    </Routes>
  );
}

export default App;
