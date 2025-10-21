"use client";
import { useState } from "react";
import Link from "next/link";
import { MapPin, Briefcase, DollarSign, Clock, Copy, Mail } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface IJobData {
  id: string;
  title: string;
  company: string;
  remote: boolean;
  location: string;
  jobType: string;
  salary?: string;
  postedDate?: string;
  department: string;
  image?: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
  niceToHave?: string[];
}

const gmailBaseUrl = process.env.NEXT_PUBLIC_GMAIL_URL;

export default function JobDetailSection({ jobData }: { jobData: IJobData }) {
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const emailAddress = process.env.NEXT_PUBLIC_CAREERS_MAIL_URL || "";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress!);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Header */}
      <section className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="mx-auto w-full max-w-3xl sm:max-w-4xl px-4 sm:px-6 md:px-8 py-8 sm:py-10">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5 md:gap-6">
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {jobData.title}
              </h1>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6">{jobData.company}</p>

              {/* Meta */}
              <div className="flex flex-wrap gap-x-4 gap-y-3 sm:gap-x-6">
                <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-blue-600" />
                  <span>{jobData.location}</span>
                </div>

                <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                  <Briefcase className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-blue-600" />
                  <span>{jobData.jobType}</span>
                </div>

                {jobData.remote && (
                  <span className="px-2.5 py-1 bg-blue-100 text-blue-800 rounded-full text-[11px] sm:text-xs font-medium">
                    Remote Eligible
                  </span>
                )}

                {jobData.salary && (
                  <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                    <DollarSign className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-blue-600" />
                    <span>{jobData.salary}</span>
                  </div>
                )}

                {jobData.postedDate && (
                  <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                    <Clock className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-blue-600" />
                    <span>Posted {jobData.postedDate}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main */}
      <section className="py-10 sm:py-12">
        <div className="mx-auto w-full max-w-3xl sm:max-w-4xl px-4 sm:px-6 md:px-8">
          <div className="flex">
            <div className="w-full space-y-10 sm:space-y-12">
              {/* Description */}
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                  Job Description
                </h2>
                <div className="prose prose-sm sm:prose base dark:prose-invert max-w-none">
                  {jobData.description.split("\n\n").map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-[15px] sm:text-[16px] text-gray-700 dark:text-gray-300 leading-7 sm:leading-7.5 mb-3 sm:mb-4"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Responsibilities */}
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                  Key Responsibilities
                </h2>
                <div className="space-y-3 sm:space-y-4">
                  {jobData.responsibilities.map((r, i) => (
                    <div key={i} className="flex gap-3 sm:gap-4">
                      <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mt-0.5">
                        <span className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400">✓</span>
                      </div>
                      <p className="text-[15px] sm:text-base text-gray-700 dark:text-gray-300 pt-0.5">{r}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Qualifications */}
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                  Required Qualifications
                </h2>
                <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
                  {jobData.qualifications.map((q, i) => (
                    <div key={i} className="flex gap-3 sm:gap-4">
                      <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-0.5">
                        <span className="text-xs sm:text-sm font-semibold text-green-600 dark:text-green-400">✓</span>
                      </div>
                      <p className="text-[15px] sm:text-base text-gray-700 dark:text-gray-300 pt-0.5">{q}</p>
                    </div>
                  ))}
                </div>

                {!!jobData.niceToHave?.length && (
                  <>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                      Nice to Have
                    </h3>
                    <div className="space-y-3 sm:space-y-4">
                      {jobData.niceToHave.map((item, i) => (
                        <div key={i} className="flex gap-3 sm:gap-4">
                          <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mt-0.5">
                            <span className="text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-400">◆</span>
                          </div>
                          <p className="text-[15px] sm:text-base text-gray-700 dark:text-gray-300 pt-0.5">{item}</p>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 py-10 sm:py-14">
        <div className="mx-auto w-full max-w-3xl sm:max-w-4xl px-4 sm:px-6 md:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Ready to Join Our Team?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-blue-50 mb-6 sm:mb-8">
            Take the next step in your engineering career
          </p>
          <button
            onClick={() => setIsApplyOpen(true)}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
          >
            Apply Now
          </button>
        </div>
      </section>

      {/* Apply Modal */}
      <Dialog open={isApplyOpen} onOpenChange={setIsApplyOpen}>
        <DialogContent className="w-[92vw] sm:w-auto max-w-[92vw] sm:max-w-md p-4 sm:p-6">
          <DialogHeader>
            <DialogTitle className="text-lg sm:text-xl">Apply for {jobData.title}</DialogTitle>
            <DialogDescription className="text-sm sm:text-base">
              Send your application details to our careers team
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-5 sm:space-y-6 py-2 sm:py-4">
            {/* Email Address */}
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 sm:p-4 border border-blue-200 dark:border-blue-800">
              <p className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Email us at:</p>
              <div className="flex items-center gap-2">
                <code className="flex-1 px-2.5 py-2 bg-white dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700 text-[12px] sm:text-sm font-mono text-gray-900 dark:text-white break-all">
                  {emailAddress}
                </code>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 hover:bg-blue-100 dark:hover:bg-blue-900/40 rounded transition-colors"
                  title="Copy email"
                >
                  <Copy className={`h-4 w-4 ${copied ? "text-green-600" : "text-gray-600"}`} />
                </button>
              </div>
              {copied && (
                <p className="text-[11px] sm:text-xs text-green-600 dark:text-green-400 mt-2">✓ Copied to clipboard</p>
              )}
            </div>

            {/* Instructions */}
            <div>
              <p className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white mb-3">
                Please include in your email:
              </p>
              <ul className="space-y-2">
                <li className="flex gap-2.5 sm:gap-3 text-[13px] sm:text-sm text-gray-700 dark:text-gray-300">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                  <span>Your resume/CV (PDF preferred)</span>
                </li>
                <li className="flex gap-2.5 sm:gap-3 text-[13px] sm:text-sm text-gray-700 dark:text-gray-300">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                  <span>A brief cover letter highlighting relevant experience</span>
                </li>
                <li className="flex gap-2.5 sm:gap-3 text-[13px] sm:text-sm text-gray-700 dark:text-gray-300">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                  <span>
                    The job title: <strong>{jobData.title}</strong>
                  </span>
                </li>
                <li className="flex gap-2.5 sm:gap-3 text-[13px] sm:text-sm text-gray-700 dark:text-gray-300">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                  <span>Your contact information (phone & LinkedIn)</span>
                </li>
              </ul>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2 sm:pt-4">
              <Link
                href={`${gmailBaseUrl}&to=${encodeURIComponent(emailAddress)}&su=${encodeURIComponent(
                  `${jobData.title} Applicant`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                <Mail className="h-4 w-4" />
                Open in Gmail
              </Link>
              <button
                onClick={() => setIsApplyOpen(false)}
                className="w-full sm:w-auto px-5 sm:px-6 py-2.5 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 font-semibold rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
