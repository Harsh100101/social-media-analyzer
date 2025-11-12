import React, { useState } from "react";
import * as pdfjsLib from "pdfjs-dist";

// 👇 Correct Vite-compatible worker import
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.mjs?url";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

export default function PdfUpload({ theme, onAnalyze }) {
	const [loading, setLoading] = useState(false);
	const [textExtracted, setTextExtracted] = useState("");
	const [pdfFile, setPdfFile] = useState(null);

	const handleFileChange = async (e) => {
		const file = e.target.files[0];
		if (!file) return;

		setPdfFile(file);
		setLoading(true);

		try {
			const text = await extractTextFromPDF(file);
			setTextExtracted(text);
			onAnalyze(text);
		} catch (error) {
			console.error("Error reading PDF:", error);
			alert("Failed to read PDF file.");
		} finally {
			setLoading(false);
		}
	};

	async function extractTextFromPDF(file) {
		const reader = new FileReader();

		return new Promise((resolve, reject) => {
			reader.onload = async () => {
				try {
					const typedArray = new Uint8Array(reader.result);
					const pdf = await pdfjsLib.getDocument({ data: typedArray })
						.promise;
					let fullText = "";

					for (let i = 1; i <= pdf.numPages; i++) {
						const page = await pdf.getPage(i);
						const textContent = await page.getTextContent();
						const text = textContent.items
							.map((item) => item.str)
							.join(" ");
						fullText += text + "\n";
					}

					resolve(fullText);
				} catch (err) {
					reject(err);
				}
			};
			reader.readAsArrayBuffer(file);
		});
	}

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
			}}
		>
			<h3>📄 Upload a PDF File</h3>
			<input
				type="file"
				accept="application/pdf"
				onChange={handleFileChange}
				style={{
					marginTop: "10px",
					border: `1px solid ${theme.accent}`,
					padding: "10px",
					borderRadius: "8px",
				}}
			/>
			{loading && (
				<p style={{ color: theme.accent }}>Extracting text...</p>
			)}
			{textExtracted && (
				<p style={{ fontSize: "12px", marginTop: "10px" }}>
					✅ PDF Text Extracted Successfully!
				</p>
			)}
		</div>
	);
}
