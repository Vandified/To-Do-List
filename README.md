# 📝 To‑Do List App

A real-time, cloud-powered To‑Do app built with **React**, **Firebase Firestore**, and **Anonymous Authentication**. Each user gets a private task list — no sign-up required.

---

## 🚀 Live Demo

Access the live version on **[Vercel](https://to-do-list-flame-nine-58.vercel.app/)**.

---

## ✨ Features

- ✅ Add, edit, and delete tasks seamlessly
- 🔄 Real-time updates via Firebase Firestore
- 🔐 Anonymous authentication — no login needed
- ⚛️ Built using React Hooks (`useState`, `useEffect`, `useRef`)
- 📱 Responsive and minimal UI

---

## 🛠️ Tech Stack

| Area       | Technology                       |
| ---------- | -------------------------------- |
| Frontend   | React (CRA)                      |
| Logic      | React Hooks                      |
| Backend    | Firebase Firestore + Auth        |
| Deployment | Vercel / GitHub Pages (optional) |

---

## 📁 Folder Structure

```
to-do-list/
├── public/
│   └── index.html               # Root HTML template
├── src/
│   ├── list/                    # Task list item components
│   │   ├── list.js
│   │   └── list.css
│   ├── ui/                      # UI wrapper components
│   │   ├── Ui.js
│   │   └── Ui.css
│   ├── AuthProvider.js          # Firebase auth context provider
│   ├── firebase.js              # Firebase config and initialization
│   ├── App.js                   # Main app logic
│   └── index.js                 # App entry point
├── .env                         # Firebase environment variables
├── package.json                 # Dependencies and scripts
└── README.md                    # Project documentation
```

---

## ⚙️ Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/Vandified/To-Do-List.git
cd To-Do-List
```

### 2. Set up Firebase

Create a `.env` file and configure your Firebase credentials:

```env
REACT_APP_FIREBASE_API_KEY=...
REACT_APP_FIREBASE_AUTH_DOMAIN=...
REACT_APP_FIREBASE_PROJECT_ID=...
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=...
REACT_APP_FIREBASE_APP_ID=...
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run Locally

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ☁️ Deployment

### ➤ Vercel

1. Push code to GitHub
2. Import repo into [Vercel](https://vercel.com/)
3. Add the same `.env` values in the Vercel dashboard
4. Vercel handles build & deployment automatically

---

### ➤ GitHub Pages (Optional)

```jsonc
// Add to package.json
"homepage": "https://Vandified.github.io/To-Do-List",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Then run:

```bash
npm run deploy
```

> Make sure your Firestore & Auth allow access from this domain.

---

## 👤 Author

**Domarov(Ajas)**  
[GitHub](https://github.com/Vandified)

---

## ⭐️ Show Some Love

If you found this helpful, consider giving it a ⭐️ on GitHub!
