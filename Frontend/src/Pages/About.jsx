import React from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Card, CardContent } from "../Components/ui/card"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"

const teamMembers = [
	{
		name: "Hariom Malode",
		img: "src/assets/Team/Hari.png",
	},
	{
		name: "Abhishek Paturkar",
		img: "src/assets/Team/Abhi.png",
	},
	{
		name: "Yash Marane",
		img: "src/assets/Team/Yash.png",
	},
	{
		name: "Kapil Kulkarni",
		img: "src/assets/Team/Kapil.png",
	},
]

const About = () => {
	return (
		<>
			<Navbar />
			<div className="p-6 max-w-6xl mx-auto text-center">
				<br />
				<h1 className="text-4xl font-bold mb-4">
					Market Intelligence System for Agricultural Commodity Price
					Forecasting
				</h1>
				<p className="text-lg text-gray-600 mb-8">
					Our project aims to revolutionize the way agricultural prices are
					predicted using Deep Learning. It assists farmers and stakeholders in
					making informed decisions with the help of accurate forecasts.
				</p>

				<Carousel
					autoPlay
					infiniteLoop
					showThumbs={false}
					className="mb-10 rounded-2xl overflow-hidden shadow-lg"
				>
					<div>
						<img
							src="https://hyperthings.ai/wp-content/uploads/2021/11/Smart-Agriculture.jpg"
							alt="Agriculture"
							className="h-64 w-auto mx-auto"
						/>
						<p className="legend">Smart Agriculture with AI</p>
					</div>
					<div>
						<img
							src="https://www.logility.com/wp-content/uploads/2023/06/Top-3-Demand-Forecasting-Mistakes-to-Avoid-Header-2048x1024.png.webp"
							alt="Data"
							className="h-64 w-auto mx-auto"
						/>
						<p className="legend">Forecasting Using Deep Learning</p>
					</div>
					<div>
						<img
							src="https://b1721680.smushcdn.com/1721680/wp-content/uploads/2021/04/Plowing-AI-and-IoT-for-a-Flourished-Farm-Primary-image-896x448.jpg?lossy=0&strip=1&webp=0"
							alt="Farmers Market"
							className="h-64 w-auto mx-auto"
						/>
						<p className="legend">Empowering Farmers</p>
					</div>
				</Carousel>

				<section className="mb-12">
					<h2 className="text-2xl font-semibold mb-4">Team भविष्कृषी</h2>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
						{teamMembers.map((member, idx) => (
							<Card key={idx} className="shadow-md">
								<img
									src={member.img}
									alt={member.name}
									className="rounded-t-2xl h-40 w-full object-cover"
								/>
								<CardContent>
									<p className="font-semibold text-lg text-center">
										{member.name}
									</p>
								</CardContent>
							</Card>
						))}
					</div>
				</section>

				<section className="text-left">
					<h2 className="text-2xl font-semibold mb-4">Project Highlights</h2>
					<ul className="list-disc list-inside text-gray-700 space-y-2">
						<li>Price forecasting using LSTM & ARIMA models.</li>
						<li>Integrates weather, historical data, and seasonality.</li>
						<li>User-friendly interface using React.js and Tailwind CSS.</li>
						<li>Deployable on cloud platforms (AWS EC2).</li>
						<li>Localized forecast with potential for regional expansion.</li>
					</ul>

					<h2 className="text-2xl font-semibold mt-8 mb-4">Future Scope</h2>
					<ul className="list-disc list-inside text-gray-700 space-y-2">
						<li>Support for more commodities and mobile app integration.</li>
						<li>Multilingual interface for rural accessibility.</li>
						<li>Notification system for price alerts.</li>
						<li>Government data and subsidy integration.</li>
					</ul>
				</section>
			</div>
			<Footer />
		</>
	)
}

export default About
