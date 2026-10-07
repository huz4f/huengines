"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

export interface UseRevealOptions {
  /**
   * Intersection threshold (0 to 1). Defaults to 0 so the element
   * begins revealing immediately once it enters the pre-trigger zone.
   */
  threshold?: number | number[];
  /**
   * Root margin to pre-trigger before entering viewport.
   * Default triggers ~200px before scrolling into view for seamless zero-pop entrance.
   */
  rootMargin?: string;
  /**
   * Whether to trigger only once. Defaults to true.
   */
  once?: boolean;
}

export function useReveal<T extends HTMLElement = HTMLDivElement>(
  optionsOrThreshold?: number | UseRevealOptions
): [RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const isNum = typeof optionsOrThreshold === "number";
    const opts: UseRevealOptions = isNum ? {} : (optionsOrThreshold ?? {});

    const threshold = opts.threshold ?? 0;
    const rootMargin = opts.rootMargin ?? "200px 0px 200px 0px";
    const once = opts.once ?? true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(el);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [optionsOrThreshold]);

  return [ref, isVisible];
}

export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return position;
}
