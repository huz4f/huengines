import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://huengines.com"),
  title: "HU Engines | Intelligent Infrastructure for Modern Business",
  description:
    "HU Engines designs and deploys intelligent systems for revenue, AI operations, cybersecurity and enterprise automation.",
  keywords: [
    "HU Engines",
    "Human Utility Engines",
    "enterprise technology",
    "intelligent infrastructure",
    "revenue infrastructure",
    "cybersecurity",
    "AI operations",
    "enterprise automation",
    "digital transformation",
  ],
  authors: [{ name: "HU Engines" }],
  creator: "HU Engines",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://huengines.com",
    siteName: "HU Engines",
    title: "HU Engines | Intelligent Infrastructure for Modern Business",
    description:
      "HU Engines designs and deploys intelligent systems for revenue, AI operations, cybersecurity and enterprise automation.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "HU Engines — Intelligent Infrastructure for Modern Business",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HU Engines | Intelligent Infrastructure for Modern Business",
    description:
      "HU Engines designs and deploys intelligent systems for revenue, AI operations, cybersecurity and enterprise automation.",
    creator: "@huengines",
    images: ["/opengraph-image.png"],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
