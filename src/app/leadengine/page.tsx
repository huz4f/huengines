import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadEngine from "@/components/LeadEngine";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Architecture & Systems Engineering | HU Engines",
  description: "Bespoke software, decentralized crypto systems, and autonomous AI infrastructure engineered for high-demand business operators.",
};

export default function LeadEnginePage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen">
        <LeadEngine />
      </main>
      <Footer />
    </>
  );
}
