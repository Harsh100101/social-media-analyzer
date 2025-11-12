# 📄 PDF & SOCIAL MEDIA VIDEO ANALYZER - PROJECT DOCUMENTATION

---

### **1. Project Overview**

The **Social Media Video & PDF Analyzer** is an AI-powered web application designed to help creators, marketers, and professionals analyze their **social media content and PDF documents** for engagement, readability, and optimization insights. It supports text, video, and PDF uploads — analyzing each to provide data-driven suggestions for improving content quality.

---

### **2. Features**

* **Text, Video & PDF Upload:** Supports uploading written posts, videos, and PDF files.
* **AI-Powered Analysis:** Detects tone, hashtags, mentions, CTAs, keywords, and engagement potential.
* **Video Transcription:** Extracts spoken content from videos using AssemblyAI.
* **PDF Reader:** Extracts text from uploaded PDFs using `pdfjs-dist`.
* **Smart Suggestions:** Provides optimization tips for better readability and engagement.
* **Dark/Light Mode:** Seamless theme toggle for user comfort.
* **Dynamic Progress Bar:** Displays upload and analysis progress visually.

---

### **3. Technology Stack**

| Layer               | Technology Used          |
| ------------------- | ------------------------ |
| Frontend            | React + Vite             |
| PDF Parsing         | pdfjs-dist               |
| Video Transcription | AssemblyAI API           |
| Styling             | Custom CSS (Theme-based) |
| Deployment          | GitHub Pages / Vercel    |

---

### **4. Setup Instructions**

#### **Step 1: Clone the Repository**

```bash
git clone https://github.com/Harsh100101/social-media-analyzer.git
cd social-media-analyzer
```

#### **Step 2: Install Dependencies**

```bash
npm install
```

#### **Step 3: Create Environment File**

Create a file named `.env` in the root directory and add your API key:

```bash
VITE_ASSEMBLYAI_API_KEY="your_assemblyai_api_key_here"
```

⚠️ *Note: Do not commit your `.env` file to GitHub. It’s already ignored by `.gitignore`.*

#### **Step 4: Run the App Locally**

```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

### **5. Screenshots (Sample Views)**

#### 🏠 **Home Page**

Displays the upload options for text, video, and PDF.

<img width="1919" height="993" alt="Screenshot 2025-11-12 190247" src="https://github.com/user-attachments/assets/71e8fc4b-7afd-4389-9622-34376fce3667" />

#### 📤 **Video Upload with Progress Bar**

Shows real-time progress during upload and transcription.

<img width="1897" height="991" alt="image" src="https://github.com/user-attachments/assets/d0bae567-6238-4d93-80ad-85276a44b6ce" />

#### 📄 **PDF Upload Interface**

Extracts and displays text content from uploaded PDF files.

<img width="1039" height="987" alt="image" src="https://github.com/user-attachments/assets/dd68a1b1-084c-4ecd-b435-bdf29835d3e4" />

#### 📊 **Analysis Results Section**

Shows extracted text and engagement improvement suggestions.

<img width="906" height="850" alt="image" src="https://github.com/user-attachments/assets/562be1ac-a782-4565-961c-a4d77e6f1bc2" />

#### 🌙 **Dark Mode Example**

Demonstrates UI adaptability between light and dark themes.

<img width="1911" height="987" alt="image" src="https://github.com/user-attachments/assets/d0d5d6eb-f3b8-451f-8d68-3dad35795904" />

---

### **6. Deployment Instructions**

#### 🚀 **Deploy on GitHub Pages**

1. Install GitHub Pages dependency:

   ```bash
   npm install gh-pages --save-dev
   ```
2. Add this to your `package.json`:

   ```json
   "homepage": "https://Harsh100101.github.io/social-media-analyzer",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Deploy using:

   ```bash
   npm run deploy
   ```

#### 🌐 **Deploy on Vercel**

1. Visit [https://vercel.com](https://vercel.com)
2. Import your GitHub repository.
3. Add your `VITE_ASSEMBLYAI_API_KEY` under *Environment Variables*.
4. Click **Deploy**.

---

### **7. Security Notes**

* Never commit `.env` or API keys publicly.
* Validate file size before uploading to avoid large payloads.
* Limit access to sensitive API credentials.

---

### **8. Author Information**

**Developer:** Harsh
**Role:** Full Stack Developer & AI Enthusiast
**GitHub:** [https://github.com/Harsh100101](https://github.com/Harsh100101)

---

### **9. Future Enhancements**

* Add OCR support for image-based PDFs.
* Introduce multilingual transcription and translation.
* Improve NLP-based engagement analysis.
* Add real-time analytics dashboard.

---

### **10. References**

* [AssemblyAI API Documentation](https://www.assemblyai.com/docs/)
* [PDF.js (pdfjs-dist) Docs](https://mozilla.github.io/pdf.js/)
* [React Official Docs](https://react.dev/)
* [Vite Documentation](https://vitejs.dev/)

---

© 2025 Social Media Video & PDF Analyzer | Built with by Harsh
