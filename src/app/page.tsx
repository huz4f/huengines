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
import Philosophy from "@/components/Philosophy";
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

        {/* 2. Core Disciplines / What We Build (01-04) */}
        <WhatWeBuild />

        {/* 3. Section 6: When The System You Need Doesn't Exist (Visual Transition) */}
        <Thesis />

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

        {/* 10. Philosophy Manifesto */}
        <Philosophy />

        {/* 11. Section 15: Commercial Engagement (Start With The System) */}
        <Engagement />

        {/* 12. Systems Audit Brief Form */}
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
