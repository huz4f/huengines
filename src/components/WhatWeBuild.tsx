"use client";

import { useReveal } from "@/hooks/useReveal";
import { useRef, useState } from "react";

interface SystemCardProps {
  number: string;
  title: string;
  description: string;
  disclaimer?: string;
  capabilities: string[];
  cta: string;
  delay: number;
  isVisible: boolean;
}

function SystemCard({
  number,
  title,
  description,
  disclaimer,
  capabilities,
  cta,
  delay,
  isVisible,
}: SystemCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative group border border-hu-border bg-hu-card/30 p-8 md:p-10 card-hover flex flex-col justify-between transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Mouse follow glow */}
      {isHovered && (
        <div
          className="absolute pointer-events-none rounded-full transition-opacity duration-300"
          style={{
            left: mousePos.x - 100,
            top: mousePos.y - 100,
            width: 200,
            height: 200,
            background:
              "radial-gradient(circle, rgba(200,164,110,0.06) 0%, transparent 70%)",
          }}
        />
      )}

      <div>
        {/* Top header row */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-hu-accent font-mono text-xs tracking-wider">
            {number}
          </span>
          {disclaimer && (
            <span className="text-[10px] font-mono tracking-wider text-hu-text-muted border border-hu-border px-2 py-0.5 uppercase">
              {disclaimer}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-hu-white text-xl md:text-2xl font-medium tracking-[-0.01em] mb-4">
          {title}
        </h3>

        {/* Description */}
        <p className="text-hu-text-secondary text-sm leading-relaxed mb-8">
          {description}
        </p>

        {/* Capabilities */}
        <div className="flex flex-wrap gap-2 mb-8">
          {capabilities.map((cap) => (
            <span
              key={cap}
              className="px-3 py-1.5 text-[11px] tracking-[0.06em] lowercase text-hu-text-muted border border-hu-border bg-hu-black/50 group-hover:border-hu-border-light group-hover:text-hu-text-secondary transition-colors duration-300"
            >
              {cap}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <a
        href="#contact"
        className="inline-flex items-center gap-2 text-hu-accent text-sm tracking-[0.05em] group-hover:gap-3 transition-all duration-300 pt-4 border-t border-hu-border/40"
      >
        {cta}
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M1 7h12M8 2l5 5-5 5"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      </a>
    </div>
  );
}

const systems = [
  {
    number: "01 — PROPRIETARY OPERATING SYSTEMS",
    title: "PROPRIETARY OPERATING SYSTEMS",
    description:
      "Mission-critical platforms, enterprise portals, and legacy system modernization engineered around your proprietary business workflows.",
    capabilities: [
      "operational platforms",
      "legacy modernization",
      "unified enterprise OS",
      "enterprise portals",
      "custom ERP layers",
      "distributed cloud APIs",
      "workflow automation",
      "system integrations",
    ],
    cta: "Initiate Systems Audit →",
  },
  {
    number: "02 — AUTONOMOUS AI SYSTEMS",
    title: "AUTONOMOUS AI SYSTEMS",
    description:
      "Deterministic AI engines and autonomous digital labor operating directly inside real business workflows—not isolated chat interfaces.",
    capabilities: [
      "autonomous agents",
      "back-office labor automation",
      "intelligent intake & triage",
      "document intelligence",
      "decision workflows",
      "multi-agent orchestration",
      "private air-gapped LLMs",
      "automated research",
    ],
    cta: "Explore AI Systems →",
  },
  {
    number: "03 — PROGRAMMABLE TREASURY & SETTLEMENT RAILS",
    title: "PROGRAMMABLE TREASURY & SETTLEMENT RAILS",
    description:
      "Software infrastructure for digital assets, high-velocity settlement, treasury automation, and programmable financial operations.",
    disclaimer: "Software Infrastructure Only",
    capabilities: [
      "stablecoin settlement rails",
      "programmable treasury",
      "multi-chain infrastructure",
      "non-custodial escrow",
      "automated liquidity routing",
      "custody workflows",
      "cryptographic audit trails",
      "blockchain integrations",
    ],
    cta: "Explore Financial Rails →",
  },
  {
    number: "04 — ALGORITHMIC REVENUE INFRASTRUCTURE",
    title: "ALGORITHMIC REVENUE INFRASTRUCTURE",
    description:
      "Systems that connect customer acquisition, instant qualification, operational workflows, and measurable business outcomes.",
    capabilities: [
      "intelligent intake rails",
      "conversion infrastructure",
      "customer portals",
      "revenue workflows",
      "operational telemetry",
      "automated follow-up",
      "business intelligence",
      "pipeline automation",
    ],
    cta: "Explore Revenue Systems →",
  },
];

export default function WhatWeBuild() {
  const [sectionRef, isVisible] = useReveal<HTMLElement>(0.1);

  return (
    <section
      ref={sectionRef}
      id="systems"
      className="relative py-32 md:py-44 bg-hu-darker scroll-mt-10"
    >
      {/* Noise overlay */}
      <div className="noise-overlay absolute inset-0 pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Section header */}
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
              Core Disciplines
            </span>
          </div>

          <h2
            className={`text-[clamp(1.8rem,3.5vw,3rem)] font-medium leading-[1.15] tracking-[-0.02em] text-hu-white transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            PROPRIETARY SYSTEMS,
            <br />
            <span className="text-hu-text-secondary">ENGINEERED FOR COMPLEX OPERATIONS.</span>
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {systems.map((system, i) => (
            <SystemCard
              key={system.number}
              {...system}
              delay={300 + i * 150}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
