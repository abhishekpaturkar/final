import React, { useState } from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const faqs = [
  { question: 'What is this application for?', answer: 'This app is designed to help farmers predict market prices of agricultural commodities using deep learning, improving their planning and profitability.' },
  { question: 'How can farmers benefit from this app?', answer: 'Farmers can make informed decisions about when and where to sell their crops for maximum profit based on predicted prices.' },
  { question: 'Which cities does the prediction cover?', answer: 'Currently, the app provides predictions for Pune and Mumbai.' },
  { question: 'Which crops are included in the prediction system?', answer: 'The app supports commodities like Rice, Wheat, Potato, Onion, Jowar, and Maize.' },
  { question: 'How often are price predictions updated?', answer: 'Price forecasts are updated monthly and cover up to 24 months in advance.' },
  { question: 'Is this app free to use?', answer: 'Yes, this app is completely free for all users.' },
  { question: 'How accurate are the price predictions?', answer: 'We use advanced models like LSTM and ARIMA for predictions, which provide a high level of accuracy based on historical and seasonal data.' },
  { question: 'Can I access the app on mobile devices?', answer: 'Yes, the app is mobile-friendly and can be accessed via any browser.' },
  { question: 'Does the app consider weather data in predictions?', answer: 'Yes, weather conditions are part of the predictive model to enhance accuracy.' },
  { question: 'How can I check the prices for a specific month?', answer: 'After selecting a city and commodity, click the Predict button to view a table with monthly forecasts.' },
  { question: 'Can I get notifications for price alerts?', answer: 'This feature is planned for future versions of the app.' },
  { question: 'Is internet required to use this app?', answer: 'Yes, an internet connection is necessary to fetch real-time prediction data.' },
  { question: 'Can the app help in crop planning?', answer: 'Yes, farmers can plan their crop cycle based on expected price trends to maximize profit.' },
  { question: 'How can I trust the predictions?', answer: 'Our predictions are based on trained machine learning models validated with historical data.' },
  { question: 'Is my personal data stored?', answer: 'No personal data is collected or stored by the app.' },
  { question: 'Can I suggest a feature or give feedback?', answer: 'Yes, please contact the development team through the feedback option on the site.' },
  { question: 'What is deep learning?', answer: 'Deep learning is a type of machine learning that mimics the human brain to process large amounts of data and find patterns.' },
  { question: 'Can I share the prediction results?', answer: 'Yes, you can take screenshots or copy the data for sharing.' },
  { question: 'Will more cities and crops be added?', answer: 'Yes, we plan to expand to more regions and include additional crops in future versions.' },
  { question: 'Does the app support regional languages?', answer: 'Currently, the app is in English, but support for regional languages is coming soon.' },
  { question: 'Can I use this app for research purposes?', answer: 'Yes, this app is suitable for academic and research use related to agriculture and market intelligence.' },
  { question: 'What is ARIMA?', answer: 'ARIMA is a time-series forecasting technique used to predict future points by analyzing past data.' },
  { question: 'Is the app secure?', answer: 'Yes, the app follows best practices to ensure data security and user privacy.' },
  { question: 'Do I need to create an account?', answer: 'No registration is needed to use the app.' },
  { question: 'How is this app different from traditional farming practices?', answer: 'It uses data-driven methods to guide decisions, unlike traditional farming which relies on past experiences.' },
  { question: 'Can this app guide me on which crop to plant?', answer: 'Indirectly, yes. By observing price trends, you can decide which crop would be more profitable.' },
  { question: 'Where does the data come from?', answer: 'We collect historical price and weather data from government sources and agricultural databases.' },
  { question: 'How often should I use the app?', answer: 'We recommend checking predictions once a month or before major farming decisions.' },
  { question: 'Is technical knowledge required to use the app?', answer: 'No, the interface is simple and user-friendly, even for non-technical users.' },
];

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
    <Navbar/> 
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-10">🤔 Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:shadow-md transition"
            onClick={() => toggleFAQ(index)}
          >
            <h2 className="text-lg font-semibold text-green-700">{faq.question}</h2>
            {activeIndex === index && (
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default FAQPage;