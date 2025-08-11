import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";
import ClientShell from "./ClientShell.jsx";

export const metadata = {
  title: {
    default: "Inner Circle — Luxe Underground AI Platform",
    template: "%s | Inner Circle"
  },
  description: "Plateforme AI exclusive avec démos ultra‑réalistes, Vault privé, Playbooks premium et accès Discord VIP. Interface parallaxe fluide et animations Safari optimisées.",
  keywords: ["AI", "artificial intelligence", "demos", "vault", "playbooks", "discord", "premium", "exclusive", "parallax", "animations"],
  authors: [{ name: "Inner Circle Team" }],
  creator: "Inner Circle",
  publisher: "Inner Circle",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://inner-circle-ai.vercel.app'),
  alternates: {
    canonical: '/',
    languages: {
      'fr-FR': '/fr',
      'en-US': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: '/',
    title: 'Inner Circle — Luxe Underground AI Platform',
    description: 'Plateforme AI exclusive avec démos ultra‑réalistes, Vault privé, Playbooks premium et accès Discord VIP.',
    siteName: 'Inner Circle',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Inner Circle - Luxe Underground AI Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Inner Circle — Luxe Underground AI Platform',
    description: 'Plateforme AI exclusive avec démos ultra‑réalistes, Vault privé et animations Safari optimisées.',
    images: ['/og-image.jpg'],
    creator: '@inner_circle_ai',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // google: 'verification-token-here',
    // yandex: 'verification-token-here',
  },
};

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space", display: "swap" });

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Inner Circle',
    description: 'Plateforme AI exclusive avec démos ultra‑réalistes, Vault privé, Playbooks premium et accès Discord VIP.',
    url: 'https://inner-circle-ai.vercel.app',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://inner-circle-ai.vercel.app/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    },
    sameAs: [
      'https://discord.gg/inner-circle',
      'https://twitter.com/inner_circle_ai'
    ]
  };

  return (
    <html lang="fr" className={`h-full ${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="theme-color" content="#0A0A0C" />
        <meta name="color-scheme" content="dark" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="relative min-h-screen bg-[#0A0A0C] text-[#E6E6E6] antialiased selection:bg-white/10 selection:text-white/90">
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
