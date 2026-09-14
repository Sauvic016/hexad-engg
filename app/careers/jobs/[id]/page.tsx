import JobDetailSection from "@/components/careers/JobDetailSection";

export const metadata = {
  title: "Business Development Engineer - HEXAD Engineering",
  description:
    "Join HEXAD Engineering as a Business Development Engineer in Bengaluru. Explore this opportunity for candidates with 0–1 year of experience supporting the North American market.",
};

export default async function JobDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const job = {
    id,
    title: "Business Development Engineer",
    company: "HEXAD Engineering",
    location: "Bengaluru",
    jobType: "Full-time",
    experience: "0–1 year",
    workingHours: "3 pm–1 am IST (USA timings)",
    department: "Business Development",
    remote: false,
    description:
      "We are seeking a motivated and detail-oriented Business Development Engineer to support our engineering services team. The engineer will assist in identifying new business opportunities, building client relationships, and supporting sales and marketing initiatives in areas such as design engineering across the North American market.",
    responsibilities: [
      "Conduct market research to identify potential clients and industry trends in engineering services.",
      "Assist in lead generation through online platforms, databases, and networking.",
      "Support the preparation of proposals, presentations, and client pitches.",
      "Maintain and update client and lead information.",
      "Coordinate with technical teams to understand service offerings.",
      "Participate in client meetings, calls, and follow-ups.",
      "Assist in digital marketing campaigns, including LinkedIn and email outreach.",
      "Prepare reports on sales performance and business development activities.",
    ],
    qualifications: [
      "B.Tech or BE qualified in Electrical or Mechanical Engineering.",
      "Strong communication and interpersonal skills.",
      "Basic understanding of engineering services and industry practices.",
      "Proficiency in MS Office (Excel, PowerPoint, Word).",
      "Analytical thinking and problem-solving ability.",
      "Self-motivated and eager to learn.",
      "Ready to work from office and during USA timings (3 pm–1 am IST).",
    ],
    learningOutcomes: [
      "Exposure to real-world business development strategies in engineering services.",
      "Hands-on experience in client handling and proposal development.",
      "Understanding of industry trends and competitive analysis.",
      "Opportunity to develop professional communication and sales skills.",
    ],
  };

  return <JobDetailSection jobData={job} />;
}
