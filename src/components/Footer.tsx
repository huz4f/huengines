import Link from "next/link";
import HuLogo from "./HuLogo";

const footerSystems = [
  { label: "Revenue Infrastructure", href: "/systems/revenue" },
  { label: "AI Operating Systems", href: "/systems/ai" },
  { label: "Cybersecurity Systems", href: "/systems/security" },
  { label: "Enterprise Software", href: "/systems/enterprise" },
];

const footerCompany = [
  { label: "LeadEngine", href: "/leadengine" },
  { label: "Approach", href: "/approach" },
  { label: "Case Studies", href: "/#case-studies" },
  { label: "Contact", href: "/contact" },
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
              Human intelligence, amplified by intelligent systems.
            </p>
          </div>

          {/* Systems */}
          <div>
            <h4 className="text-hu-text-muted text-[11px] tracking-[0.2em] uppercase mb-6">
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
            <h4 className="text-hu-text-muted text-[11px] tracking-[0.2em] uppercase mb-6">
              Company
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
            <h4 className="text-hu-text-muted text-[11px] tracking-[0.2em] uppercase mb-6">
              Get in Touch
            </h4>
            <div className="space-y-3">
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 text-hu-accent text-sm hover:text-hu-white transition-colors duration-300"
              >
                Start a Transformation
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M3 1h8v8M11 1L1 11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </a>
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
