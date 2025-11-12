import React from "react";

export default function Footer({ theme }) {
	return (
		<footer className="footer" style={{ color: theme.subtext }}>
			<p>
				© 2025 Harsh | Social Media Video Analyzer | Built with React &
				Canva Design
			</p>
		</footer>
	);
}
