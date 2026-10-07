"use client";

import { useRef } from "react";

interface SystemCardProps {
  number: string;
  title: string;
  description: string;
  disclaimer?: string;
  capabilities: string[];
  cta: string;
}

function SystemCard({
  number,
  title,
  description,
  disclaimer,
  capabilities,
  cta,
}: SystemCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    el.style.setProperty("--mouse-x", `${e.nativeEvent.offsetX}px`);
    el.style.setProperty("--mouse-y", `${e.nativeEvent.offsetY}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="relative group border border-hu-border bg-hu-card/30 p-8 md:p-10 card-hover flex flex-col justify-between reveal-on-scroll"
    >
      {/* Mouse follow glow (pure CSS, zero re-render overhead) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(240px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(200,164,110,0.06), transparent 70%)",
        }}
      />

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
              className="text-[11px] font-mono text-hu-text-muted bg-hu-black/50 border border-hu-border px-3 py-1.5"
            >
              {cap}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="pt-6 border-t border-hu-border flex items-center justify-between">
        <a
          href="#contact"
          className="text-hu-accent text-xs font-mono tracking-wider uppercase group-hover:text-hu-white transition-colors duration-300 inline-flex items-center gap-2"
        >
          {cta}
        </a>
        <div className="w-1.5 h-1.5 bg-hu-accent/40 group-hover:bg-hu-accent transition-colors duration-300" />
      </div>
    </div>
  );
}

const systems = [
  {
    number: "01",
    title: "PROPRIETARY OPERATING SYSTEMS",
    description:
      "Bespoke enterprise operating platforms that centralize core workflows, eliminate SaaS licensing drag, modernize legacy software, and convert manual operational overhead into permanent balance sheet enterprise value.",
    capabilities: [
      "bespoke enterprise ERP / OS",
      "legacy system modernization",
      "sub-second execution velocity",
      "complete source code IP transfer",
      "unbounded operational defensibility",
      "zero recurring SaaS tax",
    ],
    cta: "Explore Operating Systems →",
  },
  {
    number: "02",
    title: "AUTONOMOUS AI SYSTEMS",
    description:
      "Deterministic autonomous digital labor and intelligent cognitive engines that process high-volume operational workflows, document intake, and transactional decision trees without human operational friction.",
    capabilities: [
      "autonomous digital labor",
      "deterministic decision engines",
      "zero-latency document intake",
      "private air-gapped LLM orchestration",
      "self-optimizing system loops",
      "predictive anomaly resolution",
    ],
    cta: "Explore AI Systems →",
  },
  {
    number: "03",
    title: "SETTLEMENT & TREASURY RAILS",
    description:
      "Programmable non-custodial financial software rails engineered for instant settlement finality, automated treasury routing, smart contract escrow, and zero-counterparty cross-border commercial transactions.",
    disclaimer: "Pure Technology Infrastructure • Non-Custodial",
    capabilities: [
      "sub-second liquidity rails",
      "non-custodial smart contracts",
      "programmable treasury routing",
      "automated commercial escrow",
      "zero counterparty risk",
      "cryptographic balance sheet audits",
    ],
    cta: "Explore Financial Rails →",
  },
  {
    number: "04",
    title: "ALGORITHMIC REVENUE INFRASTRUCTURE",
    description:
      "Autonomous pipeline velocity engines that capture, enrich, qualify, and route enterprise client relationships into booked commercial revenue with zero manual sales representative drag.",
    capabilities: [
      "algorithmic pipeline engines",
      "predictive data enrichment",
      "dynamic calendar routing",
      "closed-loop revenue telemetry",
      "automated client onboarding",
      "pipeline velocity acceleration",
      "zero SDR payroll drag",
    ],
    cta: "Explore Revenue Systems →",
  },
];

export default function WhatWeBuild() {
  return (
    <section
      id="systems"
      className="relative py-32 md:py-44 bg-hu-darker scroll-mt-10"
    >
      {/* Noise overlay */}
      <div className="noise-overlay absolute inset-0 pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Section header */}
        <div className="mb-20 reveal-on-scroll">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-[1px] bg-hu-accent" />
            <span className="text-hu-accent text-xs tracking-[0.3em] uppercase font-medium">
              Core Disciplines
            </span>
          </div>

          <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-medium leading-[1.15] tracking-[-0.02em] text-hu-white">
            CORE DISCIPLINES.
            <br />
            <span className="text-hu-text-secondary">PURPOSE-BUILT INFRASTRUCTURE.</span>
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {systems.map((system) => (
            <SystemCard
              key={system.number}
              {...system}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
