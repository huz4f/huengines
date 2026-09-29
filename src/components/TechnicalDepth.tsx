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
    id: "engineering",
    category: "ENGINEERING",
    description: "Type-safe, low-latency, and cross-platform core application stacks.",
    items: [
      "TypeScript",
      "React",
      "Next.js",
      "Swift",
      "Node.js",
      "PostgreSQL",
      "Prisma",
    ],
  },
  {
    id: "infrastructure",
    category: "INFRASTRUCTURE",
    description: "Distributed, event-driven backends built for high concurrency and resilience.",
    items: [
      "Cloud architecture",
      "APIs",
      "distributed workflows",
      "background processing",
      "event-driven systems",
      "databases",
      "observability",
    ],
  },
  {
    id: "intelligence",
    category: "INTELLIGENCE",
    description: "Autonomous reasoning and workflow orchestration integrated into live operations.",
    items: [
      "AI agents",
      "LLM orchestration",
      "retrieval systems",
      "automation",
      "structured decision workflows",
    ],
  },
  {
    id: "security",
    category: "SECURITY",
    description: "Architectural defense, zero-trust permissions, and cryptographic integrity.",
    items: [
      "authentication",
      "authorization",
      "encryption",
      "secure APIs",
      "identity",
      "auditability",
    ],
  },
  {
    id: "blockchain",
    category: "BLOCKCHAIN",
    description: "Programmable financial software rails and multi-chain settlement protocols.",
    items: [
      "smart contracts",
      "multi-chain systems",
      "digital asset infrastructure",
      "settlement",
      "treasury automation",
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
              Technical Depth
            </span>
          </div>

          <h2
            className={`text-[clamp(1.8rem,3.5vw,3rem)] font-medium leading-[1.15] tracking-[-0.02em] text-hu-white mb-6 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            UNDERLYING
            <br />
            <span className="text-hu-text-secondary">SYSTEMS CAPABILITY.</span>
          </h2>

          <p
            className={`text-hu-text-secondary text-base leading-relaxed transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            We operate across the complete modern software surface. Rather than generic commodity templates,
            our systems are engineered with deep technical rigor across data integrity, distributed event queues,
            low-latency APIs, and cryptographic settlement.
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
