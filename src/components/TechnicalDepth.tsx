"use client";

import { useReveal } from "@/hooks/useReveal";
import { useState } from "react";

interface TechDomain {
  id: string;
  category: string;
  description: string;
  items: string[];
}

const domains: TechDomain[] = [
  {
    id: "architecture",
    category: "ENTERPRISE ARCHITECTURE",
    description: "Proprietary, fault-tolerant platforms engineered for infinite scalability and institutional defensibility.",
    items: [
      "Sub-second execution velocity",
      "High-availability micro-architectures",
      "Permanent intellectual property ownership",
      "Zero third-party vendor dependency",
      "Cross-platform unified operating layers",
      "Custom enterprise ERP modernization",
      "Audited cryptographic data schemas",
    ],
  },
  {
    id: "infrastructure",
    category: "OPERATIONAL SCALE",
    description: "Distributed, event-driven infrastructure engineered to process massive transaction volume with zero latency.",
    items: [
      "Global distributed cloud topology",
      "Zero-downtime automated failover",
      "Asynchronous high-volume event streaming",
      "Sub-100ms background queue processing",
      "Real-time telemetry & predictive observability",
      "Automated elastic resource allocation",
      "Unbounded concurrent user capacity",
    ],
  },
  {
    id: "intelligence",
    category: "AUTONOMOUS INTELLIGENCE",
    description: "Deterministic cognitive operations and digital workforce engines embedded into live commercial execution.",
    items: [
      "Self-governing autonomous agents",
      "Deterministic algorithmic decision trees",
      "Private air-gapped LLM orchestration",
      "Zero-latency unstructured document parsing",
      "Predictive operational dispatching",
      "Closed-loop feedback & self-optimization",
      "Human-in-the-loop executive oversight",
    ],
  },
  {
    id: "security",
    category: "INSTITUTIONAL DEFENSE",
    description: "Zero-trust architectural defense and cryptographic protection securing sovereign enterprise assets.",
    items: [
      "Zero-trust perimeter architecture",
      "Bank-grade AES-256 / TLS 1.3 encryption",
      "Granular least-privilege RBAC controls",
      "Immutable tamper-proof audit trails",
      "SOC2 & HIPAA compliant data isolation",
      "Continuous threat detection & mitigation",
      "Automated secrets lifecycle orchestration",
    ],
  },
  {
    id: "capital",
    category: "CAPITAL VELOCITY",
    description: "Programmable financial software rails engineered for sub-second settlement and global treasury velocity.",
    items: [
      "Sub-12s settlement finality",
      "Programmable multi-currency liquidity routing",
      "Non-custodial smart contract escrow",
      "Automated cross-border trade execution",
      "Zero intermediary wire fee attrition",
      "Real-time balance sheet reconciliation",
      "Self-auditing cryptographic ledgers",
    ],
  },
];

export default function TechnicalDepth() {
  const [sectionRef, isVisible] = useReveal<HTMLElement>(0.1);
  const [activeTab, setActiveTab] = useState<string>("all");

  const displayedDomains =
    activeTab === "all"
      ? domains
      : domains.filter((d) => d.id === activeTab);

  return (
    <section
      ref={sectionRef}
      id="technical-depth"
      className="relative py-32 md:py-44 bg-hu-darker scroll-mt-10"
    >
      <div className="noise-overlay absolute inset-0 pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-16 max-w-[840px]">
          <div
            className={`flex items-center gap-3 mb-8 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <div className="w-8 h-[1px] bg-hu-accent" />
            <span className="text-hu-accent text-xs tracking-[0.3em] uppercase font-medium">
              Institutional Capability
            </span>
          </div>

          <h2
            className={`text-[clamp(1.8rem,3.5vw,3rem)] font-medium leading-[1.15] tracking-[-0.02em] text-hu-white mb-6 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            THE ARCHITECTURE OF
            <br />
            <span className="text-hu-text-secondary">ENTERPRISE DOMINANCE.</span>
          </h2>

          <p
            className={`text-hu-text-secondary text-base leading-relaxed transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            True market leaders do not assemble their future from third-party commodities. We engineer every layer
            of your proprietary operational stack for speed, defensibility, and perpetual compounding leverage.
          </p>
        </div>

        {/* Domain Filter Pills */}
        <div
          className={`flex flex-wrap gap-2 mb-12 transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 text-xs font-mono tracking-wider uppercase border transition-all duration-300 cursor-pointer ${
              activeTab === "all"
                ? "border-hu-accent text-hu-accent bg-hu-accent-dim"
                : "border-hu-border text-hu-text-muted hover:border-hu-border-light hover:text-hu-white"
            }`}
          >
            All Disciplines
          </button>
          {domains.map((dom) => (
            <button
              key={dom.id}
              onClick={() => setActiveTab(dom.id)}
              className={`px-4 py-2 text-xs font-mono tracking-wider uppercase border transition-all duration-300 cursor-pointer ${
                activeTab === dom.id
                  ? "border-hu-accent text-hu-accent bg-hu-accent-dim"
                  : "border-hu-border text-hu-text-muted hover:border-hu-border-light hover:text-hu-white"
              }`}
            >
              {dom.category}
            </button>
          ))}
        </div>

        {/* Grid of 5 domains */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedDomains.map((dom, i) => (
            <div
              key={dom.id}
              className={`border border-hu-border bg-hu-card/25 p-8 flex flex-col justify-between hover:border-hu-accent/30 transition-all duration-500 group ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${250 + i * 100}ms` }}
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-hu-border/60">
                  <span className="text-hu-accent font-mono text-xs tracking-wider">
                    {dom.category}
                  </span>
                  <span className="text-[10px] font-mono text-hu-text-muted uppercase">
                    Spec / 0{domains.findIndex((d) => d.id === dom.id) + 1}
                  </span>
                </div>

                <p className="text-hu-text-secondary text-xs leading-relaxed mb-6">
                  {dom.description}
                </p>

                {/* Items */}
                <ul className="space-y-2.5 mb-6">
                  {dom.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-xs text-hu-text-muted group-hover:text-hu-text-secondary transition-colors duration-200"
                    >
                      <span className="w-1.5 h-1.5 bg-hu-accent/40 group-hover:bg-hu-accent rounded-none transition-colors" />
                      <span className="font-mono">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-hu-border/50 text-[10px] font-mono text-hu-text-muted/70 uppercase tracking-widest">
                Production Standard
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
