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
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
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
