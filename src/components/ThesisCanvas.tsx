"use client";

import { useEffect, useRef, useState } from "react";
import HuMark from "./HuMark";

export default function ThesisCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [connected, setConnected] = useState(false);
  const connectedRef = useRef(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setConnected(true);
      connectedRef.current = true;
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
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
    let isIntersecting = false;

    const draw = () => {
      if (!isIntersecting) return;

      ctx.clearRect(0, 0, rect.width, rect.height);
      time += 0.015;

      const isConn = connectedRef.current;
      if (isConn) {
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
            const alpha = isConn
              ? (1 - dist / 140) * 0.32 * ease
              : (1 - dist / 140) * 0.08;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = isConn
              ? `rgba(200, 164, 110, ${alpha})`
              : `rgba(138, 138, 150, ${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }

        // Draw spoke lines into the central engine hub
        if (isConn && ease > 0.35) {
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
        ctx.fillStyle = isConn
          ? `rgba(200, 164, 110, ${0.4 + ease * 0.5})`
          : "rgba(138, 138, 150, 0.4)";
        ctx.fill();

        // Subtle glow halo around nodes when connected
        if (isConn && ease > 0.6) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(200, 164, 110, ${(ease - 0.6) * 0.15})`;
          ctx.fill();
        }
      }

      // Center glowing aura
      if (isConn && ease > 0.4) {
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

    const observer = new IntersectionObserver(
      ([entry]) => {
        isIntersecting = entry.isIntersecting;
        if (isIntersecting) {
          cancelAnimationFrame(animFrame);
          animFrame = requestAnimationFrame(draw);
        } else {
          cancelAnimationFrame(animFrame);
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(canvas);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animFrame);
    };
  }, []);

  return (
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
  );
}
