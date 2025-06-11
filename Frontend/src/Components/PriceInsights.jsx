// PriceInsights.jsx
import { useEffect, useState } from "react"

const PriceInsights = ({ predictions }) => {
	console.log("Predictions data:", predictions)
	const [insights, setInsights] = useState([])
	// State to manage loading status
	const [loading, setLoading] = useState(true)
	// State to manage any errors that occur during the API call
	const [error, setError] = useState(null)

	// The data to be sent to the Gemini API
	const historicalData = predictions

	// useEffect hook to fetch insights when the component mounts
	useEffect(() => {
		const fetchInsights = async () => {
			setLoading(true) // Set loading to true before the API call
			setError(null) // Clear any previous errors

			// Construct the prompt for the Gemini API
			const prompt = `Based on the following monthly predicted price data, generate farmer-friendly insights in a JSON array. Each object should have:
"title": A clear, short headline about the price trend (e.g., "Good Selling Opportunity in March").
"detail": A simple and actionable explanation (1–2 lines) using short month names (e.g., Jan, Feb). Mention:
Price rises or drops with specific months and values
Continuous upward or downward trends
Highest and lowest predicted prices
Suggested farmer actions like "Sell in Apr for better returns" or "Avoid selling in Feb due to low prices"
Tailor the insights to benefit farmers in planning their harvest, storage, or market timing decisions.
Format the result strictly as a JSON array of objects, no additional explanation outside the JSON.
Data:
${historicalData}

Please provide at least 6 distinct insights. Ensure currency is represented with '₹' and values are formatted to two decimal places.`

			// Define the chat history for the API request
			let chatHistory = []
			chatHistory.push({ role: "user", parts: [{ text: prompt }] })

			// Define the payload for the Gemini API call
			const payload = {
				contents: chatHistory,
				generationConfig: {
					// Specify that the response should be in JSON format
					responseMimeType: "application/json",
					// Define the schema for the JSON response
					responseSchema: {
						type: "ARRAY",
						items: {
							type: "OBJECT",
							properties: {
								title: { type: "STRING" },
								detail: { type: "STRING" },
							},
							propertyOrdering: ["title", "detail"],
						},
					},
				},
			}
            
			const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${
				import.meta.env.VITE_API_KEY
			}`

			try {
				// Make the fetch call to the Gemini API
				const response = await fetch(apiUrl, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(payload),
				})

				// Check if the response is OK
				if (!response.ok) {
					const errorData = await response.json()
					throw new Error(
						`API error: ${response.status} ${response.statusText} - ${
							errorData.error.message || "Unknown error"
						}`
					)
				}

				// Parse the JSON result
				const result = await response.json()

				// Validate the structure of the API response
				if (
					result.candidates &&
					result.candidates.length > 0 &&
					result.candidates[0].content &&
					result.candidates[0].content.parts &&
					result.candidates[0].content.parts.length > 0
				) {
					const jsonString = result.candidates[0].content.parts[0].text
					// Parse the inner JSON string
					const parsedInsights = JSON.parse(jsonString)
					setInsights(parsedInsights) // Update the insights state
				} else {
					throw new Error("Unexpected API response structure or no content.")
				}
			} catch (err) {
				console.error("Failed to fetch insights:", err)
				setError(err.message || "An unexpected error occurred.") // Set the error message
			} finally {
				setLoading(false) // Set loading to false after the API call completes
			}
		}

		fetchInsights() // Call the function to fetch insights
	}, []) // Empty dependency array means this effect runs once after the initial render

	return (
		<div>
			<div className="max-w-4xl mx-auto w-full bg-white shadow-lg rounded-2xl p-6">
				<h2 className="text-3xl font-bold text-indigo-800 mb-6 text-center">
					Price Prediction Insights
				</h2>
				{loading && (
					<div className="flex justify-center items-center h-48">
						<div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-500"></div>
						<p className="ml-4 text-indigo-700 text-lg">
							Generating insights...
						</p>
					</div>
				)}

				{error && (
					<div
						className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
						role="alert"
					>
						<strong className="font-bold">Error!</strong>
						<span className="block sm:inline"> {error}</span>
					</div>
				)}

				{!loading && !error && insights.length === 0 && (
					<p className="text-center text-gray-600 text-lg">
						No insights generated. Please try again.
					</p>
				)}

				{!loading && !error && insights.length > 0 && (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{insights.map((insight, index) => (
							<div
								key={index}
								className="bg-white shadow-md rounded-xl p-5 border-l-6 border-indigo-600 hover:shadow-xl transition-shadow duration-300 ease-in-out"
							>
								<h3 className="text-xl font-semibold text-indigo-700 mb-2">
									{insight.title}
								</h3>
								<p className="text-gray-700 text-base leading-relaxed">
									{insight.detail}
								</p>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	)
}

export default PriceInsights
