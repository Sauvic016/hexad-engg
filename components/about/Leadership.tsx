"use client";
import React from "react";
import { Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

interface LeaderProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin: string;
  twitter: string;
}

const Leader: React.FC<LeaderProps> = ({ name, role, image, bio, linkedin, twitter }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="aspect-w-3 aspect-h-4">
        <Image src={image} alt={name} className="w-full h-full object-cover" width={800} height={400} />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1 text-gray-900">{name}</h3>
        <p className="text-blue-600 mb-4">{role}</p>
        <p className="text-gray-600 mb-4">{bio}</p>
        <div className="flex space-x-4">
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-400 transition-colors duration-300"
          >
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

const LeadershipSection: React.FC = () => {
  const leaders = [
    {
      name: "Sarah Chen",
      role: "Chief Executive Officer",
      image: "/leadership.jpeg",
      bio: "With 15+ years of experience in tech, Sarah leads our company's strategic vision and growth initiatives.",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
    {
      name: "Michael Rodriguez",
      role: "Chief Technology Officer",
      image: "/leadership.jpeg",
      bio: "A veteran software architect, Michael drives our technical innovation and engineering excellence.",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
    {
      name: "Emily Thompson",
      role: "Chief Product Officer",
      image: "/leadership.jpeg",
      bio: "Emily shapes our product strategy, ensuring we deliver exceptional value to our customers.",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
    {
      name: "David Kim",
      role: "Chief Operations Officer",
      image: "/leadership.jpeg",
      bio: "David oversees our global operations, focusing on efficiency and sustainable growth.",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Leadership Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the visionaries who guide our company&apos;s direction and embody our values.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <Leader
              key={index}
              name={leader.name}
              role={leader.role}
              image={leader.image}
              bio={leader.bio}
              linkedin={leader.linkedin}
              twitter={leader.twitter}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
