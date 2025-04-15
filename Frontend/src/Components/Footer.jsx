import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-semibold mb-3">About Project</h2>
          <p className="text-sm text-gray-200">
            <strong>Ayushman</strong> is a Final Year BE Project aiming to empower farmers
            by forecasting agricultural commodity prices using Deep Learning models.
            This helps them make informed decisions and maximize their profits.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm text-gray-200">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/predict" className="hover:underline">Prediction</a></li>
            <li><a href="/schemes" className="hover:underline">Govt Schemes</a></li>
            <li><a href="/faq" className="hover:underline">FAQs</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
          </ul>
        </div>

        {/* Contact / Socials */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
          <p className="text-sm text-gray-200 mb-4">
            Email: <a href="mailto:mailto:hariom.malode@aissmsioit.org" className="hover:underline">hariom.malode@aissmsioit.org</a>
          </p>
          <div className="flex space-x-4 text-lg">
            <a href="https://github.com/HariMalode/AgriculturalCommodityPriceForecasting" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:hariom.malode@aissmsioit.org">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-300 py-4 border-t border-green-700 text-sm">
        © 2025 Team Ayushman. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
