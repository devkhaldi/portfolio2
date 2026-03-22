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

import { useSmoothScroll } from "@/components/providers/SmoothScrollProvider";

export default function Home() {
  const lenis = useSmoothScroll();

  useEffect(() => {
    // Handle initial load with a hash (e.g., /#faq) or path (e.g., /faq being redirected)
    const hash = window.location.hash;
    const path = window.location.pathname.substring(1).split('/')[0];
    
    const target = hash ? hash : (['home', 'services', 'portfolio', 'about', 'faq', 'contact'].includes(path) ? `#${path}` : null);
    
    if (target && lenis) {
      setTimeout(() => {
        lenis.scrollTo(target, { offset: -50, duration: 2 });
      }, 800);
    }
  }, [lenis]);

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <FAQ />
      <Contact />
      <WhatsAppButton />
      <Footer />
    </main>
  );
}
