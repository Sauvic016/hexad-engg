"use client";
import React, { useState } from "react";
import { ArrowRight, Briefcase, MapPin, Filter } from "lucide-react";
import Link from "next/link";

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract";
  remote: boolean;
}

const JobListings: React.FC = () => {
  const [departmentFilter, setDepartmentFilter] = useState<string>("All");
  const [locationFilter, setLocationFilter] = useState<string>("All");

  const jobs: Job[] = [
    {
      id: "design-engineer",
      title: " Design Engineer",
      department: "Engineering",
      location: "Bengaluru",
      type: "Full-time",
      remote: false,
    },
    // {
    //   id: "2",
    //   title: "UX Designer",
    //   department: "Design",
    //   location: "New York",
    //   type: "Full-time",
    //   remote: true,
    // },
    // {
    //   id: "3",
    //   title: "Product Marketing Manager",
    //   department: "Marketing",
    //   location: "London",
    //   type: "Full-time",
    //   remote: false,
    // },
    // {
    //   id: "4",
    //   title: "DevOps Engineer",
    //   department: "Engineering",
    //   location: "Remote",
    //   type: "Full-time",
    //   remote: true,
    // },
    // {
    //   id: "5",
    //   title: "Customer Success Representative",
    //   department: "Customer Support",
    //   location: "Austin",
    //   type: "Full-time",
    //   remote: false,
    // },
    // {
    //   id: "6",
    //   title: "Data Scientist",
    //   department: "Data",
    //   location: "San Francisco",
    //   type: "Full-time",
    //   remote: true,
    // },
    // {
    //   id: "7",
    //   title: "Content Writer",
    //   department: "Marketing",
    //   location: "Remote",
    //   type: "Contract",
    //   remote: true,
    // },
    // {
    //   id: "8",
    //   title: "HR Specialist",
    //   department: "Human Resources",
    //   location: "New York",
    //   type: "Full-time",
    //   remote: false,
    // },
  ];

  const departments = ["All", ...new Set(jobs.map((job) => job.department))];
  const locations = ["All", ...new Set(jobs.map((job) => job.location))];

  const filteredJobs = jobs.filter((job) => {
    const matchesDepartment = departmentFilter === "All" || job.department === departmentFilter;
    const matchesLocation = locationFilter === "All" || job.location === locationFilter;
    return matchesDepartment && matchesLocation;
  });

  return (
    <section id="open-positions" className="scroll-mt-20 bg-white pb-10 pt-20 sm:pb-12 sm:pt-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
          <div className="mx-auto mb-5 h-1 w-24 bg-brand-primary" />
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">Join the Team</p>
          <h2 className="text-3xl font-bold uppercase tracking-tight text-blue-950 md:text-5xl">Open Positions</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-gray-600 sm:text-lg">
            Find a role where your experience can shape dependable engineering outcomes.
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          {jobs.length > 1 && (
          <div className="mb-8 flex flex-col items-start justify-between gap-5 rounded-xl border border-blue-100 bg-blue-50/40 p-5 md:flex-row md:items-end">
            <div className="flex items-center gap-2 text-blue-950">
              <Filter className="h-5 w-5 text-brand-primary" aria-hidden="true" />
              <span className="font-medium">Filter positions:</span>
            </div>

            <div className="flex w-full flex-col gap-4 sm:flex-row md:w-auto">
              <div className="min-w-40">
                <label htmlFor="department" className="mb-1 block text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Department
                </label>
                <select
                  id="department"
                  value={departmentFilter}
                  onChange={(e) => setDepartmentFilter(e.target.value)}
                  className="block w-full rounded-lg border border-blue-100 bg-blue-50/40 px-4 py-2.5 text-sm text-blue-950 outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20"
                >
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
              </div>

              <div className="min-w-40">
                <label htmlFor="location" className="mb-1 block text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Location
                </label>
                <select
                  id="location"
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                  className="block w-full rounded-lg border border-blue-100 bg-blue-50/40 px-4 py-2.5 text-sm text-blue-950 outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20"
                >
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          )}

          <div className="space-y-3">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <article
                  key={job.id}
                  className="border-y border-blue-200 bg-white py-6 sm:px-2"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="mb-2 text-xl font-bold text-blue-950">{job.title.trim()}</h3>
                      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-1" />
                          {job.department}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </div>
                        <div>{job.type}</div>
                        {job.remote && (
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                            Remote Eligible
                          </span>
                        )}
                      </div>
                    </div>
                    <Link
                      href={`/careers/jobs/${job.id}`}
                      className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800"
                    >
                      View Details
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <p className="text-gray-600">Sorry we are not accepting any applications right now.</p>
              </div>
            )}
          </div>

          {/* <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Don&apos;t see a position that matches your skills?</p>
            <a
              href="/careers/general-application"
              className="px-6 py-3 bg-gray-800 text-white rounded-lg font-medium transition-colors duration-300 hover:bg-gray-700 inline-flex items-center gap-2"
            >
              Submit a General Application
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default JobListings;
