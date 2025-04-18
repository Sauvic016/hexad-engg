import React from "react";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <AboutSection />
      <FAQSection />
    </>
  );
}
