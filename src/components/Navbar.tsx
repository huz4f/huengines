"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import HuLogo from "./HuLogo";

const navLinks = [
  { label: "What We Build", href: "/#systems" },
  { label: "Crypto & Software", href: "/#systems" },
  { label: "Deployments", href: "/#case-studies" },
  { label: "Outcomes", href: "/#outcomes" },
  { label: "Partnership", href: "/#who-we-work-with" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-hu-black/80 backdrop-blur-xl border-b border-hu-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center group focus:outline-none" aria-label="HU Engines Home">
            <HuLogo variant="badge" size="md" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-hu-text-secondary text-[13px] tracking-[0.08em] uppercase hover:text-hu-white transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="/#contact"
            className="hidden md:flex items-center gap-2 text-[13px] tracking-[0.08em] uppercase text-hu-accent hover:text-hu-white transition-colors duration-300"
          >
            Request Systems Audit
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className="mt-[1px]"
            >
              <path
                d="M3 1h8v8M11 1L1 11"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-[5px]"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-[1.5px] bg-hu-white transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[3.25px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-hu-white transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-[3.25px]" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-hu-black/98 backdrop-blur-2xl transition-all duration-500 flex flex-col items-center justify-center gap-8 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="mb-4">
          <HuLogo variant="badge" size="lg" />
        </div>
        {navLinks.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className="text-hu-white text-2xl font-light tracking-[0.15em] uppercase hover:text-hu-accent transition-colors duration-300"
            style={{
              transitionDelay: mobileOpen ? `${i * 80}ms` : "0ms",
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
              transition:
                "opacity 0.4s ease, transform 0.4s ease, color 0.3s ease",
            }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="/#contact"
          onClick={() => setMobileOpen(false)}
          className="mt-8 px-8 py-3 border border-hu-accent text-hu-accent text-sm tracking-[0.15em] uppercase hover:bg-hu-accent hover:text-hu-black transition-all duration-300"
          style={{
            transitionDelay: mobileOpen ? "320ms" : "0ms",
            opacity: mobileOpen ? 1 : 0,
            transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
            transition:
              "opacity 0.4s ease, transform 0.4s ease, background-color 0.3s ease, color 0.3s ease",
          }}
        >
          Request Systems Audit
        </a>
      </div>
    </>
  );
}
