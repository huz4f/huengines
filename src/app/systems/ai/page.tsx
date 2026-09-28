import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Operating Systems | HU Engines",
  description:
    "Deploy autonomous AI agents, intelligent workflows, and neural decision infrastructure across the enterprise.",
};

const capabilities = [
  {
    title: "Autonomous Agent Teams",
    description: "Multi-agent systems executing coordinated operational workflows without human bottlenecks.",
  },
  {
    title: "Document & Knowledge Intelligence",
    description: "Neural ingestion and semantic querying across complex enterprise contracts, filings, and databases.",
  },
  {
    title: "Decision Support Engines",
    description: "Deterministic synthesis of organizational telemetry providing predictive insights for executives.",
  },
  {
    title: "Process Automation Pipelines",
    description: "End-to-end task automation bridging legacy internal software with modern LLM-driven actions.",
  },
  {
    title: "Internal LLM Orchestration",
    description: "Private, air-gapped or VPC-hosted models maintaining total confidentiality and data sovereignty.",
  },
  {
    title: "Continuous Feedback & Learning",
    description: "Operational human-in-the-loop loops that train models on institutional edge cases continuously.",
  },
];

export default function AISystemPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 min-h-screen">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-hu-accent" />
            <span className="text-hu-accent text-xs tracking-[0.3em] uppercase font-medium">
              Systems / 02
            </span>
          </div>

          <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.03em] text-hu-white mb-6">
            AI OPERATING<br />
            <span className="text-hu-text-secondary">SYSTEMS.</span>
          </h1>

          <p className="text-hu-text-secondary text-lg md:text-xl max-w-[680px] leading-relaxed mb-12">
            Deploy intelligent agents and automated workflows across the organization to absorb repetitive cognitive overhead and compound operational speed.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {capabilities.map((cap, i) => (
              <div
                key={cap.title}
                className="border border-hu-border bg-hu-card/20 p-8 hover:border-hu-accent/30 transition-all duration-300"
              >
                <span className="text-hu-text-muted text-xs font-mono tracking-wider mb-4 block">
                  0{i + 1}
                </span>
                <h3 className="text-hu-white text-lg font-medium mb-3">
                  {cap.title}
                </h3>
                <p className="text-hu-text-secondary text-sm leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="border border-hu-border bg-hu-card/30 p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h3 className="text-hu-white text-2xl font-medium mb-2">
                Deploy AI Systems Built for Real Enterprise Work
              </h3>
              <p className="text-hu-text-secondary text-sm max-w-[500px]">
                We build deterministic, resilient agent architectures rather than superficial chat wrappers.
              </p>
            </div>
            <Link
              href="/#contact"
              className="px-8 py-4 bg-hu-accent text-hu-black text-sm font-medium tracking-[0.1em] uppercase hover:bg-hu-white transition-colors duration-300 inline-flex items-center gap-2 whitespace-nowrap"
            >
              Start an AI Transformation →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
