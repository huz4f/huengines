import ThesisCanvas from "./ThesisCanvas";

const transitionSteps = [
  "FRAGMENTED SYSTEMS",
  "DATA",
  "WORKFLOWS",
  "INTELLIGENCE",
  "PROPRIETARY SYSTEM",
];

export default function Thesis() {
  return (
    <section
      id="thesis"
      className="relative py-32 md:py-44 overflow-hidden bg-hu-black scroll-mt-10"
    >
      <div className="noise-overlay absolute inset-0 pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column: Conceptual Copy & Visual Transition */}
          <div className="reveal-on-scroll">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[1px] bg-hu-accent" />
              <span className="text-hu-accent text-xs tracking-[0.3em] uppercase font-medium">
                The Missing Layer
              </span>
            </div>

            <h2 className="text-[clamp(1.9rem,3.8vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.025em] text-hu-white mb-8">
              WHEN THE SYSTEM YOU NEED
              <br />
              <span className="text-hu-text-secondary">DOESN’T EXIST.</span>
            </h2>

            <div className="space-y-5 text-hu-text-secondary text-base md:text-lg leading-relaxed mb-10">
              <p>
                Most businesses are forced to assemble their operations from disconnected
                SaaS products, spreadsheets, manual processes and systems that were never
                designed for them.
              </p>
              <p className="text-hu-white font-medium text-lg md:text-xl">
                We build the missing layer.
              </p>
              <p>
                A proprietary system can unify the workflows, data, intelligence and
                infrastructure that standard software leaves fragmented.
              </p>
            </div>

            {/* Visual Transition: FRAGMENTED SYSTEMS → DATA → WORKFLOWS → INTELLIGENCE → PROPRIETARY SYSTEM */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                {transitionSteps.map((step, i) => (
                  <span key={step} className="flex items-center gap-2">
                    <span
                      className={`px-3.5 py-2 text-[11px] font-mono tracking-wider uppercase border ${
                        i === transitionSteps.length - 1
                          ? "border-hu-accent text-hu-accent bg-hu-accent-dim font-semibold shadow-[0_0_20px_rgba(200,164,110,0.2)]"
                          : "border-hu-accent/30 text-hu-white bg-hu-black/60"
                      }`}
                    >
                      {step}
                    </span>
                    {i < transitionSteps.length - 1 && (
                      <span className="text-xs text-hu-accent">
                        →
                      </span>
                    )}
                  </span>
                ))}
              </div>

              <p className="text-xs font-mono tracking-wide text-hu-accent">
                ✓ Unified into one permanent proprietary operating asset.
              </p>
            </div>
          </div>

          {/* Right Column: Dynamic Web-Like Structure with Golden Core */}
          <div className="relative reveal-on-scroll">
            <ThesisCanvas />
          </div>
        </div>
      </div>

      {/* Bottom edge line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-hu-border to-transparent" />
    </section>
  );
}
