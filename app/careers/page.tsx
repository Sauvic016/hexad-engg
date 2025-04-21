import React from "react";
import HeroSection from "@/components/careers/HeroSection";
// import CultureSection from "@/components/careers/CultureSection";
import BenefitsSection from "@/components/careers/BenefitsSection";
import JobListings from "@/components/careers/JobListings";
// import Testimonials from "@/components/careers/Testimonials";
import ApplicationProcess from "@/components/careers/ApplicationProcess";

const CareersPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <HeroSection />
        {/* <CultureSection /> */}
        <BenefitsSection />
        <JobListings />
        {/* <Testimonials /> */}
        <ApplicationProcess />
      </main>
    </div>
  );
};

export default CareersPage;
