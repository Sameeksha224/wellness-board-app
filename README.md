# AI-Generated Wellness Recommendation Board

## 📌 Overview
An AI-powered app that generates personalized wellness tips based on user profile (age, gender, wellness goals). Users can explore, view details, and save favorites with persistence across sessions.

---

## 🎯 Problem Statement & Flow
1. **Profile Capture**: User enters age, gender, and wellness goal.  
2. **Tips Display**: AI generates 5 scrollable cards with icons + short descriptions.  
3. **Tip Details**: Tapping a card shows a detailed explanation and step-by-step guidance.  
4. **Favorites**: User can save tips and persist them locally.  

---

## 🚀 Live Demo
🔗 **Live Site**: https://thrive-tips-git-main-sameeksha224s-projects.vercel.app/

---

## ⚙️ Setup Instructions
...bash...
git clone https://github.com/Sameeksha224/wellness-board-app
cd plum-wellness-app
npm install
npm run dev

## 🧩 Architecture & State Management
Component Hierarchy
src/
├── App.jsx             # Routes & layout
├── main.jsx            # Entry point
├── screens/
│   ├── Profile.jsx     # Profile input form
│   ├── Tips.jsx        # AI-generated tips
│   └── Favorites.jsx   # Saved tips
├── components/
│   ├── TipCard.jsx     # Card component
│   └── TipDetails.jsx  # Modal for details
|   └── Navbar.jsx     
└── services/
    └── aiService.js    # Groq API integration

State Management Choices

- Local state (useState, useEffect) → profile inputs, loading states, toggles

- Navigation state (React Router) → switching between Profile, Tips, and Favorites

- Persistent state (localStorage) → saving favorites across sessions

- API state (async/await) → Groq API call results with error handling

## 🤖 AI Prompts & Refinements
Initial Tip Generation Prompt
1. const prompt = `
You are a friendly wellness assistant.
The user profile: [profile details]
The selected tip: "${tipTitle}".

Provide:
1. A detailed explanation (2–3 sentences)
2. Step-by-step practical guidance (4–5 steps)
Tone: empathetic, simple, actionable.
`;
Issues: - AI sometimes returned text before JSON or didn't return JSON at all

Solution: Added markdown cleaning and explicit "Return ONLY JSON" instructions

- Inconsistent Responses: AI occasionally provided malformed JSON

Solution: Added comprehensive error handling with fallback data

- Icon Validation: AI suggested invalid React icon names

Solution: Implemented icon validation with fallback default icons

Final Prompt.
const prompt = `
You are a wellness assistant.
The user has the following profile:

Age: ${profile.age}
Gender: ${profile.gender}
Concern: ${profile.concern}
${profile.weight ? `Weight: ${profile.weight}` : ""}
${profile.height ? `Height: ${profile.height}` : ""}
${profile.lifestyle ? `Lifestyle: ${profile.lifestyle}` : ""}

Generate 5 wellness tips.
Each tip should have:
1. A short title (3–5 words)
2. A brief description (1 sentence)
3. A suggested icon name (e.g., 'FaAppleAlt', 'FaRunning', 'FaBed')
4. A category from [nutrition, fitness, sleep, mental, relaxation]

Ensure each tip is unique, covers different wellness aspects, and icons are not repeated.
Return ONLY JSON in this format:

[
  {
    "title": "Tip title",
    "description": "Short description",
    "category": "fitness",
    "icon": "FaRunning"
  }
]
`;

## 🐞 Known Issues

AI Response Consistency

Occasionally malformed JSON from Groq API

Still requires robust error handling

Error Handling

Minimal network failure messaging

Needs friendlier fallback states

Performance

No caching → regenerating tips always calls API

Loading UI can be improved

## 🚧 Potential Improvements
--Short-Term

 -Add skeleton loaders for better UX

 -Cache AI responses locally

 -More descriptive error messages

 -Stronger input validation

-- Long-Term

 -User accounts + cloud sync for favorites

 -Categorized tips & filtering

 -Progress tracking (habit streaks, logs)

 -Social sharing & export options

 -Multiple AI model fallback for reliability

## Technical

 -React Query for API state management

 -PWA support for mobile users

 -Automated test suite (unit + integration)

 -Analytics dashboard for usage insights



## 🌐 Deployment

-Deployed on Vercel.
-Environment variables (Groq API key) are configured via Vercel’s dashboard.

