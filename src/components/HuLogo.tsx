import React from "react";
import HuMark from "./HuMark";

export type HuLogoVariant = "horizontal" | "badge" | "stacked" | "mark";
export type HuLogoTheme = "dark-bg" | "light-bg" | "gold" | "white" | "currentColor";
export type HuLogoSize = "sm" | "md" | "lg" | "xl";

interface HuLogoProps {
  variant?: HuLogoVariant;
  theme?: HuLogoTheme;
  size?: HuLogoSize;
  className?: string;
  glow?: boolean;
}

export default function HuLogo({
  variant = "badge",
  theme = "dark-bg",
  size = "md",
  className = "",
  glow = false,
}: HuLogoProps) {
  // Theme styling
  const markColorClass =
    theme === "light-bg"
      ? "text-hu-black"
      : theme === "white"
      ? "text-hu-white"
      : theme === "gold"
      ? "text-hu-accent"
      : theme === "currentColor"
      ? "text-current"
      : "text-hu-accent";

  const textColorClass =
    theme === "light-bg"
      ? "text-hu-black"
      : theme === "gold"
      ? "text-hu-accent"
      : theme === "white"
      ? "text-hu-white"
      : theme === "currentColor"
      ? "text-current"
      : "text-hu-white";

  // Size configurations
  const sizeMap = {
    sm: {
      badge: "w-7 h-7",
      markInBadge: "w-4 h-3",
      standaloneMark: "w-6 h-4",
      text: "text-[12px] tracking-[0.18em]",
      gap: "gap-2.5",
    },
    md: {
      badge: "w-8 h-8",
      markInBadge: "w-5 h-3.5",
      standaloneMark: "w-7 h-5",
      text: "text-sm tracking-[0.2em]",
      gap: "gap-3",
    },
    lg: {
      badge: "w-10 h-10",
      markInBadge: "w-6 h-4.5",
      standaloneMark: "w-9 h-6",
      text: "text-base tracking-[0.22em]",
      gap: "gap-3.5",
    },
    xl: {
      badge: "w-14 h-14",
      markInBadge: "w-8 h-6",
      standaloneMark: "w-14 h-9.5",
      text: "text-lg tracking-[0.25em]",
      gap: "gap-4",
    },
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  if (variant === "mark") {
    return (
      <HuMark
        className={`${currentSize.standaloneMark} ${markColorClass} ${className}`}
        glow={glow}
      />
    );
  }

  if (variant === "stacked") {
    return (
      <div className={`flex flex-col items-center ${className}`}>
        <HuMark
          className={`${currentSize.standaloneMark} ${markColorClass} mb-2.5`}
          glow={glow}
        />
        <span
          className={`font-medium uppercase select-none ${currentSize.text} ${textColorClass}`}
        >
          HU ENGINES
        </span>
      </div>
    );
  }

  if (variant === "horizontal") {
    return (
      <div className={`flex items-center ${currentSize.gap} ${className}`}>
        <HuMark
          className={`${currentSize.standaloneMark} ${markColorClass} transition-transform duration-300 group-hover:scale-105`}
          glow={glow}
        />
        <div className="flex items-center gap-1.5 font-medium uppercase select-none">
          <span className={`font-semibold ${currentSize.text} ${textColorClass}`}>
            HU
          </span>
          <span className={`${currentSize.text} text-hu-text-secondary group-hover:text-hu-white transition-colors duration-300`}>
            ENGINES
          </span>
        </div>
      </div>
    );
  }

  // Default: "badge" variant (sleek framed container with mark + text)
  return (
    <div className={`flex items-center ${currentSize.gap} ${className}`}>
      <div
        className={`relative ${currentSize.badge} border border-hu-accent/40 bg-hu-darker/60 backdrop-blur-sm flex items-center justify-center group-hover:border-hu-accent transition-all duration-300 ${
          glow ? "shadow-[0_0_15px_rgba(200,164,110,0.2)]" : ""
        }`}
      >
        <HuMark
          className={`${currentSize.markInBadge} ${markColorClass} transition-transform duration-300 group-hover:scale-110`}
          glow={glow}
        />
      </div>
      <span
        className={`font-medium uppercase select-none ${currentSize.text} ${textColorClass} tracking-[0.2em]`}
      >
        Engines
      </span>
    </div>
  );
}
