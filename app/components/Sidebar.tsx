import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-zinc-900 text-white p-6 border-r border-zinc-800">
      <h2 className="text-2xl font-semibold mb-10 tracking-tight">
        Financial Asset Tracker
      </h2>

      <nav className="space-y-3 text-sm">
        <Link
          href="/dashboard"
          className="block rounded-md px-3 py-2 hover:bg-zinc-800 transition"
        >
          Dashboard
        </Link>

        <Link
          href="/assets"
          className="block rounded-md px-3 py-2 hover:bg-zinc-800 transition"
        >
          Assets
        </Link>

        <Link
          href="/report"
          className="block rounded-md px-3 py-2 hover:bg-zinc-800 transition"
        >
          Reports
        </Link>
      </nav>
    </aside>
  );
}
