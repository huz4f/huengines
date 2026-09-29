"use client";

import { useReveal } from "@/hooks/useReveal";

interface EngagementStep {
  step: string;
  title: string;
  action: string;
  description: string;
}

const steps: EngagementStep[] = [
  {
    step: "01",
    title: "SYSTEMS AUDIT",
    action: "Inbound Brief Review",
    description: "Tell us what you’re building, replacing or scaling.",
  },
  {
    step: "02",
    title: "ENGINEERING THESIS",
    action: "Architecture & Opportunity",
    description: "We identify the architecture, opportunity and implementation path.",
  },
  {
    step: "03",
    title: "BUILD",
    action: "Engineering & Deployment",
    description: "If there is a fit, we engineer and deploy the system.",
  },
];

export default function Engagement() {
  const [sectionRef, isVisible] = useReveal<HTMLElement>(0.15);

  return (
    <section
      ref={sectionRef}
      id="engagement"
      className="relative py-32 md:py-44 bg-hu-black scroll-mt-10"
    >
      <div className="noise-overlay absolute inset-0 pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="max-w-[840px] mb-20">
          <div
            className={`flex items-center gap-3 mb-8 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <div className="w-8 h-[1px] bg-hu-accent" />
            <span className="text-hu-accent text-xs tracking-[0.3em] uppercase font-medium">
              Commercial Process
            </span>
          </div>

          <h2
            className={`text-[clamp(1.9rem,3.8vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-hu-white mb-6 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            START WITH
            <br />
            <span className="text-hu-text-secondary">THE SYSTEM.</span>
          </h2>

          <p
            className={`text-hu-text-secondary text-base md:text-lg leading-relaxed transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            We do not sell commoditized hours, off-the-shelf software subscriptions, or generic
            retainer tiers. Every engagement begins with an objective assessment of your operational architecture.
          </p>
        </div>

        {/* Three Steps Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {steps.map((item, i) => (
            <div
              key={item.step}
              className={`border border-hu-border bg-hu-card/25 p-8 md:p-10 flex flex-col justify-between hover:border-hu-accent/40 transition-all duration-500 relative group ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + i * 150}ms` }}
            >
              <div>
                <div className="flex items-center justify-between mb-8 pb-3 border-b border-hu-border/60">
                  <span className="text-hu-accent font-mono text-sm tracking-wider">
                    {item.step}
                  </span>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-hu-text-muted">
                    {item.action}
                  </span>
                </div>

                <h3 className="text-hu-white text-xl font-medium tracking-tight mb-4 group-hover:text-hu-accent transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-hu-text-secondary text-sm leading-relaxed mb-8">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-hu-border/40 text-[10px] font-mono tracking-widest text-hu-text-muted uppercase">
                Milestone 0{i + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Phase 01 Transition */}
        <div
          className={`border-t border-hu-border/60 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all duration-700 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-hu-accent" />
            <span className="text-hu-text-muted text-xs font-mono tracking-wider">
              Engagement begins below with Milestone 01: Systems &amp; Architecture Audit.
            </span>
          </div>
          <span className="text-hu-accent font-mono text-xs tracking-wider flex items-center gap-1.5">
            Audit Brief ↓
          </span>
        </div>
      </div>
    </section>
  );
}
