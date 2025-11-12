🎥 Social Media Video Analyzer

AI-powered tool to analyze your text and video content for engagement optimization.


(Example screenshot: Video being analyzed and progress bar visible)

🚀 Overview

The Social Media Video Analyzer helps creators and marketers enhance their content engagement.
It uses AssemblyAI’s transcription API to extract speech from videos and analyzes the text using NLP-based heuristics to provide smart improvement suggestions.

✨ Features

📤 Upload and analyze Text, PDF, or Video content

🧠 AI-powered speech-to-text transcription via AssemblyAI

🔍 Smart insights including:

Hashtag & Mention suggestions

Call-to-Action (CTA) detection

Question and engagement tone detection

Keyword frequency analysis

Sentiment & readability evaluation

🌙 Dark / Light Mode toggle

📊 Dynamic Progress Bar for upload and transcription status

🧩 Tech Stack
Layer	Technology
Frontend	React + Vite
Backend	AssemblyAI API (for transcription)
Styling	Custom CSS
Deployment	GitHub Pages / Vercel
🛠️ Setup Instructions
1️⃣ Clone the repository
git clone https://github.com/Harsh100101/social-media-analyzer.git
cd social-media-analyzer

2️⃣ Install dependencies
npm install

3️⃣ Create your .env file

⚠️ Do NOT commit this file to GitHub — your .gitignore already prevents it.

In the project root (/), create a .env file:

VITE_ASSEMBLYAI_API_KEY="your_assemblyai_api_key_here"

4️⃣ Run the app
npm run dev


Visit 👉 http://localhost:5173

📸 Screenshots
Feature	Screenshot
🏠 Home Page	

📤 Upload Section	

🎥 Video Upload & Progress	

📊 Analysis Result	

📷 You can add screenshots in a folder named /screenshots inside your project.

🌐 Deployment (Optional)
🚀 Deploy on Vercel

Sign in to https://vercel.com

Import your GitHub repo

Add your .env key in Vercel’s Environment Variables section

Click Deploy

🌍 Deploy on GitHub Pages

Install plugin

npm install gh-pages --save-dev


Add this to your package.json:

"homepage": "https://Harsh100101.github.io/social-media-analyzer",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}


Deploy:

npm run deploy

🔒 Security Notes

Your .env file should never be pushed to GitHub.

The API key is stored only in your local environment or deployment platform.

Ensure CORS and API key permissions are correctly configured in your AssemblyAI dashboard.

🧑‍💻 Author

Harsh
Frontend Developer & AI Enthusiast
GitHub Profile →
