import "./globals.css";
import Sidebar from "./components/Sidebar";
import { AssetProvider } from "./context/AssetContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex bg-zinc-950 text-white">
        <AssetProvider>
          <Sidebar />
          <main className="flex-1 min-h-screen p-8 overflow-y-auto">
            {children}
          </main>
        </AssetProvider>
      </body>
    </html>
  );
}
