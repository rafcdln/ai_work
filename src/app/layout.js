import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";
import ClientShell from "./ClientShell.jsx";

export const metadata = {
  title: "Inner Circle — Luxe Underground AI Platform",
  description: "Démos ultra‑réalistes, Vault, Playbooks et accès Discord.",
};

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space", display: "swap" });

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`h-full ${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="relative min-h-screen bg-[#0A0A0C] text-[#E6E6E6] antialiased selection:bg-white/10 selection:text-white/90">
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
