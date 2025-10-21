import JobDetailSection from "@/components/careers/JobDetailSection";

export const metadata = {
  title: "Hardware Design Engineer - HEXAD Engineering",
  description:
    "Join our team as a Hardware Design Engineer. Explore job details, responsibilities, and qualifications.",
};

export default async function JobDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const job = {
    id,
    title: "Hardware Design Engineer",
    company: "HEXAD Engineering",
    location: "Bengaluru, IND",
    jobType: "Full-time",
    department: "Engineering",
    remote: true,
    image: "/software-engineering-office.jpg",
    description: `Hardware Design Engineer with strong experience in electrical, pneumatic, and safety system
      design for industrial automation equipment. The ideal resource will be capable of developing
      complete hardware designs, specifying components, and producing detailed schematics and
      documentation using EPLAN and AutoCAD Electrical. This position works closely with mechanical
      and controls engineers to ensure cohesive, standards-compliant system designs that meet customer
      and safety requirements. `,

    responsibilities: [
      "Develop and document electrical and pneumatic hardware designs for custom automation systems and control panels",
      "Create detailed electrical schematics, panel layouts, and pneumatic diagrams using EPLAN and/or AutoCAD Electrical",
      "Design, document, and review machine safety circuits in accordance with relevant standards (e.g., ISO 13849, NFPA 79, UL 508A)",
      "Select and specify all hardware components including PLCs, safety relays, drives, contactors, sensors, valves, actuators, and air prep units",
      "Perform FLA (Full Load Amperage), heat dissipation, and 24V Load calculations to ensure proper electrical system sizing",
      "Size and specify FRL (Filter, Regulator, Lubricator) assemblies and calculate SCFM (Standard Cubic Feet per Minute) for machine air systems",
      "Ensure proper grounding, bonding, and circuit protection practices in all designs",
      "Design systems in compliance with GM Global Common and Ford FAST electrical standards",
      "Prepare and maintain GM documentation, including SBS-1B forms, Bills of Material (BOMs), and other required submittals",
      "Collaborate with mechanical engineering to ensure electrical and pneumatic designs integrate seamlessly into machine layouts",
      "Support control panel fabrication, machine build, and system debug",
      "Participate in internal and customer design reviews, focusing on compliance, safety, and reliability",
      "Contribute to the development and continuous improvement of company design standards and processes",
    ],
    qualifications: [
      "Associate or Bachelor’s degree in Electrical Engineering, Electrical Engineering Technology, or related field (or equivalent experience)",
      "3+ years of experience in hardware design for automation or industrial equipment",
      "Proficiency in EPLAN and/or AutoCAD Electrical required",
      "Experience with safety circuit design, including risk assessment and validation processes",
      "Familiarity with GM Global Common and Ford FAST specifications strongly preferred",
      "Experience creating and maintaining SBS-1B and BOM documentation",
      "Working knowledge of UL 508A, NFPA 79, ISO 13849, and general grounding and bonding practices",
      "Ability to perform FLA, heat, SCFM, and FRL sizing calculations",
      "Strong understanding of industrial automation components and hardware selection",
      "Excellent teamwork and communication skills for cross-discipline collaboration",
      "Self-motivated and detail-oriented, with the ability to manage multiple projects independently",
    ],
  };

  return <JobDetailSection jobData={job} />;
}
