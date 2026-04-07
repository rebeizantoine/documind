"use client";
import { useState } from "react";
import { SendHorizonal, Loader2 } from "lucide-react";

interface AskFormProps {
  onAsk: (question: string) => Promise<void>;
  loading: boolean;
}

export default function AskForm({ onAsk, loading }: AskFormProps) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;
    onAsk(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="e.g., What are the key takeaways from this report?"
        className="w-full min-h-[120px] p-6 pr-16 bg-white rounded-2xl border border-slate-200 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none text-slate-700"
      />
      <button
        disabled={loading || !input.trim()}
        className="absolute bottom-4 right-4 p-3 bg-blue-600 text-white rounded-xl disabled:bg-slate-200 hover:bg-blue-700 transition-colors"
      >
        {loading ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <SendHorizonal className="w-5 h-5" />
        )}
      </button>
    </form>
  );
}
