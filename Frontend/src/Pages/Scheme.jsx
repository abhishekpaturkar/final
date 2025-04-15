import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const schemes = [
  {
    name: 'Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)',
    description: 'Provides ₹6,000 per year in three equal installments to small and marginal farmers to support their financial needs.',
    image: 'https://images.bhaskarassets.com/webp/thumb/512x0/web2images/521/2023/09/30/1763725-pm-kisan-samman-nidhi-yojana_1696066951.jpg',
  },
  {
    name: 'Pradhan Mantri Fasal Bima Yojana (PMFBY)',
    description: 'Offers crop insurance to farmers against natural calamities, pests, and diseases at minimal premium rates.',
    image: 'https://acko-cms.ackoassets.com/pmfby_pradhan_mantri_fasal_bima_yojana_3051d16bd6.png',
  },
  {
    name: 'Soil Health Card Scheme',
    description: 'Provides farmers with soil health cards containing nutrient status of their soil and recommendations for appropriate dosage of nutrients.',
    image: 'https://www.thehawk.in/_next/image?url=https%3A%2F%2Fd2py10ayqu2jji.cloudfront.net%2Fsoil-health-card-scheme.webp&w=1920&q=75',
  },
  {
    name: 'Pradhan Mantri Krishi Sinchayee Yojana (PMKSY)',
    description: 'Aims to expand cultivable area under assured irrigation and improve on-farm water use efficiency.',
    image: 'https://www.sscadda.com/wp-content/uploads/multisite/sites/2/2022/03/08184516/Pradhan-Mantri-Krishi-Sinchai-Yojana-1.png',
  },
  {
    name: 'Paramparagat Krishi Vikas Yojana (PKVY)',
    description: 'Promotes organic farming through adoption of organic village clusters and certification.',
    image: 'https://img.khetivyapar.com/images/news/1719460320-paramparagat-krishi-vikas-yojana-2024.jpg',
  },
  {
    name: 'National Agriculture Market (eNAM)',
    description: 'Provides a pan-India electronic trading portal which networks the existing APMC mandis to create a unified national market for agricultural commodities.',
    image: 'https://blogmedia.testbook.com/blog/wp-content/uploads/2023/11/enam-d0dbe99a.jpg',
  },
];

const GovernmentSchemes = () => {
  return (
    <>
    <Navbar/>
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">🌾 Government Schemes for Farmers</h1>
      <p className="text-center text-gray-600 mb-12">
        Explore various initiatives by the Indian government aimed at empowering farmers and enhancing agricultural productivity.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {schemes.map((scheme, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={scheme.image} alt={scheme.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{scheme.name}</h2>
              <p className="text-gray-700">{scheme.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default GovernmentSchemes;
