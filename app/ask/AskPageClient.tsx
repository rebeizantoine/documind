"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { apiService } from "@/services/api";
import AnswerCard from "@/app/components/chat/AnswerCard";
import { AnswerData } from "@/app/types";

export default function AskPageClient() {
  const searchParams = useSearchParams();
  const documentId = searchParams.get("documentId");

  const [question, setQuestion] = useState("");
  const [answerData, setAnswerData] = useState<AnswerData | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!documentId || !question.trim()) {
      console.error("Missing documentId or question");
      return;
    }

    setLoading(true);

    try {
      const response = await apiService.askQuestion({
        documentId,
        question,
      });

      setAnswerData(response);
    } catch (error) {
      console.error("Ask failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <header className="mt-10 mb-10 text-center">
        <h1 className="text-3xl font-bold text-slate-900">Ask Your Document</h1>
        <p className="text-slate-500">
          Ask questions based on the uploaded knowledge source.
        </p>
      </header>

      <section className="space-y-8">
        {!documentId && (
          <p className="text-sm text-red-600">
            Missing document ID. Please upload a document again.
          </p>
        )}

        <form onSubmit={handleAsk} className="space-y-4">
          <div className="relative">
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask something about the uploaded document..."
              className="w-full p-4 pr-24 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none h-32"
            />
            <button
              type="submit"
              disabled={loading || !question.trim() || !documentId}
              className="absolute bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 disabled:bg-slate-300 transition-colors"
            >
              {loading ? "Thinking..." : "Ask AI"}
            </button>
          </div>
        </form>

        <AnswerCard
          answer={answerData?.answer}
          usage={answerData?.usage}
          loading={loading}
        />
      </section>
    </main>
  );
}
