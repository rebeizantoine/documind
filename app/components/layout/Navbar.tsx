import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Docu<span className="text-blue-600">Mind</span>
        </Link>
        <div className="flex gap-6 items-center text-sm font-medium text-slate-600">
          <Link
            href="/dashboard"
            className="px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            Launch App
          </Link>
        </div>
      </div>
    </nav>
  );
}
