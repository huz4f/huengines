"use client";

import { useReveal } from "@/hooks/useReveal";

const complexOperations = [
  "capital-intensive businesses",
  "rapidly expanding companies",
  "high-volume operations",
  "regulated environments",
  "industrial businesses",
  "logistics and infrastructure",
  "financial and digital-asset businesses",
  "healthcare groups",
  "technology companies",
  "businesses replacing fragmented internal systems",
];

export default function WhoWeWorkWith() {
  const [sectionRef, isVisible] = useReveal<HTMLElement>(0.15);

  return (
    <section
      ref={sectionRef}
      id="who-we-work-with"
      className="relative py-28 md:py-40 bg-hu-black scroll-mt-10"
    >
      <div className="noise-overlay absolute inset-0 pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5">
            <div
              className={`flex items-center gap-3 mb-8 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <div className="w-8 h-[1px] bg-hu-accent" />
              <span className="text-hu-accent text-xs tracking-[0.3em] uppercase font-medium">
                Client Profile
              </span>
            </div>

            <h2
              className={`text-[clamp(1.9rem,3.8vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-hu-white mb-6 transition-all duration-700 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              BUILT FOR
              <br />
              <span className="text-hu-text-secondary">
                COMPLEX OPERATIONS.
              </span>
            </h2>

            <p
              className={`text-hu-text-secondary text-base leading-relaxed mb-6 transition-all duration-700 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              We do not work with everyone. We deliberately restrict our engineering engagements
              to organizations where operational bottlenecks create severe financial friction and off-the-shelf
              tools have reached their architectural ceiling.
            </p>

            <p
              className={`text-hu-text-muted text-sm leading-relaxed transition-all duration-700 delay-400 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              Whether handling mission-critical data flows, high-concurrency transactions, or multi-step
              autonomous triage, our systems are built for operators where execution and reliability are non-negotiable.
            </p>
          </div>

          {/* Right Column: 10 Operational Sectors */}
          <div
            className={`lg:col-span-7 transition-all duration-700 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {complexOperations.map((operation, i) => (
                <div
                  key={operation}
                  className={`group border border-hu-border bg-hu-card/25 px-5 py-4 hover:border-hu-accent/40 hover:bg-hu-accent-dim/20 transition-all duration-300 flex items-center justify-between ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${400 + i * 50}ms` }}
                >
                  <span className="text-hu-text-secondary text-xs tracking-[0.06em] uppercase font-mono group-hover:text-hu-white transition-colors duration-200">
                    {operation}
                  </span>
                  <span className="text-hu-accent/40 group-hover:text-hu-accent font-mono text-xs transition-colors">
                    0{i + 1 < 10 ? `0${i + 1}` : i + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
