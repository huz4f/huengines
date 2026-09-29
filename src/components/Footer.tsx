import Link from "next/link";
import HuLogo from "./HuLogo";

const footerSystems = [
  { label: "01 — Proprietary Operating Systems", href: "/#systems" },
  { label: "02 — Autonomous AI Systems", href: "/#systems" },
  { label: "03 — Settlement & Treasury Rails", href: "/#systems" },
  { label: "04 — Algorithmic Revenue Infrastructure", href: "/#systems" },
];

const footerCompany = [
  { label: "The Missing Layer", href: "/#thesis" },
  { label: "Engineering Method", href: "/#method" },
  { label: "Technical Depth", href: "/#technical-depth" },
  { label: "Selected Systems", href: "/#deployments" },
  { label: "Ownership & Security", href: "/#ownership-and-security" },
  { label: "Commercial Engagement", href: "/#engagement" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-hu-border bg-hu-black">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center group mb-6 focus:outline-none" aria-label="HU Engines Home">
              <HuLogo variant="badge" size="md" />
            </Link>
            <p className="text-hu-text-muted text-sm leading-relaxed max-w-[260px]">
              Human intelligence, amplified by proprietary operating systems.
            </p>
          </div>

          {/* Systems */}
          <div>
            <h4 className="text-hu-text-muted text-[11px] tracking-[0.2em] uppercase mb-6 font-mono">
              Systems
            </h4>
            <ul className="space-y-3">
              {footerSystems.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-hu-text-secondary text-sm hover:text-hu-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-hu-text-muted text-[11px] tracking-[0.2em] uppercase mb-6 font-mono">
              Architecture
            </h4>
            <ul className="space-y-3">
              {footerCompany.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-hu-text-secondary text-sm hover:text-hu-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-hu-text-muted text-[11px] tracking-[0.2em] uppercase mb-6 font-mono">
              Engagement
            </h4>
            <div className="space-y-3">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 text-hu-accent text-sm hover:text-hu-white transition-colors duration-300 font-medium uppercase tracking-wide text-xs"
              >
                Initiate Systems Audit
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M3 1h8v8M11 1L1 11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </Link>
              <div className="pt-2">
                <a
                  href="mailto:sales@huengines.com"
                  className="text-hu-text-muted hover:text-hu-accent text-xs font-mono transition-colors duration-300 block"
                >
                  sales@huengines.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-hu-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-hu-text-muted text-xs tracking-wide">
            © {new Date().getFullYear()} HU Engines — Human Utility Engines. All
            rights reserved.
          </p>
          <p className="text-hu-text-muted/50 text-xs tracking-wide">
            We engineer the infrastructure behind extraordinary businesses.
          </p>
        </div>
      </div>
    </footer>
  );
}
