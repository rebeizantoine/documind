export interface Document {
  _id: string;
  fileName: string;
  // Add other properties as needed
}

export interface AnswerData {
  answer?: string;
  usage?: {
    totalTokens: number;
    costUSD: number;
    inputTokens: number;
    outputTokens: number;
  };
  // Add other properties as needed
}
