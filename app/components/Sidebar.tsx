import Link from "next/link";

export default function Sidebar() {
    return(
        <aside className="w-64 h-screen bg-zinc-900 text-white p-6">
        <h2 className="text-xl font-bold mb-8">Asset Tracker</h2>
  
        <nav className="space-y-4">
          <Link href="/dashboard" className="block hover:text-zinc-300">
            Dashboard
          </Link>
  
          <Link href="#" className="block hover:text-zinc-300">
            Assets
          </Link>
  
          <Link href="#" className="block hover:text-zinc-300">
            Reports
          </Link>
        </nav>
      </aside>

    );
}