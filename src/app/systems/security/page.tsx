import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cybersecurity Systems | HU Engines",
  description:
    "Security infrastructure for companies operating at scale — architecture, zero-trust monitoring, and automated compliance.",
};

const capabilities = [
  {
    title: "Zero-Trust Infrastructure Architecture",
    description: "Perimeterless network models enforcing continuous cryptographic verification for every transaction.",
  },
  {
    title: "Autonomous Threat Hunting",
    description: "Real-time anomaly detection monitoring lateral network movements and unauthorized privilege escalations.",
  },
  {
    title: "Automated Compliance & Audit Telemetry",
    description: "Continuous SOC2, ISO27001, and HIPAA compliance verification with automated audit evidence capture.",
  },
  {
    title: "Air-Gapped & Resilient Backups",
    description: "Immutable storage architectures preventing ransomware and enabling rapid recovery without business loss.",
  },
  {
    title: "Identity & Granular Access Governance",
    description: "Least-privilege role structures eliminating credential sprawl and insider vulnerability vectors.",
  },
  {
    title: "Automated Incident Containment",
    description: "Sub-second programmatic isolation of compromised endpoints preventing data exfiltration.",
  },
];

export default function SecuritySystemPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 min-h-screen">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-hu-accent" />
            <span className="text-hu-accent text-xs tracking-[0.3em] uppercase font-medium">
              Systems / 03
            </span>
          </div>

          <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.03em] text-hu-white mb-6">
            CYBERSECURITY<br />
            <span className="text-hu-text-secondary">SYSTEMS.</span>
          </h1>

          <p className="text-hu-text-secondary text-lg md:text-xl max-w-[680px] leading-relaxed mb-12">
            Design enterprise security infrastructure for companies operating at scale. Build resilience into the foundation of your technology layer rather than treating security as an afterthought.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {capabilities.map((cap, i) => (
              <div
                key={cap.title}
                className="border border-hu-border bg-hu-card/20 p-8 hover:border-hu-accent/30 transition-all duration-300"
              >
                <span className="text-hu-text-muted text-xs font-mono tracking-wider mb-4 block">
                  0{i + 1}
                </span>
                <h3 className="text-hu-white text-lg font-medium mb-3">
                  {cap.title}
                </h3>
                <p className="text-hu-text-secondary text-sm leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="border border-hu-border bg-hu-card/30 p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h3 className="text-hu-white text-2xl font-medium mb-2">
                Harden Your Enterprise Infrastructure
              </h3>
              <p className="text-hu-text-secondary text-sm max-w-[500px]">
                Request a comprehensive architectural security assessment and vulnerability profile from our engineers.
              </p>
            </div>
            <Link
              href="/#contact"
              className="px-8 py-4 bg-hu-accent text-hu-black text-sm font-medium tracking-[0.1em] uppercase hover:bg-hu-white transition-colors duration-300 inline-flex items-center gap-2 whitespace-nowrap"
            >
              Request Security Review →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
