"use client";

import { useReveal } from "@/hooks/useReveal";
import { useRef, useState, useEffect } from "react";

interface SystemCardProps {
  number: string;
  title: string;
  description: string;
  capabilities: string[];
  cta: string;
  delay: number;
  isVisible: boolean;
}

function SystemCard({
  number,
  title,
  description,
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
      className={`relative group border border-hu-border bg-hu-card/30 p-8 md:p-10 card-hover transition-all duration-700 ${
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

      {/* Number */}
      <span className="text-hu-text-muted text-xs font-mono tracking-wider mb-6 block">
        {number}
      </span>

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
            className="px-3 py-1.5 text-[11px] tracking-[0.08em] uppercase text-hu-text-muted border border-hu-border bg-hu-black/50 group-hover:border-hu-border-light transition-colors duration-300"
          >
            {cap}
          </span>
        ))}
      </div>

      {/* CTA */}
      <a
        href="#contact"
        className="inline-flex items-center gap-2 text-hu-accent text-sm tracking-[0.05em] group-hover:gap-3 transition-all duration-300"
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
    number: "01",
    title: "CRYPTO & DECENTRALIZED RAILS",
    description:
      "Architect and deploy high-frequency crypto payment gateways, cross-border settlement rails, smart contract protocols, and institutional self-custody systems.",
    capabilities: [
      "Crypto Settlement Rails",
      "Smart Contracts",
      "DeFi Architecture",
      "Payment Gateways",
      "Algorithmic Execution",
      "Multi-Chain Routing",
      "On-Chain Analytics",
      "Custody Integration",
    ],
    cta: "Explore Crypto Systems →",
  },
  {
    number: "02",
    title: "BESPOKE ENTERPRISE SOFTWARE",
    description:
      "Replace off-the-shelf software and manual bottlenecks with custom operational platforms, native mobile applications (iOS/Android), and high-throughput backend systems.",
    capabilities: [
      "Custom Operations CRMs",
      "Native Mobile Apps (iOS/Android)",
      "Internal ERP Platforms",
      "Client Intake Portals",
      "High-Throughput APIs",
      "Database Architecture",
      "Cloud Infrastructure",
      "Real-Time Dashboards",
    ],
    cta: "Explore Enterprise Software →",
  },
  {
    number: "03",
    title: "AUTONOMOUS AI OPERATING SYSTEMS",
    description:
      "Deploy 24/7 autonomous intelligence agents and self-executing workflows that handle client triage, scheduling, qualification, and high-complexity business operations.",
    capabilities: [
      "Autonomous AI Agents",
      "Speed-to-Lead Triage",
      "Workflow Orchestration",
      "Document Intelligence",
      "Decision Automation",
      "Conversational AI",
      "Zero-Human Drag",
    ],
    cta: "Explore AI Systems →",
  },
  {
    number: "04",
    title: "HIGH-YIELD REVENUE INFRASTRUCTURE",
    description:
      "Design high-ticket client intake, conversion telemetry, automated proposal desks, and bespoke checkout architecture built to maximize transaction yield.",
    capabilities: [
      "High-Ticket Funnels",
      "Intake Automation",
      "Conversion Telemetry",
      "Proposal Desks",
      "Revenue Diagnostics",
      "Payment Orchestration",
      "Client Onboarding Rails",
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
      className="relative py-32 md:py-44 bg-hu-darker"
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
              What We Build
            </span>
          </div>

          <h2
            className={`text-[clamp(1.8rem,3.5vw,3rem)] font-medium leading-[1.15] tracking-[-0.02em] text-hu-white transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            HIGH-DEMAND DIGITAL SYSTEMS,
            <br />
            <span className="text-hu-text-secondary">ENGINEERED FOR SUPREMACY.</span>
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
