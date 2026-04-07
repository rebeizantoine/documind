"use client";

import Link from "next/link";

export default function OtherComponent() {
  return (
    <div className="p-6 bg-blue-500 text-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Other Component</h1>

      <Link
        href="/"
        className="mt-4 inline-block px-4 py-2 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100"
      >
        Back to Main
      </Link>
    </div>
  );
}
