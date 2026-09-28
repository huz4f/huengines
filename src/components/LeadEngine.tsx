"use client";

import { useReveal } from "@/hooks/useReveal";

const phases = [
  {
    step: "01",
    title: "Systems & Architecture Audit",
    description:
      "Deep technical inspection of existing bottlenecks, operational latency, security exposure, and untapped revenue leverage before writing a single line of code.",
    highlight: "100% Tailored Architectural Spec",
  },
  {
    step: "02",
    title: "Full-Stack Bespoke Engineering",
    description:
      "Precision engineering across your exact requirements: high-throughput web/mobile platforms, custom operational CRMs, decentralized crypto settlement rails, or autonomous AI agents.",
    highlight: "Institutional-Grade Code & Protocols",
  },
  {
    step: "03",
    title: "Security Hardening & Deployment",
    description:
      "Smart contract audits, penetration testing, encrypted communications, zero-trust access control, and zero-downtime multi-region cloud deployment.",
    highlight: "Zero-Trust Infrastructure",
  },
  {
    step: "04",
    title: "Autonomous Scaling & Telemetry",
    description:
      "Self-healing workflows, 24/7 telemetry monitoring, automated operational pipelines, and real-time execution that compounds enterprise value without headcount drag.",
    highlight: "Proprietary Digital Assets You Own",
  },
];

const metrics = [
  { value: "100%", label: "Proprietary Code Ownership" },
  { value: "< 1s", label: "Real-Time Transaction Finality" },
  { value: "99.99%", label: "High-Availability System Uptime" },
  { value: "Zero", label: "Third-Party SaaS Rent-Seeking" },
];

export default function LeadEngine() {
  const [sectionRef, isVisible] = useReveal<HTMLElement>(0.1);

  return (
    <section
      ref={sectionRef}
      id="leadengine"
      className="relative py-28 md:py-40 overflow-hidden bg-hu-black scroll-mt-10"
    >
      {/* Background accent glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(200,164,110,0.04) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-20 max-w-[800px] mx-auto">
          <div
            className={`inline-flex items-center gap-3 mb-6 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <div className="w-8 h-[1px] bg-hu-accent" />
            <span className="text-hu-accent text-xs tracking-[0.3em] uppercase font-medium">
              The Hu Engines Architecture
            </span>
            <div className="w-8 h-[1px] bg-hu-accent" />
          </div>

          <h2
            className={`text-[clamp(2.2rem,4.5vw,3.8rem)] font-medium tracking-[-0.03em] text-hu-white mb-6 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            HOW WE <span className="text-hu-accent">ENGINEER</span> & DEPLOY.
          </h2>

          <p
            className={`text-hu-text-secondary text-base md:text-lg leading-relaxed transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            Whether building high-scale operational platforms, decentralized crypto rails, or 
            autonomous AI operating systems—our engineering framework guarantees 
            institutional reliability, unmatched performance, and permanent intellectual property ownership.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {phases.map((phase, i) => (
            <div
              key={phase.step}
              className={`border border-hu-border bg-hu-card/30 p-8 flex flex-col justify-between hover:border-hu-accent/40 transition-all duration-500 group ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + i * 150}ms` }}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-hu-accent font-mono text-sm tracking-wider">
                    {phase.step}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-hu-accent/40 group-hover:bg-hu-accent transition-colors duration-300" />
                </div>
                <h3 className="text-hu-white text-lg font-medium tracking-tight mb-3">
                  {phase.title}
                </h3>
                <p className="text-hu-text-secondary text-sm leading-relaxed mb-6">
                  {phase.description}
                </p>
              </div>

              <div className="pt-4 border-t border-hu-border/60">
                <span className="text-[11px] font-mono tracking-wide text-hu-accent">
                  ✓ {phase.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison: Why High-Stakes Businesses Choose Hu Engines */}
        <div
          className={`border border-hu-border bg-hu-card/20 p-8 md:p-12 mb-20 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-hu-accent text-xs font-mono tracking-[0.2em] uppercase block mb-3">
                The Engineering Difference
              </span>
              <h3 className="text-hu-white text-2xl md:text-3xl font-medium tracking-tight mb-4">
                Why Off-the-Shelf SaaS & Generic Agencies Fail at Scale
              </h3>
              <p className="text-hu-text-secondary text-sm leading-relaxed mb-6">
                Serious enterprises and high-growth ventures cannot scale on third-party SaaS band-aids, 
                fragile no-code tools, or junior dev shops. High-stakes operations demand dedicated codebases, 
                audited cryptographic security, and purpose-built architectures designed around your exact economics.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-red-400 font-mono text-xs mt-0.5">✕</span>
                  <span className="text-hu-text-muted text-xs leading-relaxed">
                    <strong>Generic Agencies & SaaS Stacks:</strong> Recurring subscription bleed, rigid feature walls, fragile integration breaks, and zero proprietary asset value.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-hu-accent font-mono text-xs mt-0.5">✓</span>
                  <span className="text-hu-text-secondary text-xs leading-relaxed">
                    <strong>Hu Engines Custom Systems:</strong> Institutional performance, custom crypto and AI architectures, zero recurring license fees, and 100% intellectual property ownership.
                  </span>
                </div>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              {metrics.map((item) => (
                <div
                  key={item.label}
                  className="border border-hu-border bg-hu-black/60 p-6 text-center"
                >
                  <span className="block text-hu-accent font-medium text-3xl md:text-4xl tracking-tight mb-1">
                    {item.value}
                  </span>
                  <span className="text-hu-text-muted text-[11px] tracking-wider uppercase font-mono">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          className={`text-center transition-all duration-700 delay-900 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 px-10 py-4 bg-hu-accent text-hu-black text-sm font-medium tracking-[0.1em] uppercase hover:bg-hu-white transition-all duration-300 shadow-[0_0_25px_rgba(200,164,110,0.2)]"
          >
            Commission Custom Architecture
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="group-hover:translate-x-1 transition-transform duration-300"
            >
              <path
                d="M1 7h12M8 2l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-hu-border to-transparent" />
    </section>
  );
}
