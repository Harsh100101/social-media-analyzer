import React from "react";

export default function ProgressBar({ progress, message }) {
	return (
		<div
			style={{
				width: "80%",
				maxWidth: "600px",
				margin: "10px auto",
				padding: "10px",
				borderRadius: "10px",
				background: "rgba(0,0,0,0.05)",
				textAlign: "center",
			}}
		>
			<p style={{ margin: "5px 0", fontWeight: "bold" }}>{message}</p>
			<div
				style={{
					height: "10px",
					borderRadius: "5px",
					background: "#ddd",
					overflow: "hidden",
				}}
			>
				<div
					style={{
						height: "100%",
						width: `${progress}%`,
						background: "#4caf50",
						transition: "width 0.4s ease-in-out",
					}}
				></div>
			</div>
		</div>
	);
}
