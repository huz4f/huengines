import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Philosophy from "@/components/Philosophy";
import WhoWeWorkWith from "@/components/WhoWeWorkWith";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company | HU Engines — Human Utility Engines",
  description:
    "HU Engines — Human Utility Engines. Human intelligence, amplified by intelligent systems.",
};

export default function CompanyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen">
        <Philosophy />
        <WhoWeWorkWith />
      </main>
      <Footer />
    </>
  );
}
