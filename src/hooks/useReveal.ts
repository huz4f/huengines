"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

export interface UseRevealOptions {
  /**
   * Intersection threshold (0 to 1). Defaults to 0 so the element
   * begins revealing immediately once it enters the pre-trigger zone.
   */
  threshold?: number | number[];
  /**
   * Root margin to pre-trigger when the old slide is about to be left.
   * Default bottom margin pre-triggers ~260px before entering viewport.
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

    // Handle legacy number arg vs options object.
    // When a number is passed (e.g. legacy 0.1 or 0.15 threshold for full slides),
    // we default threshold to 0 so it doesn't wait for 150px+ of scrolling into the slide below.
    const isNum = typeof optionsOrThreshold === "number";
    const opts: UseRevealOptions = isNum ? {} : (optionsOrThreshold ?? {});

    const threshold = opts.threshold ?? 0;
    // Pre-trigger early when the previous/old slide is about to be left:
    // 260px bottom margin extends detection downward so incoming slide animations
    // start gracefully before the user even reaches the slide below.
    const rootMargin = opts.rootMargin ?? "120px 0px 260px 0px";
    const once = opts.once ?? true;

    // Check if element is already in view (e.g. reload or anchor jump)
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const initialRect = el.getBoundingClientRect();
    if (initialRect.top <= windowHeight - 50 && initialRect.bottom >= 0 && window.scrollY > 50) {
      setIsVisible(true);
      return;
    }

    let cleanupScroll: (() => void) | null = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // If user hasn't scrolled yet (still idle at top of Hero, scrollY < 30)
          // and this section is below the initial screen fold, don't trigger until scroll begins
          // so the entrance animation doesn't play off-screen before user scrolls.
          const currentRect = el.getBoundingClientRect();
          const isBelowFold = currentRect.top >= windowHeight - 50;

          if (isBelowFold && window.scrollY < 30) {
            const onScroll = () => {
              if (window.scrollY > 20) {
                setIsVisible(true);
                window.removeEventListener("scroll", onScroll);
                cleanupScroll = null;
                if (once) observer.unobserve(el);
              }
            };
            window.addEventListener("scroll", onScroll, { passive: true });
            cleanupScroll = () => window.removeEventListener("scroll", onScroll);
            return;
          }

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
      if (cleanupScroll) cleanupScroll();
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

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return position;
}
