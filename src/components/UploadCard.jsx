import React, { useState } from "react";

export default function UploadCard({ theme, analyzeText, loading }) {
	const [input, setInput] = useState("");

	const handleUpload = () => {
		if (!input.trim()) return;
		analyzeText(input);
		setInput("");
	};

	return (
		<div
			className="upload-card"
			style={{
				background: theme.card,
				boxShadow: `0 4px 12px ${theme.shadow}`,
			}}
		>
			<h2 style={{ color: theme.text }}>Upload / Paste Content</h2>
			<textarea
				value={input}
				onChange={(e) => setInput(e.target.value)}
				placeholder="Paste your social media content or extracted text here..."
				style={{
					background: theme.background,
					color: theme.text,
					border: `1px solid ${theme.accent}`,
				}}
			/>
			<button
				onClick={handleUpload}
				disabled={loading}
				style={{
					background: theme.accent,
					color: "#fff",
				}}
			>
				{loading ? "Analyzing..." : "Analyze Content"}
			</button>
		</div>
	);
}
