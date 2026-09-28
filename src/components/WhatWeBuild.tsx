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
    title: "REVENUE INFRASTRUCTURE",
    description:
      "Build autonomous systems that identify opportunities, research prospects, personalize outreach, qualify demand, and accelerate sales execution.",
    capabilities: [
      "Market Intelligence",
      "Prospect Intelligence",
      "Outbound Infrastructure",
      "AI-Assisted Sales",
      "CRM Orchestration",
      "Proposal Automation",
      "Revenue Analytics",
    ],
    cta: "Explore Revenue Systems →",
  },
  {
    number: "02",
    title: "AI OPERATING SYSTEMS",
    description:
      "Deploy intelligent agents and automated workflows across the organization to compound operational efficiency.",
    capabilities: [
      "AI Agents",
      "Workflow Automation",
      "Knowledge Systems",
      "Document Intelligence",
      "Decision Support",
      "Process Automation",
      "AI Integration",
    ],
    cta: "Explore AI Systems →",
  },
  {
    number: "03",
    title: "CYBERSECURITY SYSTEMS",
    description:
      "Design security infrastructure for companies operating at scale. Build resilience into the technology layer.",
    capabilities: [
      "Security Architecture",
      "Attack-Surface Intelligence",
      "Cloud Security",
      "Identity & Access",
      "Vulnerability Management",
      "Monitoring",
      "Incident Response",
      "Compliance Automation",
    ],
    cta: "Explore Security Systems →",
  },
  {
    number: "04",
    title: "ENTERPRISE SOFTWARE",
    description:
      "Replace fragmented legacy processes with purpose-built technology designed around the economics of your business.",
    capabilities: [
      "Internal Platforms",
      "Operational Software",
      "Dashboards",
      "Data Infrastructure",
      "APIs",
      "Integrations",
      "Mobile Systems",
      "Cloud Infrastructure",
    ],
    cta: "Explore Enterprise Systems →",
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
            INTELLIGENCE, ENGINEERED
            <br />
            <span className="text-hu-text-secondary">INTO THE BUSINESS.</span>
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
