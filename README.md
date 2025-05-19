# 🚀 Journey Builder – Avantos React Coding Challenge


It simulates a system where data from earlier forms can **prefill fields in downstream forms**, using a **DAG (directed acyclic graph)** to determine dependencies.

---

## 🧱 Features

✅ Render a list of forms from mock server  
✅ View and edit prefill mappings per field  
✅ Modal for choosing prefill source  
✅ Includes:
- Fields from direct + transitive parent forms (via DAG)
- Global sources (e.g., GlobalData1, GlobalData2)
- Labels like “from Form A”, “global”
- Auto-suggestions when field names match (e.g., `email → email`)

---

## ▶️ How to Run This Locally

### 1. Start the Backend (Mock Server)

```bash
cd frontendchallengeserver
npm install
npm start
👉 Runs on http://localhost:3001

2. Start the Frontend (React)
bash
Copy
Edit
cd journey-builder
npm install
npm run dev
👉 Opens on http://localhost:5173
