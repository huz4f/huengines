import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | HU Engines",
  description: "Start a transformation with HU Engines. Submit your enterprise project for review.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen">
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
