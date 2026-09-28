"use client";

import { useReveal } from "@/hooks/useReveal";

const steps = [
  {
    number: "01",
    title: "DISCOVER",
    description:
      "Map the business, bottlenecks, economics and opportunities. Understand the system before designing the solution.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "ARCHITECT",
    description:
      "Design the technology and intelligence layer required. Specify the infrastructure, data flows, and integration points.",
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
    number: "03",
    title: "DEPLOY",
    description:
      "Build, integrate and operationalize the system. Deploy into the business with minimal disruption and maximum precision.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "COMPOUND",
    description:
      "Continuously optimize the infrastructure using real-world data. Systems that learn, adapt, and compound value over time.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="22,12 18,12 15,21 9,3 6,12 2,12" />
      </svg>
    ),
  },
];

export default function HowWeWork() {
  const [sectionRef, isVisible] = useReveal<HTMLElement>(0.1);

  return (
    <section
      ref={sectionRef}
      id="approach"
      className="relative py-32 md:py-44 bg-hu-darker"
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
              Our Approach
            </span>
          </div>

          <h2
            className={`text-[clamp(1.8rem,3.5vw,3rem)] font-medium leading-[1.15] tracking-[-0.02em] text-hu-white transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            FROM PROBLEM TO
            <br />
            <span className="text-hu-text-secondary">OPERATING SYSTEM.</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`group relative border border-hu-border bg-hu-card/20 p-8 hover:border-hu-accent/30 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${400 + i * 150}ms` }}
            >
              {/* Step connector line on desktop */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[1px] bg-hu-border z-10" />
              )}

              {/* Icon */}
              <div className="text-hu-text-muted group-hover:text-hu-accent transition-colors duration-300 mb-6">
                {step.icon}
              </div>

              {/* Number */}
              <span className="text-hu-accent/50 text-[11px] font-mono tracking-wider mb-4 block">
                {step.number}
              </span>

              {/* Title */}
              <h3 className="text-hu-white text-lg font-medium tracking-[0.02em] mb-4">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-hu-text-secondary text-sm leading-relaxed">
                {step.description}
              </p>

              {/* Bottom accent line on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-hu-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>

        {/* Supporting text */}
        <p
          className={`mt-16 text-center text-hu-text-muted text-sm tracking-wide max-w-[600px] mx-auto transition-all duration-700 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Build once. Integrate deeply. Compound continuously.
        </p>
      </div>
    </section>
  );
}
