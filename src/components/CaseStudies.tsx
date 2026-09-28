"use client";

import { useReveal } from "@/hooks/useReveal";

const caseStudies = [
  {
    number: "01",
    category: "B2B Acquisition / LeadEngine",
    dealScope: "Enterprise Account Focus",
    problem:
      "Fragmented cold outbound across disconnected tools with sub-1% reply rates, high staff turnover, and burned executive domain reputation.",
    system:
      "Deployed LeadEngine autonomous architecture: algorithmic account mapping, revenue-leak auditing, and authenticated inbox cluster orchestration.",
    outcome:
      "Rapid enterprise pipeline acceleration within 75 days. 14 verified CXO discovery meetings secured with zero manual sales overhead.",
  },
  {
    number: "02",
    category: "Revenue Infrastructure",
    dealScope: "Institutional Pipeline",
    problem:
      "Excessive acquisition overhead in repetitive manual salaries and SaaS tools producing unpredictable deal velocity and low-intent meetings.",
    system:
      "Replaced manual prospecting with LeadEngine automated reconnaissance, systems auditing, and multi-channel executive delivery.",
    outcome:
      "78% reduction in customer acquisition cost and 3.9x higher meeting-to-close conversion rate across enterprise target accounts.",
  },
  {
    number: "03",
    category: "Enterprise Systems & Consulting",
    dealScope: "Multi-Year Engagements",
    problem:
      "Bespoke engineering firm struggled to initiate conversations with corporate leadership without consuming hundreds of senior partner hours.",
    system:
      "Engineered audit-first outbound briefs delivering customized infrastructure evaluations directly to target enterprise decision-makers.",
    outcome:
      "4.6x higher response rate vs industry benchmarks. Successfully initiated and signed multiple multi-year transformation contracts.",
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
            <span className="text-hu-text-secondary">HIGH-VALUE PIPELINES.</span>
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
