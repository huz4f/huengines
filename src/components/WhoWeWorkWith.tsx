"use client";

import { useReveal } from "@/hooks/useReveal";

const sectors = [
  "B2B Enterprise Software & SaaS",
  "High-Value Technical Consulting",
  "Industrial & Manufacturing Operators",
  "Financial & FinTech Infrastructure",
  "Cybersecurity & Cloud Systems",
  "Logistics & Global Supply Chain",
  "Healthcare & Life Sciences Tech",
  "Established Mid-Market & Enterprise Operators",
];

export default function WhoWeWorkWith() {
  const [sectionRef, isVisible] = useReveal<HTMLElement>(0.15);

  return (
    <section
      ref={sectionRef}
      id="who-we-work-with"
      className="relative py-28 md:py-40 bg-hu-darker scroll-mt-10"
    >
      <div className="noise-overlay absolute inset-0 pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <div>
            <div
              className={`flex items-center gap-3 mb-8 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <div className="w-8 h-[1px] bg-hu-accent" />
              <span className="text-hu-accent text-xs tracking-[0.3em] uppercase font-medium">
                Partnership Profile
              </span>
            </div>

            <h2
              className={`text-[clamp(1.9rem,3.8vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-hu-white mb-8 transition-all duration-700 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              BUILT FOR ENTERPRISES
              <br />
              <span className="text-hu-text-secondary">
                WHERE PIPELINE MATTERS.
              </span>
            </h2>

            <p
              className={`text-hu-text-secondary text-base leading-relaxed max-w-[480px] mb-6 transition-all duration-700 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              We partner with founders and enterprise leaders where high-trust relationships,
              rigorous technical architecture, and predictable acquisition systems materially
              accelerate enterprise growth.
            </p>

            <p
              className={`text-hu-text-muted text-sm leading-relaxed max-w-[480px] transition-all duration-700 delay-400 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              Our deployments are intentionally selective. We engineer bespoke 
              acquisition infrastructure for companies ready to replace fragile manual 
              outreach with predictable systems that compound over quarters.
            </p>
          </div>

          {/* Right: Sector tags */}
          <div
            className={`transition-all duration-700 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {sectors.map((sector, i) => (
                <div
                  key={sector}
                  className={`group border border-hu-border bg-hu-card/25 px-5 py-4 hover:border-hu-accent/40 hover:bg-hu-accent-dim transition-all duration-500 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${500 + i * 60}ms` }}
                >
                  <span className="text-hu-text-secondary text-xs tracking-[0.04em] uppercase font-medium group-hover:text-hu-accent transition-colors duration-300">
                    {sector}
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
