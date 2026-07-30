import JobDetailSection from "@/components/careers/JobDetailSection";
// import { notFound } from "next/navigation";

export const metadata = {
  title: " Design Engineer - HEXAD Engineering",
  description: "Join our team as a  Design Engineer. Explore job details, responsibilities, and qualifications.",
};

export default async function JobDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const job = {
    id,
    title: "Design Engineer",
    company: "HEXAD Engineering",
    location: "Bengaluru, IND",
    jobType: "Full-time",
    department: "Engineering",
    remote: false,
    image: "/software-engineering-office.jpg",
    responsibilities: [
      "Lead and actively contribute to the design and development of complex electro-mechanical systems and components.",
      "Create and review detailed design drawings, schematics, and engineering specifications using CAD tools.",
      "Develop high-quality technical documentation such as design reports, test procedures, and user manuals.",
      "Ensure all designs comply with organizational standards, industry regulations, and applicable codes.",
      "Coordinate closely with Team Leads or Project Managers to manage project schedules, milestones, and deliverables.",
    ],
    qualifications: [
      "B.E./B.Tech with 3–8 years of relevant experience in switchgear/switchboard design.",
      "Strong expertise in Sheet Metal Design with a minimum of 3 years of hands-on experience.",
      "Practical experience in designing Low, Medium, and High-Voltage Switchgear and Switchboards.",
      "Proficiency in creating detailed engineering drawings, schematics, and specifications.",
      "Experience designing LV/MV distribution panels, hybrid generators, recloser panels, transformers, enclosures, and bus bars.",
      "Familiarity with industry standards such as UL, NEMA, and IEEE.",
      "Proficiency in 2D and 3D CAD software.",
    ],
  };

  return <JobDetailSection jobData={job} />;
  // notFound();
}
