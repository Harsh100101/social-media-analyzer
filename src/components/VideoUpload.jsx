import React, { useState } from "react";

export default function VideoUpload({ theme, onAnalyze }) {
	const [video, setVideo] = useState(null);
	const [loading, setLoading] = useState(false);

	const handleFileChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			setVideo(URL.createObjectURL(file));
		}
	};

	const handleAnalyze = async () => {
		if (!video) return alert("Please upload a video first!");
		setLoading(true);

		try {
			const response = await fetch(video);
			const blob = await response.blob();
			await onAnalyze(blob);
		} catch (err) {
			console.error("Error analyzing video:", err);
			alert("Failed to process video.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div
			className="upload-card"
			style={{
				background: theme.card,
				color: theme.text,
				boxShadow: `0 2px 8px ${theme.shadow}`,
				padding: "20px",
				borderRadius: "12px",
				textAlign: "center",
				margin: "20px auto",
				maxWidth: "500px",
			}}
		>
			<h3>Upload a Video</h3>

			{/* Custom File Upload Button */}
			<label
				htmlFor="video-upload"
				style={{
					display: "inline-block",
					background: theme.accent,
					color: "#fff",
					padding: "10px 16px",
					borderRadius: "8px",
					cursor: "pointer",
					fontWeight: "bold",
					marginTop: "10px",
				}}
			>
				Choose Video File
			</label>

			<input
				id="video-upload"
				type="file"
				accept="video/*"
				onChange={handleFileChange}
				style={{ display: "none" }} // hide the native input
			/>

			{video && (
				<video
					src={video}
					controls
					style={{
						width: "100%",
						maxHeight: "280px",
						objectFit: "cover",
						borderRadius: "10px",
						marginTop: "15px",
						boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
					}}
				/>
			)}

			<button
				onClick={handleAnalyze}
				disabled={!video || loading}
				style={{
					background: theme.accent,
					color: "#fff",
					padding: "10px 16px",
					border: "none",
					borderRadius: "8px",
					cursor: loading ? "not-allowed" : "pointer",
					marginTop: "15px",
					width: "100%",
					fontWeight: "bold",
					opacity: loading ? 0.6 : 1,
				}}
			>
				{loading ? "Analyzing Video..." : "Analyze Video"}
			</button>
		</div>
	);
}
