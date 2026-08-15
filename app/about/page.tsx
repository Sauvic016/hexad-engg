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
      <section id="who-we-are" className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16 lg:px-8">
          <div>
            <div className="mb-5 h-1 w-20 bg-brand-primary" />
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">Who We Are</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-blue-950 sm:text-4xl">Built for complex engineering challenges.</h2>
          </div>
          <div>
            <p className="text-lg leading-relaxed text-gray-600 sm:text-xl">
              HEXAD Engineering is a highly regarded multidisciplinary engineering and design firm that seamlessly
              integrates a wide array of expertise in engineering, design, and advanced technology to propel progress
              and foster innovation. Our dedicated team, composed of passionate problem-solvers and skilled engineers,
              is committed to providing state-of-the-art solutions that are meticulously tailored to address the unique
              challenges and requirements of our clients.
            </p>
          </div>
        </div>
      </section>
      <MissionSection />
      <CultureSection />
      <CareersCTA />
    </>
  );
}
