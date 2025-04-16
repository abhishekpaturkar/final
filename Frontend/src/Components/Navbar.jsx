// import React from 'react';
// import { Link } from 'react-router-dom';

// function Navbar() {
//   return (
//     <nav className="bg-green-600 p-4 shadow-md text-white">
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-xl font-bold">Ayushman Prediction</h1>
//         <div className="space-x-8">
//           <Link to="/" className="hover:text-yellow-300 transition-colors duration-300">Home</Link>
//           <Link to="/predict" className="hover:text-yellow-300 transition-colors duration-300">Predict</Link>
//           <Link to="/schemes" className="hover:text-yellow-300 transition-colors duration-300">Govt Schemes</Link>
//           <Link to="/about" className="hover:text-yellow-300 transition-colors duration-300">About</Link>
//           <Link to="/news" className="hover:text-yellow-300 transition-colors duration-300">News</Link>
//           <Link to="/info" className="hover:text-yellow-300 transition-colors duration-300">Information</Link>
//           <Link to="/FAQ" className="hover:text-yellow-300 transition-colors duration-300">FAQs</Link>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  // Initialize language state from localStorage
  const [lang, setLang] = useState(localStorage.getItem("lang") || "en");

  // Function to toggle language between Marathi and English
  const toggleLanguage = () => {
    const newLang = lang === "en" ? "mr" : "en"; // Toggle between 'en' and 'mr'
    setLang(newLang);
    localStorage.setItem("lang", newLang); // Store the language in localStorage

    // Update the lang attribute of the <html> tag dynamically
    document.documentElement.setAttribute("lang", newLang);

    // Delay page reload to allow Chrome to detect language change
    setTimeout(() => {
      window.location.reload();
    }, 100); // Reload after a brief delay
  };

  useEffect(() => {
    // On component mount, update the lang attribute on the <html> tag
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  return (
    <nav className="bg-green-600 p-4 shadow-md text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">भविशकृषी</h1>
        <div className="space-x-8 flex items-center">
          <Link to="/" className="hover:text-yellow-300 transition-colors duration-300">Home</Link>
          <Link to="/predict" className="hover:text-yellow-300 transition-colors duration-300">Predict</Link>
          <Link to="/schemes" className="hover:text-yellow-300 transition-colors duration-300">Govt Schemes</Link>
          <Link to="/about" className="hover:text-yellow-300 transition-colors duration-300">About</Link>
          <Link to="/news" className="hover:text-yellow-300 transition-colors duration-300">News</Link>
          <Link to="/info" className="hover:text-yellow-300 transition-colors duration-300">Information</Link>
          <Link to="/FAQ" className="hover:text-yellow-300 transition-colors duration-300">FAQs</Link>

          {/* Language Toggle Button */}
          <button
            onClick={toggleLanguage}
            className="ml-4 bg-white text-green-600 px-3 py-1 rounded-md hover:bg-yellow-300 transition"
          >
            {lang === "en" ? "मराठीत वाचा" : "Read in English"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
