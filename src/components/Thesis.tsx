"use client";

import { useReveal } from "@/hooks/useReveal";
import { useEffect, useRef, useState } from "react";
import HuMark from "./HuMark";

const disconnectedItems = [
  "People",
  "Software",
  "Data",
  "Processes",
  "Tools",
  "Decisions",
];

export default function Thesis() {
  const [sectionRef, isVisible] = useReveal<HTMLElement>(0.2);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setConnected(true), 1200);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  // Canvas node animation
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
      speed: number;
    }[] = [];
    const nodeCount = 12;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    for (let i = 0; i < nodeCount; i++) {
      const angle = (Math.PI * 2 * i) / nodeCount;
      const dist = 80 + Math.random() * 60;
      nodes.push({
        x: centerX + (Math.random() - 0.5) * rect.width * 0.7,
        y: centerY + (Math.random() - 0.5) * rect.height * 0.7,
        tx: centerX + Math.cos(angle) * dist,
        ty: centerY + Math.sin(angle) * dist,
        radius: 2 + Math.random() * 2,
        speed: 0.01 + Math.random() * 0.02,
      });
    }

    let animFrame: number;
    let progress = 0;

    const draw = () => {
      ctx.clearRect(0, 0, rect.width, rect.height);

      if (connected) {
        progress = Math.min(progress + 0.015, 1);
      }

      const ease = 1 - Math.pow(1 - progress, 3);

      nodes.forEach((node, i) => {
        const cx = node.x + (node.tx - node.x) * ease;
        const cy = node.y + (node.ty - node.y) * ease;

        // Draw connections
        nodes.forEach((other, j) => {
          if (j <= i) return;
          const ox = other.x + (other.tx - other.x) * ease;
          const oy = other.y + (other.ty - other.y) * ease;
          const dist = Math.hypot(cx - ox, cy - oy);

          if (dist < 180) {
            const alpha = connected
              ? (1 - dist / 180) * 0.3 * ease
              : (1 - dist / 180) * 0.08;
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.lineTo(ox, oy);
            ctx.strokeStyle = connected
              ? `rgba(200, 164, 110, ${alpha})`
              : `rgba(138, 138, 150, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });

        // Draw node
        ctx.beginPath();
        ctx.arc(cx, cy, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = connected
          ? `rgba(200, 164, 110, ${0.3 + ease * 0.5})`
          : "rgba(138, 138, 150, 0.4)";
        ctx.fill();

        // Center glow when connected
        if (connected && ease > 0.5) {
          ctx.beginPath();
          ctx.arc(centerX, centerY, 4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(200, 164, 110, ${(ease - 0.5) * 0.8})`;
          ctx.fill();
        }
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
      className="relative py-32 md:py-44 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Copy */}
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
                The Thesis
              </span>
            </div>

            <h2
              className={`text-[clamp(1.8rem,3.5vw,3rem)] font-medium leading-[1.15] tracking-[-0.02em] text-hu-white mb-8 transition-all duration-700 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              Most businesses don&apos;t have
              <br />a technology problem.
              <br />
              <span className="text-hu-text-secondary">
                They have a systems problem.
              </span>
            </h2>

            <p
              className={`text-hu-text-secondary text-base leading-relaxed mb-10 max-w-[480px] transition-all duration-700 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              Companies accumulate disconnected people, software, data,
              processes, tools, and decisions. HU Engines connects these into
              intelligent operating systems.
            </p>

            {/* Disconnected items */}
            <div
              className={`flex flex-wrap gap-3 transition-all duration-700 delay-400 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              {disconnectedItems.map((item, i) => (
                <span
                  key={item}
                  className={`px-4 py-2 text-xs tracking-[0.1em] uppercase border transition-all duration-700 ${
                    connected
                      ? "border-hu-accent/30 text-hu-accent bg-hu-accent-dim"
                      : "border-hu-border text-hu-text-muted bg-transparent"
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {item}
                </span>
              ))}
            </div>

            <p
              className={`mt-6 text-sm transition-all duration-500 ${
                connected
                  ? "opacity-100 text-hu-accent"
                  : "opacity-0 text-hu-text-muted"
              }`}
            >
              → Connected into one intelligent operating system.
            </p>
          </div>

          {/* Right: Animated diagram */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="relative aspect-square max-w-[400px] mx-auto">
              <canvas
                ref={canvasRef}
                className="w-full h-full"
                style={{ width: "100%", height: "100%" }}
              />
              {/* Center label */}
              <div
                className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
                  connected ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto border border-hu-accent/40 bg-hu-darker/90 backdrop-blur-md flex items-center justify-center mb-3 shadow-[0_0_30px_rgba(200,164,110,0.18)] transition-all duration-500">
                    <HuMark className="w-9 h-6 text-hu-accent transition-transform duration-500 hover:scale-110" glow />
                  </div>
                  <span className="text-hu-text-muted text-[10px] tracking-[0.2em] uppercase">
                    Intelligent System
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
