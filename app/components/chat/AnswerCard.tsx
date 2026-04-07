// src/app/components/chat/AnswerCard.tsx
interface AnswerProps {
  answer?: string;
  usage?: {
    totalTokens: number;
    costUSD: number;
    inputTokens: number;
    outputTokens: number;
  };
  loading: boolean;
}

export default function AnswerCard({ answer, usage, loading }: AnswerProps) {
  if (loading)
    return <div className="animate-pulse h-32 bg-slate-100 rounded-xl" />;
  if (!answer) return null;

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded">
          DOCUMENT INSIGHT
        </span>
      </div>

      {/* Renders the multiline string from Claude/OpenAI correctly */}
      <p className="text-slate-800 leading-relaxed whitespace-pre-wrap text-sm md:text-base">
        {answer}
      </p>

      {usage && (
        <div className="mt-6 pt-4 border-t border-slate-50 flex flex-wrap gap-4 text-[10px] uppercase tracking-wider text-slate-400 font-bold">
          <div className="flex items-center gap-1">
            <span className="text-slate-300">Tokens:</span> {usage.totalTokens}
          </div>
          <div className="flex items-center gap-1">
            <span className="text-slate-300">Cost:</span> $
            {usage.costUSD.toFixed(5)}
          </div>
        </div>
      )}
    </div>
  );
}
