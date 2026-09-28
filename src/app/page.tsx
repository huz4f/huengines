import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Thesis from "@/components/Thesis";
import WhatWeBuild from "@/components/WhatWeBuild";
import LeadEngine from "@/components/LeadEngine";
import HowWeWork from "@/components/HowWeWork";
import Outcomes from "@/components/Outcomes";
import WhoWeWorkWith from "@/components/WhoWeWorkWith";
import Philosophy from "@/components/Philosophy";
import CaseStudies from "@/components/CaseStudies";
import FinalCTA from "@/components/FinalCTA";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Thesis />
        <WhatWeBuild />
        <LeadEngine />
        <HowWeWork />
        <Outcomes />
        <WhoWeWorkWith />
        <Philosophy />
        <CaseStudies />
        <FinalCTA />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
