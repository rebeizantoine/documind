DocuMind Frontend

DocuMind is an AI-powered document assistant that allows users to upload documents and ask questions with accurate, context-aware answers using Retrieval-Augmented Generation (RAG).

This repository contains the frontend application built with Next.js.

🚀 Live Demo

👉 (Add your deployed link here — Render/Vercel)

🧠 Features
📄 Upload documents and process them into structured knowledge
💬 Ask questions based on uploaded documents
🔍 Semantic search powered by embeddings
🤖 Grounded AI responses (no hallucinations)
📊 Token usage and cost tracking
⚡ Clean and responsive UI
🔄 Real-time interaction with backend API
🏗️ Tech Stack
Framework: Next.js
UI: React + Tailwind CSS
Language: TypeScript
API Communication: Axios
Architecture: Client-side interaction with RAG backend
⚙️ How It Works
User uploads a document
Backend processes:
Text extraction
Chunking
Embedding generation
User asks a question
Backend:
Retrieves relevant chunks via semantic search
Sends context + question to LLM
Frontend displays:
Answer
Sources
Token usage
🔌 Environment Variables

Create a .env.local file:

NEXT_PUBLIC_API_URL=http://localhost:8000

For production:

NEXT_PUBLIC_API_URL=https://your-backend-url.com
🧪 Local Development
npm install
npm run dev

App runs on:

http://localhost:3000
📡 API Integration

This frontend communicates with a backend that provides:

POST /api/documents/upload
POST /api/ask

Make sure your backend is running and accessible.

🧱 Project Structure
app/
  dashboard/
  ask/
components/
  upload/
  chat/
services/
  api.ts
types/
🔮 Future Improvements
Multi-document querying
Conversation history
Authentication (Clerk / JWT)
Source highlighting in UI
Streaming responses
Admin dashboard
