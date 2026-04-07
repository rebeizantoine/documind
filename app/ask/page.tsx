import { Suspense } from "react";
import AskPageClient from "./AskPageClient";

export default function AskPage() {
  return (
    <Suspense fallback={<div className="p-6">Loading...</div>}>
      <AskPageClient />
    </Suspense>
  );
}
