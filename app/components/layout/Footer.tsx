import Link from "next/link";
import { Code, X, Cpu } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-100 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Brand & Mission */}
        <div className="flex flex-col items-center md:items-start space-y-3">
          <Link href="/" className="text-lg font-bold flex items-center gap-2">
            <Cpu className="w-5 h-5 text-blue-600" />
            Docu<span className="text-blue-600">Mind</span>
          </Link>
          <p className="text-sm text-slate-500 max-w-xs text-center md:text-left">
            Empowering users with grounded, AI-driven document insights. No
            hallucinations, just data.
          </p>
        </div>

        {/* Tech Stack Info (Optional but professional) */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
            Built with
          </h4>
          <div className="flex gap-4 text-sm text-slate-600 font-medium">
            <span>Next.js</span>
            <span>Express</span>
            <span>MongoDB</span>
            <span>OpenAI</span>
          </div>
        </div>

        {/* Social / Links */}
        <div className="flex flex-col items-center md:items-end space-y-4">
          <div className="flex gap-5 text-slate-400">
            <a href="#" className="hover:text-slate-900 transition-colors">
              <Code className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <X className="w-5 h-5" />
            </a>
          </div>
          <p className="text-xs text-slate-400">
            &copy; {currentYear} DocuMind AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
