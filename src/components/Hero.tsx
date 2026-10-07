const flowSteps = [
  "Human Intent",
  "Intelligence",
  "Systems",
  "Execution",
  "Business Outcome",
];

export default function Hero() {
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
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[1px] bg-hu-accent" />
              <span className="text-hu-accent text-xs tracking-[0.3em] uppercase font-medium">
                Human Utility Engines • Enterprise Sovereignty
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-[clamp(1.95rem,3.2vw,3.25rem)] font-medium leading-[1.14] tracking-[-0.025em] text-hu-white mb-6 max-w-[720px]">
              PROPRIETARY SOFTWARE,
              <br />
              AUTONOMOUS AI SYSTEMS &amp;
              <br />
              <span className="text-hu-text-secondary">FINANCIAL INFRASTRUCTURE.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-hu-text-secondary text-base md:text-lg leading-relaxed max-w-[600px] mb-9">
              We architect the proprietary operating engines behind high-growth market leaders—transforming operational entropy into autonomous execution, eliminating SaaS dependency, and forging permanent balance sheet assets that compound enterprise value.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-14">
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
                  aria-hidden="true"
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
            <div className="flex flex-wrap items-center gap-3 text-hu-text-muted text-xs tracking-[0.15em] uppercase">
              {[
                "01 Sovereign Platforms",
                "02 Autonomous Labor",
                "03 Capital Velocity",
                "04 Revenue Engines",
              ].map((item, i, arr) => (
                <span key={item} className="flex items-center gap-3">
                  <span className="text-hu-text-secondary font-mono text-[11px] tracking-wider">{item}</span>
                  {i < arr.length - 1 && (
                    <span className="w-1 h-1 rounded-full bg-hu-accent/50" />
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Right: System Flow Diagram */}
          <div className="hidden lg:block">
            <div className="relative w-[280px]">
              {flowSteps.map((step, i) => (
                <div key={step} className="relative">
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
