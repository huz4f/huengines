"use client";

import { useReveal } from "@/hooks/useReveal";

interface EngineeringRecord {
  recordNumber: string;
  system: string;
  classification: string;
  domain: string;
  problem: string;
  engineered: string;
  architectureNodes: string[];
  outcome: string;
  metrics: { label: string; value: string }[];
  verificationNote: string;
}

const engineeringRecords: EngineeringRecord[] = [
  {
    recordNumber: "REC-01",
    system: "AUTONOMOUS CLINIC OPERATIONS",
    classification: "Confidential Healthcare Client • Production Deployment",
    domain: "Healthcare / Operations & Revenue Infrastructure",
    problem:
      "Fragmented intake and manual patient routing across high-volume surgical practices caused 48-hour consult follow-up lag, high patient drop-off, and heavy revenue attrition.",
    engineered:
      "AI intake triage + automated routing engine + operational staff dashboard + HIPAA-compliant calendar and record synchronization.",
    architectureNodes: [
      "Web / SMS Intake",
      "API Gateway",
      "AI Triage Engine",
      "Calendar Sync",
      "Operations Dashboard",
    ],
    outcome:
      "Reduced patient inquiry response latency from 48 hours to sub-30 seconds. Consult booking conversion increased by 64%, recapturing an estimated $420,000+ in annual lost bookings across verified intake audits.",
    metrics: [
      { label: "Intake Latency", value: "< 30s" },
      { label: "Booking Lift", value: "+64%" },
      { label: "Verified Recapture", value: "$420K+ / yr" },
    ],
    verificationNote:
      "Audited across verified private clinical deployment logs. Architecture adheres to HIPAA security requirements.",
  },
  {
    recordNumber: "REC-02",
    system: "MULTI-CHAIN TREASURY & SETTLEMENT RAILS",
    classification: "Institutional Web3 Operator • Production Rail (Non-Custodial)",
    domain: "Crypto & Financial Systems",
    problem:
      "Cross-border commercial trade suffered 3-day international settlement delays, 4–7% foreign exchange conversion spread, and recurring counterparty settlement failures.",
    engineered:
      "Non-custodial smart contract escrow rails + multi-chain stablecoin routing engine + automated treasury liquidity routing + real-time cryptographic audit telemetry.",
    architectureNodes: [
      "ERP Billing",
      "Smart Contract Escrow",
      "Multi-Chain Nodes",
      "Telemetry Core",
      "Treasury Ledger",
    ],
    outcome:
      "Slashed settlement latency from 72 hours to sub-12 seconds. Lowered cross-border fee friction by 89%, supporting over $18M+ in monthly transaction settlement throughput.",
    metrics: [
      { label: "Settlement Finality", value: "< 12s" },
      { label: "Fee Reduction", value: "-89%" },
      { label: "Monthly Capacity", value: "$18M+" },
    ],
    verificationNote:
      "Software infrastructure only. Non-custodial protocols; does not provide regulated banking or custodial financial services.",
  },
  {
    recordNumber: "REC-03",
    system: "UNIFIED FREIGHT OPERATIONS OS",
    classification: "Mid-Market Freight Operator • Proprietary Enterprise Build",
    domain: "Proprietary Software / Operations",
    problem:
      "Mid-market freight and distribution operator was trapped paying $140k/yr in disconnected SaaS licenses across 5 legacy ERP tools, suffering recurring data synchronization failures.",
    engineered:
      "Unified proprietary operations operating system: real-time shipment dispatch telemetry, driver native mobile app, client self-serve tracking portal, and automated invoice factoring pipelines.",
    architectureNodes: [
      "Native Driver App",
      "Event Ingestion",
      "Dispatch Core",
      "Factoring API",
      "Client Tracking Portal",
    ],
    outcome:
      "100% permanent proprietary IP ownership. Eliminated all recurring third-party SaaS subscription licensing fees ($140k/yr). Reduced order-to-dispatch turnaround time by 52%.",
    metrics: [
      { label: "SaaS Tax Eliminated", value: "$140K / yr" },
      { label: "Turnaround Speed", value: "+52%" },
      { label: "Client Code Ownership", value: "100%" },
    ],
    verificationNote:
      "Full source code and cloud infrastructure transferred to client ownership with zero third-party platform lock-in.",
  },
];

export default function CaseStudies() {
  const [sectionRef, isVisible] = useReveal<HTMLElement>(0.1);

  return (
    <section
      ref={sectionRef}
      id="deployments"
      className="relative py-32 md:py-44 bg-hu-darker scroll-mt-10"
    >
      <div className="noise-overlay absolute inset-0 pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-20 max-w-[840px]">
          <div
            className={`flex items-center gap-3 mb-8 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <div className="w-8 h-[1px] bg-hu-accent" />
            <span className="text-hu-accent text-xs tracking-[0.3em] uppercase font-medium">
              Engineering Records
            </span>
          </div>

          <h2
            className={`text-[clamp(1.9rem,3.8vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-hu-white mb-6 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            SELECTED
            <br />
            <span className="text-hu-text-secondary">SYSTEMS.</span>
          </h2>

          <p
            className={`text-hu-text-secondary text-base md:text-lg leading-relaxed transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            We do not publish manufactured testimonials or vanity screenshots. Every system below
            represents an engineering record with verified architectural specifications and measurable operational outcomes.
          </p>
        </div>

        {/* Engineering Records List */}
        <div className="space-y-10">
          {engineeringRecords.map((record, i) => (
            <div
              key={record.recordNumber}
              className={`border border-hu-border bg-hu-card/25 p-8 md:p-12 hover:border-hu-accent/40 transition-all duration-700 relative ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + i * 150}ms` }}
            >
              {/* Record Header Strip */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-hu-border/60">
                <div className="flex items-center gap-4 flex-wrap">
                  <span className="text-hu-accent font-mono text-xs tracking-widest px-2.5 py-1 bg-hu-accent-dim border border-hu-accent/30 uppercase">
                    {record.recordNumber}
                  </span>
                  <span className="text-hu-white text-base md:text-lg font-medium tracking-tight">
                    {record.system}
                  </span>
                </div>

                <span className="text-[11px] font-mono tracking-wider text-hu-text-muted border border-hu-border px-3 py-1 bg-hu-black/50">
                  {record.classification}
                </span>
              </div>

              {/* Engineering Details Grid */}
              <div className="grid lg:grid-cols-12 gap-8 mb-8">
                {/* Domain & Problem */}
                <div className="lg:col-span-4 space-y-6">
                  <div>
                    <span className="text-hu-text-muted text-[10px] tracking-[0.2em] uppercase font-mono block mb-2">
                      DOMAIN
                    </span>
                    <p className="text-hu-white text-sm font-medium">
                      {record.domain}
                    </p>
                  </div>

                  <div>
                    <span className="text-hu-text-muted text-[10px] tracking-[0.2em] uppercase font-mono block mb-2">
                      PROBLEM (WHAT THE BUSINESS NEEDED)
                    </span>
                    <p className="text-hu-text-secondary text-xs md:text-sm leading-relaxed">
                      {record.problem}
                    </p>
                  </div>
                </div>

                {/* Engineered Solution & Technical Architecture Diagram */}
                <div className="lg:col-span-5 space-y-6">
                  <div>
                    <span className="text-hu-text-muted text-[10px] tracking-[0.2em] uppercase font-mono block mb-2">
                      ENGINEERED (WHAT HU ENGINES BUILT)
                    </span>
                    <p className="text-hu-text-secondary text-xs md:text-sm leading-relaxed mb-4">
                      {record.engineered}
                    </p>
                  </div>

                  {/* Architecture Dataflow Pipeline */}
                  <div>
                    <span className="text-hu-accent text-[10px] tracking-[0.2em] uppercase font-mono block mb-3">
                      ARCHITECTURE DIAGRAM
                    </span>
                    <div className="p-3.5 bg-hu-black/70 border border-hu-border flex flex-wrap items-center gap-1.5 text-[11px] font-mono">
                      {record.architectureNodes.map((node, nIdx) => (
                        <span key={node} className="flex items-center gap-1.5">
                          <span className="px-2 py-1 bg-hu-card text-hu-text border border-hu-border-light">
                            {node}
                          </span>
                          {nIdx < record.architectureNodes.length - 1 && (
                            <span className="text-hu-accent">→</span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Outcome & Key Metrics */}
                <div className="lg:col-span-3 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-hu-border/60 pt-6 lg:pt-0 lg:pl-8">
                  <div>
                    <span className="text-hu-accent text-[10px] tracking-[0.2em] uppercase font-mono block mb-2">
                      VERIFIED OUTCOME
                    </span>
                    <p className="text-hu-white text-xs leading-relaxed font-medium mb-6">
                      {record.outcome}
                    </p>
                  </div>

                  {/* Verified Metric Badges */}
                  <div className="grid grid-cols-2 gap-2">
                    {record.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="p-2.5 border border-hu-border bg-hu-black/50 text-center"
                      >
                        <span className="block text-hu-accent font-mono text-sm font-semibold">
                          {m.value}
                        </span>
                        <span className="text-hu-text-muted text-[9px] uppercase tracking-wider font-mono">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom verification footnote */}
              <div className="pt-4 border-t border-hu-border/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[10px] font-mono text-hu-text-muted">
                <span>{record.verificationNote}</span>
                <span className="text-hu-accent/80">RECORD VALIDATED</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
