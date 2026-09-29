"use client";

import { useReveal } from "@/hooks/useReveal";
import { useEffect, useRef, useState } from "react";
import HuMark from "./HuMark";

interface TransitionStep {
  id: string;
  name: string;
  status: string;
  description: string;
}

const transitionSteps: TransitionStep[] = [
  {
    id: "01",
    name: "FRAGMENTED SYSTEMS",
    status: "Initial State",
    description: "SaaS sprawl, spreadsheets, and manual duct-tape.",
  },
  {
    id: "02",
    name: "DATA",
    status: "Consolidation",
    description: "Unified models, clean telemetry, and shared truth.",
  },
  {
    id: "03",
    name: "WORKFLOWS",
    status: "Orchestration",
    description: "Deterministic logic and synchronized pipelines.",
  },
  {
    id: "04",
    name: "INTELLIGENCE",
    status: "Cognition Layer",
    description: "Autonomous agents and structured decision routing.",
  },
  {
    id: "05",
    name: "PROPRIETARY SYSTEM",
    status: "Target Architecture",
    description: "One cohesive engine owned completely by you.",
  },
];

export default function Thesis() {
  const [sectionRef, isVisible] = useReveal<HTMLElement>(0.15);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [connected, setConnected] = useState(false);
  const [activeStep, setActiveStep] = useState(4); // Default to final state or allow hovering

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setConnected(true), 900);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  // Canvas node animation showing convergence from chaos to unified structure
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const nodes: {
      x: number;
      y: number;
      tx: number;
      ty: number;
      radius: number;
      phase: number;
    }[] = [];
    const nodeCount = 14;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    for (let i = 0; i < nodeCount; i++) {
      const angle = (Math.PI * 2 * i) / nodeCount;
      const dist = 75 + (i % 3) * 28;
      nodes.push({
        x: centerX + (Math.sin(i * 1.5) * rect.width * 0.4),
        y: centerY + (Math.cos(i * 1.7) * rect.height * 0.4),
        tx: centerX + Math.cos(angle) * dist,
        ty: centerY + Math.sin(angle) * dist,
        radius: 2 + (i % 2) * 1.5,
        phase: Math.random() * Math.PI * 2,
      });
    }

    let animFrame: number;
    let progress = 0;

    const draw = () => {
      ctx.clearRect(0, 0, rect.width, rect.height);

      if (connected) {
        progress = Math.min(progress + 0.012, 1);
      }

      const ease = 1 - Math.pow(1 - progress, 3);

      // Draw subtle orbital ring
      if (progress > 0.4) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, 90, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(200, 164, 110, ${(progress - 0.4) * 0.15})`;
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 4]);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      nodes.forEach((node, i) => {
        const cx = node.x + (node.tx - node.x) * ease;
        const cy = node.y + (node.ty - node.y) * ease;

        // Draw connections to neighboring nodes
        nodes.forEach((other, j) => {
          if (j <= i) return;
          const ox = other.x + (other.tx - other.x) * ease;
          const oy = other.y + (other.ty - other.y) * ease;
          const dist = Math.hypot(cx - ox, cy - oy);

          if (dist < 160) {
            const alpha = connected
              ? (1 - dist / 160) * 0.28 * ease
              : (1 - dist / 160) * 0.06;
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.lineTo(ox, oy);
            ctx.strokeStyle = connected
              ? `rgba(200, 164, 110, ${alpha})`
              : `rgba(138, 138, 150, ${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        });

        // Connection to central hub
        if (connected && ease > 0.3) {
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.lineTo(centerX, centerY);
          ctx.strokeStyle = `rgba(200, 164, 110, ${(ease - 0.3) * 0.18})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(cx, cy, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = connected
          ? `rgba(200, 164, 110, ${0.35 + ease * 0.5})`
          : "rgba(138, 138, 150, 0.4)";
        ctx.fill();
      });

      animFrame = requestAnimationFrame(draw);
    };

    if (isVisible) {
      draw();
    }

    return () => cancelAnimationFrame(animFrame);
  }, [isVisible, connected]);

  return (
    <section
      ref={sectionRef}
      id="thesis"
      className="relative py-32 md:py-44 overflow-hidden bg-hu-black scroll-mt-10"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Top header row */}
        <div className="max-w-[900px] mb-20">
          <div
            className={`flex items-center gap-3 mb-8 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <div className="w-8 h-[1px] bg-hu-accent" />
            <span className="text-hu-accent text-xs tracking-[0.3em] uppercase font-medium">
              The Missing Layer
            </span>
          </div>

          <h2
            className={`text-[clamp(1.9rem,4vw,3.4rem)] font-medium leading-[1.12] tracking-[-0.025em] text-hu-white mb-8 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            WHEN THE SYSTEM YOU NEED
            <br />
            <span className="text-hu-text-secondary">DOESN’T EXIST.</span>
          </h2>

          <div
            className={`space-y-5 text-hu-text-secondary text-base md:text-lg leading-relaxed transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
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
        </div>

        {/* Visual Transition Grid: FRAGMENTED SYSTEMS → DATA → WORKFLOWS → INTELLIGENCE → PROPRIETARY SYSTEM */}
        <div
          className={`mb-16 border border-hu-border bg-hu-card/25 p-8 md:p-12 transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-hu-border/60">
            <span className="text-hu-text-muted text-[11px] font-mono tracking-[0.2em] uppercase">
              System Convergence Flow
            </span>
            <span className="text-hu-accent text-xs font-mono tracking-wider">
              FRAGMENTATION → UNIFICATION
            </span>
          </div>

          {/* Stepped transition display */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {transitionSteps.map((step, idx) => {
              const isTarget = idx === transitionSteps.length - 1;
              const isSelected = activeStep === idx;

              return (
                <div
                  key={step.id}
                  onMouseEnter={() => setActiveStep(idx)}
                  className={`group relative p-5 border transition-all duration-500 flex flex-col justify-between cursor-pointer ${
                    isTarget
                      ? "border-hu-accent/40 bg-hu-accent-dim shadow-[0_0_25px_rgba(200,164,110,0.12)]"
                      : isSelected
                      ? "border-hu-border-light bg-hu-card/50"
                      : "border-hu-border bg-hu-black/50 hover:border-hu-border-light"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-mono text-hu-accent/80">
                        {step.id}
                      </span>
                      <span className="text-[10px] uppercase font-mono tracking-wider text-hu-text-muted">
                        {step.status}
                      </span>
                    </div>

                    <h4
                      className={`text-xs md:text-sm font-medium tracking-[0.06em] uppercase mb-2 ${
                        isTarget ? "text-hu-accent font-semibold" : "text-hu-white"
                      }`}
                    >
                      {step.name}
                    </h4>

                    <p className="text-hu-text-secondary text-xs leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Flow arrow on desktop */}
                  {idx < transitionSteps.length - 1 && (
                    <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-hu-accent/40 group-hover:text-hu-accent group-hover:translate-x-0.5 transition-all">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path
                          d="M3 6h6M6 3l3 3-3 3"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </div>
                  )}

                  {/* Active highlight indicator */}
                  <div
                    className={`mt-4 pt-3 border-t text-[10px] font-mono tracking-wider uppercase transition-colors ${
                      isTarget
                        ? "border-hu-accent/30 text-hu-accent"
                        : "border-hu-border/40 text-hu-text-muted"
                    }`}
                  >
                    {isTarget ? "✓ Proprietary IP" : `Stage 0${idx + 1}`}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Lower row: Interactive Canvas representation */}
        <div
          className={`grid lg:grid-cols-12 gap-8 items-center border border-hu-border bg-hu-darker/60 p-8 md:p-12 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="lg:col-span-7">
            <span className="text-hu-accent text-xs font-mono tracking-[0.2em] uppercase block mb-3">
              Architectural Resolution
            </span>
            <h3 className="text-hu-white text-xl md:text-2xl font-medium tracking-tight mb-4">
              Turning Distributed Chaos into an Owned Operating Asset
            </h3>
            <p className="text-hu-text-secondary text-sm leading-relaxed mb-6">
              When disconnected tools dictate your operational cadence, your business inherits
              their limitations. HU Engines engineers a unified proprietary architecture that binds
              your unique processes, custom data schemas, and decision logic into a single cohesive engine.
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-mono text-hu-text-muted">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-hu-accent" />
                Zero SaaS Fragility
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-hu-accent" />
                Single Source of Truth
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-hu-accent" />
                Permanent IP Control
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative aspect-square w-full max-w-[280px]">
              <canvas
                ref={canvasRef}
                className="w-full h-full"
                style={{ width: "100%", height: "100%" }}
              />
              <div
                className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
                  connected ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
              >
                <div className="text-center">
                  <div className="w-14 h-14 mx-auto border border-hu-accent/40 bg-hu-darker/90 backdrop-blur-md flex items-center justify-center mb-2 shadow-[0_0_25px_rgba(200,164,110,0.18)]">
                    <HuMark className="w-8 h-5 text-hu-accent" glow />
                  </div>
                  <span className="text-hu-text-muted text-[9px] font-mono tracking-[0.2em] uppercase">
                    Proprietary Layer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-hu-border to-transparent" />
    </section>
  );
}
