"use client";

import { useReveal } from "@/hooks/useReveal";

interface ComparisonRow {
  dimension: string;
  offTheShelf: string;
  bespoke: string;
  detail: string;
}

const comparisons: ComparisonRow[] = [
  {
    dimension: "Competitive Advantage",
    offTheShelf: "Rented commodity templates",
    bespoke: "Insurmountable enterprise moat",
    detail: "Standard SaaS forces your company into identical interfaces used by competitors; proprietary infrastructure encodes your exact competitive advantage.",
  },
  {
    dimension: "Operational Autonomy",
    offTheShelf: "Vendor rate limits & black boxes",
    bespoke: "Sovereign enterprise architecture",
    detail: "Zero arbitrary API caps, vendor outages, or forced migration roadmaps. Your systems scale unconditionally with your transaction velocity.",
  },
  {
    dimension: "Ecosystem Integrity",
    offTheShelf: "Fragile tool sprawl & margin leaks",
    bespoke: "Singular unified operating system",
    detail: "Eliminates fragile Zapier glue and disconnected spreadsheets across departments, creating a synchronized corporate nervous system.",
  },
  {
    dimension: "Capital Efficiency",
    offTheShelf: "Perpetual recurring SaaS tax",
    bespoke: "Permanent balance sheet asset",
    detail: "Stop paying per-seat subscription penalties for scaling headcount. Build once, deploy on your own infrastructure, and compound EBITDA.",
  },
  {
    dimension: "Operational Flow",
    offTheShelf: "Rigid third-party constraints",
    bespoke: "Engineered for your exact dominance",
    detail: "Every interface, decision tree, database schema, and telemetry queue is tailored specifically around your business logic.",
  },
  {
    dimension: "Enterprise Valuation",
    offTheShelf: "Ephemeral operating expense",
    bespoke: "Proprietary IP expansion",
    detail: "100% client code and infrastructure ownership. Proprietary technology dramatically expands your enterprise valuation multiple upon capital events or exit.",
  },
];

export default function BespokeComparison() {
  const [sectionRef, isVisible] = useReveal<HTMLElement>(0.15);

  return (
    <section
      ref={sectionRef}
      id="comparison"
      className="relative py-28 md:py-40 bg-hu-darker scroll-mt-10"
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
              Architectural Decision
            </span>
          </div>

          <h2
            className={`text-[clamp(1.9rem,3.8vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-hu-white mb-6 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            WHEN OFF-THE-SHELF
            <br />
            <span className="text-hu-text-secondary">STOPS FITTING.</span>
          </h2>

          <p
            className={`text-hu-text-secondary text-base md:text-lg leading-relaxed transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            Sometimes buying software is the wrong engineering decision. When your operations
            require bespoke workflows, high-throughput data processing, or custom automation,
            forcing standard SaaS into your business creates friction, margin decay, and compounding fragility.
          </p>
        </div>

        {/* Side-by-side comparison table */}
        <div
          className={`border border-hu-border bg-hu-card/25 overflow-hidden transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-hu-black/80 border-b border-hu-border px-6 md:px-8 py-5 text-xs font-mono tracking-wider uppercase">
            <div className="col-span-12 md:col-span-3 text-hu-text-muted">
              Dimension
            </div>
            <div className="hidden md:block col-span-4 text-hu-text-muted">
              Off-The-Shelf Software
            </div>
            <div className="col-span-12 md:col-span-5 text-hu-accent flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-hu-accent" />
              Bespoke HU Engines System
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-hu-border/60">
            {comparisons.map((row, idx) => (
              <div
                key={row.dimension}
                className="grid grid-cols-12 px-6 md:px-8 py-6 gap-y-3 md:gap-y-0 items-center hover:bg-hu-card/40 transition-colors duration-200"
              >
                {/* Dimension */}
                <div className="col-span-12 md:col-span-3">
                  <span className="text-hu-text-muted text-[11px] font-mono tracking-wider uppercase block mb-1">
                    0{idx + 1}
                  </span>
                  <span className="text-hu-white text-sm font-medium">
                    {row.dimension}
                  </span>
                </div>

                {/* Off-the-shelf */}
                <div className="col-span-12 md:col-span-4 pr-4">
                  <div className="flex items-start gap-2">
                    <span className="text-hu-text-muted font-mono text-xs mt-0.5">✕</span>
                    <div>
                      <span className="text-hu-text-secondary text-sm font-medium block">
                        {row.offTheShelf}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bespoke */}
                <div className="col-span-12 md:col-span-5 bg-hu-accent-dim/30 md:bg-transparent -mx-6 md:mx-0 px-6 md:px-0 py-3 md:py-0 border-l border-hu-accent/20 md:border-none">
                  <div className="flex items-start gap-2.5">
                    <span className="text-hu-accent font-mono text-xs mt-0.5">✓</span>
                    <div>
                      <span className="text-hu-white text-sm font-medium block text-hu-accent/95">
                        {row.bespoke}
                      </span>
                      <p className="text-hu-text-secondary text-xs leading-relaxed mt-1">
                        {row.detail}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footnote callout */}
        <div
          className={`mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 border border-hu-border bg-hu-black/40 text-xs text-hu-text-muted font-mono transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span>
            Bespoke systems create defensibility. Standard SaaS tools can be copied by any competitor tomorrow.
          </span>
          <a
            href="#contact"
            className="text-hu-accent hover:text-hu-white transition-colors duration-300 whitespace-nowrap uppercase tracking-wider inline-flex items-center gap-2"
          >
            Audit Your Software Stack →
          </a>
        </div>
      </div>
    </section>
  );
}
