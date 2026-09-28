"use client";

import { useReveal } from "@/hooks/useReveal";

const caseStudies = [
  {
    number: "01",
    category: "Autonomous Healthcare & Clinic Operations",
    dealScope: "$420K+ Annual Recovery",
    problem:
      "High-volume private surgical group suffered heavy revenue attrition due to fragmented intake portals, manual phone booking delays, and 48-hour consult follow-up lag.",
    system:
      "Engineered custom real-time patient intake CRM paired with an autonomous 24/7 AI triage engine, calendar synchronization, and HIPAA-compliant automated patient onboarding.",
    outcome:
      "Consult booking rate increased by 64%. Recaptured $420,000+ in annual lost bookings with instantaneous sub-30-second patient inquiry responses.",
  },
  {
    number: "02",
    category: "Decentralized Settlement & Treasury Rails",
    dealScope: "$18M+ Monthly Volume",
    problem:
      "Cross-border commercial enterprise suffered 4-7% foreign exchange friction, 3-day international settlement delays, and recurring counterparty settlement failures.",
    system:
      "Architected custom non-custodial smart contract escrow and multi-chain stablecoin settlement rail with automated treasury liquidity routing and real-time cryptographic audit trails.",
    outcome:
      "Reduced settlement latency from 72 hours to sub-12 seconds while slashing cross-border transaction fees by 89% across $18M+ monthly volume.",
  },
  {
    number: "03",
    category: "Bespoke Enterprise Logistics & High-Ticket Portal",
    dealScope: "100% Proprietary IP / Zero SaaS Tax",
    problem:
      "Mid-market freight and distribution operator was trapped paying $140k/yr in fragmented SaaS licensing across 5 disconnected legacy ERP tools with constant synchronization failure.",
    system:
      "Built a unified proprietary operations operating system: real-time shipment dispatch telemetry, client self-serve tracking portal, and automated invoice factoring.",
    outcome:
      "Eliminated 100% of recurring third-party software licensing fees. Reduced order-to-dispatch turnaround by 52% with a single, permanent enterprise IP asset.",
  },
];

export default function CaseStudies() {
  const [sectionRef, isVisible] = useReveal<HTMLElement>(0.1);

  return (
    <section
      ref={sectionRef}
      id="case-studies"
      className="relative py-28 md:py-40 bg-hu-darker scroll-mt-10"
    >
      <div className="noise-overlay absolute inset-0 pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-20">
          <div
            className={`flex items-center gap-3 mb-8 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <div className="w-8 h-[1px] bg-hu-accent" />
            <span className="text-hu-accent text-xs tracking-[0.3em] uppercase font-medium">
              Verified Deployments
            </span>
          </div>

          <h2
            className={`text-[clamp(1.9rem,3.8vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-hu-white transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            PROVEN IMPACT ON
            <br />
            <span className="text-hu-text-secondary">CRITICAL OPERATIONS.</span>
          </h2>
        </div>

        {/* Cases */}
        <div className="space-y-6">
          {caseStudies.map((study, i) => (
            <div
              key={study.number}
              className={`group border border-hu-border bg-hu-card/25 p-8 md:p-12 hover:border-hu-accent/30 transition-all duration-700 relative ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${350 + i * 150}ms` }}
            >
              {/* Top bar */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <span className="text-hu-accent font-mono text-xs tracking-wider">
                  DEPLOYMENT / {study.number}
                </span>
                <div className="w-[1px] h-3 bg-hu-border" />
                <span className="text-hu-white text-xs tracking-[0.08em] uppercase font-medium">
                  {study.category}
                </span>
                <div className="flex-1" />
                <span className="text-hu-accent/90 text-xs font-mono tracking-wider border border-hu-accent/30 px-2.5 py-1 bg-hu-accent-dim">
                  {study.dealScope}
                </span>
              </div>

              {/* Content grid */}
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-hu-text-muted text-[11px] tracking-[0.15em] uppercase mb-3 font-mono">
                    Challenge
                  </h4>
                  <p className="text-hu-text-secondary text-sm leading-relaxed">
                    {study.problem}
                  </p>
                </div>
                <div>
                  <h4 className="text-hu-text-muted text-[11px] tracking-[0.15em] uppercase mb-3 font-mono">
                    Engineered Solution
                  </h4>
                  <p className="text-hu-text-secondary text-sm leading-relaxed">
                    {study.system}
                  </p>
                </div>
                <div>
                  <h4 className="text-hu-accent text-[11px] tracking-[0.15em] uppercase mb-3 font-mono">
                    Business Result
                  </h4>
                  <p className="text-hu-white text-sm leading-relaxed font-medium">
                    {study.outcome}
                  </p>
                </div>
              </div>

              {/* Bottom accent line on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-hu-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
