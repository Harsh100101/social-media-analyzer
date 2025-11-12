import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import UploadCard from "./components/UploadCard";
import PdfUpload from "./components/PdfUpload";
import VideoUpload from "./components/VideoUpload";
import Loader from "./components/Loader";
import ResultPanel from "./components/ResultPanel";
import ProgressBar from "./components/ProgressBar";
import Footer from "./components/Footer";
import { lightTheme, darkTheme } from "./theme";
import "./index.css";

export default function App() {
	const [theme, setTheme] = useState(
		() => localStorage.getItem("theme") || "light"
	);
	const [loading, setLoading] = useState(false);
	const [text, setText] = useState("");
	const [suggestions, setSuggestions] = useState([]);
	const [progress, setProgress] = useState(0);

	const current = theme === "light" ? lightTheme : darkTheme;

	// Apply theme changes
	useEffect(() => {
		document.body.style.background = current.background;
		document.body.style.color = current.text;
		localStorage.setItem("theme", theme);
	}, [theme, current]);

	const toggleTheme = () =>
		setTheme((prev) => (prev === "light" ? "dark" : "light"));

	// ---------------- TEXT ANALYZER ----------------
	const analyzeText = (uploadedText) => {
		setLoading(true);
		setTimeout(() => {
			setText(uploadedText);
			const hints = [];

			const text = uploadedText.trim();
			const words = text.split(/\s+/);
			const hashtags = (text.match(/#[a-zA-Z0-9_]+/g) || []).length;
			const mentions = (text.match(/@[a-zA-Z0-9_]+/g) || []).length;
			const emojis = (text.match(/[\u{1F600}-\u{1F64F}]/gu) || []).length;

			// --- Length check
			if (text.length < 80)
				hints.push("Your post is too short — add more context.");
			if (text.length > 400)
				hints.push(
					"Your post is quite long — shorten it for better readability."
				);

			// --- Hashtags & Mentions
			if (hashtags === 0)
				hints.push(
					"Add 3–5 trending hashtags for better reach (#socialmedia #growth)."
				);
			if (mentions === 0)
				hints.push(
					"Tag relevant creators or brands using @mentions for visibility."
				);

			// --- Emojis
			if (emojis === 0)
				hints.push(
					"Add a few emojis to express tone or emotion (🔥💡📈)."
				);

			// --- Question/CTA Detection
			const hasQuestion = /\?/g.test(text);
			const hasSoftQuestion =
				/(what do you think|let me know|your thoughts|comment below|share your opinion|tell me|drop a comment)/i.test(
					text
				);
			const hasCTA =
				/(follow|subscribe|check|click|share|join|watch|visit)/i.test(
					text
				);

			if (hasQuestion || hasSoftQuestion) {
				hints.push(
					"✅ Great! You ended with an engaging question to spark discussion."
				);
			} else {
				hints.push(
					"End your post with a question or poll — it increases comments and visibility."
				);
			}

			if (!hasCTA && !hasSoftQuestion) {
				hints.push(
					"Add a gentle call-to-action like 'Let me know your thoughts!' or 'Share your opinion below!'"
				);
			}

			// --- Tone
			if (!/[!?]/.test(text))
				hints.push(
					"Add expressive punctuation (!) or a question (?) to sound more natural."
				);

			// --- Keyword frequency
			const keywordFreq = {};
			const keywordList = text
				.toLowerCase()
				.match(/\b[a-z]{4,}\b/g)
				?.filter(
					(w) =>
						![
							"this",
							"that",
							"with",
							"from",
							"your",
							"they",
							"them",
							"been",
							"what",
							"have",
							"more",
							"also",
						].includes(w)
				);
			keywordList?.forEach(
				(w) => (keywordFreq[w] = (keywordFreq[w] || 0) + 1)
			);
			const topKeywords = Object.entries(keywordFreq)
				.sort((a, b) => b[1] - a[1])
				.slice(0, 5)
				.map(([w]) => w);
			if (topKeywords.length)
				hints.push(`Top keywords detected: ${topKeywords.join(", ")}.`);

			// --- Sentiment
			const positive =
				/(great|amazing|excited|love|happy|fun|awesome)/i.test(text);
			const negative = /(bad|angry|sad|hate|issue|problem)/i.test(text);
			if (positive) hints.push("Tone: Positive & engaging");
			else if (negative)
				hints.push(
					"Tone: Cautious or negative — balance with positivity."
				);
			else
				hints.push(
					"Tone: Neutral — consider adding more emotion or personality."
				);

			// --- Engagement score
			let score = 50;
			if (hashtags > 0) score += 10;
			if (mentions > 0) score += 10;
			if (emojis > 0) score += 10;
			if (hasQuestion || hasSoftQuestion) score += 10;
			if (hasCTA) score += 10;
			if (score > 100) score = 100;
			hints.push(`💬 Estimated engagement potential: ${score}/100`);

			setSuggestions(hints);
			setLoading(false);
		}, 1000);
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

	// ---------------- VIDEO ANALYZER ----------------
	async function analyzeVideo(videoFile) {
		try {
			setLoading(true);
			setProgress(10);
			setSuggestions(["🎙️ Uploading video to AssemblyAI..."]);

			// Upload
			const uploadRes = await fetch(
				"https://api.assemblyai.com/v2/upload",
				{
					method: "POST",
					headers: {
						authorization: import.meta.env.VITE_ASSEMBLYAI_API_KEY,
					},
					body: videoFile,
				}
			);
			if (!uploadRes.ok)
				throw new Error(`Upload failed: ${uploadRes.statusText}`);
			const uploadData = await uploadRes.json();
			const uploadUrl = uploadData.upload_url;
			console.log("✅ Upload successful:", uploadUrl);

			setProgress(40);
			setSuggestions(["🧠 Transcribing speech to text..."]);

			// Request transcription
			const transcriptRes = await fetch(
				"https://api.assemblyai.com/v2/transcript",
				{
					method: "POST",
					headers: {
						authorization: import.meta.env.VITE_ASSEMBLYAI_API_KEY,
						"content-type": "application/json",
					},
					body: JSON.stringify({ audio_url: uploadUrl }),
				}
			);

			const transcriptData = await transcriptRes.json();
			if (!transcriptData.id)
				throw new Error("Could not create transcription job.");
			console.log("🪄 Transcription job created:", transcriptData.id);

			// Poll for completion
			setProgress(60);
			let status = transcriptData.status;
			let transcription = "";

			while (status !== "completed" && status !== "error") {
				const poll = await fetch(
					`https://api.assemblyai.com/v2/transcript/${transcriptData.id}`,
					{
						headers: {
							authorization: import.meta.env
								.VITE_ASSEMBLYAI_API_KEY,
						},
					}
				);
				const json = await poll.json();
				status = json.status;
				if (status === "completed") transcription = json.text;
				setProgress((p) => Math.min(p + 10, 95));
				await new Promise((r) => setTimeout(r, 5000));
			}

			if (status === "completed") {
				setProgress(100);
				setSuggestions((prev) => [
					...prev,
					"✅ Transcription complete! Analyzing text...",
				]);
				analyzeText(transcription);
			} else throw new Error("Transcription failed.");
		} catch (error) {
			console.error("❌ Error during transcription:", error);
			setSuggestions(["❌ Error during transcription: " + error.message]);
		} finally {
			setLoading(false);
			setTimeout(() => setProgress(0), 3000);
		}
	}

	// ---------------- UI ----------------
	return (
		<div
			className="app-container fade-theme"
			style={{ background: current.background, color: current.text }}
		>
			<Header
				theme={theme}
				toggleTheme={toggleTheme}
				accent={current.accent}
			/>

			<main className="main-section">
				<UploadCard
					theme={current}
					analyzeText={analyzeText}
					loading={loading}
				/>
				<VideoUpload theme={current} onAnalyze={analyzeVideo} />
				<PdfUpload theme={current} onAnalyze={analyzeText} />

				{/* ✅ Show progress bar during upload/transcription */}
				{progress > 0 && progress < 100 && (
					<ProgressBar
						progress={progress}
						message={
							suggestions[suggestions.length - 1] ||
							"Processing..."
						}
					/>
				)}

				{loading && <Loader accent={current.accent} />}
				{!loading && text && (
					<ResultPanel
						theme={current}
						text={text}
						suggestions={suggestions}
					/>
				)}
			</main>

			<Footer theme={current} />
		</div>
	);
}
