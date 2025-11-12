import React from "react";

export default function Header({ theme, toggleTheme, accent }) {
	return (
		<header
			className="header"
			style={{ borderBottom: `2px solid ${accent}` }}
		>
			<h1>Social Media Content Analyzer</h1>
			<button
				className="theme-toggle"
				onClick={toggleTheme}
				style={{
					background: accent,
					color: theme === "light" ? "#fff" : "#000",
				}}
			>
				{theme === "light" ? "🌙 Dark" : "☀️ Light"}
			</button>
		</header>
	);
}
