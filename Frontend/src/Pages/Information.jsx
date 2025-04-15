import React from "react"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import CommodityCard from "../Components/CommodityCard"

const commoditiesData = [
	{
		name: "Rice (धान)",
		description:
			"Rice is one of the major food crops of Maharashtra, particularly grown in the Konkan coastal regions. It's a staple food for many people in the state and requires significant water for cultivation.",
		image: "src/assets/Crops/Rice_600_800.jpg",
		sowingSeason: "June to July (during monsoon)",
		harvestPeriod: "October to November",
		soilType: "Clay or clay loam soils with good water retention capacity",
		rainfallRequired: "1000-1200 mm annually",
		temperature: "22-32°C during growing season",
		waterRequirement:
			"High - requires standing water during most of the growing period",
		maharashtraInfo:
			"In Maharashtra, rice is primarily cultivated in the Konkan region, Kolhapur, Satara, and parts of Vidarbha. The state government offers subsidies for paddy cultivation and has schemes to promote modern rice farming techniques. Varieties like Ratnagiri, Sindhudurg, and Ambemohar are famous local varieties.",
	},
	{
		name: "Wheat (गहू)",
		description:
			"Wheat is a major rabi (winter) crop in Maharashtra. It's grown primarily in the central and eastern regions of the state where winters are cooler and irrigation facilities are available.",
		image: "src/assets/Crops/Wheat_600_800.jpg",
		sowingSeason: "October to November",
		harvestPeriod: "February to March",
		soilType: "Well-drained loam or clay loam soils",
		rainfallRequired: "450-650 mm annually",
		temperature:
			"20-25°C during growing season, cooler temperatures (15-20°C) during grain development",
		waterRequirement:
			"Medium - requires 4-6 irrigations during the growing season",
		maharashtraInfo:
			"In Maharashtra, wheat is mainly grown in Ahmednagar, Pune, Nashik, and parts of Vidarbha and Marathwada. The state agricultural universities have developed specific varieties suitable for Maharashtra's climate. The state government provides MSP (Minimum Support Price) and procurement support to wheat farmers.",
	},
	{
		name: "Potato (बटाटा)",
		description:
			"Potato is an important vegetable crop in Maharashtra, grown primarily in the cooler regions and highlands of the state. It's a versatile crop with high yield potential.",
		image: "src/assets/Crops/Potato_600_800.jpg",
		sowingSeason: "October to November (rabi season)",
		harvestPeriod: "January to February",
		soilType: "Well-drained sandy loam to loamy soils rich in organic matter",
		rainfallRequired: "500-700 mm annually",
		temperature: "15-25°C during growing season",
		waterRequirement: "Medium - requires regular but moderate irrigation",
		maharashtraInfo:
			"In Maharashtra, potatoes are primarily grown in Pune, Satara, Nashik, and the highlands of Western Maharashtra. The Agricultural Technology Management Agency (ATMA) provides guidance to potato farmers in the state. Varieties like Kufri Jyoti and Kufri Pukhraj are commonly grown in Maharashtra.",
	},
	{
		name: "Onion (कांदा)",
		description:
			"Maharashtra is the largest onion-producing state in India. The crop is known for its quality and is exported to various countries. Onions are grown in all three seasons in different parts of the state.",
		image: "src/assets/Crops/Onion_600_800.jpg",
		sowingSeason:
			"Kharif: May-June, Rabi: October-November, Summer: January-February",
		harvestPeriod:
			"Kharif: October-November, Rabi: March-April, Summer: May-June",
		soilType:
			"Well-drained sandy loam to clay loam soils with good organic content",
		rainfallRequired: "650-750 mm annually",
		temperature: "13-24°C for optimal growth",
		waterRequirement:
			"Medium - requires regular irrigation especially during bulb formation",
		maharashtraInfo:
			"Maharashtra produces about 30% of India's onions, primarily in Nashik, Ahmednagar, Pune, and Solapur districts. The Nashik region, particularly Lasalgaon, hosts Asia's largest onion market. The state government operates the Market Intervention Scheme during price fluctuations. Varieties like Nashik Red, Baswant 780, and Phule Samarth are popular in Maharashtra.",
	},
	{
		name: "Jowar (Sorghum) (ज्वारी)",
		description:
			"Jowar is a drought-resistant crop that's extensively cultivated in the dry regions of Maharashtra. It's a staple food in many parts of the state and also used as fodder for livestock.",
		image: "src/assets/Crops/Jowar_600_800.jpg",
		sowingSeason: "Kharif: June-July, Rabi: September-October",
		harvestPeriod: "Kharif: October-November, Rabi: January-February",
		soilType: "Deep, well-drained black cotton soils (regur soils)",
		rainfallRequired: "400-600 mm annually",
		temperature: "25-32°C during growing season",
		waterRequirement:
			"Low - drought resistant crop that requires minimal irrigation",
		maharashtraInfo:
			"Jowar is widely grown in Marathwada and Western Maharashtra, particularly in Solapur, Ahmednagar, and Pune districts. The rabi jowar from Maharashtra is known for its superior quality. The state government has special schemes to promote millets including jowar. Maharashtra Agricultural Universities have developed drought-resistant varieties like Phule Vasudha and Phule Revati.",
	},
	{
		name: "Maize (मका)",
		description:
			"Maize is becoming an increasingly important crop in Maharashtra, used both as food and feed. It's grown in various parts of the state and is relatively resistant to climate variations.",
		image: "src/assets/Crops/Maize_600_800.jpg",
		sowingSeason: "Kharif: June-July, Rabi: October-November",
		harvestPeriod: "Kharif: September-October, Rabi: February-March",
		soilType:
			"Well-drained sandy loam to loamy soils with good organic content",
		rainfallRequired: "500-800 mm annually",
		temperature: "21-27°C for optimal growth",
		waterRequirement:
			"Medium - requires regular irrigation especially during tasseling and silking stages",
		maharashtraInfo:
			"In Maharashtra, maize is primarily grown in Ahmednagar, Pune, Aurangabad, and parts of Vidarbha. The state promotes hybrid maize cultivation through various schemes. The Directorate of Maize Research provides technical support to farmers. Varieties like Rajarshi, Deccan, and Pioneer hybrids are popular in Maharashtra.",
	},
]

const CommoditiesInformation = () => {
	return (
		<>
			<Navbar />
			<div className="p-6 max-w-7xl mx-auto">
				<h1 className="text-4xl font-bold text-center mb-4">
					🌾 Crop Information Guide
				</h1>
				<p className="text-center text-gray-600 mb-12">
					Comprehensive information about major crops grown in Maharashtra,
					their cultivation practices, and specific requirements tailored to
					Maharashtra's agricultural conditions.
				</p>

				{commoditiesData.map((commodity, index) => (
					<CommodityCard key={index} commodity={commodity} />
				))}

				<div className="bg-green-50 p-6 rounded-lg mt-8">
					<h2 className="text-2xl font-bold text-green-700 mb-4">
						Agricultural Advisory
					</h2>
					<p className="text-gray-700">
						The information provided is general guidance for Maharashtra state.
						For specific advice tailored to your local conditions, please
						consult with your district agricultural officer or Krishi Vigyan
						Kendra. Weather patterns and optimal growing conditions may vary
						within different regions of Maharashtra.
					</p>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default CommoditiesInformation
