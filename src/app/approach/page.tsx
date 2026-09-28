import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HowWeWork from "@/components/HowWeWork";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Approach | HU Engines",
  description: "From problem to operating system — discover how HU Engines architects and deploys intelligent infrastructure.",
};

export default function ApproachPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen">
        <HowWeWork />
      </main>
      <Footer />
    </>
  );
}
