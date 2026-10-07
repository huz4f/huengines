import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollObserver from "@/components/ScrollObserver";

const inter = Inter({
  subsets: ["latin"],
  display: "optional",
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "optional",
  variable: "--font-mono",
});

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
  alternates: {
    canonical: "https://huengines.com/",
  },
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
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://huengines.com/#organization",
      name: "HU Engines",
      alternateName: "Human Utility Engines",
      url: "https://huengines.com",
      logo: "https://huengines.com/icon-192.png",
      description:
        "Architects of proprietary operating engines, autonomous AI systems, and financial infrastructure for high-growth market leaders.",
      email: "inquiry@huengines.com",
      sameAs: ["https://x.com/huengines"],
    },
    {
      "@type": "WebSite",
      "@id": "https://huengines.com/#website",
      url: "https://huengines.com",
      name: "HU Engines",
      publisher: {
        "@id": "https://huengines.com/#organization",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://huengines.com/#service",
      name: "Intelligent Enterprise Infrastructure Architecture",
      provider: {
        "@id": "https://huengines.com/#organization",
      },
      url: "https://huengines.com",
      description:
        "Design and deployment of bespoke proprietary operating systems, autonomous AI systems, settlement and treasury rails, and algorithmic revenue infrastructure.",
      areaServed: "Global",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Core Enterprise Systems",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Proprietary Operating Systems",
              description:
                "Bespoke enterprise command platforms, legacy modernization, and unified operational defensibility.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Autonomous AI Systems",
              description:
                "Autonomous digital labor, intelligent document intake, and self-executing enterprise workflows.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Settlement & Treasury Rails",
              description:
                "Non-custodial smart contract escrow, sub-second liquidity rails, and automated treasury routing.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Algorithmic Revenue Infrastructure",
              description:
                "Zero-latency lead qualification, automated multi-channel routing, and pipeline velocity engines.",
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://huengines.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is HU Engines?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "HU Engines (Human Utility Engines) architects and deploys bespoke proprietary operating systems, autonomous AI systems, settlement and treasury rails, and algorithmic revenue infrastructure for high-growth enterprise leaders."
          }
        },
        {
          "@type": "Question",
          "name": "Why replace commercial SaaS with proprietary enterprise infrastructure?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Commercial SaaS forces businesses into generic templates with compounding per-seat subscription taxes and zero competitive defensibility. Proprietary systems forge permanent balance-sheet assets, eliminate third-party SaaS dependency, and build an insurmountable operational moat."
          }
        },
        {
          "@type": "Question",
          "name": "Who owns the code, intellectual property, and infrastructure?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Clients receive 100% intellectual property assignment, complete source-code ownership in their private Git repositories, and direct deployment within their own cloud infrastructure (AWS, GCP, Azure, or bare metal) with zero vendor lock-in."
          }
        },
        {
          "@type": "Question",
          "name": "What core disciplines does HU Engines engineer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "HU Engines builds four foundational disciplines: 1) Proprietary Operating Systems, 2) Autonomous AI Systems, 3) Settlement & Treasury Rails, and 4) Algorithmic Revenue Infrastructure."
          }
        },
        {
          "@type": "Question",
          "name": "How does an engagement with HU Engines work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Engagements follow a 5-stage engineering lifecycle: Audit, Architect, Engineer, Deploy, and Compound. It begins with a comprehensive Systems Audit Diagnostic delivered within 24 to 48 hours."
          }
        }
      ]
    }
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${jetbrainsMono.variable}`}
      style={{ backgroundColor: "#09090b", color: "#e8e8ed" }}
    >
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased" style={{ backgroundColor: "#09090b", color: "#e8e8ed" }}>
        <ScrollToTop />
        <ScrollObserver />
        {children}
      </body>
    </html>
  );
}
