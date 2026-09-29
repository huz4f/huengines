import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeBuild from "@/components/WhatWeBuild";
import Thesis from "@/components/Thesis";
import BespokeComparison from "@/components/BespokeComparison";
import HowWeWork from "@/components/HowWeWork";
import TechnicalDepth from "@/components/TechnicalDepth";
import CaseStudies from "@/components/CaseStudies";
import WhoWeWorkWith from "@/components/WhoWeWorkWith";
import OwnershipAndSecurity from "@/components/OwnershipAndSecurity";
import Engagement from "@/components/Engagement";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* 1. Hero */}
        <Hero />

        {/* 2. The Missing Layer & Systems Web Architecture (Section 6) */}
        <Thesis />

        {/* 3. Core Disciplines / What We Build (01-04) */}
        <WhatWeBuild />

        {/* 4. Section 12: Bespoke vs Off-The-Shelf */}
        <BespokeComparison />

        {/* 5. Section 7: Engineering Method (01-05 Stages) */}
        <HowWeWork />

        {/* 6. Section 8: Technical Depth (5 Domains) */}
        <TechnicalDepth />

        {/* 7. Sections 9 & 10: Selected Systems (Engineering Records) */}
        <CaseStudies />

        {/* 8. Section 11: Who We Engineer For (Built For Complex Operations) */}
        <WhoWeWorkWith />

        {/* 9. Sections 13 & 14: Ownership/IP & Defensive Security Architecture */}
        <OwnershipAndSecurity />

        {/* 10. Section 15: Commercial Engagement (Start With The System) */}
        <Engagement />

        {/* 11. Systems Audit Brief Form */}
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
