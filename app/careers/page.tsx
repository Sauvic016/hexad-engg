import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BriefcaseBusiness, GraduationCap, Clock, MapPin, Users, BarChart } from "lucide-react";

export const metadata = {
  title: "Careers - HEXAD Engineering",
  description:
    "Explore career opportunities at HEXAD Engineering and join our team of talented engineers and designers.",
};

const jobOpenings = [
  {
    id: 1,
    title: "Senior Mechanical Engineer",
    department: "Engineering",
    type: "Full-time",
    location: "Guwahati, India",
    description:
      "We are looking for a Senior Mechanical Engineer to join our team, responsible for designing, developing, and testing mechanical systems and components.",
  },
  {
    id: 2,
    title: "Full Stack Developer",
    department: "Web Development",
    type: "Full-time",
    location: "Remote",
    description:
      "Join our web development team to build responsive and scalable web applications using modern frameworks and technologies.",
  },
  {
    id: 3,
    title: "UX/UI Designer",
    department: "Design",
    type: "Full-time",
    location: "Chicago, USA",
    description:
      "Create engaging and intuitive user experiences for web and mobile applications, working closely with our development and product teams.",
  },
  {
    id: 4,
    title: "Structural Analysis Engineer",
    department: "Analysis",
    type: "Full-time",
    location: "Guwahati, India",
    description:
      "Perform structural analyses using advanced simulation tools to ensure the integrity and performance of engineering designs.",
  },
  {
    id: 5,
    title: "Business Development Manager",
    department: "Business",
    type: "Full-time",
    location: "Chicago, USA",
    description:
      "Drive business growth through developing and implementing effective business strategies and building client relationships.",
  },
];

const benefits = [
  {
    id: "prof-growth",
    icon: <BriefcaseBusiness className="h-6 w-6" />,
    title: "Professional Growth",
    description: "Continuous learning opportunities and clear career advancement paths.",
  },
  {
    id: "education",
    icon: <GraduationCap className="h-6 w-6" />,
    title: "Education Support",
    description: "Tuition reimbursement and ongoing professional development programs.",
  },
  {
    id: "flexibility",
    icon: <Clock className="h-6 w-6" />,
    title: "Flexible Schedule",
    description: "Work-life balance with flexible working hours and remote options.",
  },
  {
    id: "global",
    icon: <MapPin className="h-6 w-6" />,
    title: "Global Opportunities",
    description: "Potential for international assignments and travel.",
  },
  {
    id: "diversity",
    icon: <Users className="h-6 w-6" />,
    title: "Diverse Team",
    description: "Collaborative environment with professionals from various backgrounds.",
  },
  {
    id: "compensation",
    icon: <BarChart className="h-6 w-6" />,
    title: "Competitive Compensation",
    description: "Attractive salary packages and performance-based bonuses.",
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
              Join Our Team
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              At HEXAD Engineering, we&apos;re always looking for talented individuals who are passionate about
              innovation and excellence. Explore our current openings and find your opportunity to make an impact.
            </p>
            <Button
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-200"
              asChild
            >
              <a href="#openings">View Open Positions</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Company Culture Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-600">Our Culture</h2>
              <p className="text-muted-foreground mb-6">
                HEXAD Engineering fosters an environment where innovation thrives and every team member has the
                opportunity to make a meaningful impact. We value collaboration, continuous learning, and a healthy
                work-life balance.
              </p>
              <p className="text-muted-foreground mb-6">
                Our diverse team consists of passionate individuals who share a commitment to excellence and pushing the
                boundaries of what&apos;s possible in engineering and design.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-blue-500" />
                  <span className="font-medium">Collaborative Environment</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-blue-500" />
                  <span className="font-medium">Innovation-Driven Approach</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-blue-500" />
                  <span className="font-medium">Professional Development</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-blue-500" />
                  <span className="font-medium">Work-Life Balance</span>
                </div>
              </div>
            </div>
            <div className="relative h-[400px]">
              <Image src="/who-we-are.jpg" alt="HEXAD Team Culture" fill className="object-cover rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-blue-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Work With Us</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We offer more than just a job. Join us for a rewarding career with numerous benefits and opportunities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <Card key={benefit.id} className="p-6 bg-white dark:bg-gray-700 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                </div>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section id="openings" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Current Openings</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore our current job opportunities and find the perfect role that aligns with your skills and career
              goals.
            </p>
          </div>
          <div className="space-y-6 max-w-4xl mx-auto">
            {jobOpenings.map((job) => (
              <Card key={job.id} className="p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 mb-3">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 text-sm rounded-full">
                        {job.department}
                      </span>
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 text-sm rounded-full">
                        {job.type}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm rounded-full">
                        {job.location}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{job.description}</p>
                  </div>
                  <Button className="shrink-0" variant="outline">
                    Apply Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Application Process</h2>
            <p className="text-lg text-muted-foreground mb-12">
              We&apos;ve designed a straightforward process to help you join our team:
            </p>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                  1
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-lg mb-1">Application Review</h3>
                  <p className="text-muted-foreground">
                    Our HR team reviews your application to assess your qualifications and experience.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                  2
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-lg mb-1">Initial Interview</h3>
                  <p className="text-muted-foreground">
                    A phone or video interview to discuss your background, skills, and interest in the position.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                  3
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-lg mb-1">Technical Assessment</h3>
                  <p className="text-muted-foreground">
                    Depending on the role, you may be asked to complete a technical test or project.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                  4
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-lg mb-1">Final Interview</h3>
                  <p className="text-muted-foreground">
                    Meet with the hiring manager and potential team members to discuss the role in detail.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                  5
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-lg mb-1">Offer & Onboarding</h3>
                  <p className="text-muted-foreground">
                    Upon selection, we&apos;ll extend an offer and guide you through our onboarding process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Join Us?</h2>
            <p className="text-lg mb-8 text-blue-100">
              Take the next step in your career journey with HEXAD Engineering. Apply for one of our open positions or
              send us your resume for future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg" asChild>
                <a href="#openings">View Open Positions</a>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-blue-700" size="lg" asChild>
                <Link href="/contact">Contact Our HR Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
