import React from "react"

const CommodityCard = ({ commodity }) => {
	return (
		<div className="w-full bg-white rounded-lg shadow-md overflow-hidden mb-8 flex flex-col md:flex-row">
			<div className="md:w-1/3 h-64 md:h-auto">
				<img
					src={commodity.image}
					alt={commodity.name}
					className="w-full h-full object-cover"
				/>
			</div>
			<div className="md:w-2/3 p-6">
				<h2 className="text-2xl font-bold text-green-700 mb-4">
					{commodity.name}
				</h2>
				<p className="text-gray-700 mb-4">{commodity.description}</p>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div>
						<h3 className="text-lg font-semibold text-green-600 mb-2">
							Cultivation Information
						</h3>
						<ul className="list-disc pl-5 space-y-1">
							<li>
								<span className="font-medium">Sowing Season:</span>{" "}
								{commodity.sowingSeason}
							</li>
							<li>
								<span className="font-medium">Harvesting Period:</span>{" "}
								{commodity.harvestPeriod}
							</li>
							<li>
								<span className="font-medium">Soil Type:</span>{" "}
								{commodity.soilType}
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-lg font-semibold text-green-600 mb-2">
							Growing Conditions
						</h3>
						<ul className="list-disc pl-5 space-y-1">
							<li>
								<span className="font-medium">Rainfall Required:</span>{" "}
								{commodity.rainfallRequired}
							</li>
							<li>
								<span className="font-medium">Temperature:</span>{" "}
								{commodity.temperature}
							</li>
							<li>
								<span className="font-medium">Water Requirement:</span>{" "}
								{commodity.waterRequirement}
							</li>
						</ul>
					</div>
				</div>

				<div className="mt-4">
					<h3 className="text-lg font-semibold text-green-600 mb-2">
						Maharashtra Specific Information
					</h3>
					<p className="text-gray-700">{commodity.maharashtraInfo}</p>
				</div>
			</div>
		</div>
	)
}

export default CommodityCard
