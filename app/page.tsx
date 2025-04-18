import React from "react";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import Whatwedo from "@/components/Whatwedo";
import Careers from "@/components/Careers";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <Whatwedo />
      <Careers />
      <FAQSection />
    </>
  );
}
