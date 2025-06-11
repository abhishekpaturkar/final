import { useEffect, useRef } from "react"
import Chart from "chart.js/auto"

const ComparisonChart = ({ comparisondata }) => {
	const chartRef = useRef(null)
	const chartInstance = useRef(null)

	useEffect(() => {
		if (!comparisondata.length || !chartRef.current) return

		// Destroy old chart if it exists
		if (chartInstance.current) {
			chartInstance.current.destroy()
		}

		const ctx = chartRef.current.getContext("2d")

		const commodities = [
			{ name: "Potato", color: "rgba(255, 99, 132, 1)" },
			{ name: "Onion", color: "rgba(54, 162, 235, 1)" },
			{ name: "Wheat", color: "rgba(255, 206, 86, 1)" },
			{ name: "Rice", color: "rgba(75, 192, 192, 1)" },
			{ name: "Maize", color: "rgba(153, 102, 255, 1)" },
			{ name: "Jowar", color: "rgba(255, 159, 64, 1)" },
		]

		const months = comparisondata.map((item) => item.Month)

		const datasets = commodities.map((commodity) => ({
			label: `${commodity.name} (₹/Quintal)`,
			data: comparisondata.map((item) => item[commodity.name]),
			borderColor: commodity.color,
			backgroundColor: commodity.color.replace("1)", "0.2)"),
			borderWidth: 2,
			tension: 0.1,
			pointRadius: 3,
			pointHoverRadius: 6,
			fill: false,
		}))

		chartInstance.current = new Chart(ctx, {
			type: "line",
			data: {
				labels: months,
				datasets: datasets,
			},
			options: {
				responsive: true,
				maintainAspectRatio: false,
				plugins: {
					title: {
						display: true,
						text: "Comparison of Predicted Prices for Commodities",
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

		return () => {
			if (chartInstance.current) {
				chartInstance.current.destroy()
			}
		}
	}, [comparisondata])

	return (
		<div className="w-full h-96 mt-6 mb-8">
			<canvas ref={chartRef}></canvas>
		</div>
	)
}

export default ComparisonChart
