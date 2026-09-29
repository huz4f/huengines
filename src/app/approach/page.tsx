import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HowWeWork from "@/components/HowWeWork";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering Method | HU Engines",
  description: "From business complexity to system — discover the five-stage engineering lifecycle used by HU Engines to architect and deploy proprietary infrastructure.",
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
