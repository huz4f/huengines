"use client";

import { useReveal } from "@/hooks/useReveal";

const outcomes = [
  {
    title: "MISSION-CRITICAL RELIABILITY",
    description:
      "Fault-tolerant distributed architecture, zero-downtime rolling deployments, and automated self-healing infrastructure engineered for 99.99% uptime.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "SUB-SECOND LATENCY & FINALITY",
    description:
      "High-throughput smart contracts, event-driven microservices, and optimized databases engineered for real-time transaction execution and settlement.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: "100% PROPRIETARY IP ASSETS",
    description:
      "Own every line of code, database schema, and deployment pipeline. Zero vendor lock-in, zero third-party platform risk, and zero perpetual SaaS tax.",
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
    title: "AUTONOMOUS WORKFLOW LEVERAGE",
    description:
      "Deterministic AI agents and automated state machines that execute client intake, triage, and multi-step operations 24/7 without headcount drag.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: "INSTITUTIONAL SECURITY",
    description:
      "Defensive architecture, audited smart contract rails, cryptographic key management, and zero-trust perimeter enforcement protecting high-stakes data.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: "COMPOUNDING COMMERCIAL ROI",
    description:
      "Every system is designed around direct enterprise economics—slashing operational costs, capturing lost margin, and creating defensible competitive moats.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 22l6-8 5 4 9-14" />
        <path d="M18 4h6v6" />
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
              Engineering Outcomes
            </span>
          </div>

          <h2
            className={`text-[clamp(1.9rem,3.8vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-hu-white transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            WHAT BESPOKE ENGINEERING
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
