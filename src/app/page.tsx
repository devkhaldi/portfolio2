"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { About } from "@/components/sections/About";
import { FAQ } from "@/components/sections/FAQ";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { useEffect } from "react";

export default function Home() {
  // Handle initial load with a clean path (e.g., /contact)
  useEffect(() => {
    const path = window.location.pathname.substring(1); // removes leading slash
    if (['home', 'services', 'portfolio', 'about', 'faq', 'contact'].includes(path)) {
      setTimeout(() => {
        const element = document.getElementById(path);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500); // Wait for components to mount
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <FAQ />
      {/* <Testimonials /> */}
      {/* <Contact /> */}
      <WhatsAppButton />
      <Footer />
    </main>
  );
}
