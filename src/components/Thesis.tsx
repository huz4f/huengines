"use client";

import { useReveal } from "@/hooks/useReveal";
import { useEffect, useRef, useState } from "react";
import HuMark from "./HuMark";

const transitionSteps = [
  "FRAGMENTED SYSTEMS",
  "DATA",
  "WORKFLOWS",
  "INTELLIGENCE",
  "PROPRIETARY SYSTEM",
];

export default function Thesis() {
  const [sectionRef, isVisible] = useReveal<HTMLElement>(0.15);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setConnected(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  // Ethereal web-like constellation canvas animation
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
      angle: number;
      speed: number;
      driftX: number;
      driftY: number;
    }[] = [];

    const nodeCount = 16;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    for (let i = 0; i < nodeCount; i++) {
      const angle = (Math.PI * 2 * i) / nodeCount;
      const dist = 90 + (i % 3) * 35;
      nodes.push({
        x: centerX + (Math.random() - 0.5) * rect.width * 0.8,
        y: centerY + (Math.random() - 0.5) * rect.height * 0.8,
        tx: centerX + Math.cos(angle) * dist,
        ty: centerY + Math.sin(angle) * dist,
        radius: 2 + (i % 3 === 0 ? 1.5 : 0.8),
        angle: angle,
        speed: 0.008 + Math.random() * 0.012,
        driftX: (Math.random() - 0.5) * 0.4,
        driftY: (Math.random() - 0.5) * 0.4,
      });
    }

    let animFrame: number;
    let progress = 0;
    let time = 0;

    const draw = () => {
      ctx.clearRect(0, 0, rect.width, rect.height);
      time += 0.015;

      if (connected) {
        progress = Math.min(progress + 0.012, 1);
      }

      const ease = 1 - Math.pow(1 - progress, 3);

      // Draw subtle orbital rings when web crystallizes
      if (progress > 0.3) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, 105, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(200, 164, 110, ${(progress - 0.3) * 0.12})`;
        ctx.lineWidth = 0.75;
        ctx.setLineDash([4, 6]);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(centerX, centerY, 150, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(200, 164, 110, ${(progress - 0.3) * 0.06})`;
        ctx.lineWidth = 0.5;
        ctx.setLineDash([2, 8]);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // Calculate current position for each node
      const currentPos = nodes.map((node) => {
        // Floating drift
        const wobbleX = Math.cos(time + node.angle) * 8 * ease;
        const wobbleY = Math.sin(time + node.angle) * 8 * ease;

        const cx = node.x + (node.tx + wobbleX - node.x) * ease;
        const cy = node.y + (node.ty + wobbleY - node.y) * ease;
        return { x: cx, y: cy, radius: node.radius };
      });

      // Draw spider-web network connections
      for (let i = 0; i < currentPos.length; i++) {
        for (let j = i + 1; j < currentPos.length; j++) {
          const a = currentPos[i];
          const b = currentPos[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);

          if (dist < 140) {
            const alpha = connected
              ? (1 - dist / 140) * 0.32 * ease
              : (1 - dist / 140) * 0.08;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = connected
              ? `rgba(200, 164, 110, ${alpha})`
              : `rgba(138, 138, 150, ${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }

        // Draw spoke lines into the central engine hub
        if (connected && ease > 0.35) {
          const p = currentPos[i];
          const hubDist = Math.hypot(p.x - centerX, p.y - centerY);
          if (hubDist < 190) {
            const spokeAlpha = (1 - hubDist / 190) * 0.22 * (ease - 0.35);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(centerX, centerY);
            ctx.strokeStyle = `rgba(200, 164, 110, ${spokeAlpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }

        // Draw node points
        const p = currentPos[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = connected
          ? `rgba(200, 164, 110, ${0.4 + ease * 0.5})`
          : "rgba(138, 138, 150, 0.4)";
        ctx.fill();

        // Subtle glow halo around nodes when connected
        if (connected && ease > 0.6) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(200, 164, 110, ${(ease - 0.6) * 0.15})`;
          ctx.fill();
        }
      }

      // Center glowing aura
      if (connected && ease > 0.4) {
        const glowRadius = 45 + Math.sin(time * 2) * 5;
        const grad = ctx.createRadialGradient(
          centerX,
          centerY,
          0,
          centerX,
          centerY,
          glowRadius
        );
        grad.addColorStop(0, `rgba(200, 164, 110, ${(ease - 0.4) * 0.25})`);
        grad.addColorStop(1, "transparent");
        ctx.beginPath();
        ctx.arc(centerX, centerY, glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      }

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
      <div className="noise-overlay absolute inset-0 pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column: Conceptual Copy & Visual Transition */}
          <div>
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
              className={`text-[clamp(1.9rem,3.8vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.025em] text-hu-white mb-8 transition-all duration-700 delay-200 ${
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
              className={`space-y-5 text-hu-text-secondary text-base md:text-lg leading-relaxed mb-10 transition-all duration-700 delay-300 ${
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

            {/* Visual Transition: FRAGMENTED SYSTEMS → DATA → WORKFLOWS → INTELLIGENCE → PROPRIETARY SYSTEM */}
            <div
              className={`transition-all duration-700 delay-400 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <div className="flex flex-wrap items-center gap-2 mb-4">
                {transitionSteps.map((step, i) => (
                  <span key={step} className="flex items-center gap-2">
                    <span
                      className={`px-3.5 py-2 text-[11px] font-mono tracking-wider uppercase border transition-all duration-700 ${
                        connected
                          ? i === transitionSteps.length - 1
                            ? "border-hu-accent text-hu-accent bg-hu-accent-dim font-semibold shadow-[0_0_20px_rgba(200,164,110,0.2)]"
                            : "border-hu-accent/30 text-hu-white bg-hu-black/60"
                          : "border-hu-border text-hu-text-muted bg-hu-black/40"
                      }`}
                      style={{ transitionDelay: `${i * 120}ms` }}
                    >
                      {step}
                    </span>
                    {i < transitionSteps.length - 1 && (
                      <span
                        className={`text-xs transition-colors duration-500 ${
                          connected ? "text-hu-accent" : "text-hu-text-muted"
                        }`}
                      >
                        →
                      </span>
                    )}
                  </span>
                ))}
              </div>

              <p
                className={`text-xs font-mono tracking-wide transition-all duration-700 delay-800 ${
                  connected ? "text-hu-accent opacity-100" : "text-hu-text-muted opacity-0"
                }`}
              >
                ✓ Unified into one permanent proprietary operating asset.
              </p>
            </div>
          </div>

          {/* Right Column: Lavish Web-Like Structure with Golden Core */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="relative aspect-square max-w-[440px] mx-auto flex items-center justify-center">
              <canvas
                ref={canvasRef}
                className="w-full h-full"
                style={{ width: "100%", height: "100%" }}
              />

              {/* Center Radiant Emblem */}
              <div
                className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
                  connected ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
              >
                <div className="text-center pointer-events-none">
                  <div className="w-16 h-16 mx-auto border border-hu-accent/40 bg-hu-darker/90 backdrop-blur-md flex items-center justify-center mb-3 shadow-[0_0_35px_rgba(200,164,110,0.25)] transition-transform duration-500 hover:scale-105">
                    <HuMark className="w-9 h-6 text-hu-accent" glow />
                  </div>
                  <span className="text-hu-text-secondary text-[10px] tracking-[0.25em] uppercase font-mono block">
                    Proprietary Operating Core
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom edge line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-hu-border to-transparent" />
    </section>
  );
}
