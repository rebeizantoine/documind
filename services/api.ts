import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

// Create axios instance (BEST PRACTICE)
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const apiService = {
  async uploadDocument(file: File) {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const { data } = await api.post("/api/documents/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return data;
    } catch (error: any) {
      console.error("Upload error:", error.response?.data || error.message);
      throw new Error("Upload failed");
    }
  },

  async askQuestion({
    documentId,
    question,
  }: {
    documentId?: string;
    question: string;
  }) {
    try {
      const { data } = await api.post("/api/ask", {
        documentId,
        question,
      });

      return data;
    } catch (error: any) {
      console.error("Ask error:", error.response?.data || error.message);
      throw new Error("Failed to get answer");
    }
  },
};
