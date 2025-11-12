## SOCIAL MEDIA VIDEO ANALYZER - PROJECT DOCUMENTATION

---

### **1. Project Overview**

The **Social Media Video Analyzer** is an AI-powered web application designed to help creators and marketers analyze their social media content—both **text and videos**—to improve engagement and content quality. It uses **AssemblyAI** for video transcription and performs linguistic and engagement-based analysis using custom algorithms.

---

### **2. Features**

* **Text & Video Upload:** Users can upload written posts or video clips for analysis.
* **AI-Powered Analysis:** Automatically identifies tone, hashtags, mentions, CTAs, and engagement potential.
* **Video Transcription:** Extracts spoken text from video using AssemblyAI API.
* **Smart Suggestions:** Provides insights like keyword optimization, question detection, and tone improvements.
* **Dark/Light Mode:** Seamless toggle between modes for better user experience.
* **Dynamic Progress Bar:** Displays upload and analysis progress in real-time.

---

### **3. Technology Stack**

| Layer       | Technology Used             |
| ----------- | --------------------------- |
| Frontend    | React + Vite                |
| Backend API | AssemblyAI (Speech-to-Text) |
| Styling     | Custom CSS                  |
| Deployment  | GitHub Pages / Vercel       |

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

⚠️ *Note: Do not commit your .env file to GitHub. It’s already ignored by `.gitignore`.*

#### **Step 4: Run the App Locally**

```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

### **5. Screenshots (Sample Views)**

#### 🏠 **Home Page**

Displays the upload options for both text and video.

<img width="1919" height="987" alt="image" src="https://github.com/user-attachments/assets/16d3f391-cb35-44ec-bd5d-7bf835690f5e" />

#### 📤 **Video Upload with Progress Bar**

Visualizes upload and transcription progress in real-time.

<img width="1024" height="498" alt="image" src="https://github.com/user-attachments/assets/e4bd5919-7c9b-4cdc-9301-4a0eab0e28c2" />

#### 📊 **Analysis Results Section**

Shows extracted text and engagement improvement suggestions.

<img width="1058" height="960" alt="image" src="https://github.com/user-attachments/assets/09e70039-06ab-4c6d-9e2a-bcd1cc3b0797" />

#### 🌙 **Dark Mode Example**

Demonstrates UI adaptability for dark/light modes.

<img width="1910" height="987" alt="image" src="https://github.com/user-attachments/assets/38a3ee29-c32f-4e65-834c-9d56f7462430" />

---

### **6. Deployment Instructions**

#### 🚀 **Deploy on GitHub Pages**

1. Install the GitHub Pages dependency:

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

1. Go to [https://vercel.com](https://vercel.com)
2. Import your GitHub repository.
3. Add your **VITE_ASSEMBLYAI_API_KEY** in *Environment Variables*.
4. Click **Deploy**.

---

### **7. Security Notes**

* Never commit `.env` or API keys publicly.
* Ensure the key is used only on the client-side securely.
* Validate video uploads for size before sending to AssemblyAI.

---

### **8. Author Information**

**Developer:** Harsh
**Role:** Full Stack Developer & AI Enthusiast
**GitHub:** [https://github.com/Harsh100101](https://github.com/Harsh100101)

---

### **9. Future Enhancements**

* Add multilingual transcription support.
* Include advanced NLP-based engagement scoring.
* Integrate with YouTube or Instagram APIs for auto-import.

---

### **10. References**

* [AssemblyAI API Documentation](https://www.assemblyai.com/docs/)
* [React Official Docs](https://react.dev/)
* [Vite Documentation](https://vitejs.dev/)

---
