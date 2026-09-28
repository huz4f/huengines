import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Systems | HU Engines",
  description: "Explore bespoke software, decentralized crypto systems, autonomous AI engines, and revenue infrastructure built by HU Engines.",
};

const systems = [
  {
    number: "01",
    title: "CRYPTO & DECENTRALIZED RAILS",
    href: "/#systems",
    description: "Institutional smart contracts, multi-chain settlement rails, non-custodial treasury vaults, and automated execution engines.",
  },
  {
    number: "02",
    title: "BESPOKE ENTERPRISE SOFTWARE",
    href: "/#systems",
    description: "Purpose-built operational operating systems, high-concurrency cloud APIs, and specialized portals eliminating SaaS lock-in.",
  },
  {
    number: "03",
    title: "AUTONOMOUS AI OPERATING SYSTEMS",
    href: "/#systems",
    description: "Deterministic autonomous agents, real-time client triage, and intelligent workflow orchestration operating 24/7.",
  },
  {
    number: "04",
    title: "HIGH-YIELD REVENUE INFRASTRUCTURE",
    href: "/#systems",
    description: "High-ticket intake architecture, conversion telemetry, and automated pipeline infrastructure designed for compounding scale.",
  },
];

export default function SystemsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 min-h-screen">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-[1px] bg-hu-accent" />
            <span className="text-hu-accent text-xs tracking-[0.3em] uppercase font-medium">
              Systems
            </span>
          </div>
          <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.1] tracking-[-0.03em] text-hu-white mb-16">
            INTELLIGENCE, ENGINEERED<br />
            <span className="text-hu-text-secondary">INTO THE BUSINESS.</span>
          </h1>

          <div className="grid md:grid-cols-2 gap-6">
            {systems.map((system) => (
              <Link
                key={system.number}
                href={system.href}
                className="group border border-hu-border bg-hu-card/20 p-8 md:p-10 hover:border-hu-accent/40 hover:bg-hu-card/40 transition-all duration-300 block"
              >
                <span className="text-hu-text-muted text-xs font-mono tracking-wider mb-4 block">
                  {system.number}
                </span>
                <h2 className="text-hu-white text-xl font-medium tracking-[-0.01em] mb-4 group-hover:text-hu-accent transition-colors duration-300">
                  {system.title}
                </h2>
                <p className="text-hu-text-secondary text-sm leading-relaxed mb-6">
                  {system.description}
                </p>
                <span className="inline-flex items-center gap-2 text-hu-accent text-sm tracking-[0.05em] group-hover:translate-x-1 transition-transform duration-300">
                  Explore Architecture →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
