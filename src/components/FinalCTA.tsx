"use client";

import { useReveal } from "@/hooks/useReveal";
import Link from "next/link";

export default function FinalCTA() {
  const [sectionRef, isVisible] = useReveal<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-52 overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(200,164,110,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-[1000px] mx-auto px-6 md:px-10 text-center">
        <h2
          className={`text-[clamp(2rem,4.5vw,4rem)] font-medium leading-[1.1] tracking-[-0.03em] text-hu-white mb-8 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          WHAT COULD YOUR BUSINESS DO
          <br />
          <span className="text-hu-text-secondary">WITH A BETTER SYSTEM?</span>
        </h2>

        <p
          className={`text-hu-text-secondary text-lg md:text-xl leading-relaxed max-w-[540px] mx-auto mb-12 transition-all duration-1000 delay-200 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          Tell us where the friction is. We&apos;ll show you what can be
          engineered.
        </p>

        <div
          className={`flex flex-wrap justify-center gap-4 transition-all duration-1000 delay-400 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <Link
            href="/#contact"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-hu-accent text-hu-black text-sm font-medium tracking-[0.1em] uppercase hover:bg-hu-white transition-colors duration-300"
          >
            Start a Transformation
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
          </Link>
          <a
            href="/systems"
            className="inline-flex items-center gap-3 px-10 py-5 border border-hu-border text-hu-text-secondary text-sm tracking-[0.1em] uppercase hover:border-hu-accent hover:text-hu-white transition-all duration-300"
          >
            Explore Systems Architecture
          </a>
        </div>
      </div>

      {/* Bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-hu-border to-transparent" />
    </section>
  );
}
