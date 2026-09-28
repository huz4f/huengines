"use client";

import { useReveal } from "@/hooks/useReveal";

const lines = [
  "Technology should not make humans busier.",
  "It should make human capability more valuable.",
  "",
  "We build systems that absorb complexity,",
  "surface intelligence and turn intent into execution.",
  "",
  "The objective isn't to replace people.",
  "It's to multiply what exceptional people can accomplish.",
];

export default function Philosophy() {
  const [sectionRef, isVisible] = useReveal<HTMLElement>(0.15);

  return (
    <section
      ref={sectionRef}
      id="philosophy"
      className="relative py-32 md:py-52 overflow-hidden"
    >
      {/* Background accent glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(200,164,110,0.04) 0%, transparent 60%)",
        }}
      />

      {/* Side accent lines */}
      <div className="absolute top-0 bottom-0 left-[10%] w-[1px] bg-gradient-to-b from-transparent via-hu-border to-transparent opacity-50" />
      <div className="absolute top-0 bottom-0 right-[10%] w-[1px] bg-gradient-to-b from-transparent via-hu-border to-transparent opacity-50" />

      <div className="relative z-10 max-w-[900px] mx-auto px-6 md:px-10 text-center">
        {/* Label */}
        <div
          className={`inline-flex items-center gap-3 mb-12 transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <div className="w-12 h-[1px] bg-hu-accent" />
          <span className="text-hu-accent text-xs tracking-[0.3em] uppercase font-medium">
            Philosophy
          </span>
          <div className="w-12 h-[1px] bg-hu-accent" />
        </div>

        {/* Headline */}
        <h2
          className={`text-[clamp(2.5rem,5vw,4.5rem)] font-medium tracking-[-0.03em] mb-16 transition-all duration-1000 delay-200 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <span className="gradient-text">HUMAN UTILITY</span>
        </h2>

        {/* Manifesto */}
        <div className="space-y-2">
          {lines.map((line, i) => (
            <p
              key={i}
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              } ${
                line === ""
                  ? "h-6"
                  : "text-hu-text-secondary text-lg md:text-xl leading-relaxed"
              }`}
              style={{ transitionDelay: `${400 + i * 120}ms` }}
            >
              {line}
            </p>
          ))}
        </div>

        {/* Bottom accent */}
        <div
          className={`mt-16 flex justify-center transition-all duration-700 delay-1200 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-16 h-[1px] bg-hu-accent/40" />
        </div>
      </div>

      {/* Bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-hu-border to-transparent" />
    </section>
  );
}
