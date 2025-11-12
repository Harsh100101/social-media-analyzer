import React from "react";
import ProgressBar from "./ProgressBar";

export default function ResultPanel({ theme, text, suggestions, progress }) {
	return (
		<div className="result-container">
			{/* ✅ Progress bar goes inside the JSX */}
			{progress > 0 && progress < 100 && (
				<ProgressBar
					progress={progress}
					message={suggestions[suggestions.length - 1]}
				/>
			)}

			<div
				className="result-card"
				style={{
					background: theme.card,
					boxShadow: `0 2px 8px ${theme.shadow}`,
				}}
			>
				<h3>Extracted Text</h3>
				<p>{text}</p>
			</div>

			<div
				className="suggestions-card"
				style={{
					background: theme.card,
					boxShadow: `0 2px 8px ${theme.shadow}`,
				}}
			>
				<h3>Suggestions</h3>
				{suggestions.length ? (
					<ul>
						{suggestions.map((s, i) => (
							<li key={i}>{s}</li>
						))}
					</ul>
				) : (
					<p>No specific suggestions found.</p>
				)}
			</div>
		</div>
	);
}
