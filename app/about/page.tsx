import React from "react";
import Image from "next/image";

export const metadata = {
  title: "About Us - HEXAD Engineering",
  description: "Learn more about HEXAD Engineering - our mission, vision, values, and team.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
              About HEXAD Engineering LLP
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              HEXAD Engineering is a highly regarded multidisciplinary engineering and design firm that seamlessly
              integrates a wide array of expertise in engineering, design, and advanced technology to propel progress
              and foster innovation. Our dedicated team, composed of passionate problem-solvers and skilled engineers,
              is committed to providing state-of-the-art solutions that are meticulously tailored to address the unique
              challenges and requirements of our clients.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-stretch">
            <div className="flex flex-col">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg -mt-20 mx-10 relative flex-1 flex flex-col">
                <h2 className="text-2xl font-bold mb-4 text-primary">Our Mission</h2>
                <p className="text-muted-foreground flex-1">
                  Our mission is to empower progress through engineering excellence. We strive to deliver high-quality
                  solutions, foster a culture of innovation, build long-term relationships, and make a positive impact
                  on the communities we serve.
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg -mt-20 mx-10 relative flex-1 flex flex-col">
                <h2 className="text-2xl font-bold mb-4 text-primary">Our Vision</h2>
                <p className="text-muted-foreground flex-1">
                  Our vision is to become a globally recognized leader in engineering excellence, driving innovation and
                  sustainable progress that improves lives and shapes a better future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="rounded-xl border text-card-foreground shadow h-full bg-white dark:bg-gray-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-4">Integrity</h3>
                <p className="text-muted-foreground">
                  We operate with transparency, honesty, and ethics in all our interactions.
                </p>
              </div>
            </div>
            <div className="rounded-xl border text-card-foreground shadow h-full bg-white dark:bg-gray-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-4">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for exceptional quality and performance in everything we do.
                </p>
              </div>
            </div>
            <div className="rounded-xl border text-card-foreground shadow h-full bg-white dark:bg-gray-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-4">Collaboration</h3>
                <p className="text-muted-foreground">
                  We believe in the power of teamwork and collaboration to achieve outstanding results.
                </p>
              </div>
            </div>
            <div className="rounded-xl border text-card-foreground shadow h-full bg-white dark:bg-gray-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-4">Innovation</h3>
                <p className="text-muted-foreground">
                  We encourage creativity, experimentation, and learning to stay ahead of the curve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <div
                key={`leader-${index}`}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 w-full">
                  <Image src="/who-we-are.jpg" alt={`Team Member ${index}`} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Team Member {index}</h3>
                  <p className="text-blue-600 mb-4">
                    {index === 1 ? "CEO & Founder" : index === 2 ? "CTO" : "Design Director"}
                  </p>
                  <p className="text-muted-foreground">
                    Experienced professional with expertise in engineering solutions and innovative technologies.
                    Dedicated to excellence and client satisfaction.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
