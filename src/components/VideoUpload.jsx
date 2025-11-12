import React, { useState } from "react";

export default function VideoUpload({ onAnalyze, theme }) {
	const [videoFile, setVideoFile] = useState(null);
	const [preview, setPreview] = useState("");

	const handleFileChange = (e) => {
		const file = e.target.files[0];
		if (file && file.type.startsWith("video/")) {
			setVideoFile(file);
			setPreview(URL.createObjectURL(file));
		} else {
			alert("Please upload a valid video file (mp4, mov, etc.)");
		}
	};

	const handleAnalyze = () => {
		if (!videoFile) return alert("No video selected!");
		onAnalyze(videoFile);
	};

	return (
		<div
			className="upload-card"
			style={{
				background: theme.card,
				boxShadow: `0 4px 12px ${theme.shadow}`,
			}}
		>
			<h2 style={{ color: theme.text }}>Upload Video</h2>
			<input type="file" accept="video/*" onChange={handleFileChange} />
			{preview && (
				<video
					src={preview}
					controls
					width="100%"
					style={{ borderRadius: "10px", marginTop: "10px" }}
				></video>
			)}
			<button
				onClick={handleAnalyze}
				style={{
					background: theme.accent,
					color: "#fff",
					marginTop: "10px",
					border: "none",
					borderRadius: "8px",
					padding: "10px 18px",
					cursor: "pointer",
				}}
			>
				Analyze Video
			</button>
		</div>
	);
}
