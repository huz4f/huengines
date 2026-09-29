"use client";

import { useReveal } from "@/hooks/useReveal";

const ownershipPillars = [
  {
    title: "IP ownership",
    description: "Full contractual assignment of intellectual property created for your engagement.",
  },
  {
    title: "source-code ownership",
    description: "Clean, documented, and fully accessible Git repositories transferred directly to your organization.",
  },
  {
    title: "infrastructure control",
    description: "Deployed inside your own cloud accounts (AWS, GCP, Azure, or dedicated metal). Zero external hosting dependency.",
  },
  {
    title: "security",
    description: "Built-in cryptographic protections, zero-trust perimeter enforcement, and strict secret hygiene.",
  },
  {
    title: "integration",
    description: "Engineered to integrate seamlessly with your existing databases, ERPs, telemetry, and business tools.",
  },
  {
    title: "documentation",
    description: "Comprehensive architectural blueprints, API specifications, and runbooks for your technical team.",
  },
  {
    title: "long-term maintainability",
    description: "Strict TypeScript typing, modular services, automated testing suites, and low cognitive overhead.",
  },
];

const securityPractices = [
  {
    name: "least-privilege access",
    scope: "IAM & Permissions",
    detail: "Strict role-based and attribute-based permissions ensuring components only access necessary resources.",
  },
  {
    name: "authentication and authorization",
    scope: "Identity Core",
    detail: "Multi-factor authentication, cryptographic session tokens, and granular permission enforcement.",
  },
  {
    name: "encrypted data transmission",
    scope: "Transport Security",
    detail: "TLS 1.3 in transit with strict cipher suites, accompanied by AES-256 encryption at rest for databases and backups.",
  },
  {
    name: "secrets management",
    scope: "Key Security",
    detail: "Zero hardcoded credentials; centralized secrets orchestration via KMS, Vault, and ephemeral access keys.",
  },
  {
    name: "audit logging",
    scope: "Observability",
    detail: "Immutable audit trails tracking all administrative actions, transaction states, and critical access events.",
  },
  {
    name: "secure API design",
    scope: "Interface Boundary",
    detail: "Input schema validation, rate-limiting, CORS enforcement, and protection against injection and replay attacks.",
  },
  {
    name: "environment separation",
    scope: "Infrastructure",
    detail: "Air-gapped separation between development, staging, and production networks and database instances.",
  },
  {
    name: "dependency management",
    scope: "Supply Chain",
    detail: "Automated vulnerability scanning across packages, locked lockfiles, and minimal third-party surface area.",
  },
  {
    name: "infrastructure hardening",
    scope: "Platform Defense",
    detail: "Minimal OS attack surfaces, container sandboxing, firewall perimeter rules, and disabled unneeded protocols.",
  },
  {
    name: "monitoring",
    scope: "Runtime Telemetry",
    detail: "24/7 uptime monitoring, error telemetry, anomaly detection, and automated alerting for abnormal latency or load.",
  },
];

export default function OwnershipAndSecurity() {
  const [sectionRef, isVisible] = useReveal<HTMLElement>(0.1);

  return (
    <section
      ref={sectionRef}
      id="ownership-and-security"
      className="relative py-32 md:py-44 bg-hu-darker scroll-mt-10"
    >
      <div className="noise-overlay absolute inset-0 pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
        {/* ── PART 1: OWNERSHIP / IP (Section 13) ── */}
        <div className="mb-28">
          <div className="max-w-[840px] mb-16">
            <div
              className={`flex items-center gap-3 mb-8 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <div className="w-8 h-[1px] bg-hu-accent" />
              <span className="text-hu-accent text-xs tracking-[0.3em] uppercase font-medium">
                Sovereignty &amp; IP
              </span>
            </div>

            <h2
              className={`text-[clamp(1.9rem,3.8vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-hu-white mb-6 transition-all duration-700 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              YOUR SYSTEM.
              <br />
              <span className="text-hu-text-secondary">YOUR INFRASTRUCTURE.</span>
            </h2>

            <p
              className={`text-hu-text-secondary text-base md:text-lg leading-relaxed transition-all duration-700 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              We engineer proprietary systems around your business. Where the engagement calls for it,
              architecture, source code, infrastructure and intellectual property can be structured for
              client ownership.
            </p>
          </div>

          {/* Ownership Pillars Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {ownershipPillars.map((pillar, i) => (
              <div
                key={pillar.title}
                className={`border border-hu-border bg-hu-card/25 p-6 hover:border-hu-accent/30 transition-all duration-500 flex flex-col justify-between ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${250 + i * 80}ms` }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-hu-accent font-mono text-xs tracking-wider uppercase">
                      ✓ {pillar.title}
                    </span>
                    <span className="text-[10px] font-mono text-hu-text-muted">
                      0{i + 1}
                    </span>
                  </div>
                  <p className="text-hu-text-secondary text-xs leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-hu-border/40 text-[9px] font-mono tracking-widest text-hu-text-muted uppercase">
                  Contractual Guarantee
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── PART 2: SECURITY IS ARCHITECTURE (Section 14) ── */}
        <div id="security" className="scroll-mt-10 pt-16 border-t border-hu-border">
          <div className="max-w-[840px] mb-16">
            <div
              className={`flex items-center gap-3 mb-8 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <div className="w-8 h-[1px] bg-hu-accent" />
              <span className="text-hu-accent text-xs tracking-[0.3em] uppercase font-medium">
                Defensive Architecture
              </span>
            </div>

            <h2
              className={`text-[clamp(1.9rem,3.8vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-hu-white mb-6 transition-all duration-700 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              SECURITY IS ARCHITECTURE,
              <br />
              <span className="text-hu-text-secondary">NOT A CHECKBOX.</span>
            </h2>

            <p
              className={`text-hu-text-secondary text-base md:text-lg leading-relaxed transition-all duration-700 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              We do not make hollow claims of &ldquo;military-grade security.&rdquo; Instead, we build structural
              resilience into every layer of your systems stack—from strict access boundaries and secret lifecycle
              management to audited APIs and segregated production runtime environments.
            </p>
          </div>

          {/* Security Practices Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {securityPractices.map((practice, idx) => (
              <div
                key={practice.name}
                className={`border border-hu-border bg-hu-black/50 p-5 hover:border-hu-accent/40 transition-all duration-300 flex flex-col justify-between ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${350 + idx * 60}ms` }}
              >
                <div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-hu-accent block mb-2">
                    {practice.scope}
                  </span>
                  <h4 className="text-hu-white text-xs font-mono tracking-wide uppercase mb-2 font-medium">
                    {practice.name}
                  </h4>
                  <p className="text-hu-text-muted text-[11px] leading-relaxed">
                    {practice.detail}
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-hu-border/40 text-[9px] font-mono text-hu-text-muted/60 uppercase">
                  Architectural Standard
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
