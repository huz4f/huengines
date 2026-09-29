"use client";

import { useEffect, useState } from "react";

const flowSteps = [
  "Human Intent",
  "Intelligence",
  "Systems",
  "Execution",
  "Business Outcome",
];

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      {/* Subtle radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(200,164,110,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 w-full pt-32 pb-20">
        <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-center">
          {/* Left: Copy */}
          <div>
            {/* Label */}
            <div
              className={`flex items-center gap-3 mb-8 transition-all duration-700 ${
                loaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <div className="w-8 h-[1px] bg-hu-accent" />
              <span className="text-hu-accent text-xs tracking-[0.3em] uppercase font-medium">
                Human Utility Engines
              </span>
            </div>

            {/* Headline */}
            <h1
              className={`text-[clamp(2.4rem,5vw,4.8rem)] font-medium leading-[1.08] tracking-[-0.03em] text-hu-white mb-8 max-w-[840px] transition-all duration-1000 delay-200 ${
                loaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              PROPRIETARY SOFTWARE,
              <br />
              AUTONOMOUS AI SYSTEMS &amp;
              <br />
              <span className="text-hu-text-secondary">FINANCIAL INFRASTRUCTURE.</span>
            </h1>

            {/* Subheadline */}
            <p
              className={`text-hu-text-secondary text-lg md:text-xl leading-relaxed max-w-[640px] mb-10 transition-all duration-1000 delay-400 ${
                loaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              We engineer proprietary systems for high-complexity operations—unifying mission-critical software, autonomous AI workflows, programmable settlement rails, and high-velocity revenue infrastructure into permanent, client-owned enterprise assets.
            </p>

            {/* CTAs */}
            <div
              className={`flex flex-wrap gap-4 mb-14 transition-all duration-1000 delay-500 ${
                loaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-hu-accent text-hu-black text-sm font-medium tracking-[0.1em] uppercase hover:bg-hu-white transition-colors duration-300"
              >
                Initiate Systems Audit
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
              <a
                href="#systems"
                className="inline-flex items-center gap-3 px-8 py-4 border border-hu-border text-hu-text-secondary text-sm tracking-[0.1em] uppercase hover:border-hu-accent hover:text-hu-white transition-all duration-300"
              >
                Explore Systems
              </a>
            </div>

            {/* Credibility */}
            <div
              className={`flex flex-wrap items-center gap-3 text-hu-text-muted text-xs tracking-[0.15em] uppercase transition-all duration-1000 delay-700 ${
                loaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              {[
                "Proprietary Operating Systems",
                "Autonomous AI Systems",
                "Settlement & Treasury Rails",
                "Revenue Infrastructure",
              ].map((item, i, arr) => (
                <span key={item} className="flex items-center gap-3">
                  <span className="text-hu-text-secondary font-medium">{item}</span>
                  {i < arr.length - 1 && (
                    <span className="w-1 h-1 rounded-full bg-hu-accent/50" />
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Right: System Flow Diagram */}
          <div
            className={`hidden lg:block transition-all duration-1000 delay-500 ${
              loaded
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative w-[280px]">
              {flowSteps.map((step, i) => (
                <div
                  key={step}
                  className="relative"
                  style={{
                    animationDelay: `${600 + i * 150}ms`,
                  }}
                >
                  {/* Connector line */}
                  {i > 0 && (
                    <div className="flex items-center justify-center h-10">
                      <div className="w-[1px] h-full bg-gradient-to-b from-hu-border-light to-hu-border" />
                    </div>
                  )}

                  {/* Node */}
                  <div
                    className={`group relative flex items-center gap-4 px-5 py-4 border transition-all duration-500 hover:border-hu-accent/40 ${
                      i === 0
                        ? "border-hu-accent/30 bg-hu-accent-dim"
                        : i === flowSteps.length - 1
                        ? "border-hu-accent/30 bg-hu-accent-dim"
                        : "border-hu-border bg-hu-card/50"
                    }`}
                  >
                    <span className="text-hu-text-muted text-[10px] font-mono tracking-wider">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`text-sm tracking-[0.08em] uppercase font-medium ${
                        i === 0 || i === flowSteps.length - 1
                          ? "text-hu-accent"
                          : "text-hu-text-secondary"
                      }`}
                    >
                      {step}
                    </span>

                    {/* Pulse dot */}
                    <div
                      className="absolute right-4 w-1.5 h-1.5 rounded-full bg-hu-accent/50"
                      style={{
                        animation: `pulse-glow 2s ease-in-out ${i * 0.3}s infinite`,
                      }}
                    />
                  </div>
                </div>
              ))}

              {/* Decorative side line */}
              <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-hu-accent/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom edge line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-hu-border to-transparent" />
    </section>
  );
}
