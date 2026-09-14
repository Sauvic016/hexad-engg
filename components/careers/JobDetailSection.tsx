"use client";
import { useState } from "react";
import Link from "next/link";
import { MapPin, Briefcase, Clock, Copy, Mail, ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface IJobData {
  id: string;
  title: string;
  company: string;
  remote: boolean;
  location: string;
  jobType: string;
  experience?: string;
  workingHours?: string;
  learningOutcomes?: string[];
  salary?: string;
  postedDate?: string;
  department: string;
  image?: string;
  description?: string;
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

  const facts = [
    { label: "Department", value: jobData.department },
    { label: "Location", value: jobData.location },
    { label: "Employment", value: jobData.jobType },
    { label: "Experience", value: jobData.experience },
    { label: "Working hours", value: jobData.workingHours },
    { label: "Salary", value: jobData.salary },
    { label: "Posted", value: jobData.postedDate },
    { label: "Remote work", value: jobData.remote ? "Remote eligible" : undefined },
  ].filter((fact) => fact.value);

  const sections = [
    { id: "responsibilities", title: "Key Responsibilities", items: jobData.responsibilities },
    { id: "qualifications", title: "Required Skills & Qualifications", items: jobData.qualifications },
    { id: "nice-to-have", title: "Nice to Have", items: jobData.niceToHave },
    { id: "learning-outcomes", title: "Learning Outcomes", items: jobData.learningOutcomes },
  ].filter((section) => section.items?.length);

  const applyButtonClass =
    "group inline-flex items-center justify-center gap-2 rounded-lg bg-brand-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-primary";

  return (
    <div className="min-h-screen bg-white text-blue-950">
      <section className="relative overflow-hidden bg-[#07152f]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 border-l border-white/5 bg-white/[0.02] lg:block"
        />
        <div className="relative mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <Link
            href="/careers#open-positions"
            className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-blue-100/80 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All open positions
          </Link>
          <div className="mb-5 h-1 w-20 bg-brand-primary" />
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            Careers at {jobData.company}
          </p>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                {jobData.title}
              </h1>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-blue-100/80 sm:text-base">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-blue-300" aria-hidden="true" />
                  {jobData.location}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-blue-300" aria-hidden="true" />
                  {jobData.jobType}
                </span>
                {jobData.experience && (
                  <span className="inline-flex items-center gap-2">
                    <Clock className="h-4 w-4 text-blue-300" aria-hidden="true" />
                    {jobData.experience} experience
                  </span>
                )}
              </div>
            </div>
            <button
              onClick={() => setIsApplyOpen(true)}
              className={`${applyButtonClass} w-full shrink-0 hover:bg-blue-500 sm:w-auto cursor-pointer`}
            >
              Apply for this role
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>

      <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16 lg:px-8 lg:py-20">
        <div className="min-w-0 space-y-10 sm:space-y-12">
          {jobData.description && (
            <section aria-labelledby="job-summary">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
                The Opportunity
              </p>
              <h2 id="job-summary" className="mb-5 text-2xl font-bold tracking-tight text-blue-950 sm:text-3xl">
                Job Summary
              </h2>
              <div className="space-y-4 text-base leading-8 text-gray-600">
                {jobData.description.split("\n\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </section>
          )}
          {sections.map((section) => (
            <section key={section.id} aria-labelledby={section.id} className="border-t border-blue-100 pt-8 sm:pt-10">
              <h2 id={section.id} className="mb-6 text-xl font-bold tracking-tight text-blue-950 sm:text-2xl">
                {section.title}
              </h2>
              <ul className="space-y-4">
                {section.items?.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[15px] leading-7 text-gray-600 sm:text-base">
                    <Check className="mt-1.5 h-4 w-4 shrink-0 text-brand-primary" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <aside aria-label="Role overview" className="min-w-0 lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-2xl border border-blue-100 bg-blue-50/40 p-6 sm:p-8">
            <div className="mb-5 h-1 w-12 bg-brand-primary" />
            <h2 className="text-xl font-bold text-blue-950">At a glance</h2>
            <dl className="mt-6 divide-y divide-blue-100">
              {facts.map((fact) => (
                <div key={fact.label} className="py-4 first:pt-0">
                  <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500">{fact.label}</dt>
                  <dd className="mt-1.5 text-sm font-medium leading-6 text-blue-950">{fact.value}</dd>
                </div>
              ))}
            </dl>
            <button onClick={() => setIsApplyOpen(true)} className={`${applyButtonClass} mt-6 w-full cursor-pointer`}>
              Apply Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </button>
            <p className="mt-4 text-center text-xs leading-5 text-gray-500">
              Send your resume and a brief cover letter to our careers team.
            </p>
          </div>
          <Link
            href="/careers#open-positions"
            className="mt-6 flex items-center justify-center gap-2 text-sm font-semibold text-brand-primary transition hover:text-blue-950"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Explore all opportunities
          </Link>
        </aside>
      </div>

      {/* Apply Modal */}
      <Dialog open={isApplyOpen} onOpenChange={setIsApplyOpen}>
        <DialogContent className="flex max-h-[90dvh] flex-col gap-0 overflow-hidden rounded-2xl border-0 bg-white p-0 text-blue-950 shadow-2xl sm:max-w-xl [&>button]:rounded-md [&>button]:p-1 [&>button]:text-white [&>button]:opacity-80 [&>button]:hover:bg-white/10 [&>button]:focus:ring-blue-300">
          <DialogHeader className="shrink-0 bg-[#07152f] px-6 pb-6 pt-8 text-left sm:px-8">
            <div className="mb-3 h-1 w-12 bg-brand-primary" />
            <p className="mb-1 pr-8 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
              Join {jobData.company}
            </p>
            <DialogTitle className="pr-5 text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl">
              Apply for {jobData.title}
            </DialogTitle>
            <DialogDescription className="mt-2 text-sm leading-6 text-blue-100/80">
              Share your experience and take the next step with our team.
            </DialogDescription>
          </DialogHeader>

          <div className="min-h-0 space-y-7 overflow-y-auto px-6 py-6 sm:px-8 sm:py-7">
            <section aria-labelledby="application-email">
              <h3 id="application-email" className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Send your application to
              </h3>
              <div className="flex flex-wrap items-center gap-3 rounded-xl border border-blue-100 bg-blue-50/50 p-4">
                <div className="flex min-w-0 flex-1 items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-brand-primary" aria-hidden="true" />
                  <span className="min-w-0 break-all text-sm font-semibold text-blue-950">{emailAddress}</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-blue-100 bg-white px-3 py-2 text-xs font-semibold text-brand-primary transition hover:border-blue-200 hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
                  aria-label={copied ? "Email address copied" : "Copy email address"}
                >
                  {copied ? (
                    <Check className="h-4 w-4" aria-hidden="true" />
                  ) : (
                    <Copy className="h-4 w-4" aria-hidden="true" />
                  )}
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>
              <span role="status" className="sr-only">
                {copied ? "Email address copied to clipboard" : ""}
              </span>
            </section>

            <section aria-labelledby="application-checklist">
              <h3 id="application-checklist" className="text-base font-bold text-blue-950">
                What to include
              </h3>
              <ul className="mt-4 space-y-4">
                {[
                  { title: "Your resume / CV", detail: "PDF format preferred." },
                  { title: "A brief cover letter", detail: "Tell us about your relevant experience." },
                  { title: "The role you’re applying for", detail: jobData.title },
                  { title: "Your contact details", detail: "Phone number and LinkedIn profile." },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-brand-primary">
                      <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-blue-950">{item.title}</p>
                      <p className="mt-0.5 text-sm leading-6 text-gray-500">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="shrink-0 border-t border-blue-100 bg-blue-50/40 px-6 py-5 sm:px-8">
            <div className="flex flex-col gap-3 sm:flex-row-reverse">
              <Link
                href={`${gmailBaseUrl}&to=${encodeURIComponent(emailAddress)}&su=${encodeURIComponent(
                  `${jobData.title} Applicant`,
                )}`}
                target="_blank"
                rel="noreferrer"
                className={`${applyButtonClass} sm:flex-1`}
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Open in Gmail
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <button
                onClick={() => setIsApplyOpen(false)}
                className="rounded-lg border border-blue-200 bg-white px-5 py-3 text-sm font-semibold text-blue-950 transition hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
              >
                Back to role
              </button>
            </div>
            <p className="mt-3 text-center text-xs leading-5 text-gray-500">
              Gmail opens in a new tab with the recipient and subject filled in.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
