import React, { useEffect, useRef } from "react"
import Chart from "chart.js/auto"

const PredictionChart = ({ predictions }) => {
	const chartRef = useRef(null)
	const chartInstance = useRef(null)

	useEffect(() => {
		// If no predictions data or DOM element not ready, return
		if (!predictions.length || !chartRef.current) return

		// Clean up previous chart instance if it exists
		if (chartInstance.current) {
			chartInstance.current.destroy()
		}

		// Prepare data for the chart
		const months = predictions.map((item) => item.Month)
		const prices = predictions.map((item) => item["Predicted Price"])

		// Create new chart
		const ctx = chartRef.current.getContext("2d")
		chartInstance.current = new Chart(ctx, {
			type: "line",
			data: {
				labels: months,
				datasets: [
					{
						label: "Predicted Price (₹/Quintal)",
						data: prices,
						borderColor: "rgb(75, 192, 192)",
						backgroundColor: "rgba(75, 192, 192, 0.2)",
						borderWidth: 2,
						tension: 0.1,
						pointRadius: 3,
						pointHoverRadius: 6,
						fill: true,
					},
				],
			},
			options: {
				responsive: true,
				maintainAspectRatio: false,
				plugins: {
					title: {
						display: true,
						text: "Agricultural Price Prediction Trend",
						font: {
							size: 16,
							weight: "bold",
						},
					},
					tooltip: {
						callbacks: {
							label: function (context) {
								return `₹ ${context.parsed.y.toFixed(2)}`
							},
						},
					},
					legend: {
						position: "top",
					},
				},
				scales: {
					y: {
						beginAtZero: false,
						title: {
							display: true,
							text: "Price (₹/Quintal)",
						},
						ticks: {
							callback: function (value) {
								return "₹ " + value
							},
						},
					},
					x: {
						title: {
							display: true,
							text: "Month",
						},
					},
				},
			},
		})

		// Cleanup function
		return () => {
			if (chartInstance.current) {
				chartInstance.current.destroy()
			}
		}
	}, [predictions])

	return (
		<div className="w-full h-96 mt-6 mb-8">
			<canvas ref={chartRef}></canvas>
		</div>
	)
}

export default PredictionChart
