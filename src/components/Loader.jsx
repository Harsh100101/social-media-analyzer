import React from "react";

export default function Loader({ accent }) {
	return (
		<div className="loader-container">
			<div
				className="spinner"
				style={{ borderTop: `4px solid ${accent}` }}
			></div>
			<p>Analyzing your content...</p>
		</div>
	);
}
