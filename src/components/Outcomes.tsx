"use client";

import { useReveal } from "@/hooks/useReveal";

const outcomes = [
  {
    title: "PREDICTABLE PIPELINE",
    description:
      "Transform haphazard outreach into an autonomous engine delivering consistent, qualified executive conversations every week.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 22l6-8 5 4 9-14" />
        <path d="M18 4h6v6" />
      </svg>
    ),
  },
  {
    title: "ZERO SDR OVERHEAD",
    description:
      "Eliminate the costly cycle of recruiting, ramping, and churning manual sales reps with low, unpredictable returns.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: "EXECUTIVE-LEVEL ENGAGEMENT",
    description:
      "Reach enterprise decision-makers through audit-backed value propositions that establish immediate credibility.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <polyline points="16 11 18 13 22 9" />
      </svg>
    ),
  },
  {
    title: "COMPOUNDING IP & ASSETS",
    description:
      "Build proprietary pipeline assets you own—dedicated domain clusters, algorithmic scrapers, and enriched intelligence.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    title: "BULLETPROOF DELIVERABILITY",
    description:
      "Enterprise inbox warming, SPF/DKIM/DMARC routing, and domain isolation ensuring 99.4%+ primary inbox placement.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "MEASURABLE ROI",
    description:
      "Every outreach sequence is benchmarked against real enterprise pipeline value and contract conversions.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v12M6 12h12" />
      </svg>
    ),
  },
];

export default function Outcomes() {
  const [sectionRef, isVisible] = useReveal<HTMLElement>(0.1);

  return (
    <section
      ref={sectionRef}
      id="outcomes"
      className="relative py-28 md:py-40 scroll-mt-10 bg-hu-black"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
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
              Enterprise Outcomes
            </span>
          </div>

          <h2
            className={`text-[clamp(1.9rem,3.8vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-hu-white transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            WHAT AUTONOMOUS PIPELINE
            <br />
            <span className="text-hu-text-secondary">MAKES POSSIBLE.</span>
          </h2>
        </div>

        {/* Outcome cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((outcome, i) => (
            <div
              key={outcome.title}
              className={`border border-hu-border bg-hu-card/25 p-8 hover:border-hu-accent/40 transition-all duration-500 group ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${250 + i * 100}ms` }}
            >
              <div className="w-12 h-12 border border-hu-border bg-hu-black/60 flex items-center justify-center text-hu-accent mb-6 group-hover:border-hu-accent/40 group-hover:scale-105 transition-all duration-300">
                {outcome.icon}
              </div>
              <h3 className="text-hu-white text-base font-medium tracking-wide mb-3">
                {outcome.title}
              </h3>
              <p className="text-hu-text-secondary text-sm leading-relaxed">
                {outcome.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
