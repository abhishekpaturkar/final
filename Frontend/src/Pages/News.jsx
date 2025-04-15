import React from "react";
import { Card, CardContent } from "../Components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "../Components/Navbar";

const newsItems = [
    {
      title: "Mandatory Farmer ID for Scheme Benefits",
      description:
        "Starting April 15, Maharashtra's agriculture department requires farmers to present a unique Farmer ID to access government schemes, ensuring transparency.",
      link: "https://www.freepressjournal.in/mumbai/maharashtra-makes-farmer-id-mandatory-for-agricultural-scheme-benefits-from-april-15",
    },
    {
      title: "Hailstorm Damages Crops in Jalgaon",
      description:
        "A severe hailstorm on April 12–13 caused extensive damage to banana and maize crops in Jalgaon, affecting Raver and Muktainagar areas.",
      link: "https://www.freepressjournal.in/pune/maharashtra-news-hailstorm-damages-crops-across-jalgaon",
    },
    {
      title: "Govt Approves Power Connections for Khoya Producers",
      description:
        "Maharashtra government approved agricultural power connections for khoya producers to reduce deforestation and production costs.",
      link: "https://timesofindia.indiatimes.com/city/aurangabad/maharashtra-govts-nod-to-agricultural-power-connection-to-khoya-producers-to-save-trees-lower-costs/articleshow/119952173.cms",
    },
    {
      title: "Climate Crisis Leads to Massive Crop Losses",
      description:
        "Over the past 5 years, Maharashtra lost 36 million hectares of crops due to climate change events, affecting 50 lakh+ farmers.",
      link: "https://www.hindustantimes.com/cities/pune-news/climate-crisis-causing-massive-crop-losses-for-maharashtra-farmers-101682620420430.html",
    },
    {
      title: "Sugar Output Declines Due to Drought",
      description:
        "India's sugar production dropped 15.5% YOY, with Maharashtra and Karnataka facing reduced yields from dry spells.",
      link: "https://www.reuters.com/markets/commodities/indian-sugar-output-down-155-yr-on-yr-cane-yields-fall-trade-body-says-2025-01-02/",
    },
    {
      title: "Farmer Groups Protest for Fair Crop Prices in Maharashtra",
      description:
        "Farmers from various districts gathered to demand implementation of fair pricing mechanisms and timely procurement.",
      link: "https://indianexpress.com/article/cities/mumbai/maharashtra-farmers-protest-demand-fair-crop-prices-9245112/"
    },
    {
      title: "Government Extends Drip Irrigation Subsidy Scheme",
      description:
        "To tackle water scarcity, the state has extended subsidies for installing drip irrigation systems in arid regions.",
      link: "https://www.livemint.com/news/india/maharashtra-extends-drip-irrigation-subsidy-scheme-11707383981232.html"
    },
    {
      title: "AI Model Helps Predict Crop Yield Accurately",
      description:
        "An AI-powered forecasting system introduced in Maharashtra claims to predict crop yields with over 90% accuracy.",
      link: "https://www.business-standard.com/article/economy-policy/maharashtra-ai-crop-prediction-2025-117040401201_1.html"
    },
    {
      title: "Nashik Grape Exports Break Records",
      description:
        "Grape farmers in Nashik celebrated record exports this season driven by favorable weather and international demand.",
      link: "https://timesofindia.indiatimes.com/city/nashik/nashik-grape-export-breaks-record-2025/articleshow/119761211.cms"
    },
    {
      title: "Organic Farming Sees Surge in Kolhapur",
      description:
        "Kolhapur district reports over 5,000 farmers shifting to organic farming as demand for chemical-free produce rises.",
      link: "https://economictimes.indiatimes.com/news/economy/agriculture/kolhapur-farmers-embrace-organic-farming-2025/articleshow/119789512.cms"
    }
  ];

const News = () => {
  return (
    <>

    <Navbar />
    <div className="p-6 md:p-10 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8 text-green-700">
        📰 Latest Agricultural News
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsItems.map((news, index) => (
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            key={index}
          >
            <Card className="rounded-2xl shadow-lg h-full">
              <CardContent className="p-5">
                <h2 className="text-xl font-semibold text-green-800 mb-3">
                  {news.title}
                </h2>
                <p className="text-sm text-gray-600 mb-4">{news.description}</p>
                <a
                  href={news.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 flex items-center hover:underline"
                >
                  Read More <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
    </>
  );
};

export default News;
