// src/Components/ui/button.jsx
import React from "react";

export default function Button({ children, onClick, className = "", type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-xl shadow-md transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  );
}
