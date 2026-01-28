import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <Link
        href="/dashboard"
        className="px-6 py-3 rounded-lg bg-black text-white"
      >
        Go to Dashboard
      </Link>
    </main>
  );
}
