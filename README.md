# Incident-Report
# AI Safety Incident Dashboard

## 📌 Project Overview
The **AI Safety Incident Dashboard** is an interactive web component designed to display AI-related safety incidents. Users can **filter, sort, and report incidents**, ensuring better tracking of AI safety events.

## 🚀 Features
- **Incident List**: Displays Title, Severity, and Report Date.
- **Filtering Controls**: Users can filter incidents by severity (All, Low, Medium, High).
- **Sorting Controls**: Sort incidents by date (Newest First, Oldest First).
- **Expandable Details**: Clicking "View Details" toggles full descriptions.
- **Report New Incident**: A form for submitting new incidents with title, description, and severity.
- **State Management**: Real-time updates when adding new incidents.
- **Responsive UI**: Styled using Tailwind CSS with hover effects.

## 🛠️ Tech Stack
- **Framework**: React + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: React Hooks (useState)
- **Linting**: ESLint & TypeScript
- **Deployment**: GitHub Pages / Vercel

Steps :-
cd project
npm install
npm run dev


Project Structure

project/
│── node_modules/       # Dependencies
│── src/               
│   │── components/     # Reusable React components
│   │── data/          # Mock incident data
│   │── types/         # TypeScript type definitions
│   │── utils/         # Helper functions
│   │── App.tsx        # Main app component
│   │── index.css      # Global styles
│   │── main.tsx       # Entry point
│   │── vite-env.d.ts  # Vite TypeScript env config
│── public/            # Static assets (if any)
│── .gitignore         # Git ignored files
│── eslint.config.js   # ESLint configuration
│── index.html         # Root HTML file
│── package-lock.json  # Dependency lock file
│── package.json       # Project dependencies & scripts
│── postcss.config.js  # PostCSS configuration
│── tailwind.config.js # Tailwind CSS configuration
│── tsconfig.app.json  # TypeScript configuration (app)
│── tsconfig.json      # TypeScript configuration
│── tsconfig.node.json # TypeScript configuration (node)
│── vite.config.ts     # Vite configuration


🏗️ Design Decisions & Challenges
- Filtering & Sorting: Implemented using useState for dynamic updates.
- Expandable Descriptions: Managed with component state for a seamless UI.
- Form Validation: Ensuring title, description, and severity fields are not empty.
- State Management: Using React hooks to track incidents efficiently.
- UI/UX Optimization: Hover effects, smooth transitions, and responsive layouts.
- Performance Optimization: Leveraging Vite's fast build and Hot Module Replacement (HMR).

📜 Mock Data Example
[
  { "id": 1, "title": "Biased Recommendation Algorithm", "description": "Algorithm consistently favored certain demographics...", "severity": "Medium", "reported_at": "2025-03-15T10:00:00Z" },
  { "id": 2, "title": "LLM Hallucination in Critical Info", "description": "LLM provided incorrect safety procedure information...", "severity": "High", "reported_at": "2025-04-01T14:30:00Z" },
  { "id": 3, "title": "Minor Data Leak via Chatbot", "description": "Chatbot inadvertently exposed non-sensitive user metadata...", "severity": "Low", "reported_at": "2025-03-20T09:15:00Z" }
]
