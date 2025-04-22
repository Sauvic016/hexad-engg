import HeroSection from "@/components/about/HeroSection";
import MissionSection from "@/components/about/MissionSection";
import CultureSection from "@/components/about/CultureSection";
import CareersCTA from "@/components/about/CTA";

export const metadata = {
  title: "About Us - HEXAD Engineering",
  description: "Learn more about HEXAD Engineering - our mission, vision, values, and team.",
};

export default function AboutPage() {
  return (
    <>
      <HeroSection />
      <section id="who-we-are" className="pt-16  md:pt-24 ">
        <div className="mx-auto px-4">
          {/* <div className="max-w-5xl mx-auto text-center"> */}
          <div className="max-w-6xl mx-auto text-center mb-16">
            <p className="text-xl text-gray-600">
              HEXAD Engineering is a highly regarded multidisciplinary engineering and design firm that seamlessly
              integrates a wide array of expertise in engineering, design, and advanced technology to propel progress
              and foster innovation. Our dedicated team, composed of passionate problem-solvers and skilled engineers,
              is committed to providing state-of-the-art solutions that are meticulously tailored to address the unique
              challenges and requirements of our clients.{" "}
            </p>
          </div>
          {/* </div> */}
        </div>
      </section>
      <MissionSection />
      <CultureSection />
      {/* <LeadershipSection /> */}

      <CareersCTA />
    </>
  );
}
