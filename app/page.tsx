import Link from "next/link";
import { FileText, Search, BrainCircuit, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="px-6 pt-24 pb-20 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
          Documents with <span className="text-blue-600">Context.</span>
        </h1>
        <p className="text-xl text-slate-500 mb-10 leading-relaxed">
          Upload your PDFs or text files and ask questions. Our AI answers
          <strong> only</strong> using your provided information—no
          hallucinations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/dashboard"
            className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 flex items-center justify-center gap-2 transition-all"
          >
            Get Started <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="#how-it-works"
            className="px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-xl font-semibold hover:bg-slate-50 transition-all"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Features Grid */}
      <section id="how-it-works" className="bg-slate-50 py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          <FeatureCard
            icon={<FileText className="text-blue-600" />}
            title="Smarter Uploads"
            description="We split your documents into semantic chunks and store them securely in the cloud."
          />
          <FeatureCard
            icon={<Search className="text-blue-600" />}
            title="Semantic Search"
            description="Your questions trigger a vector search to find the most relevant parts of your text."
          />
          <FeatureCard
            icon={<BrainCircuit className="text-blue-600" />}
            title="Grounded Answers"
            description="LLM output is restricted to your document context for 100% factual accuracy."
          />
        </div>
      </section>
    </main>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
      <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-slate-500 leading-relaxed">{description}</p>
    </div>
  );
}
