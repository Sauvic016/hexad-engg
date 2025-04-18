import type React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Settings, Pencil, Globe, BarChart4, Code, Plus } from "lucide-react";

export const metadata = {
  title: "Our Services - HEXAD Engineering",
  description:
    "Explore our comprehensive engineering services including mechanical engineering, design services, web development, and more.",
};

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  items: string[];
}

const servicesData: Service[] = [
  {
    id: 1,
    title: "Engineering Services",
    description: "Comprehensive engineering solutions across multiple disciplines.",
    icon: <Settings className="h-6 w-6" />,
    image: "/engineering-services.jpg",
    items: [
      "Mechanical Engineering",
      "Electrical Engineering",
      "Civil Engineering",
      "Electronics Engineering",
      "Control Systems Engineering",
      "Plant Engineering",
      "Automotive Engineering",
      "Energy and Utilities Engineering",
      "Industrial Equipment Engineering",
    ],
  },
  {
    id: 2,
    title: "Design Services",
    description: "Professional design services for various industries.",
    icon: <Pencil className="h-6 w-6" />,
    image: "/design-services.jpg",
    items: ["CAD Design", "3D Modeling", "Product Design", "Industrial Design", "UX/UI Design"],
  },
  {
    id: 3,
    title: "Web And App Development",
    description: "End-to-end development solutions for web and mobile platforms.",
    icon: <Globe className="h-6 w-6" />,
    image: "/web-dev.jpg",
    items: [
      "Website Design",
      "Website Development",
      "Responsive Web Design",
      "Ecommerce Website Development",
      "Mobile App Development",
      "Cross-platform App Development (React Native, Flutter)",
      "Enterprise App Development",
      "Custom App Development",
    ],
  },
  {
    id: 4,
    title: "Analysis Services",
    description: "Advanced analysis and simulation services.",
    icon: <BarChart4 className="h-6 w-6" />,
    image: "/analysis-services.jpg",
    items: [
      "Structural Analysis",
      "Thermal Analysis",
      "Finite Element Analysis (FEA)",
      "Computational Fluid Dynamics (CFD)",
    ],
  },
  {
    id: 5,
    title: "Development Services",
    description: "Comprehensive development and testing solutions.",
    icon: <Code className="h-6 w-6" />,
    image: "/development-services.jpg",
    items: [
      "Prototype Development",
      "Product Testing",
      "Custom Software Development",
      "Programming Languages (Python, Java, JavaScript, C++)",
    ],
  },
  {
    id: 6,
    title: "Other Services",
    description: "Specialized engineering and analysis services.",
    icon: <Plus className="h-6 w-6" />,
    image: "/other-services.jpg",
    items: ["Reverse Engineering", "Value Engineering", "Failure Analysis", "Intellectual Property Development"],
  },
];

const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <Card className="rounded-xl border shadow-sm hover:shadow-lg transition-all duration-300">
      <CardHeader className="p-6 border-b">
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 p-3 rounded-lg">{service.icon}</div>
          <CardTitle className="text-2xl">{service.title}</CardTitle>
        </div>
        <CardDescription className="text-lg">{service.description}</CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <div className="overflow-hidden rounded-lg mb-6">
          <Image
            src={service.image}
            alt={service.title}
            width={600}
            height={350}
            className="w-full h-[250px] object-cover"
          />
        </div>
        <h3 className="font-semibold text-lg mb-3 text-primary">Key Offerings</h3>
        <ul className="space-y-2 mb-6 pl-2">
          {service.items.map((item) => (
            <li key={`${service.id}-${item}`} className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <Link
          href={`/services/${service.id}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium gap-1 group"
        >
          Learn More
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </CardContent>
    </Card>
  );
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
      <section className="pt-24 pb-10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
              Our Services
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Discover our comprehensive range of professional engineering and design services tailored to meet your
              specific needs and challenges.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-b from-white to-blue-50/30 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our engineering team can work with you to develop tailored solutions for your unique requirements. Contact
              us today to discuss your project.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center py-3 px-6 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-200"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
