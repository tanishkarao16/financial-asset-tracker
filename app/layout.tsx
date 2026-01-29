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
      <body className="flex">
        <AssetProvider>
          <Sidebar />
          {children}
        </AssetProvider>
      </body>
    </html>
  );
}
