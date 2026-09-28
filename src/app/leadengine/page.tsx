import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadEngine from "@/components/LeadEngine";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LeadEngine | HU Engines",
  description: "LeadEngine — Autonomous Revenue Infrastructure. Transform B2B acquisition with intelligent pipeline automation.",
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
