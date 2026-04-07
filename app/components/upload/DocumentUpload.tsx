"use client";
import { useState } from "react";
import { Upload, AlertCircle, Loader2, CheckCircle } from "lucide-react";
import { apiService } from "@/services/api";
import { useRouter } from "next/navigation";

type UploadResult = {
  message: string;
  documentId: string;
  chunkCount: number;
  fileName?: string;
};

export default function DocumentUpload({
  onUploadSuccess,
}: {
  onUploadSuccess: (data: UploadResult) => void;
}) {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const router = useRouter();

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setStatus("loading");

    try {
      const data = await apiService.uploadDocument(file);

      setStatus("success");

      // 🔥 redirect after small delay (better UX)
      setTimeout(() => {
        router.push(`/ask?documentId=${data.documentId}`);
      }, 800);
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="w-full">
      <label
        className={`
            relative group border-2 border-dashed rounded-2xl p-10 flex flex-col items-center justify-center cursor-pointer transition-all
            ${
              status === "loading"
                ? "bg-slate-50 border-blue-200 pointer-events-none"
                : "hover:border-blue-400 border-slate-200"
            }
        `}
      >
        <input
          type="file"
          className="hidden"
          onChange={handleUpload}
          disabled={status === "loading" || status === "success"}
        />

        {status === "loading" ? (
          <Loader2 className="w-10 h-10 text-blue-500 animate-spin mb-4" />
        ) : status === "success" ? (
          <CheckCircle className="w-10 h-10 text-green-500 mb-4" />
        ) : (
          <Upload className="w-10 h-10 text-slate-400 group-hover:text-blue-500 mb-4 transition-colors" />
        )}

        <h3 className="font-semibold text-slate-700">
          {status === "loading"
            ? "Embedding Knowledge..."
            : status === "success"
              ? "Document Ready!"
              : "Upload Source Material"}
        </h3>

        <p className="text-sm text-slate-400 mt-1">
          {status === "success"
            ? "You can now ask questions"
            : "Select a PDF or .txt file to begin"}
        </p>

        {status === "error" && (
          <div className="mt-4 flex items-center gap-2 text-red-500 text-sm">
            <AlertCircle className="w-4 h-4" /> Failed to process document.
          </div>
        )}
      </label>
    </div>
  );
}
