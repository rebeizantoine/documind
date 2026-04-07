"use client";

import { useState } from "react";
import DocumentUpload from "../components/upload/DocumentUpload";
import AnswerCard from "../components/chat/AnswerCard";
import { apiService } from "@/services/api";
import { AnswerData } from "../types";

type UploadedDocument = {
  message: string;
  documentId: string;
  chunkCount: number;
  fileName?: string;
};

export default function Dashboard() {
  const [activeDoc, setActiveDoc] = useState<UploadedDocument | null>(null);
  const [question, setQuestion] = useState("");
  const [answerData, setAnswerData] = useState<AnswerData | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!activeDoc?.documentId || !question.trim()) {
      console.error("Missing documentId or question");
      return;
    }

    setLoading(true);

    try {
      const result = await apiService.askQuestion({
        documentId: activeDoc.documentId,
        question,
      });

      setAnswerData(result);
    } catch (err) {
      console.error("Ask failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <header className="mt-10 mb-10 text-center">
        <h1 className="text-3xl font-bold text-slate-900">
          Knowledge Assistant
        </h1>
        <p className="text-slate-500">
          Upload a document to start a grounded conversation.
        </p>
      </header>

      <section className="space-y-8">
        {!activeDoc ? (
          <DocumentUpload onUploadSuccess={setActiveDoc} />
        ) : (
          <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-100">
            <div className="flex items-center gap-3">
              <span className="text-xl">📄</span>
              <div>
                <p className="text-sm font-semibold text-blue-900">
                  {activeDoc.fileName || "Document uploaded successfully"}
                </p>
                <p className="text-xs text-blue-700">
                  Processed successfully • {activeDoc.chunkCount} chunks created
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                setActiveDoc(null);
                setQuestion("");
                setAnswerData(null);
              }}
              className="text-xs text-blue-600 hover:underline"
            >
              Change File
            </button>
          </div>
        )}

        {activeDoc && (
          <form onSubmit={handleAsk} className="space-y-4">
            <div className="relative">
              <textarea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ask something about this document..."
                className="w-full p-4 pr-24 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none h-32"
              />
              <button
                type="submit"
                disabled={loading || !question.trim()}
                className="absolute bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 disabled:bg-slate-300 transition-colors"
              >
                {loading ? "Thinking..." : "Ask AI"}
              </button>
            </div>
          </form>
        )}

        <AnswerCard
          answer={answerData?.answer}
          usage={answerData?.usage}
          loading={loading}
        />
      </section>
    </main>
  );
}
