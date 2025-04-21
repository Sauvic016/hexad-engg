// import Image from "next/image";
// import { Users, Target, Eye, Shield, Award, Lightbulb } from "lucide-react";
import HeroSection from "@/components/about/HeroSection";
import MissionSection from "@/components/about/MissionSection";
// import LeadershipSection from "@/components/about/Leadership";
import CultureSection from "@/components/about/CultureSection";
// import Image from "next/image";
import CareersCTA from "@/components/about/CTA";

export const metadata = {
  title: "About Us - HEXAD Engineering",
  description: "Learn more about HEXAD Engineering - our mission, vision, values, and team.",
};

export default function AboutPage() {
  return (
    // <div className="min-h-screen bg-white dark:bg-gray-950">
    //   {/* Hero Banner */}
    //   <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
    //     <div className="absolute inset-0 z-0">
    //       <Image
    //         src="/about-banner.jpg"
    //         alt="HEXAD Engineering"
    //         fill
    //         className="object-cover brightness-[0.7]"
    //         priority
    //       />
    //     </div>
    //     <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 to-black/70 z-10"></div>
    //     <div className="container relative z-20 mx-auto px-4 h-full flex flex-col justify-center">
    //       <div className="max-w-4xl">
    //         <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
    //           About <span className="text-brand-primary">HEXAD</span> Engineering
    //         </h1>
    //         <div className="w-20 h-1 bg-brand-primary mb-6"></div>
    //         <p className="text-lg md:text-xl text-white/90 max-w-2xl">
    //           A multidisciplinary engineering and design firm integrating expertise to propel progress and foster
    //           innovation.
    //         </p>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Introduction */}
    //   <section className="py-16 md:py-24">
    //     <div className="container mx-auto px-4">
    //       <div className="max-w-5xl mx-auto text-center">
    //         <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
    //           HEXAD Engineering is a highly regarded multidisciplinary engineering and design firm that seamlessly
    //           integrates a wide array of expertise in engineering, design, and advanced technology to propel progress
    //           and foster innovation. Our dedicated team, composed of passionate problem-solvers and skilled engineers,
    //           is committed to providing state-of-the-art solutions that are meticulously tailored to address the unique
    //           challenges and requirements of our clients.
    //         </p>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Mission & Vision */}
    //   <section className="py-16 md:mx-20">
    //     <div className="container mx-auto px-4">
    //       <div className="grid md:grid-cols-2 gap-12">
    //         <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col relative overflow-hidden group">
    //           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400"></div>
    //           <div className="flex items-center mb-6">
    //             <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 mr-4">
    //               <Target className="h-6 w-6 text-blue-600 dark:text-blue-400" />
    //             </div>
    //             <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
    //           </div>
    //           <p className="text-gray-600 dark:text-gray-300 flex-1">
    //             Our mission is to empower progress through engineering excellence. We strive to deliver high-quality
    //             solutions, foster a culture of innovation, build long-term relationships, and make a positive impact on
    //             the communities we serve.
    //           </p>
    //         </div>

    //         <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col relative overflow-hidden group">
    //           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
    //           <div className="flex items-center mb-6">
    //             <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 mr-4">
    //               <Eye className="h-6 w-6 text-blue-600 dark:text-blue-400" />
    //             </div>
    //             <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Our Vision</h2>
    //           </div>
    //           <p className="text-gray-600 dark:text-gray-300 flex-1">
    //             Our vision is to become a globally recognized leader in engineering excellence, driving innovation and
    //             sustainable progress that improves lives and shapes a better future.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Values */}
    //   <section className="py-20">
    //     <div className="container mx-auto px-4">
    //       <div className="text-center mb-16">
    //         <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Our Values</h2>
    //         <div className="w-16 h-1 bg-blue-500 mx-auto"></div>
    //       </div>

    //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    //         <div className="rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm bg-white dark:bg-gray-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
    //           <div className="p-6 text-center">
    //             <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
    //               <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-300" />
    //             </div>
    //             <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Integrity</h3>
    //             <p className="text-gray-600 dark:text-gray-300">
    //               We operate with transparency, honesty, and ethics in all our interactions.
    //             </p>
    //           </div>
    //         </div>

    //         <div className="rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm bg-white dark:bg-gray-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
    //           <div className="p-6 text-center">
    //             <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
    //               <Award className="h-8 w-8 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-300" />
    //             </div>
    //             <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Excellence</h3>
    //             <p className="text-gray-600 dark:text-gray-300">
    //               We strive for exceptional quality and performance in everything we do.
    //             </p>
    //           </div>
    //         </div>

    //         <div className="rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm bg-white dark:bg-gray-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
    //           <div className="p-6 text-center">
    //             <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
    //               <Users className="h-8 w-8 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-300" />
    //             </div>
    //             <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Collaboration</h3>
    //             <p className="text-gray-600 dark:text-gray-300">
    //               We believe in the power of teamwork and collaboration to achieve outstanding results.
    //             </p>
    //           </div>
    //         </div>

    //         <div className="rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm bg-white dark:bg-gray-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
    //           <div className="p-6 text-center">
    //             <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
    //               <Lightbulb className="h-8 w-8 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-300" />
    //             </div>
    //             <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Innovation</h3>
    //             <p className="text-gray-600 dark:text-gray-300">
    //               We encourage creativity, experimentation, and learning to stay ahead of the curve.
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Team */}
    //   <section className="py-20 bg-gray-50 dark:bg-gray-900">
    //     <div className="container mx-auto px-4">
    //       <div className="text-center mb-16">
    //         <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Our Leadership Team</h2>
    //         <div className="w-16 h-1 bg-blue-500 mx-auto"></div>
    //       </div>

    //       <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
    //         {[
    //           { name: "Team Member 1", role: "CEO & Founder" },
    //           { name: "Team Member 2", role: "CTO" },
    //           { name: "Team Member 3", role: "Design Director" },
    //         ].map((member, index) => (
    //           <div
    //             key={`leader-${index}`}
    //             className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
    //           >
    //             <div className="relative h-80 w-full overflow-hidden">
    //               <Image
    //                 src="/who-we-are.jpg"
    //                 alt={member.name}
    //                 fill
    //                 className="object-cover transition-transform duration-500 group-hover:scale-105"
    //               />
    //               <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    //             </div>
    //             <div className="p-6 relative">
    //               <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">{member.name}</h3>
    //               <p className="text-blue-600 dark:text-blue-400 mb-4 font-medium">{member.role}</p>
    //               <p className="text-gray-600 dark:text-gray-300">
    //                 Experienced professional with expertise in engineering solutions and innovative technologies.
    //                 Dedicated to excellence and client satisfaction.
    //               </p>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </section>
    // </div>
    <>
      <HeroSection />
      <section id="who-we-are" className="pb-16 pt-16 md:pb-16 md:pt-24 ">
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
