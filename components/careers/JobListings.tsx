"use client";
import React, { useState } from "react";
import { Briefcase, MapPin, Filter } from "lucide-react";

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
    // {
    //   id: "1-hd",
    //   title: "Hardware Design Engineer",
    //   department: "Engineering",
    //   location: "Bengaluru",
    //   type: "Full-time",
    //   remote: true,
    // },
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
    <section id="open-positions" className="pt-24 pb-4 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Open Positions</h2>
          <div className="w-24 h-1 bg-blue-600 mb-4 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our team of passionate individuals working to make a difference.
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2 text-gray-600">
              <Filter className="w-5 h-5" />
              <span className="font-medium">Filter positions:</span>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="min-w-40">
                <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
                  Department
                </label>
                <select
                  id="department"
                  value={departmentFilter}
                  onChange={(e) => setDepartmentFilter(e.target.value)}
                  className="block w-full px-4 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
              </div>

              <div className="min-w-40">
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <select
                  id="location"
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                  className="block w-full px-4 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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

          <div className="space-y-4">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-600">
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
                    <a
                      href={`/careers/jobs/${job.id}`}
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium transition-colors duration-300 hover:bg-blue-700 whitespace-nowrap"
                    >
                      View Details
                    </a>
                  </div>
                </div>
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
        </div>{" "}
      </div>
    </section>
  );
};

export default JobListings;
