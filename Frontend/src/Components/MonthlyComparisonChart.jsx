import React, { useEffect, useRef } from "react"
import Chart from "chart.js/auto"

const MonthlyComparisonChart = ({ predictions }) => {
	const chartRef = useRef(null)
	const chartInstance = useRef(null)

	useEffect(() => {
		// If no predictions data or DOM element not ready, return
		if (!predictions.length || !chartRef.current) return

		// Clean up previous chart instance if it exists
		if (chartInstance.current) {
			chartInstance.current.destroy()
		}

		// Organize data by month for comparison (2025 vs 2026)
		const months = [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		]
		const data2025 = new Array(12).fill(null)
		const data2026 = new Array(12).fill(null)

		// Process predictions data
		predictions.forEach((item) => {
			const [year, month] = item.Month.split("-")
			const monthIndex = parseInt(month) - 1 // Convert month to 0-based index

			if (year === "2025") {
				data2025[monthIndex] = item["Predicted Price"]
			} else if (year === "2026") {
				data2026[monthIndex] = item["Predicted Price"]
			}
		})

		// Create bar chart
		const ctx = chartRef.current.getContext("2d")
		chartInstance.current = new Chart(ctx, {
			type: "bar",
			data: {
				labels: months,
				datasets: [
					{
						label: "2025 Prices",
						data: data2025,
						backgroundColor: "rgba(54, 162, 235, 0.7)",
						borderColor: "rgba(54, 162, 235, 1)",
						borderWidth: 1,
					},
					{
						label: "2026 Prices",
						data: data2026,
						backgroundColor: "rgba(255, 99, 132, 0.7)",
						borderColor: "rgba(255, 99, 132, 1)",
						borderWidth: 1,
					},
				],
			},
			options: {
				responsive: true,
				maintainAspectRatio: false,
				plugins: {
					title: {
						display: true,
						text: "Monthly Price Comparison: 2025 vs 2026",
						font: {
							size: 16,
							weight: "bold",
						},
					},
					tooltip: {
						callbacks: {
							label: function (context) {
								return `${context.dataset.label}: ₹ ${context.parsed.y.toFixed(
									2
								)}`
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

export default MonthlyComparisonChart
