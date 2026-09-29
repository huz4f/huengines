"use client";

import { useReveal } from "@/hooks/useReveal";

interface Stage {
  number: string;
  title: string;
  description: string;
  deliverable: string;
}

const stages: Stage[] = [
  {
    number: "01",
    title: "AUDIT",
    description:
      "Deconstruct existing infrastructure, workflow friction, margin leaks, and operational bottlenecks.",
    deliverable: "Systems Audit & Architectural Thesis",
  },
  {
    number: "02",
    title: "ARCHITECT",
    description:
      "Design proprietary data flows, security boundaries, autonomous logic, and integration topologies.",
    deliverable: "Enterprise Architecture Blueprint",
  },
  {
    number: "03",
    title: "ENGINEER",
    description:
      "Build the bespoke software platforms, cognitive intelligence, and automated capital rails.",
    deliverable: "Production Engine & Full IP Assignment",
  },
  {
    number: "04",
    title: "DEPLOY",
    description:
      "Orchestrate seamless zero-downtime cutover into your live commercial operating environment.",
    deliverable: "Production Cutover & Verification",
  },
  {
    number: "05",
    title: "COMPOUND",
    description:
      "Monitor operational telemetry, continuously optimize flow, and compound balance sheet value.",
    deliverable: "Telemetry Monitoring & Scaling SLA",
  },
];

export default function HowWeWork() {
  const [sectionRef, isVisible] = useReveal<HTMLElement>(0.1);

  return (
    <section
      ref={sectionRef}
      id="method"
      className="relative py-32 md:py-44 bg-hu-black scroll-mt-10"
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
              Engineering Method
            </span>
          </div>

          <h2
            className={`text-[clamp(1.8rem,3.5vw,3rem)] font-medium leading-[1.15] tracking-[-0.02em] text-hu-white mb-6 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            FROM BUSINESS COMPLEXITY
            <br />
            <span className="text-hu-text-secondary">TO SYSTEM.</span>
          </h2>

          <p
            className={`text-hu-text-secondary text-base leading-relaxed transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            A disciplined engineering lifecycle engineered for high-stakes operational environments.
            We eliminate technical ambiguity before writing code and ensure production reliability at scale.
          </p>
        </div>

        {/* 5-Stage Engineering Lifecycle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {stages.map((stage, i) => (
            <div
              key={stage.number}
              className={`group relative border border-hu-border bg-hu-card/25 p-7 hover:border-hu-accent/40 transition-all duration-500 flex flex-col justify-between ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + i * 120}ms` }}
            >
              <div>
                {/* Stage number */}
                <div className="flex items-center justify-between mb-8 pb-3 border-b border-hu-border/60">
                  <span className="text-hu-accent font-mono text-xs tracking-wider">
                    {stage.number}
                  </span>
                  <span className="text-[10px] font-mono tracking-widest text-hu-text-muted uppercase">
                    Stage
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-hu-white text-lg font-medium tracking-[0.04em] mb-4">
                  {stage.title}
                </h3>

                {/* Description */}
                <p className="text-hu-text-secondary text-xs leading-relaxed mb-8">
                  {stage.description}
                </p>
              </div>

              {/* Deliverable tag */}
              <div className="pt-4 border-t border-hu-border/60">
                <span className="block text-[9px] uppercase font-mono tracking-[0.15em] text-hu-text-muted mb-1">
                  Deliverable
                </span>
                <span className="text-[11px] font-mono tracking-wide text-hu-accent/90">
                  {stage.deliverable}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom summary bar */}
        <div
          className={`mt-12 p-6 border border-hu-border bg-hu-card/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition-all duration-700 delay-900 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-hu-accent" />
            <span className="text-hu-text-secondary text-xs font-mono tracking-wide">
              Rigorous architectural review at every stage. Zero unverified code enters your production environment.
            </span>
          </div>
          <a
            href="#contact"
            className="text-hu-accent text-xs font-mono uppercase tracking-wider hover:text-hu-white transition-colors duration-300"
          >
            Review Audit Prerequisites →
          </a>
        </div>
      </div>
    </section>
  );
}
