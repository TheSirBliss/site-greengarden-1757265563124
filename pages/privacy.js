import Link from 'next/link';

export default function Privacy() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navigation bar (same as other pages) */}
      <main className="flex-grow p-8">
        <h1 className="text-5xl font-bold text-primary mb-4">Privacy Policy</h1>
        <p>Add your privacy policy here...</p>
      </main>
      {/* Footer (same as other pages) */}
    </div>
  );
}