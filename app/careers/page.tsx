import React from "react";
import HeroSection from "@/components/careers/HeroSection";
// import BenefitsSection from "@/components/careers/BenefitsSection";
import JobListings from "@/components/careers/JobListings";

import ApplicationProcess from "@/components/careers/ApplicationProcess";

export const metadata = {
  title: "Careers - HEXAD Engineering",
  description: "Work at Hexad Engineering",
};

const CareersPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <HeroSection />
        {/* <CultureSection /> */}
        {/* <BenefitsSection /> */}
        <JobListings />
        {/* <Testimonials /> */}
        <ApplicationProcess />
      </main>
    </div>
  );
};

export default CareersPage;
