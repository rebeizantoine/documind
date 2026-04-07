"use client";

export default function MainComponent() {
  return (
    <div className="p-6 bg-green-500 text-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Main Page</h1>

      <p>This is the main component imported into the Home page.</p>

      <a
        href="/other"
        className="mt-4 inline-block px-4 py-2 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100"
      >
        Go to Other Page
      </a>
    </div>
  );
}
