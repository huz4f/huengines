import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Software | HU Engines",
  description:
    "Purpose-built enterprise software replacing fragmented legacy processes with unified modern operating systems.",
};

const capabilities = [
  {
    title: "Unified Internal Operating Platforms",
    description: "Consolidate sprawling SaaS subscriptions into custom, tailored software reflecting your exact workflow logic.",
  },
  {
    title: "High-Throughput Operational Dashboards",
    description: "Low-latency executive and frontline telemetry tracking margins, throughput, and operational anomalies.",
  },
  {
    title: "Data Fabric & Legacy Synchronization",
    description: "Bridge archaic mainframes, legacy ERPs, and modern cloud applications with sub-second bi-directional pipelines.",
  },
  {
    title: "Enterprise API Gateways",
    description: "Reliable, high-concurrency microservices and secure internal APIs built with strict type safety and observability.",
  },
  {
    title: "Dedicated Field & Mobile Applications",
    description: "Offline-first, high-durability native interfaces for logistics, inventory, manufacturing, or field operations.",
  },
  {
    title: "Scalable Cloud Native Infrastructure",
    description: "Kubernetes, serverless, and elastic database architectures that scale horizontally with your revenue growth.",
  },
];

export default function EnterpriseSystemPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 min-h-screen">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-hu-accent" />
            <span className="text-hu-accent text-xs tracking-[0.3em] uppercase font-medium">
              Systems / 04
            </span>
          </div>

          <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.03em] text-hu-white mb-6">
            ENTERPRISE<br />
            <span className="text-hu-text-secondary">SOFTWARE.</span>
          </h1>

          <p className="text-hu-text-secondary text-lg md:text-xl max-w-[680px] leading-relaxed mb-12">
            Replace fragmented legacy processes with purpose-built technology designed directly around the economics and operational cadence of your business.
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
                Engineer a Purpose-Built Operating System
              </h3>
              <p className="text-hu-text-secondary text-sm max-w-[500px]">
                Stop bending your business processes around generic off-the-shelf software limitations.
              </p>
            </div>
            <Link
              href="/#contact"
              className="px-8 py-4 bg-hu-accent text-hu-black text-sm font-medium tracking-[0.1em] uppercase hover:bg-hu-white transition-colors duration-300 inline-flex items-center gap-2 whitespace-nowrap"
            >
              Consult an Architect →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
