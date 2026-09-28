import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Revenue Infrastructure | HU Engines",
  description:
    "Autonomous revenue systems — prospect intelligence, outbound infrastructure, and pipeline acceleration.",
};

const capabilities = [
  {
    title: "Lead Intelligence Engine",
    description: "Deep enrichment and intent mapping identifying active high-value enterprise buyers.",
  },
  {
    title: "Automated Website Auditing",
    description: "Algorithmic diagnosis of prospect infrastructure, identifying revenue leaks and opportunities.",
  },
  {
    title: "Dynamic Outreach Orchestration",
    description: "Multi-channel coordinated communication personalized at individual and company level.",
  },
  {
    title: "Pipeline Velocity Acceleration",
    description: "Real-time deal telemetry and automated follow-through reducing sales cycle duration.",
  },
  {
    title: "CRM & ERP Integration",
    description: "Seamless bidirectional synchronization ensuring zero manual data entry across systems.",
  },
  {
    title: "Predictive Opportunity Scoring",
    description: "Machine learning models prioritizing accounts with highest propensity to close.",
  },
];

export default function RevenueSystemPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 min-h-screen">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-hu-accent" />
            <span className="text-hu-accent text-xs tracking-[0.3em] uppercase font-medium">
              Systems / 01
            </span>
          </div>

          <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.03em] text-hu-white mb-6">
            REVENUE<br />
            <span className="text-hu-text-secondary">INFRASTRUCTURE.</span>
          </h1>

          <p className="text-hu-text-secondary text-lg md:text-xl max-w-[680px] leading-relaxed mb-12">
            Build autonomous systems that identify commercial opportunities, research prospects, personalize outreach, qualify demand, and accelerate sales execution.
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
                Deploy Revenue Infrastructure for Your Organization
              </h3>
              <p className="text-hu-text-secondary text-sm max-w-[500px]">
                We architect custom outbound pipelines and lead engines calibrated to your business model.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/#contact"
                className="px-8 py-4 bg-hu-accent text-hu-black text-sm font-medium tracking-[0.1em] uppercase hover:bg-hu-white transition-colors duration-300 inline-flex items-center gap-2"
              >
                Start Engagement →
              </Link>
              <Link
                href="/leadengine"
                className="px-8 py-4 border border-hu-border text-hu-text-secondary text-sm tracking-[0.1em] uppercase hover:border-hu-accent hover:text-hu-white transition-all duration-300"
              >
                View LeadEngine
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
